---
title: SFT
---

# SFT（Supervised Fine-Tuning）

SFT 是后训练的第一步，目标是让基座模型学会按照指令、对话格式、角色设定和业务规范输出。对 Agent 来说，SFT 还可以让模型学习工具调用格式、任务分解方式和多轮执行轨迹。

## 1. SFT 训练目标

SFT 本质上仍然是监督学习：给定 prompt 和标准回答，让模型最大化标准回答 token 的条件概率。

```text
prompt + instruction + context -> target response
```

关键不是“让模型记住答案”，而是让模型学会：

- 理解指令意图。
- 遵守输出格式。
- 按业务口径表达。
- 在信息不足时澄清。
- 在需要外部信息时调用工具或检索。

## 2. 数据类型

| 类型 | 示例 | 适用场景 |
| --- | --- | --- |
| 单轮指令 | 问答、摘要、分类、改写 | 基础助手能力 |
| 多轮对话 | 用户追问、上下文继承、澄清 | 客服、助手、Copilot |
| 工具调用样本 | function call JSON、参数校验 | Agent Tool Use |
| ReAct 轨迹 | Thought/Action/Observation/Answer | 任务规划和工具链 |
| 代码/数据任务 | 代码生成、SQL、表格分析 | AI coding、数据分析 |
| 拒答/安全样本 | 隐私、越权、危险请求 | 安全对齐 |

## 3. 数据筛选

高质量 SFT 数据通常满足：

- 指令清晰，答案直接解决问题。
- 格式稳定，但不过度模板化。
- 包含真实业务场景和边界条件。
- 有足够多样性，覆盖长尾问题。
- 不含隐私、广告、错误事实和无意义客套。
- 对工具调用样本，参数必须能通过 schema 校验。

常见清洗规则：

1. 去重：URL、标题、正文相似度、embedding 相似度。
2. 去噪：删除广告、联系方式、无关免责声明。
3. 脱敏：姓名、手机号、邮箱、内部系统、客户信息。
4. 格式统一：角色、轮次、工具调用、最终答案字段标准化。
5. 难度分层：简单指令、复杂推理、多工具任务分开统计。

## 4. Agent SFT 样本格式

```json
{
  "messages": [
    {"role": "user", "content": "帮我查一下这个订单为什么退款失败"},
    {"role": "assistant", "tool_call": {"name": "get_order", "arguments": {"order_id": "xxx"}}},
    {"role": "tool", "name": "get_order", "content": "退款失败原因：超过售后期限"},
    {"role": "assistant", "content": "退款失败是因为订单已超过售后期限。你可以..."}
  ],
  "metadata": {
    "domain": "customer_support",
    "tools": ["get_order"],
    "risk_level": "low"
  }
}
```

## 5. 训练与评测指标

| 指标 | 含义 |
| --- | --- |
| Train/Eval loss | 拟合程度，但不能单独代表可用性 |
| Format accuracy | 输出是否符合要求格式 |
| Tool-call accuracy | 工具选择和参数生成是否正确 |
| Task success rate | 端到端任务是否完成 |
| Refusal precision/recall | 应拒答时拒答，不该拒答时不过度拒答 |
| Regression score | 新模型是否破坏旧能力 |

## 6. 常见坑

- 只堆数量，不控制数据质量。
- 把错误答案、幻觉内容、平台搬运内容混进训练集。
- 工具调用样本只写成功路径，缺少错误恢复和重试。
- 过度依赖固定模板，导致模型泛化差。
- 只看 loss，不做人评、任务评测和回归测试。
- 没有记录数据版本，线上问题无法追溯。

## 7. 面试要点

1. SFT 数据如何筛选和清洗？
2. 为什么 SFT 后模型有时会变“啰嗦”或“模板化”？
3. Agent 的工具调用样本如何构造？
4. 如何处理 SFT 数据中的隐私和版权问题？
5. SFT、LoRA、全参微调分别适合什么场景？
6. 如何判断 SFT 是否真的提升了业务指标？
