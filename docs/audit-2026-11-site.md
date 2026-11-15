# 全面审计 — freighthub.net（Freighthub）

审计对象：本地 `dist`（2026-11-15 构建，70 个 HTML）
线上：**未部署**。`freighthub.net` 返回 114 字节停放页，JS 跳 `/lander`；sitemap 只有 `/lander` 一条，因此本报告所有数字均来自本地构建，不代表线上。
口径：七维站点审计 + E-E-A-T 专项。

---

## 1. 总表

| 维度 | 权重 | 得分 | 加权 | 主要扣分点 |
|---|---:|---:|---:|---|
| 完整度 | 15% | 55 | 8.3 | 首页 30 词占位；无 404；无 sidecar；无 OG |
| SEO | 20% | 72 | 14.4 | 9 个短描述；0 个 OG/Twitter 标签 |
| AIO | 15% | 35 | 5.3 | 0 个 JSON-LD；llms.txt 仅 5 条；0 sidecar |
| 数据一致性 | 15% | 85 | 12.8 | 单一来源，无镜像 |
| 原创性 | 15% | 90 | 13.5 | 1 对 5-gram 0.137 |
| 主观见解 | 10% | 10 | 1.0 | 0/70 有第一人称判断 |
| 内容深度 | 10% | 65 | 6.5 | 核心页 2,400–4,000 词，但首页 30 词、枢纽页 47–107 词 |
| **总分** | | | **61.7** | |

---

## 2. 分维证据

### 2.1 完整度（55）
- 70 页；孤儿 0；点击深度 ≤2；可索引 70。
- 信任页齐：about（672 词）、methodology（688）、corrections（345）、contact（253）。
- 独立性与利益披露写得清楚：「不是货代、承运人、报关行或平台，不收佣金」。
- **首页是占位页**：正文 30 词，写「The Middle East rebuild is in progress. Planned sections: Countries, Ports, Guides, Updates」——而这些栏目已经存在，页面在自我否定。
- **无 `404.html`**；**无 markdown sidecar**；`_headers` 有 HSTS/XFO/Referrer-Policy/Content-Signal，但**无 CSP**。

### 2.2 SEO（72）
- 标题 70/70 ≤60，唯一，无重复；canonical 唯一；断链 0。
- 描述 9 页 <120 字符（ports 47、countries 77、guides 78、about 89、首页 90、updates 95、contact 105、notes 106、corrections 107）；无超长。
- **OG / Twitter 标签 0/70**：分享与 AI 抓取没有标题、描述、图。
- 重点页标题质量好（例：`Air Freight to the GCC 2026 — Freighthub`）。

### 2.3 AIO（35）
- **JSON-LD 0/70**：没有 Organization、WebSite、Article、BreadcrumbList、FAQPage 中的任何一个。
- `llms.txt` 186 字节、5 条相对链接，只列首页与四个枢纽。
- markdown sidecar 0。
- 外链极强：**565 条、188 个域名**，含 zatca.gov.sa（20）、saber.sa（14）、saso.gov.sa、dpworld.com、mawani.gov.sa、moec.gov.ae —— 这是本站最值钱的资产。
- robots 允许全部抓取，但未显式列 AI 爬虫；`Content-Signal: ai-train=yes` 已在 `_headers`。

### 2.4 数据一致性（85）
- 无目录镜像与跨文件数据副本；运价、时效以区间表述，未发现自相矛盾（抽查）。

### 2.5 原创性（90）
- 5-gram >12% 仅 1 对：`/countries/bahrain/` vs `/ports/khalifa-bin-salman/` 0.137，属同主题自然重叠。

### 2.6 主观见解（10）
- 0/70 页有第一人称判断；指南大量使用「承运人通常」「清关行往往」这种无人称表述。
- 已有 `By Freighthub` 署名与 `Last reviewed 11 November 2026`，责任主体清楚，但没有立场。

### 2.7 内容深度（65）
| 区块 | 中位词数 | 最小 | 最大 |
|---|---:|---:|---:|
| countries | 4,006 | 46 | 4,268 |
| ports | 2,770 | 36 | 4,915 |
| guides | 2,484 | 34 | 3,647 |
| sectors | 2,017 | 340 | 2,116 |
| compare | 1,514 | 368 | 1,610 |
| notes | 1,303 | 187 | 1,361 |
| updates | 440 | 337 | 531 |
| 首页 | **30** | — | — |

深度不是问题，**入口页**是问题：36–46 词的最小值出现在枢纽页，首页只有 30 词。

---

## 3. E-E-A-T 专项

| 维度 | 现状 | 判断 |
|---|---|---|
| Experience | 编辑署名为 Freighthub，非个人；无第一手操作记录 | 弱 |
| Expertise | methodology 页写明研究、写作、更正流程；引用 188 个官方域名 | 强 |
| Authoritativeness | 引用 ZATCA、SABER、SASO、DP World、Mawani、MOEC 等一手来源 | 很强 |
| Trust | 独立性声明、更正政策、联系方式、Last reviewed | 强 |

结论：**来源与流程已经达到专业水平，缺的是「谁在写」和「机器可读的结构」**。这也是为什么 AIO 只有 35 分——内容再好，搜索引擎只看到一个没有任何结构化数据的普通 HTML 站。

---

## 4. 短板（分数杀手）

1. **首页是占位页**：30 词，且声称栏目「planned」，与站内 70 页现实矛盾。
2. **全站 0 结构化数据、0 OG**：70 页里没有一条 JSON-LD，社交与 AI 抓取拿不到任何元信息。
3. **llms.txt 与 sidecar 几乎为零**：565 条外链的站，机器入口只有 5 条链接。

---

## 5. 修复清单（按加权增益排序）

| # | 动作 | 页数 | 预估增益 | 工时 |
|---|---|---:|---:|---:|
| 1 | 重写首页：路线矩阵（6 国 × 海/空/陆）、按决策分流的入口、最新 updates、方法与独立性说明；30 → 600+ 词 | 1 | 完整度 +6、深度 +5，**+2.4** | 3 h |
| 2 | 布局补全 meta：OG / Twitter / og:image；canonical 已有 | 70 | SEO 72→85，**+2.6** | 1 h |
| 3 | JSON-LD：Organization + WebSite（全站）、Article（guides/notes/compare/sectors）、BreadcrumbList、FAQPage（有问答的页） | 70 | AIO 35→60，**+3.8** | 3 h |
| 4 | `llms.txt` 全量重建：70 URL + Answers 节（独立性、来源等级、覆盖范围） | 1 | AIO +8，**+1.2** | 1 h |
| 5 | markdown sidecar：每页 `/<path>/index.md` + `_headers` content-type | 70 | AIO +7，**+1.1** | 2 h |
| 6 | 立场块：30 篇指南 + 9 篇 compare + 8 篇 sectors 加「Our view」（判断 + 理由 + 例外） | 47 | 主观 10→60，**+5.0** | 6 h |
| 7 | 9 个短描述补到 120–155 字符 | 9 | SEO +3，**+0.6** | 0.5 h |
| 8 | 新增 `404.html`（带搜索与主要栏目） | 1 | 完整度 +2，**+0.3** | 0.5 h |
| 9 | 枢纽页加厚：ports 47、guides 78、countries 77 词 → 各 250–400 词，列出选择标准与入口 | 3 | 深度 +3，**+0.3** | 2 h |
| 10 | `_headers` 加 CSP；corrections 页补「已更正条目」表 | 2 | 完整度 +2，**+0.3** | 1 h |

**全部执行后预估：61.7 → 约 81**。

---

## 6. 审计局限

- 站点未部署，无法核对线上与本地是否一致，也无法验证 74 条 `_redirects` 在 CDN 上的实际行为。
- 数据一致性为抽查：运价与时效是区间表述，没有可逐叶子比对的目录数据。
- 外链数量按渲染后 HTML 计，含正文引用与少量导航链接；域名分布已人工抽查前 8 位，均为官方或港口运营方。
