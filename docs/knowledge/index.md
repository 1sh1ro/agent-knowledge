---
title: 知识库
---

# 🧠 知识库

系统梳理 Agent 相关岗位需要的核心知识点。

## 🗺️ 全景地图

| 文档 | 说明 |
|------|------|
| [Agent 知识全景地图](./agent-knowledge-map.md) | 将 Agent 岗位知识拆成 LLM 基础、后训练、Agent 架构、Harness、RAG、工具协议、评测、工程化、安全等独立板块 |

## 📚 知识点分类

### LLM 基础

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [Transformer 架构](./llm-basics/transformer.md) | 自注意力机制详解 | ⭐⭐ |
| [Attention 机制](./llm-basics/attention.md) | 各种注意力变体 | ⭐⭐ |
| [Tokenizer](./llm-basics/tokenizer.md) | BPE、WordPiece 等分词器 | ⭐ |
| [GPT/LLaMA 系列](./llm-basics/gpt-llama.md) | 主流模型架构对比 | ⭐⭐⭐ |
| [RLHF/SFT](./llm-basics/rlhf.md) | 人类反馈强化学习 | ⭐⭐⭐ |

### 后训练

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [后训练总览](./post-training/) | 从 Base Model 到可用助手/Agent 的训练链路 | ⭐⭐ |
| [SFT](./post-training/sft.md) | 指令微调、工具调用样本、数据清洗和评测 | ⭐⭐ |
| [偏好优化](./post-training/preference-optimization.md) | RLHF、DPO、GRPO、Reward Hacking 和 Agent 轨迹偏好 | ⭐⭐⭐ |
| [RLHF/SFT](./llm-basics/rlhf.md) | 奖励模型、PPO、DPO、KTO、ORPO | ⭐⭐⭐ |

### Agent 架构

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [Agent Harness](./agent-architecture/harness.md) | Agent 运行、观测、评测和回放框架 | ⭐⭐⭐ |
| [ReAct/CoT/ToT](./agent-architecture/reasoning.md) | 推理模式详解 | ⭐⭐ |
| [规划与分解](./agent-architecture/planning.md) | Task Decomposition | ⭐⭐ |
| [Memory 系统](./agent-architecture/memory.md) | 短期/长期记忆 | ⭐⭐ |
| [Tool Use](./agent-architecture/tools.md) | 工具调用机制 | ⭐⭐ |
| [Multi-Agent](./agent-architecture/multi-agent.md) | 多智能体协作 | ⭐⭐⭐ |

### 工程实践

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [RAG 系统设计](./engineering/rag.md) | 检索增强生成 | ⭐⭐ |
| [Context Engineering](./engineering/context-engineering.md) | 上下文组织、压缩、检索注入和防污染 | ⭐⭐⭐ |
| [向量数据库](./engineering/vector-db.md) | Milvus/Pinecone 等 | ⭐ |
| [LangChain/LlamaIndex](./engineering/frameworks.md) | 开发框架 | ⭐⭐ |
| [模型部署](./engineering/deployment.md) | vLLM/TGI 等 | ⭐⭐ |
| [评测体系](./engineering/evals.md) | LLM 评测方法 | ⭐⭐ |
| [AgentOps](./engineering/agentops.md) | 线上观测、监控、追踪、bad case 回流 | ⭐⭐⭐ |

### 安全

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [Agent 安全](./safety/) | Prompt Injection、权限、Sandbox、Human-in-the-loop、审计 | ⭐⭐⭐ |

## 🎯 学习路径

```
入门
  └── LLM 基础 (Transformer, Attention)
      └── 后训练 (SFT, RLHF/DPO, Tool-use tuning)
          └── Agent 核心 (ReAct, Tool Use, Memory, Harness)
              └── 工程实践 (RAG, Context Engineering, 评测, AgentOps)
                  └── 进阶 (Multi-Agent, 安全, 成本优化)
```

## 📖 推荐阅读顺序

1. [Transformer 架构](./llm-basics/transformer.md) - 必读
2. [后训练总览](./post-training/) - 基础到对齐
3. [SFT](./post-training/sft.md) - 面试高频
4. [偏好优化](./post-training/preference-optimization.md) - 对齐重点
5. [ReAct 推理模式](./agent-architecture/reasoning.md) - 核心
6. [Agent Harness](./agent-architecture/harness.md) - 工程化重点
7. [Context Engineering](./engineering/context-engineering.md) - 上下文重点
8. [RAG 系统设计](./engineering/rag.md) - 实战
9. [AgentOps](./engineering/agentops.md) - 上线重点
10. [Agent 安全](./safety/) - 高风险系统必备
