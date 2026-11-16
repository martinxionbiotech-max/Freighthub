# Freightgcc — Full-Site Audit

**Audit date:** 2026-11-16  
**Mode:** read-only; no site files changed  
**Target:** https://freightgcc.com/  
**Local repo:** `/root/.openclaw/workspace/repos/Freighthub`  
**Build HEAD:** `9e9aecd`  
**GSC data:** not provided  
**Audit scope:** all 83 sitemap URLs + 58 Markdown content files + 6 tools

---

## 1. Executive Summary

Freightgcc is a technically clean, content-heavy editorial and calculator site. The live site matches the local build, the sitemap is complete, and there are no broken internal links, orphan pages, duplicate titles, or invalid JSON-LD blocks.

**Overall evidence score: 86.9 / 100 — good, not yet “finished”.**

The main remaining weaknesses are narrow and specific:

- AIO Markdown negotiation is not enabled (`Accept: text/markdown` returns HTML; direct `.md` sidecars work).
- Two meta descriptions exceed 160 characters.
- The author page is the only page below 300 words (281).
- The site has no explicit AI-crawler rules; the wildcard allows them, but the policy is implicit.
- Organization schema lacks `sameAs`.
- External originality cannot be verified without a source corpus.
- B2B conversion has email/WhatsApp but no structured RFQ form.

No P0 blocking issue was found.

### Live vs build fingerprint

| Check | Result |
|---|---|
| Homepage title: live vs `dist` | Match |
| `/privacy/` | 200 |
| `sitemap-index.xml` | 200, `application/xml` |
| `robots.txt` | 200, sitemap points to `freightgcc.com` |
| `llms.txt` | 200, 83 links; build `dist/llms.txt` 6,299 bytes |
| Build pages | 84 HTML files (83 sitemap + 404) |
| Sitemap URLs | 83 |
| Markdown sidecars | 83 |

The site is deployed; the local build is a valid representation of the live output.

---

## 2. Critical Errors

**None.**

- No P0 indexation block.
- No canonical mismatch.
- No sitemap/noindex conflict.
- No broken internal links or orphan pages.
- No JSON-LD parse error.
- No cloaking or hidden text.
- No false Review/Rating/Person schema.
- No hacked-content or spam-parameter injection.

---

## 3. Technical Issues

### Verified normal

- 83/83 sitemap URLs return 200.
- 83/83 canonicals match their sitemap URL.
- Exactly one H1 on all pages.
- No duplicate titles.
- `index.html` count 84; sitemap 83; difference is the 404 page.
- Real missing URL returns 404 (`/nonexistent-audit-8127/`).
- `http://` resolves to HTTPS.
- `https://www.freightgcc.com/` now returns **301** to `https://freightgcc.com/` via Pages middleware.
- `robots.txt` allows crawl and declares the correct sitemap.
- Single-language site has no hreflang, which is correct.
- SSR output contains main content without JS.
- Security headers present: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.

### Issues

| Severity | Issue | Evidence |
|---|---|---|
| P1 | Accept-based Markdown negotiation is absent | `Accept: text/markdown` on `/`, `/guides/fcl/`, `/tools/landed-cost/` returns `text/html`, with no `Vary: Accept` or alternate link. Direct `/guides/fcl/index.md` works and returns `text/markdown`. |
| P2 | Two descriptions exceed 160 chars | `/author/wei-wong/` 168; `/tools/hs-code-research/` 175. |
| P2 | Author page is thin | 281 words; only page under 300. |
| P3 | Organization has no `sameAs` | Legal name, address, DUNS and contact points are present; external entity corroboration is absent. |

No performance score is claimed. The largest HTML document is `/countries/uae/` at 49,174 bytes; no Lighthouse or field CWV data was available.

---

## 4. SEO Issues

### Verified normal

- Unique titles: 100%.
- Rendered title >65 chars: 0.
- Unique meta descriptions: 100%.
- Canonical self-reference: 100%.
- Single H1: 100%.
- Open Graph: title, description, image and URL present on all 83 pages.
- Twitter card: card, title, description and image present on all 83 pages.
- Sitemap: 83 URLs, no noindex URLs.
- BreadcrumbList: 82 pages (homepage omitted).
- Internal links: 0 broken, 0 orphan pages from the build scan.
- Images: 109/109 have non-empty ALT text.

### Issues

1. **Two long descriptions** — trim to ≤160 characters:
   - `/author/wei-wong/`
   - `/tools/hs-code-research/`
2. **No explicit AI crawler policy** — `User-agent: *` allows AI crawlers, but there is no named GPTBot/ClaudeBot/PerplexityBot policy or rationale. This is a policy clarity issue, not a ranking blocker.
3. **Person schema is emitted on all 83 pages** — valid, but unnecessary on utility/legal pages; consider limiting Person to article/author contexts. P3.

---

## 5. Content Issues

### Inventory

| Collection | Files | Word range | Mean |
|---|---:|---:|---:|
| countries | 6 | 4,323–5,707 | 4,676 |
| ports | 12 | 2,363–5,357 | 3,827 |
| guides | 13 | 2,558–4,370 | 3,174 |
| compare | 8 | 1,585–3,157 | 1,870 |
| sectors | 7 | 2,038–3,275 | 2,348 |
| updates | 8 | 406–526 | 465 |
| notes | 4 | 1,197–1,346 | 1,290 |

Rendered word distribution across 83 pages:

- 46 pages 1,500+ words
- 15 pages 800–1,500
- 21 pages 300–800
- 1 page under 300 (`/author/wei-wong/`, 281)

### Findings

- No 4-gram near-duplicate pairs above 0.30 within content collections.
- Unique-sentence share: 0.66–0.89 (strong).
- All 58 content pages have external links and a Sources/References/Further-reading section.
- All content collections contain explicit editorial viewpoint markers.
- `updates` are intentionally short briefs; their 406–526-word range is not a thin-content failure.
- `/notes/` now 386 words after the P2 depth pass.
- Remaining thinness is the author page, not the editorial corpus.
- Originality is **PARTIAL**: no source-site corpus was supplied, so a hard external 4-gram comparison cannot be made.

### P1 evidence gap

The source notes now sit near the key-facts tables on 10 high-value pages, but not every commercial number has a sentence-level source. Continue source proximity, especially in:

- `/countries/saudi-arabia/`
- `/countries/uae/`
- `/guides/cost-and-transit/`
- `/guides/air-freight/`
- `/guides/lcl/`
- `/guides/fcl/`
- `/updates/*/`

---

## 6. AIO / GEO Issues

### Working

- `/llms.txt` 200; 83 links; all 83 match sitemap URLs.
- Direct `.md` sidecar: `/guides/fcl/index.md` 200 `text/markdown`.
- `Link: </llms.txt>; rel="describedby"` and sitemap Link header present.
- `Content-Signal: ai-train=yes, search=yes, ai-input=yes` present.
- Structured data types: Organization, WebSite, Person, Article, FAQPage, BreadcrumbList, WebApplication, ProfilePage.
- Direct answers, tables, definitions and explicit “in our view” sections are present.

### Gaps

1. **No content negotiation** — `Accept: text/markdown` returns HTML. A crawler that asks for Markdown gets HTML unless it knows the `.md` sidecar path.
2. **No `Vary: Accept` and no `<link rel="alternate" type="text/markdown">`** on HTML pages.
3. **No named AI-crawler policy** in robots.txt; wildcard allows all, but explicit is clearer.
4. **llms.txt link purpose** should be spot-checked as content changes; 83/83 currently resolve.

---

## 7. Schema Issues

### Valid and present

- JSON-LD parse errors: 0.
- Organization: 83 pages.
- WebSite: 83.
- Person: 83.
- BreadcrumbList: 82.
- Article: 58 (matches 58 content files).
- FAQPage: 7.
- WebApplication: 6 (matches 6 tools).
- ProfilePage: 1.
- Organization has `legalName`, `address`, `duns`, `foundingDate`, contact points and employee.
- Article author is the Person `Wei Wong`, not the Organization.

### Issues

| Severity | Issue |
|---|---|
| P2 | Organization lacks `sameAs`; add verified external profiles only. |
| P2 | `FAQPage` only on 7 pages; not every content page has FAQ. This is acceptable, but FAQ presence is inconsistent. |
| P3 | Person is emitted on all pages, including legal/utility pages; consider limiting to author/article contexts. |
| P3 | `ContactPoint` count is 249 across 83 pages because three points repeat sitewide; valid but noisy. |

No fake ratings, reviews, job postings or credentials were found.

---

## 8. Entity Issues

### Present

- Legal publisher: **YIWU DINGWEI TRADING COMPANY**
- Address: 3# Building, North Silicon Valley, Qiaodong District, Zhangjiakou City, Hebei, China
- D-U-N-S: **585974555**
- Founded: **October 2025**
- Author/editorial lead: **Wei Wong**
- Role: CEO, YIWU DINGWEI TRADING COMPANY; Author and Editorial Lead, Freightgcc
- Background: 20 years in foreign trade and logistics
- Contact: Sales / Admin / Editorial emails and WhatsApp

### Gaps

- No external `sameAs` profiles for the company.
- No named second reviewer or editorial board.
- No independent corporate registry link; DUNS is present.
- Author page does not list verifiable professional history beyond the supplied 20-year statement.

Do not invent these. Add only documents the publisher can substantiate.

---

## 9. B2B Issues

### Strengths

- Clear editorial positioning: China → GCC freight intelligence, not a forwarder.
- Strong country/port/guide hierarchy.
- Six useful tools, including landed cost, FCL/LCL, DDP/DAP and HS research.
- Legal entity and author identity now visible.
- Sales email and WhatsApp are present on Contact and footer.

### Gaps

- No structured RFQ form; a buyer must compose an email or WhatsApp message.
- No downloadable company profile, service sheet or capability statement.
- No explicit response-time commitment for Sales (editorial response times are stated, commercial ones are not).
- No “what happens after an RFQ” workflow on the Contact page beyond the general description.
- The site intentionally does not sell freight; this is a positioning choice, not a defect, but the Sales CTA should say what Sales actually handles.

---

## 10. Priority Fix List

### P0 — none

No blocking issue.

### P1

1. **Add Markdown negotiation and alternate link**
   - Target: all HTML pages, especially guides/tools.
   - Evidence: `Accept: text/markdown` returns HTML; direct `.md` works.
   - Fix: serve Markdown for `Accept: text/markdown`, add `Vary: Accept` and `<link rel="alternate" type="text/markdown" href="...index.md">`.
   - Verification: same URL returns `text/markdown` with correct header; no-Accept returns HTML.

2. **Finish sentence-level source proximity**
   - Target: top 10 commercial pages and updates.
   - Add source/date after each material number; keep industry claims labelled.
   - Verification: a claim-to-source table per page; no unlabelled hard number.

### P2

3. Trim descriptions:
   - `/author/wei-wong/` 168 → ≤160.
   - `/tools/hs-code-research/` 175 → ≤160.

4. Expand `/author/wei-wong/` from 281 to ≥300 words with role, review process and disclosure. Do not add invented credentials.

5. Add a structured Sales/RFQ path:
   - product/route, volume, destination, target date, documents needed;
   - optional file upload should not be added without a privacy/retention design;
   - keep the current email/WhatsApp as fallback.

6. Add explicit AI-crawler policy in `robots.txt` if the publisher wants one:
   - allow/deny named crawlers deliberately;
   - keep `Content-Signal` aligned with the policy.

### P3

7. Add verified `sameAs` profiles to Organization.
8. Limit Person schema to author/article pages.
9. Add a skip link and keyboard-focus check if not already present.
10. Add external link monitoring for official tariff/customs portals; several authority sites block automated requests.

---

## 11. Agent Implementation Plan

This audit is read-only. If the publisher approves a fix batch:

1. **AIO batch**
   - Implement `Accept: text/markdown` negotiation in the Cloudflare Pages middleware.
   - Add `Vary: Accept` and alternate Markdown links to the shared layout.
   - Probe HTML, Markdown, `q=0`, and direct `.md` paths.
   - Rollback: remove middleware branch and alternate links; HTML remains unchanged.

2. **Metadata batch**
   - Trim the two long descriptions.
   - Re-run title/description length scan over all 83 pages.
   - Rollback: revert content frontmatter only.

3. **Author depth batch**
   - Add role, review workflow, corrections route and AI disclosure.
   - No fabricated credentials.
   - Verify word count, schema, and live 200.

4. **B2B conversion batch**
   - Add an RFQ checklist/structured form with a privacy notice and no upload by default.
   - Keep Sales email/WhatsApp visible.
   - Verify submission path in a staging environment before production.

5. **Source proximity batch**
   - Work page by page, not sitewide search/replace.
   - Keep a rollback commit per page group.

6. **Re-audit**
   - Re-run the site scan, link crawler, schema parser, AIO negotiation matrix and live/build fingerprint.
   - Re-score only after the live deployment matches the build.

---

## Audit limitations

- GSC data (Manual Actions, Crawled/Discovered, query performance) was not provided.
- No Lighthouse/Core Web Vitals or server logs were available.
- External originality is unverified because no source corpus exists.
- Official customs portals may block automated HTTP checks; link availability was not used as a content-quality signal.
- This report does not claim Google ranking or traffic impact.

**Overall:** 86.9/100. The site is structurally sound and content-rich; the next gains are Markdown negotiation, tighter metadata, author depth, source proximity and a clearer commercial intake path.
