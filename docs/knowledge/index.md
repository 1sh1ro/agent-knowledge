---
title: 知识库
---

# 🧠 知识库

系统梳理 Agent 相关岗位需要的核心知识点。

## 📚 知识点分类

### LLM 基础

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [Transformer 架构](./llm-basics/transformer.md) | 自注意力机制详解 | ⭐⭐ |
| [Attention 机制](./llm-basics/attention.md) | 各种注意力变体 | ⭐⭐ |
| [Tokenizer](./llm-basics/tokenizer.md) | BPE、WordPiece 等分词器 | ⭐ |
| [GPT/LLaMA 系列](./llm-basics/gpt-llama.md) | 主流模型架构对比 | ⭐⭐⭐ |
| [RLHF/SFT](./llm-basics/rlhf.md) | 人类反馈强化学习 | ⭐⭐⭐ |

### Agent 架构

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [ReAct/CoT/ToT](./agent-architecture/reasoning.md) | 推理模式详解 | ⭐⭐ |
| [规划与分解](./agent-architecture/planning.md) | Task Decomposition | ⭐⭐ |
| [Memory 系统](./agent-architecture/memory.md) | 短期/长期记忆 | ⭐⭐ |
| [Tool Use](./agent-architecture/tools.md) | 工具调用机制 | ⭐⭐ |
| [Multi-Agent](./agent-architecture/multi-agent.md) | 多智能体协作 | ⭐⭐⭐ |

### 工程实践

| 知识点 | 描述 | 难度 |
|--------|------|------|
| [RAG 系统设计](./engineering/rag.md) | 检索增强生成 | ⭐⭐ |
| [向量数据库](./engineering/vector-db.md) | Milvus/Pinecone 等 | ⭐ |
| [LangChain/LlamaIndex](./engineering/frameworks.md) | 开发框架 | ⭐⭐ |
| [模型部署](./engineering/deployment.md) | vLLM/TGI 等 | ⭐⭐ |
| [评测体系](./engineering/evals.md) | LLM 评测方法 | ⭐⭐ |

## 🎯 学习路径

```
入门
  └── LLM 基础 (Transformer, Attention)
      └── Agent 核心 (ReAct, Tool Use, Memory)
          └── 工程实践 (RAG, LangChain, 部署)
              └── 进阶 (Multi-Agent, RLHF, 优化)
```

## 📖 推荐阅读顺序

1. [Transformer 架构](./llm-basics/transformer.md) - 必读
2. [ReAct 推理模式](./agent-architecture/reasoning.md) - 核心
3. [RAG 系统设计](./engineering/rag.md) - 实战
4. [Tool Use 机制](./agent-architecture/tools.md) - 进阶
