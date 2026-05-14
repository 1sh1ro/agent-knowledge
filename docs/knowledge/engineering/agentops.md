---
title: AgentOps
---

# AgentOps

AgentOps 是 Agent 上线后的观测、评测、监控、调试和持续改进体系。普通 LLM 应用只需要看请求和回答，Agent 还要看中间步骤、工具调用、状态变化、权限判断和失败恢复。

## 1. AgentOps 关注什么

```text
User Task
  -> Model Call
  -> Tool Call
  -> Observation
  -> State Update
  -> Final Answer
  -> User Feedback
```

AgentOps 要能回答：

- 任务有没有完成？
- 哪一步失败了？
- 成本和时延花在哪里？
- 工具调用是否正确？
- 有没有越权或安全风险？
- 新版本是否比旧版本更好？

## 2. 生产指标

| 指标 | 说明 |
| --- | --- |
| Task success rate | 用户任务完成率，是 Agent 最核心指标 |
| Tool-call success rate | 工具调用成功率，包括参数合法和业务成功 |
| Recovery rate | 工具失败、检索失败、模型格式错后能否恢复 |
| Loop rate | 是否陷入重复规划、重复检索、重复调用 |
| Human escalation rate | 转人工或请求确认比例 |
| Cost per task | 单个任务的模型、工具和检索成本 |
| P95/P99 latency | 长尾响应时延 |
| Safety violation rate | 越权、泄露、危险动作、错误拒答 |
| User correction rate | 用户纠错、重问、差评比例 |

## 3. Tracing 设计

每次 Agent 执行都应该产生 trace：

```json
{
  "trace_id": "task-001",
  "model": "gpt-x",
  "prompt_version": "planner-v3",
  "tool_versions": {"search": "v2", "crm": "v1"},
  "steps": [
    {"type": "model", "latency_ms": 820, "tokens": 1200},
    {"type": "tool_call", "name": "search", "args_valid": true},
    {"type": "observation", "status": "ok"},
    {"type": "model", "final": true}
  ],
  "outcome": "success"
}
```

必须记录的字段：

- 模型版本、Prompt 版本、工具版本。
- 输入任务和脱敏后的关键上下文。
- 每一步模型输出、工具调用和 observation。
- token、时延、错误码、重试次数。
- 最终状态、用户反馈、人工审核结果。

## 4. 失败归因

| 失败类型 | 典型信号 | 修复方向 |
| --- | --- | --- |
| 意图理解失败 | 计划第一步就错 | 增加澄清、意图分类、任务模板 |
| 检索失败 | 找不到证据或证据不相关 | query rewrite、重排、索引优化 |
| 工具参数错误 | schema 校验失败 | few-shot、参数约束、工具描述优化 |
| 工具业务失败 | API 返回业务错误 | 错误码解释、重试、fallback |
| 模型幻觉 | 无证据编造结果 | 强制引用、工具结果校验 |
| 循环 | 多步重复同一动作 | 最大步数、状态机、终止判断 |
| 安全违规 | 越权调用或泄露信息 | 权限系统、审批、sandbox |

## 5. 线上到离线闭环

AgentOps 的价值在于把线上失败变成离线改进数据：

1. 采样线上 trace。
2. 脱敏并标注失败类型。
3. 归档到 bad case 数据集。
4. 转成 eval case 或 SFT/RLHF 数据。
5. 在新 Prompt/模型/工具版本上线前回归测试。
6. 对比新旧版本的成功率、成本和安全指标。

## 6. 灰度与回滚

Agent 改动风险比普通问答更高，因为它可能调用真实工具。上线策略：

- 先离线 benchmark。
- 再 shadow mode，只观察不执行写操作。
- 小流量灰度，限制高风险工具。
- 关键动作 human-in-the-loop。
- 保留一键回滚模型、Prompt、工具配置和知识库版本。

## 7. 面试要点

1. AgentOps 和普通 LLM observability 有什么区别？
2. 一次 Agent 执行 trace 应该记录什么？
3. 如何定位 Agent 失败来自模型、RAG 还是工具？
4. 如何把线上 bad case 回流成 eval 或训练数据？
5. 新 Agent 版本上线如何灰度？
6. 如何监控 Agent 的安全风险和成本失控？

## 8. 实践 Checklist

- 每个 Agent 任务都有 trace_id。
- 所有工具调用记录参数校验结果和业务错误码。
- 建立 bad case 标签体系。
- 每周维护回归评测集。
- 高风险工具支持 shadow mode 和人工审批。
- Dashboard 同时展示成功率、成本、时延、安全和用户反馈。
