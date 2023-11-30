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

打开主题的配置项：
> 这个页面的打开按钮只出现在about页面，如果你没有开启about页面，那么这个页面也不会出现。

```yaml
# 关于界面
about:
  enable: false # 是否开启
  echarts: # 文章统计
    enable: false # 是否开启
    startDate: "2023-04-20 00:00:00" # 统计开始日期 格式：yyyy-MM-dd hh-mm-ss
    tagLength: 10 # 标签显示数量
    categoryParent: true # 显示父分类
```

| 参数             | 解释     |   
|----------------|--------|
| enable         | 是否开启   |   
| startDate      | 统计开始日期 |   
| tagLength      | 标签显示数量 |
| categoryParent | 显示父分类  |

![](https://bu.dusays.com/2023/11/01/654212c80adb6.png)

::: warning

有能力的可以到主题的`/scripts/helper/charts.js`进行自定义

:::