---
title: 朋友圈页面配置
---
# 页面配置📦

## 朋友圈页面配置

> 注意，此部分需要已部署好frcircle后端，请按照frcircle[官方文档](https://fcircle-doc.yyyzyyyz.cn/)将后端部署好。

1. 在cmd面板中输入以下命令，它将在source文件夹下生成`moments`目录，其中包含`index.md`​文件。

    ```shell
    hexo new page moments
    ```

   将`index.md`​中的内容替换成以下：

    ```markdown
    ---
    title: 鱼塘
    date: 2023-10-31 22:24:22
    type: circle
    cover: 自己的banner背景图
    desc: 最新文章订阅
    leftend: ''
    rightend: ''
    ---
    ```
2. 修改主题配置文件`_config.solitude.yml`

```yaml
# 朋友圈配置
circle:
  api: https://circle.sondy.top/  # api 地址
  error_img: /img/theme/avatar.png # 头像加载失败显示错误图片
  sort_rule: created # 排序规则
  expire_days: 1 # 文章缓存天数
  page_init_number: 12 # 默认加载文章数，默认10
  page_turning_number: 12 # 加载更多文章数，默认10
  tips: # banner 左右下方提示文字
    left: ""
    right: "使用 友链朋友圈 订阅友链最新文章"
  angle: # 钓鱼
    enable: false
  appjs: '/js/circle.js' # 主题appjs
  bundlejs: '/lib/bundle.js' # 主题bundejs
```
![](https://bu.dusays.com/2023/11/01/6541dd73b5c81.png)