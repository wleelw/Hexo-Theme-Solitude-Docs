---
title: 文章统计页面配置
---
# 页面配置📦

## 文章统计页面配置

::: tip

先安装echartjs
```shell
npm install echart
```

:::
可以先去了解一下`echart.js`怎么工作的。

1. 在cmd面板中输入以下命令，它将在source文件夹下生成`echart`目录，其中包含`index.md`​文件。

    ```shell
    hexo new page echart
    ```

   将`index.md`​中的内容替换成以下：

    ```markdown
    ---
    title: 文章统计
    date: 2023-10-31 22:15:21
    type: echarts
    comment: false
    aside: false
    ---
    ```
2. 以下是我的模版，按需修改，将其放置在`echart/index.md`中。
    ```markdown
    <!-- 文章发布统计 -->
    <div id="posts-chart" data-start="2023-01" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
    <!-- 最高文章数的 10 个标签 -->
    <div id="tags-chart" data-length="10" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
    <!-- 分类文章统计 -->
    <div id="categories-chart" data-parent="true" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
    ```
![](https://bu.dusays.com/2023/11/01/654212c80adb6.png)

::: warning

有能力的可以到主题的`/scripts/helper/charts.js`进行自定义

:::