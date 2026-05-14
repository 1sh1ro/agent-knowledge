---
title: 推理模式（ReAct / CoT / ToT）
---

# 推理模式详解

## Chain-of-Thought (CoT)

### 原理
让模型逐步推理，而不是直接给出答案。

### 示例
```
问题：15 + 27 = ?

标准回答：42

CoT 回答：
先算个位：5 + 7 = 12，写 2 进 1
再算十位：1 + 2 + 1(进位) = 4
所以答案是 42
```

### 变体
- **Zero-shot CoT**: "Let's think step by step"
- **Few-shot CoT**: 提供示例
- **Self-Consistency**: 多次采样取多数

## ReAct（Reasoning + Acting）

### 核心思想
将推理（Reasoning）和行动（Acting）结合，形成循环。

### 流程
```
Thought → Action → Observation → Thought → ...
```

### 示例
```
Thought: 我需要查询北京的天气
Action: search("北京天气")
Observation: 北京今天晴，25°C
Thought: 天气很好，适合出行
```

## Tree-of-Thought (ToT)

### 核心思想
维护多个推理路径，像树一样探索。

### 流程
1. **分解**：将问题分解为多个步骤
2. **生成**：每个步骤生成多个候选
3. **评估**：评估每个候选的质量
4. **搜索**：使用 BFS/DFS 搜索最优路径

## 面试要点

1. **CoT 为什么有效？**
   - 将复杂问题分解为简单步骤

2. **ReAct 和 CoT 的区别？**
   - ReAct 可以与外部环境交互

3. **ToT 的适用场景？**
   - 需要探索多种方案的问题
