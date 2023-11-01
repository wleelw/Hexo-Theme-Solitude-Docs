import {defineConfig} from 'vitepress'
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Solitude 主题官方文档",
    description: "Hexo-Theme-Solitude 主题的官方使用文档",
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {rel: 'icon', href: 'https://bu.dusays.com/2023/10/31/6540daf117d20.png'}
        ]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '王卓Sco', link: 'https://blog.wzsco.top/'}
        ],
        footer: {
            message: 'Released under the GNU License.',
            copyright: 'Copyright © 2023 by <a href="https://wzsco.top/">王卓Sco</a>'
        },
        sidebar: [
            {
                text: '',
                items: [
                    {text: '主题简介', link: '/intro'},
                ]
            },
            {
                text: '快速上手',
                items: [
                    {text: '安装主题 💻', link: '/init'},
                    {
                        text: '页面配置 📦', link: '', collapsed: false, items: [
                            {text: 'Front-Matter 基本认识', link: '/page/front-matter'},
                            {text: '404页面配置', link: '/page/404'},
                        ]
                    },
                    {
                        text: '全局配置 🧠', collapsed: false, items: [
                            {text: '基础配置', link: '/global/base'},
                            {text: '额外配置', link: '/global/extra'},
                        ]
                    },
                    {
                        text: '进阶配置 🚀', link: '', collapsed: false, items: [
                            {text: '全局配置', link: '/advanced/'},
                            {text: '友情链接配置', link: '/page/links'},
                            {text: '关于页面配置', link: '/page/about'},
                            {text: '朋友圈页面配置', link: '/page/circle'},
                            {text: '我的装备页面配置', link: '/page/equipment'},
                            {text: '即刻短文配置', link: '/page/says'},
                            {text: '工具箱页面配置', link: '/page/tlink'},
                            {text: '订阅页面配置', link: '/page/rss'},
                            {text: '文章统计页面配置', link: '/page/echart'},
                        ]
                    },
                    {
                        text: '常见问题 📖',
                        link: '/FAQ'
                    },
                ],
            },
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/DuoSco/Hexo-Theme-solitude'}
        ],
        editLink: {
            pattern: 'https://github.com/DuoSco/Hexo-Theme-Solitude-Docs/edit/main/:path'
        }
    },
    sitemap: {
        hostname: 'https://docs.wzsco.top'
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
        }
    }
})
