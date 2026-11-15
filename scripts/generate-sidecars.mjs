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

// Turndown drops tables by default. These pages carry 100+ comparison tables, so
// the markdown twin would lose the most structured part of the page. Emit a GFM
// pipe table instead: first row as header, everything after as body rows.
td.addRule('table', {
  filter: 'table',
  replacement: (_content, node) => {
    // Domino (turndown's DOM in Node) exposes getElementsByTagName but not
    // querySelectorAll on the node handed to a rule, so walk it that way.
    const trs = node.getElementsByTagName ? Array.from(node.getElementsByTagName('tr')) : [];
    const grid = trs
      .map((tr) =>
        Array.from(tr.childNodes)
          .filter((cell) => cell.nodeType === 1)
          .map((cell) => (cell.textContent || '').replace(/\s+/g, ' ').trim().replace(/\|/g, '\\|'))
      )
      .filter((row) => row.length > 0);
    if (grid.length === 0) return '';
    const width = Math.max(...grid.map((r) => r.length));
    const pad = (r) => [...r, ...Array(width - r.length).fill('')];
    const header = pad(grid[0]);
    const lines = [
      `| ${header.join(' | ')} |`,
      `| ${header.map(() => '---').join(' | ')} |`,
      ...grid.slice(1).map((r) => `| ${pad(r).join(' | ')} |`),
    ];
    return `\n\n${lines.join('\n')}\n\n`;
  },
});

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
