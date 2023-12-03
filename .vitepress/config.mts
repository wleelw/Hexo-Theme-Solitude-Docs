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
        ],
        [
            'script',
            {charset: "UTF-8", id: "LA_COLLECT", src: "//sdk.51.la/js-sdk-pro.min.js"}
        ],
        [
            'script',
            {},
            `LA.init({id:"3F15j2vtdTo7PPcN",ck:"3F15j2vtdTo7PPcN"})`
        ]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '作者博客', link: 'https://blog.wzsco.top/'}
        ],
        footer: {
            message: 'Released under the GNU License.',
            copyright: 'Copyright © 2023 by <a href="https://wzsco.top/">王卓Sco</a>'
        },
        sidebar: [
            {
                text: '',
                items: [
                    {text: '主题简介', link: '/guide/what-is-solitude'},
                ]
            },
            {
                text: '快速上手',
                items: [
                    {text: '安装主题 💻', link: '/guide/getting-started'},
                    {
                        text: '页面配置 📦', link: '', collapsed: false, items: [
                            {text: 'Front-Matter', link: '/guide/front-matter'},
                            {text: '标签页、分类页和404页面', link: '/guide/tag-and-category'},
                        ]
                    },
                    {
                        text: '全局配置 🧠', collapsed: false, items: [
                            {text: '基本配置', link: '/guide/global-base'},
                            {text: '额外配置', link: '/guide/global-extra'},
                        ]
                    },
                    {
                        text: '进阶配置 🚀', link: '', collapsed: false, items: [
                            {text: '全局配置', link: '/guide/advanced'},
                            {text: '友情链接配置', link: '/page/links'},
                            {text: '关于页面配置', link: '/page/about'},
                            {text: '朋友圈页面配置', link: '/page/circle'},
                            {text: '我的装备页面配置', link: '/page/equipment'},
                            {text: '即刻短文配置', link: '/page/says'},
                            {text: '工具箱页面配置', link: '/page/tlink'},
                            {text: '订阅页面配置', link: '/page/rss'},
                            {text: '文章统计页面配置', link: '/page/echart'},
                            {text: '豆瓣页面配置', link: '/page/douban'},
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
            pattern: 'https://github.com/wleelw/Hexo-Theme-Solitude-Docs/edit/main/:path',
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: { // Root search locale
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    sitemap: {
        hostname: 'https://docs.wzsco.top'
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
        },
        container: {
            tipLabel: '温馨提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'

        }
    }
})
