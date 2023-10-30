---
title: 主题安装
lang: zh-CN
layout: doc
---
## 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。


## 💻 安裝

### Git 安裝

在博客根目录里安装稳定版【推荐】（遇到网络问题使用代理加速：`https://ghproxy.com/`​）

```powershell
git clone -b main https://github.com/DuoSco/Hexo-theme-bugbear.git themes/bugbear
```

### 应用主题

修改hexo配置文件`_config.yml`​，把主题改为`bugbear`​

```yaml
theme: bugbear
```

### 更好的配置

* macos/linux  
  在博客根目录运行

```bash
cp -rf ./themes/bugbear/_config.yml ./_config.bugbear.yml
```

* windows  
  复制`/themes/bugbear/_config.yml`​此文件到hexo根目录，并重命名为`_config.bugbear.yml`​

‍
