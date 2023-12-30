# 常见问题 📖

## Error: Cannot find module 'katex'

缺少 `katex` 数学插件，在博客根目录里执行：

```shell
npm install @renbaoshuo/markdown-it-katex
```

## Error: Cannot find module 'cheerio'

缺少 `cheerio` 统计图插件，在博客根目录里执行：

```shell
npm install cheerio --save
```


## Cannot read properties of undefined (reading 'essay_list')

未配置即刻页面打开了即刻顶部。

先配置好即刻页面再开启。