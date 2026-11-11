# Freighthub — Compressed Completion Sprint

Start: **2026-11-11 18:05 Asia/Shanghai**  
Content deadline: **2026-11-12 04:00**  
QA / launch window: **04:10–07:30**  
Repo: `/root/.openclaw/workspace/repos/Freighthub`

## 1. Definition of done

- Every planned page has real content — no `content production pending`, no `Draft scaffold`.
- All planned pages are indexable (`noindex` removed only after content exists).
- Guides: 2,500–4,000 words; ports: 1,800–2,500; sectors: 2,000–3,000; comparisons: 1,500–2,200; updates: 300–600; notes: 1,200–2,000.
- Each page has direct answer, key facts, cost/transit drivers (ranges only), risk/action, FAQ, sources, internal links.
- No fabricated precise freight rates; ranges and drivers only.
- `npm run build` passes; 0 broken internal links; sitemap and canonical clean.
- Final status report with page count, word count, commit, and remaining blockers (if any).

## 2. Work waves

### Wave 1 — 18:05–21:00
Ports:
- `src/content/ports/khalifa.md`
- `src/content/ports/sharjah.md`

Country route guides:
- `src/content/guides/china-to-saudi-arabia.md`
- `src/content/guides/china-to-uae.md`
- `src/content/guides/china-to-qatar.md`
- `src/content/guides/china-to-kuwait.md`
- `src/content/guides/china-to-oman.md`
- `src/content/guides/china-to-bahrain.md`

### Wave 2 — 21:00–00:00
Method guides:
- `src/content/guides/ddp.md`
- `src/content/guides/customs-clearance.md`
- `src/content/guides/certification.md`
- `src/content/guides/cost-and-transit.md`

Sectors:
- `src/content/sectors/electronics.md`
- `src/content/sectors/batteries.md`
- `src/content/sectors/chemicals.md`
- `src/content/sectors/food.md`
- `src/content/sectors/furniture.md`
- `src/content/sectors/machinery.md`
- `src/content/sectors/ecommerce.md`

### Wave 3 — 00:00–03:00
Comparisons:
- `src/content/compare/jebel-ali-vs-direct.md`
- `src/content/compare/jebel-ali-vs-khalifa.md`
- `src/content/compare/jeddah-vs-dammam.md`
- `src/content/compare/sea-vs-air.md`
- `src/content/compare/fcl-vs-lcl.md`
- `src/content/compare/ddp-vs-self-clearance.md`
- `src/content/compare/uae-vs-saudi.md`
- `src/content/compare/uae-vs-direct.md`

Updates:
- Build `/updates/[slug]` route if absent.
- Add 8 dated update entries with source dates and impact/action interpretation.
- Replace `/updates/` scaffold with a real index.

### Wave 4 — 03:00–04:00
Notes:
- Build `/notes/[slug]` route if absent.
- Add 4 original analysis notes (1,200–2,000 words each).
- Replace `/notes/` scaffold with a real index.

Trust pages:
- `/about/`
- `/corrections/`
- `/contact/` (or a contact section on `/about/` if a form is not available)

## 3. Quality rules

- No invented precise rates, transit times, client names or certifications.
- Label opinion as editorial judgement.
- Use ranges, assumptions and “what changes the number”.
- 15+ internal links per major page.
- One author/editorial line + last reviewed date.
- Do not duplicate the same paragraph across pages.
- Do not remove `noindex` from a page that still has scaffold content.

## 4. Commit protocol

- Commit after each wave: `content: complete freighthub wave N`.
- `git pull --rebase` before push.
- If remote conflicts, preserve both sets of content and resolve by file.
- Update `docs/sprint-progress.md` after each wave.
- Final commit: `content: complete freighthub GCC content set`.
