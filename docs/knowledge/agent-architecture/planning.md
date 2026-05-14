---
title: 规划与分解
---

# 规划与分解（Planning & Decomposition）

## Task Decomposition

### 方法

| 方法 | 描述 | 示例 |
|------|------|------|
| Chain-of-Thought | 逐步推理 | 数学题分步解 |
| Least-to-Most | 从简单到复杂 | 先解决子问题 |
| Decomposed Prompting | 显式分解 | 将任务拆分为子任务 |

### 代码示例

```python
# 任务分解示例
def solve_complex_task(task):
    # 1. 分解任务
    subtasks = decompose(task)
    
    # 2. 逐个解决
    results = []
    for subtask in subtasks:
        result = solve(subtask)
        results.append(result)
    
    # 3. 合并结果
    return combine(results)
```

## Planning 方法

### 1. ReAct
- Thought → Action → Observation 循环

### 2. Plan-and-Solve
- 先制定计划，再执行

### 3. Reflection
- 执行后反思，迭代改进

## 面试要点

1. **什么时候需要任务分解？**
   - 复杂任务、多步骤任务

2. **分解的粒度如何把握？**
   - 太细效率低，太粗效果差
