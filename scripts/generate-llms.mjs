// Build llms.txt from the built sitemap. The previous file listed five hub links
// against 70 pages, which undersold a site whose value is its sourced detail.
import fs from 'node:fs';

const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

const LABELS = {
  '': 'Core pages',
  countries: 'Country guides',
  ports: 'Port profiles',
  guides: 'Freight guides',
  sectors: 'Sector guides',
  compare: 'Comparisons',
  updates: 'Updates',
  notes: 'Editorial notes',
  about: 'About and trust',
};

const bySection = new Map();
for (const u of urls) {
  const p = new URL(u).pathname.replace(/^\/|\/$/g, '');
  const seg = p === '' ? '' : p.split('/')[0];
  if (!bySection.has(seg)) bySection.set(seg, []);
  bySection.get(seg).push(u);
}

const lines = [];
lines.push('# Freightgcc');
lines.push('');
lines.push('> Independent editorial analysis of China-to-GCC freight: ports, routes, customs, certification and sector economics. No carrier or forwarder commissions. Contact: martin@freightgcc.com.');
lines.push('');
lines.push(`This file lists all ${urls.length} indexed URLs.`);
lines.push('');
lines.push('## Answers');
lines.push('');
lines.push('- **Who publishes this?** Freightgcc, an independent editorial project. It is not a forwarder, carrier, customs broker or marketplace, and it takes no commissions on shipments.');
lines.push('- **What does it cover?** China-origin freight to Saudi Arabia, the UAE, Qatar, Kuwait, Oman and Bahrain: gateway ports, customs and VAT, SABER/SASO and ESMA certification, sector rules, transit and landed-cost structure.');
lines.push('- **How are claims sourced?** Substantive pages cite primary sources — ZATCA, SABER, SASO, the UAE Ministry of Economy, DP World, Mawani — and state where a figure is a range rather than a published tariff.');
lines.push('- **How are errors handled?** Corrections are published on /corrections/ with a date rather than edited silently; the research and review process is on /methodology/.');
lines.push('');

for (const [seg, items] of bySection) {
  const label = LABELS[seg] || seg;
  lines.push(`## ${label} (${items.length})`);
  lines.push('');
  for (const u of items.sort()) {
    const p = new URL(u).pathname.replace(/^\/|\/$/g, '');
    const name = p === '' ? 'Home' : p.split('/').pop().replace(/-/g, ' ');
    lines.push(`- [${name}](${u})`);
  }
  lines.push('');
}

fs.writeFileSync('dist/llms.txt', lines.join('\n'));
console.log(`[llms] ${urls.length} URLs -> dist/llms.txt`);
