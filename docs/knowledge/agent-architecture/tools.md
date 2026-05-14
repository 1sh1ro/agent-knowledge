---
title: Tool Use（工具调用）
---

# Tool Use（工具调用）

## 基本概念

Agent 通过调用外部工具来扩展能力。

## 工具类型

| 类型 | 示例 | 用途 |
|------|------|------|
| 搜索工具 | Google Search | 获取实时信息 |
| 计算工具 | Calculator | 精确计算 |
| API 工具 | Weather API | 获取特定数据 |
| 代码工具 | Python REPL | 执行代码 |

## 实现方式

### Function Calling

```json
{
  "name": "get_weather",
  "arguments": {
    "location": "北京",
    "date": "2024-01-01"
  }
}
```

### 流程

```
用户提问
  ↓
模型判断是否需要工具
  ↓
生成工具调用（JSON）
  ↓
执行工具
  ↓
将结果返回给模型
  ↓
生成最终回答
```

## 面试要点

1. **Tool Use 的核心挑战？**
   - 工具选择、参数生成、错误处理

2. **如何评估 Tool Use 效果？**
   - 调用准确率、任务完成率
