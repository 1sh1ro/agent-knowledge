---
title: Transformer 架构详解
tags: [LLM基础, 核心概念]
---

# Transformer 架构详解

## 概述

Transformer 是 2017 年 Google 在论文《Attention Is All You Need》中提出的架构，彻底改变了 NLP 领域。

## 核心组件

### 1. 自注意力机制 (Self-Attention)

```python
# 简化版 Self-Attention 计算
import torch
import torch.nn.functional as F

def self_attention(Q, K, V, scale=True):
    """
    Q: 查询矩阵 (batch, seq_len, d_k)
    K: 键矩阵   (batch, seq_len, d_k)
    V: 值矩阵   (batch, seq_len, d_v)
    """
    d_k = Q.size(-1)

    # 1. 计算 Q 和 K 的点积
    scores = torch.matmul(Q, K.transpose(-2, -1))

    # 2. 缩放
    if scale:
        scores = scores / math.sqrt(d_k)

    # 3. Softmax 得到注意力权重
    attn_weights = F.softmax(scores, dim=-1)

    # 4. 加权求和
    output = torch.matmul(attn_weights, V)

    return output, attn_weights
```

### 2. 多头注意力 (Multi-Head Attention)

```
MultiHead(Q, K, V) = Concat(head_1, ..., head_h) * W^O

where head_i = Attention(Q * W_i^Q, K * W_i^K, V * W_i^V)
```

### 3. 前馈网络 (FFN)

```python
class FeedForward(nn.Module):
    def __init__(self, d_model, d_ff, dropout=0.1):
        super().__init__()
        self.linear1 = nn.Linear(d_model, d_ff)
        self.linear2 = nn.Linear(d_ff, d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x):
        return self.linear2(self.dropout(F.gelu(self.linear1(x))))
```

## 完整架构

```
Input → Embedding + Positional Encoding
         ↓
    Encoder Layer (N×):
         ├── Multi-Head Self-Attention
         ├── Add & LayerNorm
         ├── Feed Forward
         └── Add & LayerNorm
         ↓
    Output (Pooled)
```

## 关键创新

| 创新点 | 说明 | 优势 |
|--------|------|------|
| Self-Attention | 全局注意力机制 | 并行化、捕获长距离依赖 |
| Multi-Head | 多头并行注意力 | 捕获多种语义关系 |
| Positional Encoding | 位置编码 | 引入序列顺序信息 |
| Feed Forward | 前馈网络 | 非线性变换 |

## 常见面试问题

### Q: Transformer 相比 RNN 的优势？

1. **并行计算**: RNN 需要逐时间步处理，Transformer 可并行
2. **长距离依赖**: RNN 难以捕获长距离依赖，Self-Attention 可直接建模任意距离
3. **可解释性**: Attention 权重直观可视

### Q: 为什么要用 LayerNorm 而不是 BatchNorm？

- LayerNorm 对每个样本独立归一化，适合变长序列
- NLP 任务中序列长度不一致，BatchNorm 效果差

### Q: Attention 的计算复杂度？

O(n² × d)，其中 n 是序列长度，d 是维度。

## 参考资料

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/)
