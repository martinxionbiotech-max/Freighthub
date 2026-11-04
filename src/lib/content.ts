import { marked } from 'marked';

type Doc = Record<string, string> & { slug: string; html: string };

const files = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function parse(raw: string) {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  const fm: Record<string, string> = {};
  let body = raw;
  if (m) {
    body = m[2];
    for (const line of m[1].split('\n')) {
      const kv = line.match(/^([A-Za-z_]+):\s*"?(.*?)"?\s*$/);
      if (kv) fm[kv[1]] = kv[2];
    }
  }
  return { fm, body };
}

const cache = new Map<string, Doc[]>();

export function collection(name: string): Doc[] {
  if (cache.has(name)) return cache.get(name)!;
  const prefix = `../content/${name}/`;
  const docs = Object.entries(files)
    .filter(([p]) => p.startsWith(prefix) && p.endsWith('.md'))
    .map(([p, raw]) => {
      const slug = p.split('/').pop()!.replace(/\.md$/, '');
      const { fm, body } = parse(raw);
      return { ...fm, slug, html: marked.parse(body) as string };
    });
  cache.set(name, docs);
  return docs;
}

export function getDoc(name: string, slug: string): Doc | undefined {
  return collection(name).find((d) => d.slug === slug);
}
