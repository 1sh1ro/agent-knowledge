/**
 * GitHub Issues 同步脚本
 * 将带标签的 Issues 同步到 docs 目录
 */

import { Octokit } from '@octokit/rest';
import fs from 'fs/promises';
import path from 'path';

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

// 获取仓库信息
const REPO_OWNER = process.env.GITHUB_REPOSITORY.split('/')[0];
const REPO_NAME = process.env.GITHUB_REPOSITORY.split('/')[1];

// 标签到目录的映射
const LABEL_DIR_MAP = {
  '面经': 'docs/interviews/imported/',
  '面试题': 'docs/qna/imported/',
  '知识库': 'docs/knowledge/imported/'
};

async function syncIssues() {
  console.log('开始同步 Issues...');

  // 获取所有已关闭的 Issues
  const { data: issues } = await octokit.issues.listForRepo({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    state: 'closed',
    labels: Object.keys(LABEL_DIR_MAP).join(',')
  });

  console.log(`找到 ${issues.length} 个待同步的 Issues`);

  for (const issue of issues) {
    // 检查是否已经同步（通过检查是否已有对应文件）
    const slug = issue.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const labels = issue.labels.map(l => l.name);
    let targetDir = 'docs/imported/';

    for (const [label, dir] of Object.entries(LABEL_DIR_MAP)) {
      if (labels.includes(label)) {
        targetDir = dir;
        break;
      }
    }

    const filePath = path.join(targetDir, `${issue.number}-${slug}.md`);

    // 生成 Markdown 内容
    const content = generateMarkdown(issue);

    // 写入文件
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, content, 'utf-8');

    console.log(`已同步: ${issue.title} -> ${filePath}`);
  }

  console.log('同步完成!');
}

function generateMarkdown(issue) {
  const labels = issue.labels.map(l => l.name).join(', ');

  return `---
title: "${issue.title}"
labels: [${labels}]
issue_number: ${issue.number}
created_at: ${issue.created_at}
synced_at: ${new Date().toISOString()}
---

# ${issue.title}

${issue.body}

---

来源: [#${issue.number}](${issue.html_url})
`;
}

// 执行
syncIssues().catch(console.error);
