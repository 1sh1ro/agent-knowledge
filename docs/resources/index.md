---
title: 学习资源
---

# 📚 学习资源

优质书籍、课程、论文推荐。

## 🧭 数据采集规划

| 文档 | 说明 |
|------|------|
| [高质量面经数据采集与导入方案](./interview-data-ingestion-plan.md) | 仓库内容盘点、面经采集边界、数据模型、质量评分和导入流程 |
| [Agent 知识与面经来源发现报告](./agent-knowledge-source-discovery-2026-05-14.md) | 小红书相关公开信号、牛客面经、官方技术文档和推荐知识板块 |
| [Agent 面经与知识源采集结果](./crawled-agent-interview-sources-2026-05-14.md) | 本次采集的 23 条候选来源、质量分、主题和建议入库位置 |

## 📖 书籍推荐

### 入门级

| 书名 | 作者 | 描述 | 推荐指数 |
|------|------|------|----------|
| 《大规模语言模型》 | 段亦弟 等 | 中文 LLM 入门必读 | ⭐⭐⭐⭐⭐ |
| 《ChatGPT 原理与应用》 | - | 面向工程师的实践指南 | ⭐⭐⭐⭐ |
| 《机器学习导论》 | - | ML 基础概念 | ⭐⭐⭐⭐ |

### 进阶级

| 书名 | 作者 | 描述 | 推荐指数 |
|------|------|------|----------|
| 《Hands-On LLM》 | - | PyTorch LLM 实战 | ⭐⭐⭐⭐⭐ |
| 《Building LLM Apps》 | - | LLM 应用开发 | ⭐⭐⭐⭐ |
| 《LLM Engineering》 | - | LLM 工程实践 | ⭐⭐⭐⭐⭐ |

## 🎓 在线课程

### 免费课程

| 课程 | 平台 | 难度 | 时长 |
|------|------|------|------|
| [CS224N](https://web.stanford.edu/class/cs224n/) | Stanford | ⭐⭐⭐ | 20h |
| [Full Stack LLM](https://fullstackdeeplearning.com/llm-bootcamp/) | Full Stack | ⭐⭐ | 15h |
| [Hugging Face Course](https://huggingface.co/course) | HF | ⭐⭐ | 10h |

### 付费课程

| 课程 | 平台 | 价格 | 推荐指数 |
|------|------|------|----------|
| [LLM Engineer's Handbook](https:///decodingml.com/) | Decoding ML | $199 | ⭐⭐⭐⭐⭐ |
| [AI Engineering Academy](https://aiengineering.ai/) | Various | $$ | ⭐⭐⭐⭐ |

## 📄 必读论文

### 经典论文

| 论文 | 年份 | 重要性 |
|------|------|--------|
| [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | 2017 | 🔴 必读 |
| [GPT-3](https://arxiv.org/abs/2005.14165) | 2020 | 🔴 必读 |
| [InstructGPT](https://arxiv.org/abs/2203.02155) | 2022 | 🔴 必读 |
| [ChatGPT](https://arxiv.org/abs/2302.10724) | 2023 | 🔴 必读 |

### Agent 相关

| 论文 | 年份 | 重要性 |
|------|------|------|
| [ReAct](https://arxiv.org/abs/2210.03629) | 2022 | 🔴 必读 |
| [Toolformer](https://arxiv.org/abs/2302.04761) | 2023 | 🟡 推荐 |
| [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 2023 | 🟡 推荐 |
| [AutoGen](https://arxiv.org/abs/2308.08155) | 2023 | 🟡 推荐 |

## 🛠️ 工具推荐

### 开发框架

| 框架 | 用途 | Stars |
|------|------|-------|
| [LangChain](https://github.com/langchain-ai/langchain) | LLM 应用开发 | 80k+ |
| [LlamaIndex](https://github.com/run-llama/llama_index) | 数据索引 | 35k+ |
| [AutoGen](https://github.com/microsoft/autogen) | Multi-Agent | 30k+ |

### 模型部署

| 工具 | 用途 | Stars |
|------|------|-------|
| [vLLM](https://github.com/vllm-project/vllm) | 高效推理 | 25k+ |
| [Text Generation Inference](https://github.com/huggingface/text-generation-inference) | HF 推理服务 | 15k+ |
| [Ollama](https://github.com/ollama/ollama) | 本地运行 LLM | 80k+ |

## 🗺️ 学习路径

```
第一阶段: 理论基础 (2-4周)
  └── CS224N + Attention 论文
      └── GPT 系列论文

第二阶段: 框架学习 (2-3周)
  └── LangChain/LlamaIndex 官方文档
      └── 跟着教程做小项目

第三阶段: 实战项目 (4-6周)
  └── 构建自己的 Agent 应用
      └── 优化和部署

第四阶段: 深入研究 (持续)
  └── 阅读最新论文
      └── 参与开源社区
```
