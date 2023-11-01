---
title: Front-Matter 基本认识
---
# Front-Matter 基本认识

---

`Front-matter` 是 `markdown` 文件最上方以 `---` 分隔的区域，用于指定个别档案的变数。其中又分为两种 markdown 里

1. Page Front-matter 用于页面配置
2. Post Front-matter 用于文章页配置

::: tip
如果标注可选的参数，可根据自己需要添加，不用全部都写在 markdown 里
:::

:::tabs  key:fm
== Page Front-matter (通用)
```markdown
---
title:
date:
updated:
type:
comment:
desc:
cover:
katex:
aside:
type:
---
```
== Post Front-matter (通用)
```markdown
---
title:
date:
type:
comment:
desc:
cover:
katex:
type:
cc:
locate:
---
```
== 即刻、工具箱 页面
```markdown
---
tipl:
tipr:
---
```
:::

| 写法     | 解释                                                    |
| ---------- | --------------------------------------------------------- |
| title    | 【必需】页面标题                                        |
| date     | 【必需】页面创建日期                                    |
| type     | 【必需】关于、友情链接、朋友圈、即刻、工具箱页面需要配置 |
| updated  | 【可选】页面更新日期                                    |
| desc     | 【可选】页面描述                                        |
| aside    | 【可选】是否开启侧边栏（默认true）                       |
| comment  | 【可选】显示页面评论模块(默认 true)                      |
| cover    | 【可选】页面顶部图片                                    |
| cc       | 【可选】版权（默认为原创）可选值：转载或翻译、原创                 |
| katex    | 【可选】显示 katex(默认 false)                          |
| locate   | 【可选】文章创作地点                                    |
| tipl     | 【可选】banner左下角文字                                |
| tipr     | 【可选】banner有下角文字                                |
| wechatOA | 【仅rss页】页面微信图标跳转地址                          |
| emailOA  | 【仅rss页】页面邮箱图标跳转地址                          |
| rssOA    | 【仅rss页】页面订阅图标跳转地址                          |