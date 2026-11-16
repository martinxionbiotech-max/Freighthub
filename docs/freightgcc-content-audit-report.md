# Freightgcc — Content Quality Audit & Remediation Status

**Date:** 2026-11-16  
**Mode:** READ_ONLY content audit; no article content changed  
**Target:** https://freightgcc.com/  
**Scope:** 58 Markdown content files + 82 sitemap URLs  
**Deliverable:** this report + [`freightgcc-url-keyword-map.csv`](./freightgcc-url-keyword-map.csv)

---

## 1. Executive summary

The site is **not in a content-thin or scaled-content crisis**. The main content collections are long, sourced and structurally distinct. The remaining work is **not “write more articles”**; it is:

1. Keep the technical identity correct (mostly done).
2. Improve source proximity and recency for commercial numbers.
3. Fix the few genuinely thin index/static pages.
4. Upgrade the tools that require official data (HS Code / country tax rules) only when the data exists.

### Phase status against the proposed order

| Phase | Status | Notes |
|---|---|---|
| 1. Domain & index repair | **Code side complete** | Canonical, OG, Schema, Sitemap, robots and internal absolute links point to `freightgcc.com`. `freighthub.net` is a separate project, not an old domain, so no 301 is appropriate. GSC resubmission and DNS records still need owner access. |
| 2. Content quality audit | **This report** | 58 content files, 82 URLs, no near-duplicate collection pairs, 100% source-section coverage. |
| 3. Tool system upgrade | **Partially complete** | FCL vs LCL and DDP vs DAP shipped. Landed Cost exists. HS Code Research and a country-specific tax/certification database are **not** built because they need official data. |
| 4. SEO/GEO expansion | **Partially complete** | Markdown sidecars, llms.txt, section OG images and internal links exist. Original data and per-claim citations remain the bottleneck. |

---

## 2. Inventory

### Content collections

| Collection | Files | Word range | Mean | H2 range |
|---|---:|---:|---:|---:|
| countries | 6 | 4,323–5,707 | 4,676 | 14–19 |
| ports | 12 | 2,363–5,357 | 3,827 | 14–17 |
| guides | 13 | 2,558–4,370 | 3,174 | 16–22 |
| compare | 8 | 1,585–3,157 | 1,870 | 14–18 |
| sectors | 7 | 2,038–3,275 | 2,348 | 16–20 |
| updates | 8 | 406–526 | 465 | 7 |
| notes | 4 | 1,197–1,346 | 1,290 | 10–13 |

**Total content files:** 58  
**Sitemap URLs:** 82 (58 content + index/static/tool/author pages)

`updates` are short by design (dated briefs). Their 406–526-word range is not treated as thin article content.

### Sitemap sections

guides 14 · ports 13 · compare 9 · updates 9 · sectors 8 · countries 7 · tools 6 · notes 5 · home/static 11

### URL / keyword map

The full 82-row map is in:

```text
docs/freightgcc-url-keyword-map.csv
```

Columns:

```text
url, section, title, primary_keyword, words, updated, external_links, sources_section
```

This is the working map for URL ownership and keyword cannibalisation checks.

---

## 3. Six-dimension content audit

### ① Duplication — PASS

Method: 4-gram Jaccard within each collection; 58 content files, pairs with score ≥0.30 counted.

| Collection | Pairs ≥0.70 | Pairs ≥0.50 | Pairs ≥0.30 |
|---|---:|---:|---:|
| countries | 0 | 0 | 0 |
| ports | 0 | 0 | 0 |
| guides | 0 | 0 | 0 |
| compare | 0 | 0 | 0 |
| sectors | 0 | 0 | 0 |
| updates | 0 | 0 | 0 |
| notes | 0 | 0 | 0 |

Unique-sentence word share (sentences ≥60 characters; higher is better):

| Collection | Mean | Min |
|---|---:|---:|
| countries | 0.89 | 0.86 |
| ports | 0.85 | 0.81 |
| guides | 0.82 | 0.75 |
| compare | 0.80 | 0.73 |
| sectors | 0.78 | 0.71 |
| updates | 0.77 | 0.71 |
| notes | 0.78 | 0.66 |

**Conclusion:** no evidence of scaled template replacement. The country/port/guide pages are not copies of each other. This is a content-strength, not a cleanup problem.

### ② AI-style patterns — PASS with P2 observation

Mechanical-phrase hits are low:

| Collection | Hits | Pages with any hit |
|---|---:|---:|
| countries | 3 | 2 / 6 |
| ports | 9 | 6 / 12 |
| guides | 8 | 7 / 13 |
| compare | 1 | 1 / 8 |
| sectors | 5 | 3 / 7 |
| updates | 1 | 1 / 8 |
| notes | 1 | 1 / 4 |

No empty marketing phrases were detected in the content collections (`high quality`, `best price`, `one-stop`, `leading manufacturer`, etc.: 0).

**Caveat:** “not published”, “pending” and similar phrases are deliberate evidence-discipline language, not automatic AI markers. They should be reviewed for fatigue, not removed mechanically.

### ③ Thin content — PASS for articles; P2 for index pages

Article bodies are substantial:

- countries: minimum 4,323 words
- ports: minimum 2,363
- guides: minimum 2,558
- compare: minimum 1,585
- sectors: minimum 2,038
- notes: minimum 1,197
- updates: 406–526 (short briefs, acceptable for the format)

Separate thin **index/static** pages:

| URL | Words | Judgment |
|---|---:|---|
| `/notes/` | 242 | Thin index; P2 |
| `/author/wei-wong/` | 287 | Identity page; acceptable but could be expanded |
| `/countries/` | 308 | Index; acceptable |
| `/guides/` | 335 | Index; acceptable |
| `/ports/` | 346 | Index; acceptable |
| `/updates/` | 347 | Index; acceptable |
| `/sectors/` | 402 | Index; acceptable |

The content problem is therefore **not article thinness**; it is index-page depth and source quality.

### ④ Usefulness / original value — PASS

- Country pages carry port choices, VAT, SABER/SASO, transit and importer-of-record logic.
- Port pages carry facilities, hinterland, routing and operational risk.
- Guides carry cost structure, documents and decision steps.
- Tools are interactive, not brochure pages.
- No collection page is a pure “empty table” or a city/keyword shell.

### ⑤ Subjective viewpoint — PASS

Every content collection contains at least one explicit judgement/recommendation phrase (`we recommend`, `our advice`, `you should`, `our read`, etc.):

| Collection | Pages with explicit viewpoint |
|---|---:|
| countries | 6 / 6 |
| ports | 12 / 12 |
| guides | 13 / 13 |
| compare | 8 / 8 |
| sectors | 7 / 7 |
| updates | 8 / 8 |
| notes | 4 / 4 |

This is not proof of “good opinion”; it shows the pages are not pure neutral aggregation.

### ⑥ Originality — PARTIAL (no source corpus)

No source-site crawl corpus is stored in this repository, so **originality cannot be scored as a hard percentage**. What can be verified:

- External links present: 100% of content pages.
- `Sources` / `References` / `Further reading` sections: 58 / 58 content pages.
- No content-page duplication above the 0.30 Jaccard threshold.

**Conclusion:** source discipline is structurally present; originality remains **PARTIAL/unverified** until a reference corpus or manual source comparison is supplied.

---

## 4. Metadata and technical spot-check

| Item | Result |
|---|---|
| Rendered title >60 chars | 0 (82-page scan) |
| Rendered description >160 chars | 0 |
| Canonical mismatch in sitemap | 0 / 82 |
| Sitemap URLs returning 200 | 82 / 82 |
| Noindex URLs in sitemap | 0 |
| Real 404 | Yes (`Page not found — Freightgcc`) |
| `www.freightgcc.com` | 200; canonical points to apex; missing host 301 |
| SSR body | Direct HTML, no JS dependency |
| Hreflang | None; correct for single-language site |

Frontmatter `title` values above 60 characters are not automatically an SEO defect here because rendered `seoTitle`/templates may be shorter; the rendered HTML is the authority.

---

## 5. Prioritised actions

### P0 — none

No spam, safety or content-integrity issue requiring emergency removal.

### P1 — content evidence

> **Add source proximity to the highest-value numbers**
> - **Targets:** `/countries/*/`, `/guides/cost-and-transit/`, `/guides/air-freight/`, `/guides/lcl/`, `/guides/fcl/`, `/updates/*/`
> - **Method:** for each key number, add source name, link, date and scope; distinguish official fact, industry claim and editorial estimate.
> - **Rollback:** keep the previous paragraph in version control; revert per page if a source cannot be verified.
> - **Verification:** percentage of key numbers with a linked primary source; source date within the stated validity window.

> **Upgrade only the tools with official data**
> - FCL/LCL and DDP/DAP are already shipped.
> - HS Code Research should not be built as a fake lookup table. Use official tariff/HS sources and show the as-of date.
> - Country tax models should be added market by market only after the statutory basis is verified.

### P2 — index depth and host canonicalisation

> **Deepen `/notes/`**
> - Add topic grouping, reading path and a short editorial note. Do not add filler to reach a word count.
> - Rollback: revert the index page only.

> **Configure `www` 301**
> - `www.freightgcc.com/*` → `https://freightgcc.com/:splat` at Cloudflare/DNS.
> - Rollback: remove the redirect rule.
> - Verification: `www` returns 301, final URL is apex, canonical remains apex.

### P3 — optional

- Add a named editorial lead/AI disclosure block to more article templates (already on About/Author).
- Add direct source anchors inside long guides where a paragraph summarizes a regulation.

---

## 6. Recommended next 7 days

1. Add source/date columns to the top 10 commercial-number pages.
2. Deepen `/notes/` index (topic groups + reading path).
3. Configure and test `www → apex` 301.
4. Submit `https://freightgcc.com/sitemap-index.xml` in GSC and record the date.
5. Do **not** start a new article batch until P1 source proximity is complete.

---

## 7. What not to do

1. Do not mass-delete or noindex country/port/guide pages to “clean up” thin content. The audit does not support that.
2. Do not build a fake HS Code database or invent duty rates; a tool with unsourced numbers is worse than no tool.
3. Do not use `robots.txt Disallow` to solve indexation or duplicate-host issues; use 301/canonical.

---

## 8. Required human inputs

- GSC access and Manual Actions status.
- DNS/Cloudflare access for `www` and host redirects.
- Official tariff/HS data source and update cadence.
- Confirmation of which commercial numbers are company observations versus third-party data.
- Optional: a source corpus for a hard originality comparison.

---

**Audit result:** content is stronger than the site's current index footprint suggests. The constraint is **evidence proximity and tool data**, not article volume.
