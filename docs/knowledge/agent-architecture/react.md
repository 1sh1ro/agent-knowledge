---
title: ReAct 推理模式
tags: [Agent架构, 核心概念]
---

# ReAct 推理模式

## 概述

ReAct (Synergizing Reasoning and Acting in Language Models) 是斯坦福大学提出的 Agent 推理框架，让 LLM 能够交替进行「推理」和「行动」。

## 核心思想

```
思考 → 行动 → 观察 → 思考 → ...
   ↓
Reasoning (CoT)
   ↓
Acting (Tool Use)
```

## 框架流程

```python
def react_agent(question, tools, max_steps=5):
    """ReAct Agent 实现"""

    # 记忆上下文
    memory = []

    for step in range(max_steps):
        # 1. 思考：根据历史信息生成下一步行动
        thought = generate_thought(memory, question)

        # 2. 行动：决定使用哪个工具
        action = generate_action(thought, tools)

        # 3. 执行工具
        observation = execute_tool(action)

        # 4. 记录到记忆
        memory.append({
            'thought': thought,
            'action': action,
            'observation': observation
        })

        # 5. 检查是否完成
        if is_answer(question, thought):
            return format_answer(thought)

    return "无法回答"
```

## Prompt 模板

```markdown
你是一个人工智能助手。请按照以下格式回答问题：

问题: {question}

你可以通过以下工具获取信息：
- search(query): 搜索互联网
- calculator(expression): 计算数学表达式
- lookup(keyword): 在知识库中查找

请按以下格式回答：
思考: {你的思考过程}
行动: {你选择使用的工具和参数}
观察: {工具返回的结果}

... (重复上述步骤直到得到答案)

最终答案: {你的回答}
```

## 示例

```
问题: 2023年诺贝尔物理学奖获得者是谁？

思考: 用户询问2023年诺贝尔物理学奖获得者。我需要先搜索获取这个信息。
行动: search("2023年诺贝尔物理学奖获奖者")
观察: 2023年诺贝尔物理学奖授予了皮埃尔·阿戈斯蒂尼、费伦茨·克劳斯和安妮·吕利耶。

思考: 我已经获得了答案。2023年诺贝尔物理学奖授予了三位科学家。
最终答案: 2023年诺贝尔物理学奖授予了皮埃尔·阿戈斯蒂尼、费伦茨·克劳斯和安妮·吕利耶三位科学家。
```

## ReAct vs 其他方法

| 方法 | 特点 | 适用场景 |
|------|------|----------|
| ReAct | 推理+行动交替 | 需要外部知识的任务 |
| CoT | 仅推理 | 有明确答案的推理任务 |
| ToT | 树搜索推理 | 复杂规划任务 |
| Reflexion | 自我反思 | 需要持续改进的任务 |

## 面试常见问题

### Q: ReAct 的优势？

1. **可解释性强**: 思考过程透明
2. **减少幻觉**: 通过工具获取真实信息
3. **灵活性高**: 可接入任意工具

### Q: ReAct 适合哪些场景？

- 需要搜索/计算的任务
- 需要访问实时信息的任务
- 需要多步推理的复杂问题

## 参考资料

- [ReAct 论文](https://arxiv.org/abs/2210.03629)
- [LangChain ReAct](https://python.langchain.com/docs/modules/agents/how_to/custom_agent_with_tool_retrieval)
