---
title: 字节跳动 - Agent 算法工程师
tags: [面经, 字节跳动, Agent]
---

# 字节跳动 - Agent 算法工程师

## 基本信息

- **公司**: 字节跳动
- **岗位**: Agent 算法工程师
- **时间**: 2024年1月
- **结果**: ✅ 已通过

## 面试流程

### 一面（技术面）- 60分钟

#### 1. 自我介绍
介绍了自己做的 Agent 相关项目，重点讲了 RAG 和 Tool Use 方面的经验。

#### 2. 项目深挖
- 你做的 RAG 系统用了什么检索策略？
- 向量检索和关键词检索的区别和优劣？
- 如何处理检索不到相关内容的情况？
- 你的 Agent 用到了哪些工具？是怎么设计的？

#### 3. 编程题
**题目**: 合并 K 个有序链表

```python
import heapq

def mergeKLists(lists):
    heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))

    dummy = ListNode(0)
    curr = dummy

    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))

    return dummy.next
```

#### 4. 基础知识
- Transformer 的 attention 机制说一下？
- 什么是 KV Cache？有什么作用？
- LLM 如何做推理加速？

---

### 二面（技术面）- 60分钟

#### 1. 项目深挖
- 你觉得当前 Agent 最大的瓶颈是什么？
- 如何让 Agent 更好地规划任务？
- 介绍一下 ReAct 和 CoT 的区别？

#### 2. 系统设计
**题目**: 设计一个 Agent 框架，支持：
- 任务规划
- 工具调用
- 记忆管理

需要说明核心组件和设计思路。

#### 3. 编程题
**题目**: LRU 缓存

```python
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.order = []

    def get(self, key: int) -> int:
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]

        self.cache[key] = value
        self.order.append(key)
```

---

### 三面（HR + 技术 leader）- 45分钟

#### 1. 职业规划
- 为什么想来做 Agent？
- 未来 3 年的职业规划是什么？

#### 2. 价值观问题
- 在字节工作强度大，能接受吗？
- 你觉得自己的优势是什么？

#### 3. 场景题
- 如果让你做一个能自动完成代码 review 的 Agent，你会怎么设计？

---

## 面试建议

1. **项目一定要深入**: 面试官会深挖项目细节，至少准备 2-3 个亮点
2. **算法题偏中等难度**: LeetCode Hot100 足够
3. **多关注前沿**: 平时多看论文，了解 Agent 最新进展
4. **系统设计很重要**: 二面大概率会问，要提前准备

## 相关题目

- [LRU Cache 实现](../qna/algorithms/cache.md)
- [RAG 系统设计](../knowledge/engineering/rag.md)
- [ReAct 推理模式](../knowledge/agent-architecture/react.md)
