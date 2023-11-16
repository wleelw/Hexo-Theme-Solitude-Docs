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

## site.categories.data is not iterable

Hexo 版本过高

主题还未适配 Hexo 7.0.0，如新安装的 Hexo-Cli，请在初始化完后手动将Hexo降级至 6.3.0 版本，我们将在不久后进行适配。

```shell
hexo init # 初始化
npm un hexo # 卸载最新的Hexo
npm install hexo@6.3.0 # 将 Hexo 手动降级至 6.3.0
```

## Cannot read properties of undefined (reading 'essay_list')

未配置即刻页面打开了即刻顶部。

先配置好即刻页面再开启。