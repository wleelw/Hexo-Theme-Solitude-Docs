---
title: 标签页、分类页和404页面
---

# 页面配置

## 标签页和分类页

> 主题已内置标签页和分类页，无需额外配置，只需在主题配置文件中开启。

```yaml
# 页面页默认设置
page:
  error: true  # 404页面
  tags: true # 标签页
  categories: true # 分类页
  default: # 默认值
    cover: /img/default.png # 默认图片
```

| 参数         | 释义             |
|------------|----------------|
| error      | 是否开启主题内置的404页面 |
| tags       | 是否开启标签页        |
| categories | 是否开启分类页        |

## 404页面

> 主题内置了一个简单的 404 页面，可在设置中开启 本地预览时，访问出错的网站是不会跳到 404 页面的。

如需本地预览，请访问 `http://localhost:4000/404.html`。

![404](https://bu.dusays.com/2023/11/01/6541bb4fd9f9a.png)