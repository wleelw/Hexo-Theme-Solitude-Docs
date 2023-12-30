---
title: 豆瓣书影页面配置
---

# 页面配置 📦

## 豆瓣书影页面配置

::: tip

先安装hexo-douban，注意目前本主题仅支持此款豆瓣插件。

```shell
npm install hexo-douban --save
```

GitHub库：https://github.com/mythsman/hexo-douban
:::

1. 将下面的配置写入站点的配置文件 `_config.yml` 里。(注意不是主题的配置文件)

```yml
douban:
  id: 267467955
  builtin: true
  item_per_page: 10
  meta_max_line: 4
  customize_layout: page
  book:
    path: books/index.html
    title: 'This is my book title'
    quote: 'This is my book quote'
    option:
      type: douban
      cover: '/img/default.png'
      desc: 豆瓣页测试
      leftend: 测试内容
      rightend: 这是测试页面
  movie:
    path: movies/index.html
    title: 'This is my movie title'
    quote: 'This is my movie quote'
    option:
  game:
    path: games/index.html
    title: 'This is my game title'
    quote: 'This is my game quote'
    option:
  song:
    path: songs/index.html
    title: 'This is my song title'
    quote: 'This is my song quote'
    option:
  timeout: 10000 
```

| 参数 | 释义 |
| :----: | ---- |
| id | 你的豆瓣ID(纯数字格式，不是自定义的域名)。|
| builtin | 是否将`hexo douban`命令默认嵌入进hexo g、hexo s，使其自动执行hexo douban 命令。 |
| item_per_page | 每页展示的条目数，默认 10 。 |
| meta_max_line | 每个条目展示的详细信息的最大行数，超过该行数则会以 "..." 省略，默认 4 。 |
| title | 页面的标题。 |
| quote | 写在页面开头的一段话,支持html语法。 |
| type | 是否使用顶部banner图，使用则为：`douban`，并配置下面四项内容 |
| cover | banner背景图 |
| desc | banner大标题 |
| leftend | banner左下tips |
| rightend | banner右下tips |
| timeout | 爬取数据的超时时间，默认是 10000ms ,如果在使用时发现报了超时的错(ETIMEOUT)可以把这个数据设置的大一点。 |

2. 如果只想显示某一个页面(比如movie)，那就把其他的配置项注释掉即可。

::: tip

`book`：豆瓣书籍页；`movie`：豆瓣电影页；`game`：豆瓣游戏页；`song`：豆瓣歌曲页。

:::

3. 关于你的id获取：访问“我的豆瓣“时，点击用户头像另存为时，会显示默认文件名如ul267467955-2。中间数字267467955即为豆瓣数字ID。

![](https://z1.ax1x.com/2023/12/02/piscZp8.png)