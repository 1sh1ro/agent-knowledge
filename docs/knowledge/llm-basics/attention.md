---
title: Attention 机制
---

# Attention 机制

## 核心概念

Attention 机制允许模型在处理序列时，动态地关注输入的不同部分。

## Self-Attention

### 计算过程

1. **Query, Key, Value**
   - 输入 X 通过三个线性变换得到 Q, K, V
   - Q = XW_Q, K = XW_K, V = XW_V

2. **注意力分数**
   - Attention(Q, K, V) = softmax(QK^T / √d_k) V

3. **多头注意力**
   - 将 Q, K, V 分成 h 个头
   - 每个头独立计算注意力
   - 最后拼接并线性变换

## 常见变体

| 变体 | 特点 | 代表模型 |
|------|------|----------|
| Self-Attention | 序列内元素相互关注 | Transformer |
| Cross-Attention | 两个序列间关注 | Encoder-Decoder |
| Sparse Attention | 降低计算复杂度 | Longformer |
| Flash Attention | 内存高效计算 | 各种优化实现 |

## 面试高频问题

1. **为什么需要除以 √d_k？**
   - 防止点积过大导致 softmax 梯度消失

2. **Multi-Head Attention 的作用？**
   - 让模型在不同子空间学习不同的注意力模式

3. **Attention 的时间复杂度？**
   - O(n²·d)，n 是序列长度
