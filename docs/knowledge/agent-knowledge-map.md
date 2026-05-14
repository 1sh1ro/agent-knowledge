---
title: Agent 知识全景地图
---

# Agent 知识全景地图

> 更新日期：2026-05-14

这一页用于把 Agent 岗位需要掌握的知识拆成可独立维护的板块。后续新增内容时，优先按这里的目录补充，而不是把所有内容堆到一篇文章里。

## 1. 核心板块

| 板块 | 关键问题 | 建议页面 |
| --- | --- | --- |
| LLM 基础 | 模型为什么能生成、如何推理、上下文如何表示 | Transformer、Attention、Tokenizer、GPT/LLaMA |
| 后训练 | 模型如何从基座模型变成可用助手 | [后训练总览](./post-training/)、[SFT](./post-training/sft.md)、RLHF/DPO/GRPO |
| Agent 架构 | Agent 如何观察、规划、行动和反思 | ReAct、Planning、Memory、Tool Use、Multi-Agent |
| Agent Harness | 如何搭建 Agent 运行、观测、评测和回放框架 | [Agent Harness](./agent-architecture/harness.md) |
| RAG 与知识库 | 如何把外部知识接入模型并降低幻觉 | RAG、向量数据库、重排、Query Rewrite |
| 工具与协议 | Agent 如何安全可靠地调用外部能力 | Function Calling、MCP、A2A、API Gateway、权限控制 |
| 评测体系 | 如何证明 Agent 有用、稳定、可上线 | LLM eval、Agent eval、任务完成率、工具调用准确率 |
| 工程化 | 如何部署、监控、降本、灰度和回滚 | 框架、部署、Tracing、成本优化、限流降级 |
| 安全与合规 | 如何避免越权、泄露、误操作和提示注入 | Sandbox、Human-in-the-loop、权限边界、审计 |
| 面试表达 | 如何把项目讲清楚并应对追问 | 项目复盘、STAR、指标、trade-off、故障案例 |

## 2. 推荐目录结构

```text
docs/knowledge/
├── llm-basics/
│   ├── transformer.md
│   ├── attention.md
│   ├── tokenizer.md
│   └── gpt-llama.md
├── post-training/
│   ├── index.md
│   ├── sft.md
│   └── preference-optimization.md
├── agent-architecture/
│   ├── harness.md
│   ├── reasoning.md
│   ├── planning.md
│   ├── memory.md
│   ├── tools.md
│   └── multi-agent.md
├── engineering/
│   ├── rag.md
│   ├── vector-db.md
│   ├── evals.md
│   ├── frameworks.md
│   └── deployment.md
└── safety/
    ├── prompt-injection.md
    ├── permission.md
    └── human-in-the-loop.md
```

## 3. 学习路径

### 3.1 面试准备路径

1. LLM 基础：Transformer、Attention、Tokenizer、KV Cache。
2. 后训练：SFT、偏好数据、奖励模型、PPO/DPO/GRPO。
3. Agent 主线：ReAct、Planning、Memory、Tool Use。
4. RAG 主线：切分、召回、重排、评测、幻觉控制。
5. Harness 与评测：如何跑任务、记录轨迹、复现失败、比较版本。
6. 工程化：框架选择、部署、成本、稳定性、安全边界。

### 3.2 项目复盘路径

面试中讲 Agent 项目时，建议按下面顺序准备：

1. 场景：用户是谁，任务是什么，为什么普通 LLM 不够。
2. 架构：模型、工具、RAG、记忆、状态机、权限边界。
3. Harness：任务如何执行，轨迹如何保存，失败如何复现。
4. 数据：SFT/RAG/反馈数据从哪里来，如何清洗和标注。
5. 评测：离线 benchmark、线上指标、人工抽检分别怎么做。
6. 优化：准确率、时延、成本、稳定性、安全性的 trade-off。
7. 故障：实际遇到的 bad case、定位过程和最终修复。

## 4. 高频面试问题池

### 后训练

- SFT 数据如何筛选？如何避免脏数据和格式污染？
- SFT、RLHF、DPO、GRPO 的训练目标分别是什么？
- 为什么偏好优化需要 KL 约束或 reference model？
- Reward model 有哪些偏差？如何评估 reward hacking？

### Agent Harness

- 你们的 Agent harness 包含哪些模块？
- 如何记录和回放一次 Agent 执行轨迹？
- 如何判断失败来自模型、工具、检索、Prompt 还是业务规则？
- 如何做版本对比和回归测试？

### RAG 与工具调用

- Chunk size 怎么选？如何处理表格、图片、代码和长文档？
- 向量召回、BM25、重排分别解决什么问题？
- Tool calling 参数错误如何发现和修复？
- 如何防止 Agent 调用危险工具或越权操作？

### 工程上线

- 线上 Agent 如何监控成功率、时延、成本和异常轨迹？
- 如何设计 fallback、限流、灰度、回滚？
- 如何处理提示注入、数据泄露和不可逆操作？
- 如何用 human-in-the-loop 保护高风险动作？

## 5. 内容维护规则

- 每个板块单独建页面，页面内固定包含：概念、核心流程、工程实践、面试问题、常见坑。
- 采集来的面经只提炼问题和经验，不直接复制平台全文。
- 每个外部来源必须保留 `source_url`、平台、发布时间、采集时间和合规状态。
- 低置信度内容放在候选池或资源报告，不直接进入知识库正文。
