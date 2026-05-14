---
title: LangChain / LlamaIndex
---

# 开发框架

## LangChain

### 核心组件

| 组件 | 功能 |
|------|------|
| Chains | 串联多个操作 |
| Agents | 自主决策执行 |
| Memory | 上下文管理 |
| Tools | 外部工具集成 |
| Prompts | 提示词管理 |

### 示例

```python
from langchain import OpenAI, LLMChain, PromptTemplate

template = """回答以下问题：
{question}"""

prompt = PromptTemplate(template=template, input_variables=["question"])
llm = OpenAI()
chain = LLMChain(llm=llm, prompt=prompt)

result = chain.run("什么是 Agent？")
```

## LlamaIndex

### 核心功能
- 数据索引和检索
- RAG 流程封装
- 多数据源集成

### 示例

```python
from llama_index import VectorStoreIndex, SimpleDirectoryReader

documents = SimpleDirectoryReader("data").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()
response = query_engine.query("总结文档内容")
```

## 对比

| 特性 | LangChain | LlamaIndex |
|------|-----------|------------|
| 重点 | Agent 编排 | 数据检索 |
| 灵活性 | 高 | 中 |
| 学习曲线 | 陡峭 | 平缓 |

## 面试要点

1. **LangChain 的优缺点？**
   - 灵活但复杂，适合复杂流程

2. **LlamaIndex 适合什么场景？**
   - 快速构建 RAG 应用
