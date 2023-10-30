import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Solitude 主题官方文档",
  description: "Hexo-Theme-Solitude 主题的官方使用文档",
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: 'https://bu.dusays.com/2023/10/30/653f55e01aa83.png' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '王卓Sco', link: 'https://blog.sondy.top/' }
    ],
    footer: {
      message: 'Released under the GNU License.',
      copyright: 'Copyright © 2023 by <a href="https://sondy.top/">王卓Sco</a>'
    },
    sidebar: [
      {
        text: '',
        items: [
          { text: '主题简介', link: '/intro' },
        ]
      },
      {
        text: '快速上手',
        items: [
          { text: '安装主题 💻', link: '/init' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DuoSco/Hexo-Theme-solitude' }
    ],
    editLink: {
      pattern: 'https://github.com/DuoSco/Hexo-Theme-Solitude-Docs/edit/main/:path'
    }
  },
  sitemap: {
    hostname: 'https://solitude-docs.sondy.top'
  },
})
