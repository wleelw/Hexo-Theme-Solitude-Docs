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
  api: https://circle.sondy.top/ # 朋友圈api
  error_img: /img/theme/avatar.png # 加载失败显示图片
  sort_rule: created # 排序规则（created:创建时间、updated:更新时间）
  expire_days: 1 # 缓存过期时间（天）
  page_init_number: 12 # 首次加载文章数，默认10
  page_turning_number: 12 # 翻页加载文章数，默认10
  angle: # 🎣钓鱼
    enable: true # 是否开启
  appjs: '/lib/circle.min.js' # 主题appjs
  bundlejs: '/lib/bundle.min.js' # 主题bundlejs
```

| 参数名                 | 说明                              |
|---------------------|---------------------------------|
| api                 | 朋友圈api                          |
| error_img           | 加载失败显示图片                        |
| sort_rule           | 排序规则（created:创建时间、updated:更新时间） |
| expire_days         | 缓存过期时间（天）                       |
| page_init_number    | 首次加载文章数，默认10                    |
| page_turning_number | 翻页加载文章数，默认10                    |
| angle               | 🎣钓鱼                            |
| appjs               | 主题appjs                         |
| bundlejs            | 主题bundlejs                      |

![](https://bu.dusays.com/2023/11/01/6541dd73b5c81.png)