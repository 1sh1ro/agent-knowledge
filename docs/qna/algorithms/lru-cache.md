---
title: 算法面试题 - LRU Cache
tags: [算法, 缓存, 中等]
---

# LRU Cache 实现

## 题目描述

设计并实现一个 LRU (Least Recently Used) 缓存。

实现 `LRUCache` 类：
- `LRUCache(int capacity)` 初始化 LRU 缓存
- `int get(int key)` 获取值，不存在返回 -1
- `void put(int key, int value)` 插入/更新值，超容量时淘汰最久未使用的

要求：`get` 和 `put` 都是 O(1) 时间复杂度。

## 解题思路

使用 **哈希表 + 双向链表**：
- 哈希表：O(1) 查找
- 双向链表：O(1) 插入/删除

```
最近使用 →  1 ←→ 2 ←→ 3 ←→ 4 ←→ 最久未使用
                   ↓
              添加新节点
                   ↓
           删除尾部 + 头部插入
```

## Python 实现

```python
class LRUCache:

    class Node:
        def __init__(self, key=0, val=0):
            self.key = key
            self.val = val
            self.prev = None
            self.next = None

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # key -> Node
        # 哨兵节点
        self.head = self.Node()  # 头部是最近使用的
        self.tail = self.Node()  # 尾部是最久未使用的
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        """从链表中移除节点"""
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add_to_head(self, node):
        """添加到头部"""
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        node = self.cache[key]
        # 移动到头部
        self._remove(node)
        self._add_to_head(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add_to_head(node)
        else:
            node = self.Node(key, value)
            self.cache[key] = node
            self._add_to_head(node)

            if len(self.cache) > self.capacity:
                # 淘汰尾部节点
                remove_node = self.tail.prev
                self._remove(remove_node)
                del self.cache[remove_node.key]
```

## 复杂度分析

| 操作 | 时间复杂度 | 空间复杂度 |
|------|-----------|-----------|
| get | O(1) | O(capacity) |
| put | O(1) | O(capacity) |

## 变种题

### 1. LFU Cache
最少使用缓存，淘汰使用频率最低的。

### 2. 带 TTL 的 Cache
每个 key 有过期时间。

### 3. 并发 Cache
支持多线程访问，需要加锁。

## 面试常见追问

1. **为什么要用双向链表？单向不行吗？**
   - 单向链表删除节点需要 O(n) 遍历
   - 双向链表可以直接拿到前驱节点

2. **为什么用哨兵节点？**
   - 简化边界处理（空链表、删除第一个节点等）
   - 代码更简洁

3. **Python 中可以用 OrderedDict 吗？**
   - 可以，Python 3.7+ 的 dict 保持插入顺序
   - OrderedDict 有 `move_to_end()` 方法

```python
from collections import OrderedDict

class LRUCache(OrderedDict):
    def __init__(self, capacity):
        super().__init__()
        self.capacity = capacity

    def get(self, key):
        if key not in self:
            return -1
        self.move_to_end(key)
        return self[key]

    def put(self, key, value):
        if key in self:
            self.move_to_end(key)
        self[key] = value
        if len(self) > self.capacity:
            self.popitem(last=False)
```
