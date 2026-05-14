---
title: 链表
---

# 链表

## 高频题目

### 反转链表
```python
def reverseList(head):
    prev = None
    curr = head
    while curr:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    return prev
```

### 检测环
- 快慢指针

### 合并有序链表
- 递归或迭代

## 技巧

| 技巧 | 说明 |
|------|------|
| 虚拟头节点 | 简化边界处理 |
| 快慢指针 | 找中点、检测环 |
| 递归 | 反转、合并 |
