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

// Keep noindex placeholder routes out of the sitemap until they have content.
function isIndexable(page) {
  const seg = new URL(page).pathname.split('/').filter(Boolean);
  if (seg[0] === 'countries' && seg.length === 2) return countrySlugs.has(seg[1]);
  if (seg[0] === 'ports' && seg.length === 2) return portSlugs.has(seg[1]);
  if (seg[0] === 'guides' && seg.length === 2) return guideSlugs.has(seg[1]);
  if ((seg[0] === 'compare' || seg[0] === 'sectors') && seg.length === 2) return false;
  return true;
}

export default defineConfig({
  // Placeholder domain until content is complete; replace before launch.
  site: 'https://freighthub.net',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: isIndexable })],
});
