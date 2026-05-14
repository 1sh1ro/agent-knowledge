---
title: Agent 面经与知识源采集结果
---

# Agent 面经与知识源采集结果

> 采集时间：2026-05-14
>
> 数据文件：`data/interview-sources.jsonl`

本次采集以“公开搜索结果 + 可访问公开页面摘要”为边界，目标是把 Agent/后训练/SFT/Harness/RAG/工具调用相关的高质量候选来源先装进仓库。对牛客、小红书相关页面、InfoQ 等内容平台，默认只保存标题、链接、摘要、主题和建议去向，不复制全文。

## 1. 采集概览

| 类型 | 数量 | 处理方式 |
| --- | ---: | --- |
| 牛客面经/学习帖 | 11 | 保存元数据、摘要、主题、质量分，后续人工审核后再提炼题目 |
| 小红书相关公开信号 | 3 | 保存 JD/技术分享摘要，用于判断行业关注点 |
| 官方文档/开源项目 | 9 | 作为知识库正文的优先参考来源 |
| 合计 | 23 | 已写入 `data/interview-sources.jsonl` |

## 2. 高优先级面经候选

| 分数 | 来源 | 主题 | 建议去向 |
| ---: | --- | --- | --- |
| 88 | [牛客：大模型、Agent面经总结](https://www.nowcoder.com/discuss/878600528970735616) | Agent skill、计划模式、RAG、向量检索、Python | `docs/interviews/imported/`、RAG/Agent 题库 |
| 86 | [牛客：美团Agent方向面经整理](https://www.nowcoder.com/discuss/881209147377664000) | 项目深挖、LangGraph、上下文、Memory、评测、监控 | `docs/interviews/meituan/`、Agent Harness |
| 82 | [牛客：大模型Agent面试全攻略](https://www.nowcoder.com/discuss/1628704) | State Schema、Function Calling、LangGraph、RAG、AI Coding | Agent 知识地图、系统设计题 |
| 80 | [牛客：字节Agent框架面试](https://www.nowcoder.com/discuss/878709844730003456) | Agent 框架、LlamaIndex、LangChain、LangGraph、工具调用数据 | `docs/interviews/bytedance/`、框架选型题 |
| 79 | [牛客：Agent面试官的10个问题](https://www.nowcoder.com/discuss/871323321512513536) | 项目表达、Agent vs LLM、Agent vs RAG、业务价值 | 行为面/项目复盘题 |

## 3. 小红书相关采集结果

| 分数 | 来源 | 可提炼内容 |
| ---: | --- | --- |
| 86 | [小红书 Posttrain 算法工程师-RLHF](https://jobs.niuqizp.com/job-vyY5LL5zM.html) | 后训练、RLHF、Reward Hacking、Scalable Oversight、Multi-Agent、工具使用、安全 |
| 85 | [小红书 AI Agent 研发工程师-引擎架构](https://jobs.niuqizp.com/job-vkr5LLLaZ.html) | Agent Harness、Multi-Agent、LangGraph/LangChain、工具系统、错误反馈、评测 |
| 84 | [InfoQ：小红书 AgentOps 工程化实践](https://www.infoq.cn/article/dl0kKEXKi8PSDB6xP53B) | AgentOps、可观测性、评测、监控、生产化、Harness |

结论：小红书公开 Web 侧更容易采到 JD 和技术分享，直接的小红书 App 笔记不适合自动抓全文。后续可以用人工检索方式把笔记中的“问题点”和“链接”录入候选池。

## 4. 官方/开源知识源

| 分数 | 来源 | 用途 |
| ---: | --- | --- |
| 92 | [OpenAI Supervised Fine-Tuning](https://platform.openai.com/docs/guides/supervised-fine-tuning) | SFT 数据格式、结构化输出、函数调用微调 |
| 91 | [OpenAI Agents SDK Tracing](https://openai.github.io/openai-agents-python/tracing/) | Agent Harness、Tracing、Tool Call、Handoff、Guardrails |
| 90 | [OpenAI Reinforcement Fine-Tuning](https://platform.openai.com/docs/guides/reinforcement-fine-tuning) | RFT、grader、强化微调、评测闭环 |
| 90 | [EleutherAI lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | Evaluation Harness、benchmark、模型回归测试 |
| 89 | [OpenAI Evals API](https://platform.openai.com/docs/api-reference/evals) | Eval dataset、grader、模型版本对比 |
| 89 | [Anthropic: Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) | Agent 架构、工作流、工具调用、生产化判断 |
| 88 | [Hugging Face TRL](https://huggingface.co/docs/trl/index) | SFTTrainer、Reward Model、PPO、DPO、KTO、ORPO |
| 88 | [LangGraph Docs](https://docs.langchain.com/langgraph) | Stateful Agent、workflow、multi-agent、checkpoint |
| 87 | [OpenRLHF Agent Training Guide](https://openrlhf.readthedocs.io/en/latest/rl.html) | Agent trajectory training、异步 RLHF、PPO 工程实践 |

## 5. 入库建议

1. 先把高分牛客面经转成“题目清单 + 摘要 + 来源链接”，不要发布全文。
2. 小红书相关内容先作为行业需求信号，用来补全 Agent Harness、后训练、AgentOps 和安全板块。
3. 技术正文优先基于官方文档和开源项目写，再用面经补“面试怎么问”。
4. 每条候选源进入正文前需要人工审核 `license_status` 和 `content_status`。
5. 下一步可以写一个导入脚本，把 `approved_summary` 自动生成到 `docs/interviews/imported/` 的索引页。
