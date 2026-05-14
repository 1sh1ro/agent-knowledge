---
title: 后训练
---

# 后训练（Post-training）

后训练是把预训练基座模型变成可用助手、垂直领域模型或 Agent 模型的关键阶段。它通常不改变模型“会不会语言建模”的基础能力，而是让模型更会遵循指令、对齐偏好、使用工具、遵守安全边界，并适配具体任务。

## 1. 后训练流程

```text
Base Model
  ↓
Instruction / Conversation Data
  ↓
SFT
  ↓
Preference Data
  ↓
RLHF / DPO / ORPO / GRPO
  ↓
Safety & Tool-use Tuning
  ↓
Evaluation & Red Team
  ↓
Deployment Feedback Loop
```

## 2. 主要板块

| 板块 | 目标 | 常见数据 |
| --- | --- | --- |
| [SFT](./sft.md) | 学会按指令和格式回答 | 指令-回答、对话、多轮任务轨迹 |
| [偏好优化](./preference-optimization.md) | 让输出更符合人类或业务偏好 | chosen/rejected 对、排序数据、打分数据 |
| RLHF | 用奖励模型和强化学习优化策略 | 偏好对、奖励模型数据、PPO/GRPO 训练轨迹 |
| 安全对齐 | 避免违规、泄露、越权和危险行为 | 拒答样本、红队样本、安全分类数据 |
| Tool-use tuning | 提升函数调用、参数生成和工具选择能力 | 工具 schema、调用轨迹、失败修复样本 |
| Agent trajectory tuning | 学会规划、反思、调用工具和完成任务 | ReAct 轨迹、任务日志、人工修正轨迹 |

## 3. Agent 场景的特殊点

Agent 后训练不能只看最终答案，还要关注中间轨迹：

- 是否选择了正确工具。
- 参数是否符合 schema 和业务约束。
- 是否在信息不足时追问或检索。
- 是否能从工具错误中恢复。
- 是否能识别高风险操作并请求人工确认。
- 是否能输出可追踪、可审计的执行过程。

## 4. 质量控制

| 环节 | 检查点 |
| --- | --- |
| 数据收集 | 来源授权、隐私脱敏、任务覆盖度 |
| 数据清洗 | 去重、去广告、去幻觉、去格式污染 |
| 标注 | 标准一致性、标注者校准、冲突处理 |
| 训练 | loss、KL、reward、长度分布、拒答率 |
| 评测 | 离线 benchmark、人工偏好、线上 A/B |
| 回流 | bad case 归因、补数据、回归测试 |

## 5. 面试要点

1. SFT 和 RLHF/DPO 的区别是什么？
2. SFT 数据质量为什么比数量更重要？
3. 如何构造 Agent 工具调用训练数据？
4. 如何判断模型是“不会做”还是“会做但不稳定”？
5. 后训练如何避免过拟合模板和丢失通用能力？
6. 如何把线上 bad case 回流成训练数据？

## 6. 推荐阅读

- [SFT](./sft.md)
- [偏好优化](./preference-optimization.md)
- [RLHF / SFT](../llm-basics/rlhf.md)
- [Agent Harness](../agent-architecture/harness.md)
- [评测体系](../engineering/evals.md)
