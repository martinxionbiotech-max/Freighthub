# WorldFreightHub ME — 夜间工作时间表（00:00–07:30）

> 适用：21 天冲刺期
> 时区：默认 **Asia/Shanghai（UTC+8）**；若按 UTC 执行，整体前移 8 小时（16:00–23:30）
> 原则：一晚一个主线，最多 3 个新页；先研究后写作；每天 06:10 前必须构建通过；不把未验证的东西直接发布。

---

## 1. 每夜固定节奏（7.5 小时）

| 时间 | 时长 | 动作 | 产出/检查点 |
|---|---|---|---|
| 00:00–00:10 | 10m | 启动：读队列、`git fetch`、看昨日报告 | 今晚 3 个交付物写清楚 |
| 00:10–02:10 | 120m | 深工 1：中文资料检索 + claim 表 + 大纲/初稿 | 1 个 hub 或 2 个短页大纲 |
| 02:10–02:20 | 10m | 检查点 1 | 10–15 个 H2、8 个独有数据点、5 个来源 |
| 02:20–04:20 | 120m | 深工 2：正文写作（2 页） | 每页 2,500+ 词、15+ 内链 |
| 04:20–04:30 | 10m | 检查点 2 | 字数、句间重叠、重复段落 |
| 04:30–06:10 | 100m | 深工 3：最后 1 页 + 内链/schema/表格 | 3 页齐 + 互链 |
| 06:10–06:40 | 30m | 构建与验证：`npm run build`、链接检查、md/llms | 0 error；0 orphan |
| 06:40–07:00 | 20m | 提交/部署：commit、push、线上 smoke test | commit hash + live 状态 |
| 07:00–07:20 | 20m | 写日报：完成/未完成/阻塞/今晚队列 | 一页交接 |
| 07:20–07:30 | 10m | 缓冲：修 last-mile 或准备明晚素材 | 不启动新任务 |

**每夜有效写作时间：约 5 小时 40 分；管理/验证约 1 小时 50 分。**

---

## 2. 每晚产出标准

- **国家 hub 夜**：1 篇（3,000–4,000 词）+ 1 个港口页（1,800–2,500 词）
- **普通夜**：3 页（方法/品类/对比，2,500–3,500 词）
- **更新夜**：4–6 条 `/updates/` + 1 篇 notes
- **QA 夜**：不加新页；10–15 页内链/schema/去模板化
- **上线夜**：只做 301、sitemap、GSC、smoke test，不写新内容

**上限**：一晚不超过 3 个新页。宁可少写，不写模板页。

---

## 3. 21 夜任务日历

### 第 1 周：结构 + 国家 hub + 港口

| 夜 | 主任务 | 交付 |
|---|---|---|
| N1 | 旧 URL 盘点、301 映射 v1、region config 骨架 | `url-map.csv` + `_redirects` 草案 |
| N2 | 内容模型、模板骨架、首页 wireframe | `templates/` + `content/` schema |
| N3 | 设计系统、Home/Countries/Ports hub 骨架 | 3 个 hub 可构建 |
| N4 | 沙特 hub 初稿 + 阿联酋 hub 大纲 | 沙特 3,500 词 |
| N5 | 阿联酋 hub 初稿 + Jeddah 港口页 | 2 页 |
| N6 | Dammam + Riyadh Dry Port + Jebel Ali | 3 页 |
| N7 | Khalifa + Sharjah + Hamad | 3 页 |

### 第 2 周：港口收尾 + 方法 + 品类 + 对比

| 夜 | 主任务 | 交付 |
|---|---|---|
| N8 | Shuwaikh + Shuaiba + Sohar | 3 页 |
| N9 | Salalah + Khalifa bin Salman + 6 国 hub QA | 2 页 + QA |
| N10 | FCL + LCL + Air | 3 页 |
| N11 | DDP + Customs + Certification | 3 页 |
| N12 | Electronics + Batteries + Chemicals | 3 页 |
| N13 | Food + Furniture + Machinery | 3 页 |
| N14 | 6 个对比页（3+3） | 6 页（短页 1,800–2,200 词） |

### 第 3 周：更新 + 观点 + QA + 上线

| 夜 | 主任务 | 交付 |
|---|---|---|
| N15 | Updates 1–4 + Notes 1–2 | 6 条 |
| N16 | Updates 5–8 + Notes 3–4 | 6 条 |
| N17 | About / Methodology / Corrections + 信任页 QA | 3 页 |
| N18 | 去模板化：10 页 H2 重构 + 内链 | 10 页 |
| N19 | schema / llms.txt / markdown / 标题描述 | 全站 |
| N20 | 301 / sitemap / GSC / robots / 上线预检 | 上线包 |
| N21 | 上线 + smoke test + 首日报告 | 正式发布 |

> 第 22–30 天只做监控、GSC 修错、内容小修；不再加新页。

---

## 4. 三个质量闸门

**02:10 闸门（研究）**
- 大纲 10–15 个 H2
- 8 个“只有这一页才有”的数据点
- 5 个来源（中文/官方/本地媒体）
- claim 表：说法 / 来源 / 日期 / 类型

**04:20 闸门（初稿）**
- 2,500+ 词（港口 1,800+）
- 15+ 内链
- 句间重叠 <5%
- 没有整段复用旧页

**06:10 闸门（构建）**
- `npm run build` 通过
- 0 broken link / 0 orphan
- title ≤60、description ≤160
- canonical / schema / hreflang 齐全

---

## 5. 夜间禁止事项

1. 不一次发布超过 3 个新页
2. 不删除旧页而不做 301
3. 不在构建失败时 push
4. 不伪造“last updated”日期
5. 不把计算结果写成精确报价（只给区间 + 驱动因素）
6. 不把同一段模板复制到 3 个以上页面

---

## 6. 日报模板（07:00 发送）

```
【WorldFreightHub ME · 夜间报告】
日期：
完成：
- 页面/文件：
- commit：
- 构建：pass/fail
- 线上 smoke：pass/fail
未完成/阻塞：
- 原因：
- 需要你决定：
明晚队列：
- 
质量指标：
- 新页字数：
- 内链：
- 句间重叠：
```

---

## 7. 自动化建议

- 00:00 启动：cron / heartbeat 触发“夜间任务”
- 07:00 生成日报：从 git log + build log + 页面统计自动汇总
- 07:30 停止写入，只保留监控
- 周日晚 07:00 做一次周复盘：删低质页、合并重复、调整下周队列

> 如需我把它落成 cron，请确认时区（Asia/Shanghai 或 UTC）与是否允许夜间自动 push。

---

## 8. 搜索替代（Tavily 停用后）

已验证 **Firecrawl CLI 可用**，作为 Tavily / web_search 的替代：

```bash
source ~/.bashrc
firecrawl search "中国到沙特 海运 双清 费用" --limit 8
firecrawl scrape "https://example.com/article"
```

- 版本：`firecrawl 1.23.3`
- `firecrawl --status` 显示 “Not authenticated”，但 `firecrawl search` 实测能返回结果与正文；如后续失效，改用：
  1. `web_fetch` 直接抓官网/港口/海关页面
  2. Google News RSS：`https://news.google.com/rss/search?q=...`
  3. 船公司/港口/海关官网直连

## 9. 已配置的自动化

- **夜间工作**：每天 **00:00（Asia/Shanghai）** 启动，目标在 07:30 前完成一批页面并 commit/push
  - 任务：方法页 FCL / LCL / Air（后续顺延 customs / certification / DDP）
  - 每页 2,500–3,500 词；Firecrawl 检索；build + 断链检查；auto-push
- **每日汇报**：每天 **10:00（Asia/Shanghai）**
  - 内容：最近 commit、构建、页面/内容进度、阻塞、下一步
  - 已运行成功；下一次按日触发

> 夜间任务与 10:00 汇报使用独立的 isolated 会话，报告通过 QQ 私聊回传。
