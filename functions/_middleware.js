function acceptsMarkdown(header) {
  if (!header) return false;
  const parts = header.split(',').map((part) => part.trim().toLowerCase());
  let markdownQ = 0;
  let htmlQ = 0;
  for (const part of parts) {
    const [type, ...params] = part.split(';').map((value) => value.trim());
    const qParam = params.find((value) => value.startsWith('q='));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (type === 'text/markdown') markdownQ = Number.isFinite(q) ? q : 0;
    if (type === 'text/html') htmlQ = Number.isFinite(q) ? q : 1;
  }
  return markdownQ > 0 && markdownQ >= htmlQ;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'www.freightgcc.com') {
    url.hostname = 'freightgcc.com';
    return Response.redirect(url.toString(), 301);
  }

  const isDocument = context.request.method === 'GET' && !url.pathname.endsWith('.md');
  const markdownPath =
    url.pathname === '/' ? '/index.md' : `${url.pathname.replace(/\/$/, '')}/index.md`;

  if (isDocument && acceptsMarkdown(context.request.headers.get('Accept'))) {
    const markdownUrl = new URL(markdownPath, url);
    const markdownResponse = await fetch(markdownUrl, {
      headers: context.request.headers,
    });
    if (markdownResponse.ok) {
      const headers = new Headers(markdownResponse.headers);
      headers.set('Content-Type', 'text/markdown; charset=utf-8');
      headers.set('Vary', 'Accept');
      headers.set('X-Markdown-Alternate', 'true');
      return new Response(markdownResponse.body, {
        status: 200,
        headers,
      });
    }
  }

  const response = await context.next();
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) return response;

  const headers = new Headers(response.headers);
  headers.set('Vary', 'Accept');
  headers.append(
    'Link',
    `<${new URL(markdownPath, url).toString()}>; rel="alternate"; type="text/markdown"`,
  );
  return new Response(response.body, {
    status: response.status,
    headers,
  });
}
