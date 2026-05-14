---
title: 模型部署
---

# 模型部署

## 推理框架

| 框架 | 特点 | 适用 |
|------|------|------|
| vLLM | PagedAttention，高吞吐 | 生产环境 |
| TGI | HuggingFace 官方 | 快速部署 |
| TensorRT-LLM | NVIDIA 优化 | GPU 环境 |
| llama.cpp | CPU 推理 | 边缘设备 |

## 优化技术

### 1. 量化

| 精度 | 显存占用 | 速度 | 效果 |
|------|----------|------|------|
| FP16 | 基准 | 基准 | 最好 |
| INT8 | 50% | 1.5x | 接近 |
| INT4 | 25% | 2x+ | 可接受 |

### 2. 批处理

- **Continuous Batching**: 动态批处理
- **Inflight Batching**: 请求间并行

### 3. 缓存

- **KV Cache**: 避免重复计算
- **Prefix Caching**: 共享前缀

## 面试要点

1. **vLLM 的 PagedAttention 原理？**
   - 类似操作系统虚拟内存，动态分配 KV Cache

2. **量化的影响？**
   - 降低显存，可能略微影响效果
