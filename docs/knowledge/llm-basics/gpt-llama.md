---
title: GPT / LLaMA 系列
---

# GPT / LLaMA 系列模型

## GPT 系列

| 模型 | 参数量 | 特点 |
|------|--------|------|
| GPT-1 | 117M | 首次使用 Transformer Decoder |
| GPT-2 | 1.5B | 无监督多任务学习 |
| GPT-3 | 175B | Few-shot 能力涌现 |
| GPT-4 | 未公开 | 多模态，RLHF 优化 |

## LLaMA 系列

| 模型 | 参数量 | 特点 |
|------|--------|------|
| LLaMA-1 | 7B/13B/33B/65B | 开源，高效训练 |
| LLaMA-2 | 7B/13B/70B | 商用授权，更长上下文 |
| LLaMA-3 | 8B/70B | 更大词表，更好性能 |

## 架构对比

| 特性 | GPT | LLaMA |
|------|-----|-------|
| 位置编码 | 可学习 | RoPE |
| 归一化 | LayerNorm | RMSNorm |
| 激活函数 | GELU | SwiGLU |
| 注意力 | 标准 | GQA (Grouped Query Attention) |

## 面试要点

1. **GPT 和 LLaMA 的主要区别？**
   - 位置编码、归一化方式、注意力机制

2. **为什么 LLaMA 训练效率高？**
   - 更好的数据质量、更优的架构选择
