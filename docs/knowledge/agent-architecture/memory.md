---
title: Memory 系统
---

# Memory 系统

## 分类

| 类型 | 描述 | 示例 |
|------|------|------|
| 短期记忆 | 当前对话上下文 | Chat History |
| 长期记忆 | 持久化知识 | 向量数据库 |
| 外部记忆 | 外部知识源 | 文档、API |

## 实现方式

### 1. 短期记忆

```python
# 滑动窗口
context = messages[-k:]  # 保留最近 k 条

# 摘要压缩
summary = summarize(messages)
```

### 2. 长期记忆

```python
# 向量数据库存储
memory.save(question, answer)

# 检索相关记忆
relevant = memory.retrieve(query, top_k=5)
```

### 3. 混合记忆

```
用户提问
  ↓
检索长期记忆（相关历史）
  ↓
结合短期记忆（当前对话）
  ↓
生成回答
  ↓
更新记忆
```

## 面试要点

1. **Memory 的作用？**
   - 保持上下文连贯性，积累知识

2. **如何处理长对话？**
   - 摘要、滑动窗口、分层记忆
