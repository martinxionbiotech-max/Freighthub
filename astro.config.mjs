import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync, readdirSync } from 'node:fs';

const slugs = (dir) =>
  existsSync(dir)
    ? readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
    : [];

const countrySlugs = new Set(slugs('src/content/countries'));
const portSlugs = new Set(slugs('src/content/ports'));
const guideSlugs = new Set(slugs('src/content/guides'));
const compareSlugs = new Set(slugs('src/content/compare'));
const sectorSlugs = new Set(slugs('src/content/sectors'));
const updateSlugs = new Set(slugs('src/content/updates'));
const noteSlugs = new Set(slugs('src/content/notes'));

// Keep noindex placeholder routes out of the sitemap until they have content.
function isIndexable(page) {
  const seg = new URL(page).pathname.split('/').filter(Boolean);
  if (seg[0] === 'countries' && seg.length === 2) return countrySlugs.has(seg[1]);
  if (seg[0] === 'ports' && seg.length === 2) return portSlugs.has(seg[1]);
  if (seg[0] === 'guides' && seg.length === 2) return guideSlugs.has(seg[1]);
  if (seg[0] === 'compare' && seg.length === 2) return compareSlugs.has(seg[1]);
  if (seg[0] === 'sectors' && seg.length === 2) return sectorSlugs.has(seg[1]);
  if (seg[0] === 'updates' && seg.length === 2) return updateSlugs.has(seg[1]);
  if (seg[0] === 'notes' && seg.length === 2) return noteSlugs.has(seg[1]);
  return true;
}

export default defineConfig({
  // Placeholder domain until content is complete; replace before launch.
  site: 'https://freighthub.net',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: isIndexable })],
});
