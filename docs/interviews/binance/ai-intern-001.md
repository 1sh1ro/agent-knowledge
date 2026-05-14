---
title: Binance AI大模型实习面经
company: Binance
position: AI大模型实习
date: 2024-05
tags: [Binance, 大模型, Agent, Multi-Agent]
---

# Binance AI大模型实习面经

## 基本信息
- 公司: Binance
- 岗位: AI大模型实习
- 项目: Binance Accelerator Program - Institutional Business Development
- 时间: 2024年5月13日
- 结果: 待补充

## 技术栈
Python、Agent、Multi-Agent、RAG、Claude Code

## 面试流程
自我介绍 → 手撕算法 → 项目问答（拷打Agent技术）

---

## 面试内容

### 1. 自我介绍

### 2. 手撕算法：最小覆盖子串（Hard，LeetCode 76）

滑动窗口经典题。维护一个窗口 [left, right]，用哈希表记录 t 中字符频次需求，当窗口满足所有需求时尝试收缩左边界。

**时间**: O(n)，**空间**: O(字符集大小)

**核心思路**：
- right 扩张找可行解
- left 收缩优化解
- 用 need 和 have 两个哈希表管理窗口状态

```python
def minWindow(s: str, t: str) -> str:
    from collections import defaultdict
    need = defaultdict(int)
    for c in t:
        need[c] += 1
    
    left = right = 0
    have = defaultdict(int)
    have_count = 0
    need_count = len(need)
    
    res = ""
    min_len = float('inf')
    
    while right < len(s):
        c = s[right]
        right += 1
        if c in need:
            have[c] += 1
            if have[c] == need[c]:
                have_count += 1
        
        while have_count == need_count:
            if right - left < min_len:
                min_len = right - left
                res = s[left:right]
            c = s[left]
            left += 1
            if c in need:
                if have[c] == need[c]:
                    have_count -= 1
                have[c] -= 1
    
    return res
```

### 3. 项目问答（Agent技术深挖）

- 介绍你的 Agent 项目
- Multi-Agent 的协作机制是怎样的？
- RAG 在 Agent 中的作用？
- 如何设计 Agent 的工具调用？
- Claude Code 的使用经验？
