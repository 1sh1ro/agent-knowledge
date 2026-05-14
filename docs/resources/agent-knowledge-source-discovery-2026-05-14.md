---
title: Agent 知识与面经来源发现报告
---

# Agent 知识与面经来源发现报告

> 更新时间：2026-05-14

本报告面向“整理所有 Agent 相关知识，包括 Harness、后训练、SFT 等，并寻找小红书或其他平台总结/面经”的需求，记录当前可用公开来源、可提炼主题和采集注意事项。

## 1. 搜索结论

### 1.1 小红书相关信号

公开搜索能找到的小红书相关内容主要是岗位 JD、技术大会预告和少量招聘/团队介绍。直接的小红书 App 笔记内容不适合自动抓全文：平台内容经常需要登录、反爬和版权审核，建议只做人工检索、手工摘录问题点，并保留原链接。

| 来源 | 价值 | 可提炼主题 |
| --- | --- | --- |
| [小红书 AI Agent 研发工程师-引擎架构 JD](https://jobs.niuqizp.com/job-vkr5LLLaZ.html) | 明确提到 Multi-Agent、Harness 架构、工具系统粒度、错误反馈、LangGraph/LangChain | Agent Harness、工程架构、工具调用、错误恢复 |
| [小红书 Posttrain 算法工程师-RLHF JD](https://jobs.niuqizp.com/job-vyY5LL5zM.html) | 强调多模态大模型 RLHF、Reward Hacking、RL scaling、Multi-Agent、Scalable Oversight、工具使用和安全 | 后训练、RLHF、奖励模型、安全对齐、工具使用 |
| [小红书 REDstar 多模态通用基础大模型算法方向](https://www.mianshima.com/job/15/13128) | 提到 Post-Training Pipeline、SFT、RM、RLHF/RLAIF/RLVF、安全评估、工具使用、长期记忆 | SFT、RM、RLHF/RLAIF、长期记忆、自动化评测 |
| [小红书大模型团队多模态招聘帖](https://zhuanlan.zhihu.com/p/1895070329359029233) | 提到 Pretrain、SFT、RLHF、PostTrain、Synthetic Data、Multimodal RL、GenRM | 多模态后训练、合成数据、GenRM |
| [InfoQ：小红书 AgentOps 工程化实践](https://www.infoq.cn/article/dl0kKEXKi8PSDB6xP53B) | 生产级 Agent 可观测与评估工程主题，适合作为 AgentOps/Harness 的行业案例线索 | AgentOps、可观测、评测、生产化 |

### 1.2 面经与学习路线来源

| 来源 | 价值 | 可提炼主题 |
| --- | --- | --- |
| [牛客：大模型、Agent面经总结 2026-04-28](https://www.nowcoder.com/discuss/878600528970735616) | 腾讯/百度相关面经，含 Python、Agent skill、计划模式、RAG、向量检索 | Agent skill、计划模式、RAG 检索策略 |
| [牛客：大模型高频面试题](https://www.nowcoder.com/discuss/769275190441148416) | 覆盖预训练/SFT/RLHF、RAG、LangChain、向量数据库 | 大模型基础、后训练、工程实践 |
| [牛客：春招五周面经复盘](https://www.nowcoder.com/discuss/869231276035760128) | 反映 Agent 开发/大模型应用岗位会问 RAG、Agent、AI Coding、SFT 与 RAG 区别 | 面试趋势、RAG vs SFT |
| [牛客：2026.4.24 面经学习 Agent](https://www.nowcoder.com/discuss/877318217939640320) | 聚焦模型和 Agent 区别、Claude Code/RAG、Agent 学习问题 | Agent 基础、AI Coding |
| [牛客：美团 Agent 方向面经整理](https://www.nowcoder.com/discuss/1639746) | 按项目深挖、Agent、LangGraph、上下文、工具、评测、监控展开 | 项目面、LangGraph、评测、监控 |
| [牛客：26年 Agent 学习路线](https://www.nowcoder.com/discuss/864821937527128064) | 可作为初学者路线参考，需人工审核质量 | 学习路线、Agent skills、ReAct/CodeAct |

## 2. 权威技术来源

这些来源适合作为知识库正文的主参考，不建议只依赖平台面经来解释技术概念。

| 来源 | 用途 |
| --- | --- |
| [OpenAI Supervised Fine-Tuning](https://platform.openai.com/docs/guides/supervised-fine-tuning) | SFT 数据、训练、评估、checkpoints 和结构化输出/函数调用微调 |
| [OpenAI Reinforcement Fine-Tuning](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) | RFT、grader、推理模型强化微调 |
| [OpenAI Agents SDK Tracing](https://openai.github.io/openai-agents-python/tracing/) | Agent 执行轨迹、工具调用、handoff、guardrails 观测 |
| [OpenAI Agents SDK 演进说明](https://openai.com/index/the-next-evolution-of-the-agents-sdk/) | “model-native harness”、sandbox execution 等 Agent harness 方向 |
| [OpenAI Evals API](https://platform.openai.com/docs/api-reference/evals) | Eval 数据源、grader、评测运行和模型版本对比 |
| [Hugging Face TRL](https://huggingface.co/docs/trl/v0.9.3/index) | SFT、Reward Model、PPO、DPO、KTO、ORPO 等后训练工具链 |
| [EleutherAI lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | 标准 LLM evaluation harness，适合作为评测框架参考 |
| [LangGraph Docs](https://docs.langchain.com/langgraph) | 长运行、有状态 Agent 编排与多 Agent 工作流 |
| [Anthropic: Building Effective AI Agents](https://resources.anthropic.com/ty-building-effective-ai-agents) | Agent 架构模式、生产可用性和决策框架 |

## 3. 建议新增知识板块

| 优先级 | 板块 | 内容范围 |
| --- | --- | --- |
| P0 | Agent 知识地图 | 总目录、学习路线、面试问题池 |
| P0 | 后训练 | SFT、RM、RLHF、DPO、GRPO、RLAIF、RFT、数据闭环 |
| P0 | SFT | 数据格式、清洗、工具调用样本、评测、常见坑 |
| P0 | Agent Harness | 运行主循环、状态、工具路由、tracing、replay、eval harness |
| P1 | AgentOps | 可观测、监控、告警、成本、线上 bad case 回流 |
| P1 | 工具协议 | Function Calling、MCP、A2A、权限与 API schema |
| P1 | 安全 | Prompt injection、权限边界、sandbox、human-in-the-loop |
| P1 | AI Coding Agent | CodeAct、文件系统操作、代码检索、测试与回滚 |
| P2 | 多模态 Agent | VLM、图文音频工具、多模态 RAG、多模态后训练 |

## 4. 小红书/社媒搜索关键词

人工搜索小红书、知乎、牛客、公众号时可以用这些组合：

- `小红书 Agent 面经`
- `小红书 大模型 面经`
- `小红书 AI Agent 研发工程师`
- `小红书 后训练 SFT RLHF`
- `Agent Harness 架构`
- `大模型 PostTrain 面试`
- `SFT RLHF DPO GRPO 面经`
- `LangGraph Agent 面经`
- `RAG Agent 面经`
- `AI Coding Agent 面试`

## 5. 入库策略

1. 面经平台内容默认只采集标题、URL、平台、发布时间、摘要、问题点和标签。
2. 小红书 App 笔记不做自动全文抓取，避免登录、版权和反爬风险。
3. 技术解释优先引用官方文档、论文或开源项目，再用面经补充“面试怎么问”。
4. JD 和大会分享适合作为“行业需求信号”，不要当作完整教程。
5. 每条候选来源都要标记：`source_url`、`platform`、`crawled_at`、`quality_score`、`license_status`、`review_status`。

## 6. 下一步建议

1. 先把 `Agent 知识地图`、`后训练`、`SFT`、`Agent Harness` 作为第一批独立页面。
2. 把牛客和小红书相关公开来源加入候选源 JSONL，只保留摘要和问题点。
3. 以官方技术文档补齐每个板块的概念和工程实践。
4. 对每篇面经建立标签：公司、岗位、轮次、主题、难度、是否已核验。
5. 后续按板块逐步补面试题：后训练、RAG、工具调用、Harness、AgentOps、安全。
