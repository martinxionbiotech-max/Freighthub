// Write a markdown twin beside every built HTML page: /path/index.md next to
// /path/index.html. Uses the rendered <main> so the twin matches what a reader
// sees, including generated tables and link lists.
import fs from 'node:fs';
import path from 'node:path';
import TurndownService from 'turndown';

const DIST = 'dist';
const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});
td.remove(['script', 'style', 'nav']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name === 'index.html') out.push(full);
  }
  return out;
}

let written = 0;
for (const file of walk(DIST)) {
  if (file === path.join(DIST, '404.html')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!main) continue;

  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1].trim();
  const description = (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [, ''])[1];
  const canonical = (html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) || [, ''])[1];

  const body = td.turndown(main[1]).replace(/\n{3,}/g, '\n\n').trim();
  const md = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `canonical: ${canonical}`,
    '---',
    '',
    body,
    '',
  ].join('\n');

  fs.writeFileSync(path.join(path.dirname(file), 'index.md'), md);
  written += 1;
}

console.log(`[md] ${written} sidecars written`);
