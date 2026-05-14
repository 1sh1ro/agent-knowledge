---
title: 高质量面经数据采集与导入方案
---

# 高质量面经数据采集与导入方案

> 调研时间：2026-05-14

本文记录当前仓库内容、适合承载面经数据的位置，以及后续从公开网络采集高质量面试经验并导入本站的推荐方案。

## 1. 当前仓库内容

这个仓库是一个基于 VitePress 的静态知识库，目标是沉淀 Agent/LLM 相关岗位的面试经验、知识点、题库和学习资源。

### 1.1 主要目录

| 路径 | 作用 |
| --- | --- |
| `docs/interviews/` | 面经正文，按公司或来源拆分目录 |
| `docs/knowledge/` | LLM、Agent 架构、工程实践等系统知识点 |
| `docs/qna/` | 算法、系统设计、行为面等面试题和参考答案 |
| `docs/resources/` | 学习资源、搜索报告、原始候选数据 |
| `.github/ISSUE_TEMPLATE/` | 面经、问题、知识库投稿模板 |
| `scripts/sync-issues.js` | 将 GitHub Issues 同步为 Markdown 的脚本 |

截至本次调研，`docs/` 下已有 53 个 Markdown 页面，其中：

- `docs/interviews/`：15 个页面，除索引页外约 10 篇面经正文。
- `docs/knowledge/`：17 个页面，覆盖 LLM 基础、Agent 架构和工程实践。
- `docs/qna/`：14 个页面，覆盖算法、系统设计和行为面。
- `docs/resources/`：已有面经搜索报告、公司面经汇总和一份微信公众号候选文章 JSON。

### 1.2 已有导入能力

仓库已有 GitHub Issue 投稿入口和 `sync-issues.js`，但它目前更像“投稿转 Markdown”，还不是网络采集系统：

- 只处理已关闭且带指定标签的 GitHub Issues。
- 没有统一的数据源 schema、去重逻辑、质量评分和合规状态。
- 不能自动发现、抓取、抽取、清洗外部平台的面经。
- 工作流需要补齐 Node 依赖安装；脚本依赖 `@octokit/rest`，但根目录 `package.json` 尚未声明该依赖。

## 2. 采集目标和边界

目标不是“无差别复制全网内容”，而是建立一个可持续、可审核、可追溯的面经索引和知识库。

推荐采集范围：

- AI Agent、LLM 应用、大模型算法、RAG、Prompt Engineering、AI Coding、Multi-Agent、模型部署等岗位相关内容。
- 有明确公司、岗位、时间、轮次、问题、结果或面试感受的真实面经。
- 有公开 URL、作者/平台信息、发布时间和可验证来源的数据。

不推荐直接入库的内容：

- 没有来源链接或疑似搬运的文章。
- 付费、登录后可见、禁止转载、明确禁止抓取或版权状态不清的全文内容。
- 含个人隐私、候选人联系方式、公司机密、内部题库、保密面试材料的内容。
- 纯标题党、培训广告、重复聚合、无具体问题的低质量文章。

## 3. 数据源优先级

| 优先级 | 类型 | 示例 | 建议处理方式 |
| --- | --- | --- | --- |
| P0 | 自有投稿 | GitHub Issues、PR、社区表单 | 可转为全文面经，保留投稿授权 |
| P1 | 开源授权内容 | 明确许可证的 GitHub 仓库、博客 | 按许可证转载或摘要，保留 attribution |
| P1 | 公开索引页 | 牛客话题页、公开帖子列表、搜索结果页 | 优先采集元数据、摘要、链接和标签 |
| P2 | 内容平台文章 | 微信公众号、知乎、掘金、CSDN 等 | 默认只保存元数据和短摘要；全文需授权 |
| P3 | 社区讨论 | Reddit、LeetCode Discuss、论坛帖 | 只收录与 Agent/LLM 面试强相关的精选内容 |

示例候选源：

- 牛客网公开面经和“大模型”话题页，近期已有 Agent、RAG、工具调用、向量检索等面试内容。
- GitHub 上的 Agent/LLM 面试学习项目，可作为资源链接或二次整理参考，但需要先确认许可证。
- Reddit、LeetCode Discuss 等英文社区，可补充海外公司 AI/ML/Agent 面试趋势。

## 4. 推荐数据模型

建议先增加一个结构化候选数据层，再由脚本生成 Markdown 页面。

候选记录可以放在 `data/interview-sources.jsonl`：

```json
{
  "id": "nowcoder-878600528970735616",
  "title": "大模型、Agent面经总结",
  "source_platform": "nowcoder",
  "source_url": "https://www.nowcoder.com/discuss/878600528970735616",
  "author": "unknown",
  "published_at": "2026-04-28",
  "crawled_at": "2026-05-14T00:00:00Z",
  "company": ["腾讯", "百度"],
  "position": ["大模型实习生", "Agent开发"],
  "topics": ["Agent", "RAG", "工具调用", "向量检索"],
  "rounds": ["一面"],
  "quality_score": 82,
  "license_status": "metadata_only",
  "content_status": "needs_review",
  "summary": "面试重点围绕 Python 基础、Agent/工具调用、检索与向量匹配，以及结合实习项目进行深入追问。"
}
```

生成的 Markdown 页面建议放在 `docs/interviews/imported/` 或按公司归档到 `docs/interviews/<company>/`，并保留完整 frontmatter：

```markdown
---
title: 腾讯 / 百度 Agent 面经总结
company: [腾讯, 百度]
position: [大模型实习生, Agent开发]
date: 2026-04
source_platform: nowcoder
source_url: https://www.nowcoder.com/discuss/878600528970735616
license_status: metadata_only
quality_score: 82
tags: [Agent, RAG, 工具调用, 向量检索]
---
```

## 5. 质量评分规则

建议用 100 分制自动打分，低于 60 分只进入候选池，不直接生成站点页面。

| 维度 | 分值 | 说明 |
| --- | --- | --- |
| 相关性 | 25 | 是否明确涉及 Agent/LLM/RAG/AI 工程岗位 |
| 信息完整度 | 25 | 是否包含公司、岗位、时间、轮次、问题、结果 |
| 真实性线索 | 20 | 是否有具体追问、项目细节、现场流程和个人复盘 |
| 时效性 | 10 | 最近 12 个月内容优先 |
| 原创/授权状态 | 10 | 自有投稿、明确授权或开源许可证优先 |
| 去重后价值 | 10 | 与已有内容相比是否提供新公司、新岗位、新问题 |

## 6. 推荐采集流程

### 6.1 发现

使用关键词组合定期搜索和抓取列表页：

- 中文关键词：`Agent 面经`、`大模型 面经`、`LLM 面试`、`RAG 面试`、`AI应用开发 面经`、`Agent开发 实习 面经`
- 公司关键词：`字节 大模型 面经`、`阿里 Agent 面经`、`腾讯 RAG 面经`、`美团 AI应用 面经`
- 英文关键词：`AI agent interview experience`、`LLM engineer interview experience`、`RAG interview questions`

### 6.2 合规检查

每个 connector 必须先记录：

- robots.txt 是否允许抓取。
- 平台服务条款是否限制自动抓取、转载或训练使用。
- 是否需要登录、付费、绕过验证码或模拟用户行为。
- 是否允许保存全文；不明确时只保存元数据、短摘要和原始链接。

### 6.3 抓取与抽取

推荐先实现轻量 Node.js CLI：

```bash
npm run crawl:interviews -- --source nowcoder --limit 100
npm run import:interviews -- --min-score 70 --status reviewed
```

抽取字段：

- 标题、URL、平台、作者、发布时间、抓取时间。
- 公司、岗位、轮次、结果、技术关键词。
- 问题列表、项目深挖点、算法题、系统设计题、行为面问题。
- 原文摘要、质量评分、去重指纹、合规状态。

### 6.4 去重

至少做三层去重：

- URL canonical 去重。
- 标题 + 公司 + 岗位 + 时间归一化去重。
- 正文或问题列表的 SimHash/MinHash 相似度去重。

### 6.5 人工审核

自动采集后不要直接发布全文。建议状态流转为：

`candidate -> extracted -> scored -> needs_review -> approved -> published`

人工审核重点：

- 来源是否可靠。
- 是否存在版权和转载风险。
- 是否包含隐私或保密信息。
- 摘要是否忠实，不夸大、不编造。
- 标签、公司、岗位是否准确。

## 7. 仓库改造建议

### 7.1 第一阶段：补齐数据底座

1. 增加 `data/interview-sources.jsonl` 存候选源。
2. 增加 `data/schema/interview-source.schema.json` 约束字段。
3. 增加 `scripts/import-interviews.js`，将审核通过的 JSONL 记录生成 Markdown。
4. 增加 `docs/interviews/imported/index.md`，展示自动导入内容。

### 7.2 第二阶段：修复和扩展现有自动化

1. 在根目录 `package.json` 声明 `@octokit/rest` 依赖。
2. 在 `.github/workflows/sync-issues.yml` 中增加 `npm ci`。
3. 修复 `scripts/sync-issues.js` 的 slug 生成逻辑，支持中文标题。
4. 将 Issue 投稿导入同样接入结构化 schema 和审核流。

### 7.3 第三阶段：增加数据源 connector

优先顺序：

1. `github`：只处理明确许可证的公开仓库和 Markdown 内容。
2. `nowcoder`：优先采集公开索引和元数据，全文发布需确认授权。
3. `search`：通过搜索 API 发现候选链接，不直接抓取全文。
4. `manual`：支持维护者手工补充高价值链接和摘要。

### 7.4 第四阶段：提升站内检索和索引

1. 自动生成公司、岗位、主题、时间维度索引。
2. 给面经页增加标准 frontmatter，便于过滤和统计。
3. 为低置信度内容增加“待核验”标识。
4. 保留每条内容的 `source_url` 和 `crawled_at`，方便追溯。

## 8. 推荐落地顺序

1. 先把现有 `wechat-interview-articles-raw.json` 转成候选源 JSONL，并补充 `source_url`、`license_status`、`quality_score`。
2. 修复 GitHub Issue 同步工作流，让自有投稿能稳定进入仓库。
3. 实现导入脚本，只发布 `approved` 且 `license_status` 安全的内容。
4. 增加 1 个低风险 connector，例如 GitHub/手工链接导入。
5. 再评估牛客、微信公众号、知乎等平台的合规边界，必要时只做索引和摘要。

## 9. 关键结论

这个仓库已经适合承载面经知识库，但目前缺少“可审核的数据采集层”。下一步不应该直接大规模抓全文，而应该先建立结构化数据、质量评分、去重和合规审核流程。这样后续无论是自有投稿、公开博客、GitHub 资料，还是牛客/公众号等平台候选内容，都能以可追溯、可回滚、可持续维护的方式加载进来。
