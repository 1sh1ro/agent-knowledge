---
title: 工程实践
---

# 工程实践

工程实践板块关注 Agent/LLM 应用如何真正上线：知识检索、上下文组织、评测、部署、监控、成本和稳定性。

## 核心页面

| 页面 | 重点 |
| --- | --- |
| [RAG 系统设计](./rag.md) | 召回、重排、幻觉控制、引用 |
| [Context Engineering](./context-engineering.md) | 上下文组织、压缩、注入和防污染 |
| [向量数据库](./vector-db.md) | Milvus、Pinecone、索引和召回 |
| [LangChain/LlamaIndex](./frameworks.md) | 框架选型、LangGraph、工作流 |
| [评测体系](./evals.md) | LLM eval、Agent eval、回归测试 |
| [AgentOps](./agentops.md) | 观测、监控、bad case 回流 |
| [模型部署](./deployment.md) | vLLM、TGI、灰度、成本优化 |

## 面试表达主线

1. 指标先行：准确率、任务完成率、成本、时延、安全。
2. 链路拆解：模型、RAG、工具、上下文、部署分别负责什么。
3. 可观测：每一步是否能追踪、复现和归因。
4. 可迭代：线上 bad case 如何进入评测和训练闭环。
