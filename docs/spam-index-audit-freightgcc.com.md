# Freightgcc.com — Spam & Index Quality Audit

**Audit mode:** READ_ONLY  
**Audit date:** 2026-11-16  
**Target:** https://freightgcc.com/  
**Site type:** B2B editorial / freight intelligence and calculators  
**Tech stack:** Astro static build, Cloudflare  
**GSC data:** Not provided  
**Related sites:** None supplied; `www.freightgcc.com` resolves to the same site. No other subdomain resolved.

**Post-audit remediation (2026-11-16):** The publisher supplied its legal identity after this audit. Organization schema now includes `legalName`, `address` and `duns`; `/about/`, `/contact/`, `/privacy/`, `/terms/` and the footer now name YIWU DINGWEI TRADING COMPANY and D-U-N-S 585974555. The identity finding below should be read as the pre-remediation state; the remaining EEAT gap is a named editorial lead/AI disclosure, not a missing legal entity.

---

## 一、Executive Verdict（执行总览）

**核心判定：未发现明确触发 Google Spam Policies 的违规证据。**

**一句话总结：** 这是一个页面规模不大、内容厚度较高、没有评分/评论伪造和隐藏文本的独立 B2B 编辑站；当前主要风险不是“垃圾外链或采集”，而是 **编辑责任与 AI 披露的具名性、部分数字的来源距离较远，以及 `www` 主机的规范化问题**。

站点盘存：

- Sitemap：81 个 URL
- 抓取成功：81/81 返回 200
- Canonical 与 URL 不一致：0
- Sitemap 内 noindex：0
- 正文词数分布：46 页 1500+，18 页 700–1500，16 页 300–700，1 页 <300
- 模板聚类：guides 14、ports 13、updates 9、compare 9、sectors 8、countries 7、tools 6、notes 5、静态页 9
- 抽样正文相似度：81 页两两比较，**0 对 ≥0.4，0 对 ≥0.7**（5-gram Jaccard，按页面正文）

---

## 二、维度风险评分表

| 评估维度 | 分值 (0-5/U) | 证据强度 | 核心发现与影响面 |
| :--- | :--- | :--- | :--- |
| 1. Spam Policies 违规 | **1** | 高 | 未发现规模化成对内容、隐藏文本、cloaking、伪造评分/评论、垃圾外链或黑产注入证据。 |
| 2. 内容独创性与有用性 | **2** | 中 | 页面长度和主题覆盖较好；个别数字依赖行业说法/二级来源，来源与数字的邻近度不足；`/notes/` 索引页 245 词偏薄。 |
| 3. 技术抓取与索引表现 | **1** | 高 | 81/81 sitemap URL 200，canonical 全部匹配；真实 404；SSR 正文直出；`www` 返回 200 但 canonical 指向 apex，属重复主机规范化问题。 |
| 4. 架构与重复内容膨胀 | **1** | 高 | 81 个 URL、栏目清晰；没有筛选/参数/标签膨胀；未发现 >0.7 的模板重复对。 |
| 5. 商业真实性与 EEAT | **2** | 高 | Legal entity、business address 和 D-U-N-S 已补齐；仍有具名编辑负责人、审稿流程和 AI 披露深度不足。 |

---

## 三、Top 3–5 核心风险诊断清单

### 1. P1 — 编辑责任与 AI 披露仍不够具名（EEAT，不是 Spam；身份字段已修复）

**涉及 URL / 路径模式：** `/about/`、`/contact/`、全站 Organization schema

**底层证据：**

- Organization JSON-LD 现已有 `legalName`、`address`、`duns`，Contact 也有部门邮箱和 WhatsApp；此前的身份字段缺口已修复。
- 作者身份仍是 “Freightgcc editorial”，并披露研究/写作由 AI 工具辅助；没有具名编辑负责人或可核实的专业团队页。

**关联政策/机制：** Google 的 people-first content / E-E-A-T 质量信号；**不是** Spam Policies 硬性违规。

**危害推演：** 对一个涉及关税、VAT、SASO/SABER 和商业费用的站点，读者和搜索质量评估都需要知道“谁对内容负责”。身份缺失不会直接触发 spam 处罚，但会削弱信任、引用意愿和长期排名稳定性。

### 2. P1 — 关键数字的来源距离与证据质量

**涉及 URL / 路径模式：** `/countries/*/`、`/guides/cost-and-transit/`、`/guides/air-freight/`、`/guides/lcl/`、`/updates/*/`

**底层证据：**

- 抽样页面有大量具体数字：运价区间、运输时间、港口吞吐、VAT、清关时间。
- 外部链接确实存在，且多为官方/港口/政府来源；但部分页面仍使用行业说法、新闻或 Wikipedia 作为二级来源，数字与原始来源之间不是逐条对应。
- 审计抽样中 `/notes/` 索引页仅 245 词，属于薄索引页，不是垃圾页。

**关联政策/机制：** Helpful Content / 内容质量；不是 Spam Policies 硬性违规。

**危害推演：** 在关税、VAT 和成本类查询中，用户会把数字直接拿去做预算。来源不够靠近数字，会降低页面被引用和被信任的概率；错误或过期数字也会带来商业风险。

### 3. P2 — `www` 主机返回 200，但 canonical 指向 apex

**涉及 URL：** `https://www.freightgcc.com/`

**底层证据：**

```text
https://www.freightgcc.com/ → 200
canonical → https://freightgcc.com/
```

**关联政策/机制：** URL 规范化 / 重复主机；不是 spam 违规。

**危害推演：** `www` 和 apex 都可访问，虽然 canonical 已指向 apex，但重复主机仍可能分散抓取和链接信号。最佳做法是 `www → apex` 301，而不是仅依赖 canonical。

### 4. P2 — `/notes/` 索引页偏薄

**涉及 URL：** `https://freightgcc.com/notes/`

**底层证据：** 正文约 245 词，是本次全站唯一 <300 词的页面。

**关联政策/机制：** Thin content / 内容质量提醒；不是 spam 判定。

**危害推演：** 索引页本身不承担商业转化，但如果内容只是链接列表，价值有限。可增加编辑说明、主题分组或筛选逻辑；不建议删除。

### 5. P3 — 单语言站没有 hreflang 是正确配置

**证据：** 全站英文，无 hreflang 标签。  
**判断：** 不是缺陷；单语言站不需要 hreflang。仅作为核查记录。

---

## 四、技术与内容抽样诊断细节

### 技术层已验证正常项

- Sitemap：81 个 URL，全部 200。
- Canonical：81/81 与 sitemap URL 匹配。
- Robots：`Allow: /`，Sitemap 指向 `https://freightgcc.com/sitemap-index.xml`。
- 真实 404：随机不存在 URL 返回 404，标题 `Page not found — Freightgcc`。
- 大小写路径：`/Countries/Saudi-Arabia/` 返回 404，没有大小写重复页。
- HTTP → HTTPS：`http://freightgcc.com/` 最终到 `https://freightgcc.com/`。
- SSR：正文在初始 HTML 中直出，无 JS 依赖。
- 移动视口：存在 viewport meta。
- 隐藏文本：0 页发现 `display:none` / `visibility:hidden` / 负 `text-indent` 的正文关键词。
- Cloaking：普通 UA 与 Googlebot UA 对首页、Saudi 国家页、Landed Cost 页的 `<title>`、`<h1>`、正文哈希完全一致。
- 结构化数据：81 页有 Organization/WebSite；0 页 `aggregateRating`，0 页 `Review`，0 页 `Person` 伪造作者。
- 垃圾参数/被黑：sitemap 无异常参数页；未发现真实赌博/成人/药品关键词注入。正则命中 `gambling`、`specialist` 等为语义/子串误报。

### 技术层异常缺陷

- `www.freightgcc.com` 返回 200，canonical 指向 `freightgcc.com`；缺少 `www → apex` 301。
- `/notes/` 245 词，是唯一 <300 词页面；属于薄索引页，不是 doorway。
- GSC 未提供，无法验证 Crawled/Discovered 状态、Manual Actions、真实索引率和查询表现。

### 内容模板抽样分析

| 抽样 URL | 解决的核心意图 | 正文词数 | Original Value | 判断 |
|---|---:|---:|---|---|
| `/` | 站点定位与入口 | 606 | 有 | 导航清晰，工具和国家入口明确 |
| `/countries/saudi-arabia/` | 中国→沙特货运决策 | 4,522 | 有 | 港口、VAT、SABER、运输时间组合，非空壳 |
| `/ports/jebel-ali/` | 港口选择与腹地 | 3,448 | 有 | 港口设施、航线、风险与操作建议 |
| `/guides/cost-and-transit/` | 成本与时效 | 2,535 | 有 | 成本结构和区间解释充分 |
| `/tools/landed-cost/` | 到岸成本计算 | 1,140 | 有 | 可交互计算器 + 公式 + 假设 |
| `/tools/fcl-vs-lcl/` | FCL/LCL 选择 | 770 | 有 | 新增计算器，用户输入费率，非伪造报价 |
| `/about/` | 出版方身份 | 约 600 | 部分 | 说明了独立编辑与 AI 披露，但缺可核实实体信息 |
| `/contact/` | 联系与部门分流 | 约 700 | 有 | 三部门邮箱 + WhatsApp；缺物理地址 |
| `/notes/` | 编辑笔记索引 | 245 | 不足 | 薄索引页，可增加分组/说明 |
| `/methodology/` | 研究方法 | 约 1,500 | 有 | Reported / Industry Claim / Editorial Judgement 分层清晰 |

**Scaled Content 结论：** 81 页两两 5-gram Jaccard **0 对 ≥0.4**，没有发现规模化模板换词或同质落地页。  
**Doorway 结论：** 6 个国家页、13 个港口页均为实质内容页，未发现空壳跳转或统一转化门页。  
**Expired Domain 结论：** Wayback CDX 无历史快照；这是新域名，证据不足，不能判定过期域名滥用。  
**Site Reputation 结论：** 栏目均围绕 China–GCC freight，无博彩/贷款/优惠券等无关第三方目录；未发现寄生虫页。

---

## 五、分级修复方案与实施路线

### P0（阻断级）

**无。**

未发现需要立即下线、批量 noindex 或紧急删除的 spam/security 问题。

### P1（高收益）

> **补齐可核实的出版方身份与编辑责任**
> - **目标与原因：** 降低 EEAT 风险，不虚构地址或注册号；让读者知道谁对关税/VAT/成本内容负责。
> - **影响 URL 范围：** `/about/`、`/contact/`、全站 Organization schema。
> - **具体操作方法：** 若存在可公开的法律实体，补充 `legalName`、`address`、`foundingDate`、`sameAs`；若坚持独立编辑项目，增加具名编辑负责人/审稿流程和“如何更正”的可核验说明。不要编造。
> - **风险控制与回滚方案：** 先改 schema/About 草稿，保留旧版本；如法务不允许公开，回滚到当前独立编辑说明。
> - **验证指标：** Organization 字段完整性、About/Contact 实体一致性、GSC 无 Manual Action。

> **把关键数字逐条接到原始来源**
> - **目标与原因：** 提升关税、VAT、运输时间、港口吞吐等数字的可验证性。
> - **影响 URL 范围：** `/countries/*/`、`/guides/cost-and-transit/`、`/guides/air-freight/`、`/guides/lcl/`、`/updates/*/`。
> - **具体操作方法：** 建立“数字—来源—日期—适用范围”表；优先官方海关/税务机关/港口/承运人；行业说法明确标注 Industry Claim。
> - **风险控制与回滚方案：** 逐页替换，不批量删除段落；保留旧段落快照，发现错误可回退。
> - **验证指标：** 关键数字的原始来源覆盖率、来源日期、页面引用数。

### P2（中长期）

> **修正 `www` 主机规范化**
> - **目标与原因：** 避免 `www` 与 apex 同时 200 造成重复主机。
> - **影响 URL 范围：** `www.freightgcc.com/*`。
> - **具体操作方法：** 在 Cloudflare/DNS 层配置 `www → apex` 301；保留 canonical 作为第二道保险。
> - **风险控制与回滚方案：** 先测试单路径 301，再全量；回滚 DNS 记录即可。
> - **验证指标：** `www` 返回 301，最终 URL 为 apex，canonical 一致。

> **加厚 `/notes/` 索引页**
> - **目标与原因：** 当前 245 词，是全站唯一 <300 词页面。
> - **影响 URL 范围：** `/notes/`。
> - **具体操作方法：** 增加主题分组、编辑说明、阅读路径；不要为了字数堆砌。
> - **风险控制与回滚方案：** 保留旧版；只改索引，不动笔记正文。
> - **验证指标：** 词数、内链点击、索引状态。

### P3（边缘优化）

> **统一品牌/实体信号**
> - 目标：确保 logo、Organization、About、Contact 使用同一品牌名和同一法律实体口径。
> - 验证：全站品牌字符串、schema 名称、Contact 页面一致性。

---

## 六、未来 7 天优先执行事项

1. **确认并补齐 Organization 的真实身份字段**（或明确保持独立编辑项目，不编造）。
2. **为 10 个最高价值数字页补原始来源**：Saudi、UAE、Jebel Ali、Jeddah、cost-and-transit、air-freight、LCL、FCL、SABER、VAT。
3. **配置 `www → apex` 301**。
4. **加厚 `/notes/` 索引页**（分组 + 阅读路径）。
5. **在 GSC 中提交 `https://freightgcc.com/sitemap-index.xml`**，观察 Crawled/Discovered 状态。

---

## 七、红线警告（现在绝对不能做的三件事）

1. **不要为了“清除薄页”批量删除或批量 noindex `/notes/`、国家页或港口页。** 目前没有 spam 证据，删除会损失已有内容和内链。
2. **不要用 robots.txt `Disallow` 来解决索引或重复主机问题。** 用 301/canonical；robots 阻止抓取会让问题更难诊断。
3. **不要为了 EEAT 编造作者履历、公司地址、注册号或客户案例。** 缺失可以披露，伪造会变成实质信任问题。

---

## 八、需要人工介入/提供更多数据的待办项

- **GSC：** Manual Actions、Crawled/Discovered 统计、索引覆盖率、核心查询变化。当前未提供，无法判断实际收录率或处罚状态。
- **DNS/Cloudflare：** 是否可配置 `www` 301；当前只能从外部观察到 `www` 返回 200。
- **法律实体：** 是否愿意公开 `legalName`、注册地址、注册号、成立年份；如果不公开，需要确定可公开的编辑责任人和审稿流程。
- **内容源文件：** 运价、运输时间、港口吞吐、VAT/SABER 数据的原始文件与截至日期，用于把 Industry Claim 升级为可复核事实。
- **分析数据：** 真实流量、转化、外链和索引请求日志，用于判断“薄页/低价值页”是否真的影响抓取预算。

---

**Audit conclusion:** No confirmed Google Spam Policy violation. The site is structurally clean and content-heavy for its size; the meaningful work is trust attribution, source proximity, and host canonicalization — not emergency spam cleanup.
