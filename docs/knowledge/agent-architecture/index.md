---
title: Agent 架构
---

# Agent 架构

Agent 架构关注模型如何围绕目标进行观察、规划、行动和反馈。面试里不要只说“套了 LangChain”，更重要的是讲清楚状态、工具、记忆、权限、评测和失败恢复。

## 核心页面

| 页面 | 重点 |
| --- | --- |
| [Agent Harness](./harness.md) | 运行主循环、评测、Tracing、Replay |
| [ReAct/CoT/ToT](./reasoning.md) | 推理和行动结合 |
| [规划与分解](./planning.md) | 任务拆解、终止条件、计划修正 |
| [Memory 系统](./memory.md) | 短期记忆、长期记忆、用户画像 |
| [Tool Use](./tools.md) | Function Calling、工具 schema、错误处理 |
| [Multi-Agent](./multi-agent.md) | 多角色协作、通信、冲突解决 |

## 面试表达主线

1. 先说任务目标和边界。
2. 再说 Agent 状态如何维护。
3. 说明工具系统如何设计和校验。
4. 说明 RAG/Memory 如何进入上下文。
5. 说明失败如何重试、降级或转人工。
6. 最后用评测指标证明效果。
