import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent 面试知识库',
  description: '收集 Agent 相关岗位面试经验、知识点整理、面试题库和学习资源',
  srcDir: '.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Agent 面试知识库',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '内容板块',
        items: [
          { text: '📝 面经分享', link: '/interviews/' },
          { text: '🧠 知识库', link: '/knowledge/' },
          { text: '❓ 面试题库', link: '/qna/' },
          { text: '📚 学习资源', link: '/resources/' },
          { text: '👥 贡献者', link: '/contributors/' }
        ]
      },
      { text: '贡献指南', link: '/guide/contributing' }
    ],
    sidebar: {
      '/interviews/': [
        {
          text: '面经分享',
          items: [
            { text: 'Overview', link: '/interviews/' },
            { text: '字节跳动', link: '/interviews/bytedance/' },
            { text: '阿里巴巴', link: '/interviews/alibaba/' },
            { text: 'OpenAI', link: '/interviews/openai/' }
          ]
        }
      ],
      '/knowledge/': [
        {
          text: '知识库',
          items: [
            { text: 'Overview', link: '/knowledge/' },
            { text: 'LLM 基础', link: '/knowledge/llm-basics/' },
            { text: 'Agent 架构', link: '/knowledge/agent-architecture/' },
            { text: '工程实践', link: '/knowledge/engineering/' }
          ]
        }
      ],
      '/qna/': [
        {
          text: '面试题库',
          items: [
            { text: 'Overview', link: '/qna/' },
            { text: '算法编程', link: '/qna/algorithms/' },
            { text: '系统设计', link: '/qna/system-design/' },
            { text: '行为面', link: '/qna/behavioral/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME/agent-interview-wiki' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Agent Interview Wiki Contributors'
    }
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  }
})
