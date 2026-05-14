---
title: RAG 系统设计
tags: [工程实践, 系统设计]
---

# RAG 系统设计

## 概述

RAG (Retrieval-Augmented Generation) = 检索 + 生成，通过检索外部知识增强 LLM 的回答能力。

## 系统架构

```
用户查询
    ↓
┌─────────────────┐
│   Query Processing   │
│  - 向量化           │
│  - 查询扩展         │
└─────────────────┘
    ↓
┌─────────────────┐
│   Retrieval         │
│  - 向量检索         │
│  - 混合检索         │
│  - 重排序           │
└─────────────────┘
    ↓
┌─────────────────┐
│   Generation         │
│  - 上下文组装        │
│  - LLM 生成         │
│  - 后处理           │
└─────────────────┘
    ↓
回答
```

## 核心组件

### 1. 文档处理

```python
from langchain.document_loaders import PDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

def process_documents(file_path):
    """文档处理流程"""
    # 1. 加载文档
    loader = PDFLoader(file_path)
    documents = loader.load()

    # 2. 分块
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50,
        separators=["\n\n", "\n", "。", "！", "？", " "]
    )
    chunks = text_splitter.split_documents(documents)

    # 3. 向量化
    embeddings = OpenAIEmbeddings()
    vectorstore = Chroma.from_documents(
        chunks, embeddings, persist_directory="db"
    )

    return vectorstore
```

### 2. 检索策略

```python
from langchain.retrievers import EnsembleRetriever

def build_retriever(vectorstore):
    """构建混合检索器"""

    # 语义检索
    semantic_retriever = vectorstore.as_retriever(
        search_kwargs={"k": 5}
    )

    # 关键词检索
    bm25_retriever = BM25Retriever.from_documents(chunks)

    # 混合检索
    ensemble_retriever = EnsembleRetriever(
        retrievers=[semantic_retriever, bm25_retriever],
        weights=[0.6, 0.4]
    )

    return ensemble_retriever
```

### 3. 生成

```python
from langchain.chains import RetrievalQA

def build_qa_chain(retriever):
    """构建问答链"""

    llm = ChatOpenAI(model="gpt-4", temperature=0)

    prompt_template = """
    基于以下上下文回答问题。如果上下文中没有相关信息，请说明你不知道。

    上下文:
    {context}

    问题: {question}

    回答:"""

    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=retriever,
        return_source_documents=True,
        chain_type_kwargs={
            "prompt": PromptTemplate(
                template=prompt_template,
                input_variables=["context", "question"]
            )
        }
    )

    return qa_chain
```

## 关键优化

### 检索优化

| 优化策略 | 说明 |
|----------|------|
| Query Expansion | 查询改写/扩展 |
| Hybrid Search | 语义+关键词混合 |
| Reranking | 重排序优化 |
| Query Decomposition | 查询分解 |

### 生成优化

| 优化策略 | 说明 |
|----------|------|
| Context Compression | 上下文压缩 |
| Citation | 引用来源 |
| Self-RAG | 自适应检索 |

## 面试常见问题

### Q: RAG vs Fine-tuning 怎么选？

| 维度 | RAG | Fine-tuning |
|------|-----|-------------|
| 成本 | 低 | 高 |
| 实时性 | 高（可实时更新） | 低（需重新训练） |
| 定制化程度 | 中 | 高 |
| 幻觉 | 较少 | 可能更多 |

### Q: 如何处理检索不到相关内容的情况？

1. 设置相似度阈值过滤
2. 结合关键词检索兜底
3. 使用「不知道」回答策略

### Q: 如何提升检索效果？

1. 优化分块策略（chunk size、overlap）
2. 使用重排序模型
3. 增加元数据过滤
4. 实现查询改写

## 参考资料

- [RAG 论文](https://arxiv.org/abs/2005.11401)
- [LangChain RAG](https://python.langchain.com/docs/tutorials/rag/)
