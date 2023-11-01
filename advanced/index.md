# 进阶配置 🚀

## 全局配置

### 评论

目前只支持`twikoo`并且非常完善，其他的评论系统正在路上……

```yaml
# 评论
comment:
  enable: false
  twikoo:
    envId: https://twikoo.sondy.top # twikoo 部署地址
    path: window.location.pathname  # 
    lang: 'zh-CN' # 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
```

::: tip
开启`twikoo`评论后默认开启热评功能。
:::