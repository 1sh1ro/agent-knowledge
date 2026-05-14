---
title: 贡献指南
---

# 🤝 贡献指南

感谢你愿意为 Agent 面试知识库贡献内容！

## 📝 贡献方式

### 方式一：提交面经

最简单的方式是通过 GitHub Issues 提交：

1. 点击 [New Issue](https://github.com/YOUR_USERNAME/agent-interview-wiki/issues/new?template=interview.yml)
2. 选择「面经分享」模板
3. 填写相关信息
4. 提交即可

### 方式二：补充知识库

如果你想直接贡献内容：

1. Fork 本仓库
2. 在对应目录下添加内容
3. 提交 Pull Request

### 方式三：添加面试题

发现新的高频题目？快来补充！

1. Fork 本仓库
2. 在 `docs/qna/` 对应目录下添加题目
3. 提交 Pull Request

## 📁 目录结构

```
docs/
├── interviews/          # 面经
│   ├── bytedance/     # 字节
│   ├── alibaba/       # 阿里
│   └── openai/        # OpenAI
├── knowledge/         # 知识库
│   ├── llm-basics/    # LLM 基础
│   ├── agent-architecture/  # Agent 架构
│   └── engineering/   # 工程实践
├── qna/              # 面试题库
│   ├── algorithms/    # 算法
│   ├── system-design/ # 系统设计
│   └── behavioral/   # 行为面
└── resources/        # 学习资源
```

## ✍️ 格式规范

### 面经格式

```markdown
---
title: 面经标题
company: 公司名称
position: 岗位名称
date: 面试时间
tags: [公司, 岗位, 面试类型]
---

# 面经标题

## 基本信息
- 公司: xxx
- 岗位: xxx
- 时间: xxx
- 结果: xxx

## 面试流程

### 一面（技术面）
1. 自我介绍
2. 项目介绍
3. ...

### 二面（技术面）
...
```

### 知识库格式

```markdown
---
title: 知识点标题
tags: [LLM基础, Agent架构]
---

# 知识点标题

## 概述
...

## 核心概念
...

## 常见问题
...
```

## 🏷️ 标签系统

请使用标准化的标签：

| 类别 | 可用标签 |
|------|----------|
| 公司 | OpenAI, 字节, 阿里, 腾讯, 百度, 创业公司 |
| 岗位 | 算法工程师, 应用工程师, 研究员, 全栈 |
| 难度 | ⭐, ⭐⭐, ⭐⭐⭐ |
| 类型 | LLM基础, Agent架构, 工程实践 |

## ✅ 审核流程

1. 提交 PR 后会自动进行基础检查
2. 维护者会在 48 小时内审核
3. 通过后合并到 main 分支
4. 自动触发部署更新网站

## ❓ 常见问题

### Q: 我的面经需要包含哪些内容？
A: 至少包含基本信息（公司、岗位、时间）和面试流程（主要问题）。

### Q: 可以匿名提交吗？
A: 可以，提交时可以不透露个人信息。

### Q: 内容会经过审核吗？
A: 会，主要检查格式规范和信息准确性。

## 📞 联系方式

有问题？欢迎：
- [提交 Issue](https://github.com/YOUR_USERNAME/agent-interview-wiki/issues)
- [发起 Discussion](https://github.com/YOUR_USERNAME/agent-interview-wiki/discussions)

---

再次感谢你的贡献！ 🎉
