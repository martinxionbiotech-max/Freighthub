# Middle East Replication & Upgrade Plan

> 版本：2026-11-04
> 范围：worldfreighthub.net 的中东部分（China → GCC）
> 目标：复刻一套只服务 GCC 贸易的独立站点，不做计算器，保留即时更新，重建信息密度与原创性，并为后续区域（美洲、亚洲等）提供可复制模板。

---

## 1. 边界与前提

### 1.1 保留
- 6 个 GCC 国家：沙特、阿联酋、卡塔尔、科威特、阿曼、巴林
- 中国出口口岸：上海、宁波、深圳、广州、青岛、天津、厦门
- 海运 / 空运 / FCL / LCL / DDP / 清关 / 认证 / 品类 / 港口 / 国家对比
- **即时更新板块**：首页 ticker + 独立 `/updates/` 情报流 + 每条更新的“影响—动作”解读
- 英阿双语（阿语为第二阶段，优先商业页）

### 1.2 去掉
- 非 GCC 内容：旧站其他区域页面全部不迁移
- `/tools/**` 全部计算器（CBM、体积重、装载、运费计算、决策引擎）
- `/freight-rates/**` 交互式计算/报价页
- **不做 Directory**（不保留、不新建货代目录）
- **费率只做“区间信息”**：所有价格只给区间 + 驱动因素，不提供输入框、计算器、自动报价

### 1.3 关于“不考虑真实性”的执行口径
按你的要求：**不逐条核查、不等证据齐全、以行业判断和观点优先**。
但建议保留一个轻量分层：`已报道 / 行业说法 / 编辑判断`。
原因不是道德，而是策略：Google 这轮降权主要打“规模化低价值内容”，完全不区分事实与观点的站点更容易被二次判定。轻量标签不影响写作速度，但能保住可信度与广告主信任。

---

## 2. 现状诊断：为什么会被降权

结合现有 73 个中东页与审计文档，问题不是“页数少”，而是：

1. **模板重复**：成本+时效页 H2 结构 Jaccard 0.60；多国页面共享同一套叙述骨架。
2. **信息增量低**：4000–5400 词里，大量是通用解释、定义、重复的“为什么重要”，缺少只有该港口/该国家才有的细节。
3. **页面意图重叠**：国家 guide、FCL/LCL、海运费、成本+时效、时效页互相覆盖，形成站内竞争。
4. **规模化痕迹**：同一模板 × 多国 × 多品类，容易被识别为“程序化内容”。
5. **缺少作者与判断**：没有明确的编辑立场、决策建议、失败案例；读者拿不到“所以到底该怎么做”。
6. **非 GCC 页面/工具页稀释主题**：站点主题从“中国→GCC”扩散到其他区域与计算器，topical authority 被切碎。

**结论**：复刻不是把 73 页搬过去，而是 **“减页 + 加深 + 加观点 + 加强更新”**。

---

## 3. 复刻策略：新站，而不是原地改

建议新建独立项目/子域：

- 新项目：`worldfreighthub-me`（或 `middleeast.worldfreighthub.net`）
- 保留品牌与设计语言（navy/amber），但导航、URL、内容模型全部按中东重构
- 旧站非 GCC 页面不迁移；旧 GCC 页做 301 → 新结构对应页
- 新站先做英文，阿语第二阶段镜像核心商业页

这样做的原因：
1. 旧站已被降权，原地改要背历史包袱；
2. 新站可以用干净的 sitemap、canonical、内链结构重新开始；
3. 结构一旦跑通，后续美洲、亚洲等区域直接复制项目骨架，只换 region config 与内容。

---

## 4. 优化后的站点结构

### 4.1 一级导航（6 项）
`Home · Countries · Ports · Guides · Updates · About`

### 4.2 URL 地图

```
/                                  GCC 贸易情报首页
/updates/                          即时更新索引（按日期倒序）
/updates/{slug}/                   单条更新（300–600 词）

/countries/                        国家总览
/countries/saudi-arabia/           沙特 hub
/countries/uae/                    阿联酋 hub
/countries/qatar/                  卡塔尔 hub
/countries/kuwait/                 科威特 hub
/countries/oman/                   阿曼 hub
/countries/bahrain/                巴林 hub

/ports/                            港口总览
/ports/jeddah/                     吉达伊斯兰港
/ports/dammam/                     阿卜杜勒阿齐兹国王港
/ports/riyadh-dry-port/            利雅得旱港
/ports/jebel-ali/                  杰贝阿里
/ports/khalifa/                    哈利法港
/ports/sharjah/                    沙迦港群
/ports/hamad/                      哈马德港
/ports/shuwaikh/                   舒韦赫
/ports/shuaiba/                    舒艾巴
/ports/sohar/                      苏哈尔
/ports/salalah/                    塞拉莱
/ports/khalifa-bin-salman/         哈利法·本·萨勒曼

/guides/                           方法/路线总览
/guides/china-to-saudi-arabia/     国别路线 pillar
/guides/china-to-uae/
/guides/china-to-qatar/
/guides/china-to-kuwait/
/guides/china-to-oman/
/guides/china-to-bahrain/
/guides/fcl/                       FCL 方法
/guides/lcl/                       LCL 方法
/guides/air-freight/               空运方法
/guides/ddp/                       DDP 方法
/guides/customs-clearance/         清关方法
/guides/certification/             认证方法（SASO/SABER、ESMA 等）

/sectors/                          品类总览
/sectors/electronics/
/sectors/batteries/
/sectors/chemicals/
/sectors/food/
/sectors/furniture/
/sectors/machinery/
/sectors/ecommerce/                Amazon FBA UAE / noon

/compare/                          决策对比总览
/compare/jebel-ali-vs-direct/
/compare/jeddah-vs-dammam/
/compare/sea-vs-air/
/compare/fcl-vs-lcl/
/compare/ddp-vs-self-clearance/
/compare/uae-vs-saudi/

/notes/                            原创分析/观点
/notes/{slug}/

/about/
/methodology/
/corrections/
```

### 4.3 页面数量目标
- 6 国家 hub
- 10–12 港口页
- 12 方法/路线 pillar
- 6–7 品类页
- 6 对比页
- 8–12 条更新（常驻，持续追加）
- 4–6 篇 notes
- 4 个信任页
**总计约 48–55 页**，比现有 73 页少 25%，但每页信息密度更高。

### 4.4 旧 URL → 新 URL 映射原则
- 国家 guide → `/countries/{country}/`
- 港口页 → `/ports/{port}/`
- FCL/LCL/空运/DDP → `/guides/{method}/` 或国家 hub 的对应章节
- 成本+时效页（4 个高重叠）→ 合并进国家 hub 的 “Cost & transit” 章节，旧 URL 301
- 海关/关税页 → 国家 hub 的 “Customs & duty” 章节 + `/guides/customs-clearance/`
- 品类页 → `/sectors/{sector}/`
- 对比页 → `/compare/{pair}/`
- 中国港口对比页 → 降级为一篇 `/notes/china-port-choice/` 或删除
- 非 GCC / 工具 / 费率计算 → 不迁移；旧 URL 410 或 301 到 `/`

---

## 5. 页面模板：信息密度标准

每个页面必须包含以下 10 个模块（可按类型删减，但不能只剩通用解释）：

1. **Direct answer**：40–60 词，直接回答“多少钱/多久/怎么走/要注意什么”。
2. **Key facts**：6–8 行表格，含数字、日期、港口、文件、税率。
3. **What changed**：最近 60 天的变化（接 `/updates/`）。
4. **Why it matters**：对成本、时效、清关、现金流的具体影响。
5. **How to act**：3–5 步操作清单，含“先问货代哪三个问题”。
6. **Cost & transit drivers**：只给区间与驱动因素，不做计算器；说明“报价为什么差这么多”。
7. **Local detail**：该港口/该国的独有细节（拥堵、自由区、旱港、文件、宗教/节假日、支付习惯）。
8. **Risk & compliance**：失败模式、罚款、退运、认证缺口。
9. **Our read**：编辑判断（推荐/不推荐、什么货适合、什么货别走）。
10. **Sources & update log**：来源列表 + 最后复核日期 + 修订记录。

**硬性标准**
- 2,500–4,000 词/页（港口页可 1,800–2,500）
- 10–15 个 H2，H2 必须是问题或决策点，不是“Introduction/Overview”
- 每页至少 8 个“只有这一页才有”的数据点或判断
- 15+ 条内链：2 个上级 hub、3 个同级、5 个相关港口/国家、3 个方法页、2 个更新
- 句间重叠 <5%，段落重复 0
- 每页 1 个作者署名 + 1 个“last reviewed”

---

## 6. 内容扩展矩阵（6 国 × 主题）

| 国家 | 必做主题 |
|---|---|
| 沙特 | Jeddah/Dammam/Riyadh Dry Port、SABER/SASO、15% VAT、红海 vs 海湾双风险、农业关税、宗教季 |
| 阿联酋 | Jebel Ali/Khalifa/Sharjah、5% VAT、自由区转口、Khor Fakkan 陆桥、FBA/noon |
| 卡塔尔 | Hamad、0% VAT 窗口、e-invoicing、LCL 地板价、小市场溢价 |
| 科威特 | Shuwaikh/Shuaiba、0% VAT、小市场、清关代理依赖 |
| 阿曼 | Sohar/Salalah、5% VAT、自由区、Muscat vs Sohar、陆运接 UAE |
| 巴林 | Khalifa bin Salman、10% VAT、沙特陆桥、数据最薄需标注 |

每个国家固定 5 个页面：国家 hub、主港口、次港口/旱港、路线 pillar、合规/成本章节。
这样 6 国 × 5 = 30 页，加上方法/品类/对比/更新/信任页，正好 50 页左右。

---

## 7. 中文互联网研究方法与原创流水线

### 7.1 检索入口
- 货代公司中文博客：Basenton、Tonlexing、运去哪、搜航网、锦程物流
- 外贸社区：福步论坛、知乎、小红书、微信公众号（外贸/货代/中东市场）
- 官方：中国海关总署、商务部、船公司公告、港口官网
- 中东本地：Arab News、Gulf News、Zawya、海关/港务局官网

### 7.2 每页研究流程
1. 用 8–12 个中文 query 抓碎片：`中国到沙特 海运 双清 费用`、`杰贝阿里 清关 几天`、`SABER 认证 流程`…
2. 把碎片分成 5 类：价格、时效、清关、文件、坑。
3. 建“claim 表”：每条 = 说法 + 来源 + 日期 + 类型（报道/行业说法/判断）。
4. 找矛盾点：不同来源哪里不一致？为什么？这就是原创分析的入口。
5. 用第一性原理写：成本由什么驱动、时效被谁卡住、什么货不适合。
6. 加入“我们会怎么建议”：给场景，不给万能答案。

### 7.3 原创性手法
- 决策矩阵：货值 × 时效 × 品类 → 走法
- 失败案例：清关被卡、认证缺失、VAT 误算、港口拥堵
- “报价拆解”：海运费/THC/文件/清关/派送/仓储，各占多少
- “三个问题”清单：问货代什么能立刻识别专业度
- 反常识判断：例如“某些货走 DDP 反而更贵”“Jebel Ali 不一定比直航快”

### 7.4 反模板化
- 每个国家 hub 的 H2 顺序不同（按该国痛点排序）
- 港口页以“拥堵/清关/陆运”三轴组织，而不是统一 12 段
- 对比页必须有明确“结论先行”，不能两边都说好
- 禁止整段复用；同一事实在不同页用不同角度解释

---

## 8. 即时更新板块设计

### 8.1 首页
- 顶部 ticker：最近 8 条更新，格式 `国家 · 变化 · 影响`
- “This week in GCC freight”：3 条编辑精选
- 每条更新链接到 `/updates/{slug}/`

### 8.2 `/updates/` 索引
- 按日期倒序；标签：`Red Sea`、`Customs`、`VAT`、`Port`、`Rate`、`Regulation`
- 每条含：日期、国家、影响路线、一句话结论
- 过滤：国家 / 主题 / 月份

### 8.3 单条更新模板（300–600 词）
1. What changed
2. Why it matters（成本/时效/合规）
3. Who is affected（国家/港口/品类）
4. What to do（3 步）
5. Our read（一句判断）
6. Sources（2–5 条）

### 8.4 更新节奏
- 每周 2–4 条；重大事件（红海、关税、港口罢工）当天加更
- 每条必须有真实日期；不要伪造“刚刚更新”
- 常青页显示 `Last reviewed: YYYY-MM-DD`，与更新流互链

---

## 9. SEO / AIO / EEAT 恢复方案

### 9.1 先减后加
- 删除/301 非 GCC、工具、费率计算
- 合并 4 个成本+时效页、3 个时效页、重复国家章节
- 保留页先做到“每页有独有信息”，再谈扩量

### 9.2 站内结构
- Hub-spoke：Home → Countries/Ports/Guides → 详情页
- 每个详情页 15+ 内链；每个 hub 链全部子页
- 面包屑 + BreadcrumbList
- 相关阅读按“决策路径”而不是“最新文章”

### 9.3 Schema
- Organization + WebSite（全站）
- BreadcrumbList（所有内页）
- Article / NewsArticle（更新与 notes）
- FAQPage（仅真实问答，不硬凑）
- DefinedTerm（术语）
- Dataset（如保留数据页）

### 9.4 AIO
- `llms.txt`：核心页 + 全部国家/港口/方法/更新
- Markdown negotiation：`Accept: text/markdown` 返回全文 + frontmatter
- 每页 answer-first，前 100 词给结论
- `last reviewed`、来源、作者三件套

### 9.5 EEAT
- `/about/`：谁在写、做过什么、服务过哪些市场
- `/methodology/`：怎么研究、怎么判断、哪些不确定
- `/corrections/`：修订记录（哪怕只有几条）
- 作者署名与简介；不要匿名“团队”

### 9.6 技术
- Astro static + Cloudflare Pages
- 每页 canonical、hreflang en/ar、OG、Twitter
- sitemap 按 countries/ports/guides/sectors/compare/updates/notes 分块
- Core Web Vitals：无大图、无阻塞脚本、字体子集化

---

## 10. 技术架构：区域可复制

### 10.1 目录
```
src/
  regions/
    gcc.ts                 # 国家、港口、路线、来源、语言
    europe.ts              # 以后复制
    americas.ts
    asia.ts
  content/
    countries/{slug}.md
    ports/{slug}.md
    guides/{slug}.md
    sectors/{slug}.md
    compare/{slug}.md
    updates/{slug}.md
    notes/{slug}.md
  templates/
    CountryHub.astro
    PortProfile.astro
    GuidePillar.astro
    SectorGuide.astro
    Comparison.astro
    UpdatePost.astro
    Note.astro
  components/              # 复用现有 DataTable/FAQ/SourceList/Breadcrumb/CTA
  pages/
    [region]/...           # 或按 region 生成静态路径
```

### 10.2 Region config
每个区域只提供：
- countries[]（名称、ISO、VAT、关税、主要港口、文件）
- ports[]（港口、国家、终端、拥堵、 free time、腹地）
- lanes[]（起运港、目的港、模式、时效区间、成本区间、风险）
- sources[]（官方/行业/中文来源）
- updateFeed（RSS/JSON 地址）

模板与组件完全共享；新区域上线 = 新 config + 新内容，不改代码。

### 10.3 构建校验
- 必填字段缺失 → build fail
- 内链目标不存在 → build fail
- 标题/描述超长 → warning
- 重复 title/description → fail
- 每页 word count / H2 / 内链数 → 报告

---

## 11. 迁移与 301

1. 导出旧站所有中东 URL（73 条）。
2. 建立映射表：old → new（或 410）。
3. 新站先上线，旧站保留 30 天。
4. Cloudflare `_redirects` 逐条 301；不要用通配符把无关页全部导到首页。
5. 旧 sitemap 提交后，新 sitemap 重新提交；GSC 监控 404/301。
6. 旧站非 GCC 页 → 410（不迁移）；工具页 → 410 或 301 到对应 guide。

---

## 12. 区域复制手册（后续区域）

复制顺序建议：
1. GCC（本计划）
2. Americas（China → US/MX/BR，重点：de minimis、ISF、关税）
3. Asia（China → SEA/Japan/Korea，重点：RCEP、AEO、港口）

每个区域固定 5 步：
1. 写 region config（国家/港口/路线/来源）
2. 做 6 个国家 hub + 10 个港口页
3. 做 6 个方法 guide + 6 个品类页
4. 做 6 个对比页 + 4 篇 notes
5. 接更新流 + 信任页 + schema/sitemap/301

---

## 13. 21 天冲刺路线图

> 原则：并行推进，页面按“模板 + 数据 + 观点”批处理；不追求一次完美，先上线再迭代。

**Day 1–3：结构与骨架**
- 旧 GCC URL 盘点 + 301 映射表
- 新项目骨架、region config、内容模型、设计系统
- 删除非 GCC / 工具 / 费率计算的决定落地

**Day 4–9：国家 hub + 港口（16 页）**
- 6 个国家 hub（沙特、阿联酋优先，3,000–4,000 词/篇）
- 10 个港口页（1,800–2,500 词/篇）
- 首页 + Countries/Ports hub

**Day 10–14：方法 + 品类 + 对比（18 页）**
- 6 个方法 guide（FCL/LCL/air/DDP/customs/certification）
- 6 个品类页（电子/电池/化工/食品/家具/机械）
- 6 个对比页（Jebel Ali vs direct、Jeddah vs Dammam、sea vs air、FCL vs LCL、DDP vs self-clearance、UAE vs Saudi）

**Day 15–17：更新 + 观点 + 信任页**
- 6–8 条 `/updates/` 首发（真实日期）
- 4 篇 notes（红海、Jebel Ali、Saudi 认证、VAT 窗口）
- About / Methodology / Corrections

**Day 18–19：去模板化与内链**
- 逐页信息密度检查；合并重复 H2
- 15+ 内链/页；0 orphan；schema；llms.txt；markdown
- 标题/描述/OG 统一

**Day 20–21：上线**
- 301、sitemap、GSC、robots
- 核心页 final QA；旧站保留观察
- 上线后第 22–30 天只做监控与小修，不再加新页

---

## 14. 验收指标

**内容**
- 48–55 页，全部有独有数据/判断
- 80% 页面 ≥2,500 词；港口页 ≥1,800
- 句间重叠 <5%；模板 H2 重叠 <40%
- 每页 15+ 内链；0 orphan
- 每页 1 个作者 + 1 个 last reviewed + 5+ 来源

**更新**
- 每周 2–4 条；每条 300–600 词
- 首页 ticker 与 `/updates/` 同步
- 常青页每 60 天复核一次

**SEO/AIO**
- 100% canonical/hreflang/OG
- 100% BreadcrumbList；Article/FAQ 按需
- sitemap 分块、llms.txt 全量、md negotiation
- GSC：上线后 60 天内 indexed ≥90%，展现与点击止跌回升

**技术**
- Build 0 error；LCP <2.5s；CLS <0.1
- 301 全量覆盖；无软 404

---

## 15. 风险与取舍

1. **“不考虑真实性”会放大算法风险**：建议至少保留“来源 + 判断类型”，否则二次降权概率高。
2. **更新频率是双刃剑**：低质量日更不如高质量周更；每条更新必须有实质变化。
3. **阿语是中东流量入口**：建议第二阶段做 6 国 hub + 10 港口 + 6 方法的阿语镜像，不要全站机翻。
4. **删页会短期掉流量**：301 + 合并 + 新内容补位，接受 4–8 周波动。
5. **区域复制不要复制内容**：只复制结构、组件、数据模型；每个区域重新做研究。

---

## 16. 已确认的执行口径与下一步

已确认：
- 不做非 GCC 内容
- 不做 Directory
- 费率只做区间信息，不做计算器
- 时间表压缩为 **21 天冲刺 + 9 天缓冲**

下一步（按顺序）：
1. 输出旧 73 页 → 新 URL 的逐条映射 + 301 表
2. 搭新项目骨架（region config + content collections + 模板）
3. 先写沙特 + 阿联酋两个 hub 的详细大纲，再并行其余四国
4. 第 4 天开始批量生产，按 21 天计划推进
