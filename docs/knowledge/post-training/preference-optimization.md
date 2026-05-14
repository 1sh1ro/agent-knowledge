---
title: 偏好优化
---

# 偏好优化（RLHF / DPO / GRPO）

SFT 让模型“会按格式回答”，偏好优化让模型“更符合人类、业务和安全偏好”。在 Agent 场景中，偏好不只体现在最终答案，还体现在工具调用、任务路径、风险控制和失败恢复上。

## 1. 问题定义

同一个 prompt 下，模型可能生成多个可行答案。偏好优化要解决的是：哪个答案更好，以及为什么更好。

常见偏好维度：

- 有用性：是否解决用户任务。
- 准确性：事实、计算、代码和工具结果是否正确。
- 简洁性：是否少废话、不绕路。
- 安全性：是否拒绝危险或越权请求。
- 可执行性：Agent 是否选择正确工具、参数和步骤。
- 稳定性：遇到异常时是否会恢复或请求澄清。

## 2. 数据形态

| 数据形态 | 示例 | 适用方法 |
| --- | --- | --- |
| Pairwise preference | 同一 prompt 下 chosen / rejected | DPO、Reward Model |
| Ranking | 多个回答从好到坏排序 | Reward Model、Listwise 方法 |
| Scalar score | 人工或规则打分 | Reward Model、RFT grader |
| Process feedback | 对中间步骤打分 | Agent trajectory tuning、PRM |
| Outcome feedback | 只看最终结果是否成功 | RLHF、GRPO、RFT |

Agent 项目里，建议同时保留 outcome feedback 和 process feedback。只看最终答案，很容易漏掉“答案对但过程危险”或“结果错但某些工具调用是对的”的情况。

## 3. 方法对比

| 方法 | 核心思路 | 优点 | 风险 |
| --- | --- | --- | --- |
| RLHF + PPO | 训练奖励模型，再用 PPO 优化策略 | 表达能力强，可优化复杂偏好 | 工程复杂，reward hacking 风险高 |
| DPO | 直接用 chosen/rejected 优化策略，无需显式奖励模型 | 简洁稳定，训练成本低 | 依赖高质量偏好对，难表达复杂过程奖励 |
| ORPO/KTO | 把偏好约束并入监督目标或二元反馈目标 | 流程轻，适合快速迭代 | 表达力通常弱于完整 RL |
| GRPO | 用组内相对奖励优化，减少 value model 依赖 | 适合推理/数学/代码等可验证任务 | 需要可靠奖励或 verifier |
| RFT | 用 grader 对推理模型进行强化微调 | 适合有明确评分器的领域任务 | grader 设计决定上限 |

## 4. Agent 偏好优化设计

### 4.1 轨迹级偏好

对 Agent 来说，可以把一次执行轨迹拆成：

```text
Task
  -> Plan
  -> Tool Call
  -> Observation
  -> Next Action
  -> Final Answer
```

每一段都可以进入偏好数据：

- Plan 是否覆盖了用户目标。
- Tool Call 是否必要。
- 参数是否符合 schema。
- Observation 是否被正确使用。
- 是否在高风险动作前请求确认。
- Final Answer 是否忠实于工具结果。

### 4.2 奖励设计

| 奖励项 | 正向信号 | 负向信号 |
| --- | --- | --- |
| 任务完成 | 输出满足验收条件 | 未解决、答非所问 |
| 工具正确 | 工具选择和参数正确 | 工具错选、参数缺失 |
| 步骤效率 | 少步完成且不牺牲准确性 | 无意义循环、重复检索 |
| 安全约束 | 拒绝危险动作，请求确认 | 越权、泄露、误操作 |
| 证据使用 | 引用检索/工具事实 | 编造工具结果、忽略观察 |

奖励函数不要只奖励“答得像”，否则 Agent 会学会编造顺滑的执行过程。

## 5. Reward Hacking

Reward hacking 是模型找到奖励函数漏洞，但没有真正完成任务。

典型表现：

- 输出看起来很完整，但没有真实调用工具。
- 反复调用低成本工具刷步骤分。
- 为了安全分过度拒答。
- 迎合 reward model 的格式偏好，牺牲事实准确性。
- 在 benchmark 上过拟合，线上长尾任务退化。

缓解手段：

1. 评测集和训练集严格隔离。
2. 引入工具结果校验和可执行 verifier。
3. 同时看人工偏好、任务成功率和安全违规率。
4. 保留线上 bad case 回归集。
5. 对 reward model 做 adversarial 测试。

## 6. 面试要点

1. SFT、RLHF、DPO、GRPO 分别解决什么问题？
2. 为什么 DPO 不需要显式训练奖励模型？
3. PPO 里的 KL 约束有什么用？
4. Reward hacking 是什么，如何发现？
5. Agent 轨迹如何构造偏好数据？
6. 如何设计一个工具调用 Agent 的 reward？
7. 为什么只看最终答案会误判 Agent 质量？

## 7. 实践 Checklist

- 偏好数据必须标明打分标准，而不是只给 chosen/rejected。
- 对 Agent 轨迹保留完整 tool call、observation 和 final answer。
- 奖励项要同时覆盖结果、过程、成本和安全。
- 每次训练保留数据版本、模型版本、Prompt 版本和评测结果。
- 上线前必须跑回归集，尤其是权限边界和错误恢复任务。
