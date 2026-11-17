# Freightgcc — Deep Audit: Content, Structure, SEO, AIO

**Date:** 2026-11-17  
**Mode:** READ_ONLY — no site content changed  
**Site:** https://freightgcc.com/  
**Repo:** `/root/.openclaw/workspace/repos/Freighthub`  
**HEAD:** `53c1893`  
**Build:** 84 HTML files / 83 sitemap URLs / 83 Markdown sidecars

---

## 1. Executive summary

Freightgcc is in strong technical and editorial shape.

**Overall evidence score: 90.5 / 100 — excellent, with only low-priority cleanup remaining.**

Key verified facts:

- 83/83 live sitemap URLs return 200.
- 83/83 canonicals are self-referencing.
- 0 missing titles, descriptions or canonicals.
- 0 duplicate titles.
- 0 pages with H1 ≠ 1.
- 0 broken internal links; 0 orphan pages.
- 109/109 images have non-empty ALT text.
- 0 JSON-LD parse errors.
- Rendered titles >60: 0.
- Rendered descriptions >160: 0.
- Live sitemap = local sitemap: 83 / 83.
- Markdown negotiation works.
- llms.txt has 83 links, all matching the sitemap.
- `www` and HTTP requests resolve to the apex HTTPS site.
- Real 404 behavior is present.

No P0 or P1 content/technical defect was found. Remaining items are P2/P3 hygiene.

---

## 2. Structure and inventory

### URL structure

| Section | URLs |
|---|---:|
| Guides | 14 |
| Ports | 13 |
| Compare | 9 |
| Updates | 9 |
| Sectors | 8 |
| Countries | 7 |
| Tools | 7 |
| Notes | 5 |
| Home + static/legal/author | 12 |
| **Total** | **83** |

### Content collections

| Collection | Files | Word range | Mean |
|---|---:|---:|---:|
| countries | 6 | 4,323–5,736 | 4,685 |
| ports | 12 | 2,363–5,357 | 3,831 |
| guides | 13 | 2,558–4,390 | 3,181 |
| compare | 8 | 1,585–3,180 | 1,876 |
| sectors | 7 | 2,038–3,275 | 2,348 |
| updates | 8 | 406–526 | 465 |
| notes | 4 | 1,197–1,346 | 1,290 |

**Total content files:** 58.

Rendered word distribution:

```text
1,500+ words: 46 pages
800–1,500: 15 pages
300–800: 22 pages
under 300: 0 pages
```

`updates` are short by design. There are no thin editorial pages.

### Internal structure

- 0 broken internal links.
- 0 orphan pages.
- Single H1 on every page.
- Tools: 6 calculators plus index:
  - Landed Cost
  - Chargeable Weight
  - Transit Buffer
  - FCL vs LCL
  - DDP vs DAP
  - HS Code Research
- Country → Port → Guide → Compare internal linking is present.
- `llms.txt` lists all 83 indexed URLs.

---

## 3. Content audit

### Repetition — PASS

No 4-gram pair within any content collection reaches 0.30.

Unique-sentence share:

| Collection | Mean | Min |
|---|---:|---:|
| countries | 0.89 | 0.86 |
| ports | 0.85 | 0.81 |
| guides | 0.82 | 0.75 |
| compare | 0.79 | 0.73 |
| sectors | 0.78 | 0.71 |
| updates | 0.77 | 0.71 |
| notes | 0.78 | 0.66 |

**Conclusion:** no template replacement or mass duplicated body copy.

### Sources — PASS

- 58/58 content pages have a Sources/References/Further-reading section.
- 58/58 have external links.
- Source notes were added near Key Facts on 10 high-value pages.
- Source/date proximity is strongest on the commercially important country, port, FCL/LCL, air and cost pages.

### AI-style / empty language — PASS with P2

- Mechanical phrase hits: 28 across all 58 content files.
- Empty marketing phrases (`best price`, `one-stop`, `leading manufacturer`, etc.): 0.
- No mass removal is warranted; phrase cleanup should be page-specific.

### Thin content — PASS

No content page is under 300 rendered words.

The 22 pages in the 300–800 band are mostly static/index/tool pages, not thin articles.

### Originality — PARTIAL

No external source corpus is stored in the repo, so a hard external 4-gram similarity score cannot be produced.

Verified:

- No internal 4-gram near-duplicates above 0.30.
- Every content page carries sources.
- The site’s unique country/port/guide content is substantially distinct.

Label: **PARTIAL / externally unverified**, not a failure.

---

## 4. SEO configuration

### Verified normal

| Check | Result |
|---|---:|
| Sitemap URLs | 83 |
| Live URLs returning 200 | 83 / 83 |
| Canonical self-reference | 83 / 83 |
| Missing title/description/canonical | 0 |
| Duplicate titles | 0 |
| H1 ≠ 1 | 0 |
| Rendered title >60 | 0 |
| Rendered description >160 | 0 |
| OG title/description/image/url | 83 / 83 |
| Twitter card/title/description/image | 83 / 83 |
| Broken internal links | 0 |
| Orphan pages | 0 |
| Noindex URLs in sitemap | 0 |
| hreflang | None; correct for an English-only site |
| Real 404 | Yes |

### Redirects and host handling

- `http://freightgcc.com/` reaches the HTTPS apex.
- `https://www.freightgcc.com/` returns 301 to the apex.
- `/nonexistent-deep-audit-22/` returns a real 404.

### Sitemap generation

`astro.config.mjs` filters placeholder content routes and uses `trailingSlash: 'always'`.

### Issue

**P2 — stale config comment**

`astro.config.mjs` still says:

```js
// Placeholder domain until content is complete; replace before launch.
site: 'https://freightgcc.com'
```

The site is live and the domain is already final. The comment is harmless but misleading. Update it to a production note.

**P3 — frontmatter title hygiene**

30 frontmatter titles exceed 60 characters, but rendered titles are all ≤60 because templates truncate/adapt them. This is not an SEO defect; it is a content-maintenance inconsistency.

---

## 5. AIO configuration

### Working

- `llms.txt`: 200, 6,299 bytes, 83 unique links, all matching the sitemap.
- Markdown negotiation:

```text
Accept: text/markdown
→ 200
→ content-type: text/markdown; charset=utf-8
→ vary: Accept
```

- `Accept: text/markdown;q=0` returns HTML.
- HTML pages include:

```text
Vary: Accept
Link: <.../index.md>; rel="alternate"; type="text/markdown"
```

- `Content-Signal`:

```text
ai-train=yes, search=yes, ai-input=yes
```

- `Link: </llms.txt>; rel="describedby"`
- `Link: </sitemap-index.xml>; rel="sitemap"`
- robots.txt explicitly allows:
  - GPTBot
  - ClaudeBot
  - PerplexityBot
  - Google-Extended

### Schema

| Type | Count |
|---|---:|
| Organization | 83 |
| WebSite | 83 |
| Person | 83 |
| BreadcrumbList | 82 |
| Article | 58 |
| FAQPage | 7 |
| WebApplication | 6 |
| ProfilePage | 1 |
| Question / Answer | 28 / 28 |

- JSON-LD parse errors: 0.
- Article count matches 58 content files.
- WebApplication count matches 6 tools.
- FAQPage appears on 7 pages with FAQs.
- Organization includes legal name, address, DUNS, founding date and contact points.

### P3 schema hygiene

- `Person` is emitted on all 83 pages, including legal/utility pages. It is valid but unnecessary outside author/article contexts.
- Organization has no `sameAs` because no verified external profile URLs were supplied. Do not fabricate them.
- `ContactPoint` repeats three times across all pages; valid but noisy.

---

## 6. Technical and security checks

- All 83 sitemap URLs: 200.
- HTML: 84 files including 404.
- Markdown: 83 sidecars.
- `robots.txt`: 200, correct sitemap.
- `sitemap-index.xml`: 200, `application/xml`.
- `llms.txt`: 200, `text/markdown`.
- HSTS: present.
- CSP: present.
- X-Frame-Options: `SAMEORIGIN`.
- X-Content-Type-Options: `nosniff`.
- Referrer-Policy: `strict-origin-when-cross-origin`.
- X-Robots-Tag: indexable on public pages.
- Largest HTML document: `/countries/uae/` at ~49.7 KB.
- SSG content is server-rendered; no JS dependency for main text.

Not measured:

- Lighthouse / Core Web Vitals.
- GSC query, coverage, manual actions or traffic data.

---

## 7. Seven-dimension score

| Dimension | Weight | Score | Evidence |
|---|---:|---:|---|
| Completeness | 15% | 98 | 83/83 pages, 83 md, 0 broken, 0 orphan, 109/109 ALT |
| SEO technical | 20% | 96 | 0 metadata misses, 83/83 canonical, 0 H1/duplicate issues, OG/Twitter complete |
| AIO | 15% | 95 | negotiation + Vary + alternate + llms 83/83 + robots + schema |
| Data consistency | 10% | 95 | 58/58 Article schema, 6/6 WebApplication, no schema parse errors |
| Originality | 25% | 75 | no internal duplicate ≥0.30; external corpus unavailable (PARTIAL) |
| Subjective insight | 10% | 95 | source notes, country/port judgements and tool methodology present |
| Content depth | 5% | 92 | 46 pages 1,500+; no under-300 editorial pages |
| **Weighted total** | | **90.5** | **Excellent** |

This is an evidence score, not a Google ranking prediction.

---

## 8. Priority fix list

### P0

None.

### P1

None in content, structure, SEO or AIO.

### P2

1. Update the stale “placeholder domain” comment in `astro.config.mjs`.
2. Consider limiting Person schema to article/author contexts.
3. Consider adding verified Organization `sameAs` profiles if real profiles exist.
4. Continue sentence-level source proximity beyond the 10 pages that currently carry Source notes.

### P3

5. Clean up 30 long frontmatter titles so source metadata matches rendered metadata.
6. Reduce repeated `ContactPoint` schema or scope it to contact/about pages.
7. Add optional performance monitoring / Lighthouse baseline outside the repo.

---

## 9. Verdict

Freightgcc is not a content-volume problem and not a technical SEO problem.

It now has:

- complete sitemap coverage
- valid canonical/H1/schema structure
- full OG/Twitter metadata
- working Markdown negotiation
- complete llms.txt
- explicit AI crawler policy
- no thin editorial pages
- no duplicate body content
- source sections on every content page

The remaining work is **hygiene and evidence depth**, not a rebuild.

**Recommendation:** ship no new article batch until the 10-page source-proximity pattern is extended to the remaining commercial-number pages; keep the technical stack as is.
