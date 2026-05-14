---
title: Agent Harness
---

# Agent Harness

Agent Harness 是 Agent 的运行与评测外壳。它不只是“调用一次模型”的代码，而是把模型、工具、状态、记忆、权限、日志、评测和回放串起来的工程框架。

在不同语境里，harness 可能指两类东西：

- **运行 harness**：驱动 Agent 执行任务的主循环和基础设施。
- **评测 harness**：批量运行 benchmark、记录轨迹、比较版本和生成报告的框架。

成熟 Agent 项目通常需要同时具备这两者。

## 1. 运行 Harness 架构

```text
User Task
  ↓
Input Guardrails
  ↓
Planner / Policy
  ↓
Agent State
  ↓
Tool Router ── Tool Sandbox
  ↓              ↓
Observation ← Tool Result
  ↓
Memory / RAG / Context Manager
  ↓
Final Answer or Human Approval
```

## 2. 核心模块

| 模块 | 职责 |
| --- | --- |
| Task loader | 读取用户任务、测试任务或批处理任务 |
| State manager | 保存当前目标、上下文、步骤、工具结果和中间状态 |
| Planner | 拆解任务、选择下一步动作、决定是否终止 |
| Tool router | 根据 schema 调用工具，处理参数校验和错误 |
| Memory/RAG | 提供长期记忆、知识检索、上下文压缩 |
| Guardrails | 输入输出安全、权限控制、敏感操作拦截 |
| Tracing | 记录每次模型请求、工具调用、观察结果和耗时成本 |
| Replay | 用同一输入和工具 mock 复现历史失败 |
| Evaluator | 计算任务完成率、步骤效率、工具调用准确率等指标 |

## 3. 评测 Harness

评测 harness 关注的是“同一批任务下，不同 Prompt、模型、工具和数据版本谁更好”。

常见能力：

- 批量读取测试集。
- 固定模型参数和工具 mock。
- 记录完整执行轨迹。
- 对最终答案和中间步骤打分。
- 生成版本对比报告。
- 支持失败样本回放和归因。

## 4. Agent 评测指标

| 指标 | 解释 |
| --- | --- |
| Task success rate | 是否完成最终任务 |
| Tool-call accuracy | 工具选择、参数、调用时机是否正确 |
| Recovery rate | 工具失败或信息不足时能否恢复 |
| Step efficiency | 完成任务用了多少步，是否绕路 |
| Cost / latency | token 成本、工具成本和响应时延 |
| Safety violation rate | 是否越权、泄露、误执行高风险动作 |
| Trace quality | 中间过程是否可解释、可审计、可回放 |

## 5. Bad Case 归因

定位 Agent 失败时，优先按链路拆分：

1. 输入理解错：意图识别或约束遗漏。
2. 规划错：任务拆解不合理或终止条件错误。
3. 检索错：召回不足、重排失败、上下文污染。
4. 工具错：工具选择错、参数错、API 异常。
5. 模型错：推理错误、幻觉、格式错误。
6. 权限错：应该拦截的动作没有拦截。
7. 产品错：任务定义不清，成功标准不明确。

## 6. 面试要点

1. Agent harness 和普通聊天机器人后端有什么区别？
2. 如何设计可回放的 Agent 执行轨迹？
3. 如何比较两个 Agent 版本的效果？
4. 工具调用失败时 harness 应该如何处理？
5. 如何把线上 bad case 变成离线评测集？
6. 高风险工具如何接入 human-in-the-loop？

## 7. 实践建议

- 所有工具调用都必须有 schema、超时、重试和错误码。
- 轨迹日志要记录模型版本、Prompt 版本、工具版本和知识库版本。
- 离线评测要包含成功路径、失败路径、权限边界和长尾任务。
- 上线前必须有回归测试集，避免新 Prompt 或新模型破坏旧能力。
- 对不可逆操作使用审批、二次确认或只读模拟模式。
