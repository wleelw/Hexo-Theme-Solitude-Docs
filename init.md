---
title: 主题安装
lang: zh-CN
layout: doc
---

# 主题安装

## 搭建 Hexo 博客

主题已经适配 Hexo 7.0.0，欢迎大家下载使用。

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。


## 💻 安裝

::: tabs key:init

== Git

- GitHub 稳定版【推荐】

在博客根目录里执行：

```powershell
git clone -b main https://github.com/DuoSco/Hexo-theme-solitude.git themes/solitude
```

- Gitee 稳定版

在博客根目录里执行：

```powershell
git clone -b master https://gitee.com/yife68/hexo-theme-solitude.git themes/solitude
```

- GitHub 开发版

如果想要安装比较新的 `dev` 分支，可以在博客根目录里执行：

```powershell
git clone -b dev https://github.com/DuoSco/Hexo-theme-solitude.git themes/solitude
```

- 升级方法

在主题目录下运行：

```powershell
git pull
```

**<font color="red">注意：</font>开发版可能存在 bug，追求稳定的请安装稳定版**

== NPM

- 稳定版【推荐】

在博客根目录里执行：

```powershell
npm install hexo-theme-solitude
```

- 升级方法

在博客根目录里执行：

```powershell
npm update hexo-theme-solitude
```

**<font color="red">注意：</font>此方法只支持 Hexo 5.0.0 以上版本。通过 npm 安装并不会在 themes 里生成主题文件夹，而是在 node_modules 里生成**

== Release

- GitHub【推荐】

下载 [最新 release 版本](https://github.com/DuoSco/Hexo-theme-solitude/releases) 解压到 `themes` 目录，并将解压出的文件夹重命名为 `solitude` 即可

- Gitee

下载 [最新 release 版本](https://gitee.com/yife68/hexo-theme-solitude/releases/) 解压到 `themes` 目录，并将解压出的文件夹重命名为 `solitude` 即可
:::

## 应用主题

修改hexo根目录配置文件`_config.yml`，把主题改为`solitude`​
```yaml
theme: solitude
```

## 更好的配置

::: tabs key:init
== Git
* macos/linux  
  在博客根目录运行

```bash
cp -rf ./themes/solitude/_config.yml ./_config.solitude.yml
```

* windows  
  复制`/themes/solitude/_config.yml`​此文件到hexo根目录，并重命名为`_config.solitude.yml`​
== NPM

* macos/linux  
  在博客根目录运行

```bash
cp -rf ./node_modules/hexo-theme-solitude/_config.yml ./_config.solitude.yml
```

* windows  
  复制`/node_modules/hexo-theme-solitude/_config.yml`​此文件到hexo根目录，并重命名为`_config.solitude.yml`​
:::

:::tip
- 根目录的 `_config.solitude.yml` 的配置都是高优先级，因此，渲染时会优先采用此文件的配置项内容
- 在更新主题时可能会存在配置变更，请注意更新说明，可能需要手动对 `_config.solitude.yml` 同步修改
- 想查看覆盖配置有没有生效，可以通过 `hexo g --debug` 查看命令行输出
:::


## 安装必要插件

```shell
npm install hexo-renderer-pug hexo-renderer-stylus --save # 安装pug、stylus插件
```

## 本地启动

::: danger
请确保 `source/_posts` 目录下至少有一篇文章，否则运行将会报错。
:::

1. 修改站点配置文件_config.yml，不是主题配置文件

主题目前支持两种语言: zh-CN (简体中文)、en-US (美式英文)

```yaml
  language: zh-CN # 语言
```

2. 运行

```shell
hexo clen && hexo g && hexo s --debug
```

## 版本号释义

本项目的版本号为 X.Y.Z 格式，但与常见的语义化版本号规范有部分区别，具体释义如下：

X: 产品层面的重新设计，包含重大框架重构，会涉及大范围功能变更与配置变更，更新前必须阅读相关文档

Y: 包含中大型新功能，及无法向下兼容的功能变更与配置变更，更新该版本号可能会需要修改配置或者移除一些原功能

Z: 不仅包含 BUG 修复、小型新功能，还会包含可以向下兼容的原功能更新与配置变更，原则上更新该版本号无需额外动作