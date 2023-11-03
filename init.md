---
title: 主题安装
lang: zh-CN
layout: doc
---

# 主题安装

## 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。


## 💻 安裝

::: tabs key:init

== Git
在博客根目录里安装稳定版【推荐】

```powershell
git clone -b main https://github.com/DuoSco/Hexo-theme-solitude.git themes/solitude
```
== NPM
在博客根目录里安装稳定版【推荐】（NPM发布均为稳定版）
```
npm install hexo-theme-solitude
```
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


## 安装必要插件

```shell
npm install cheerio --save       # 统计图
npm install hexo-wordcount --save	# 字数统计
npm un hexo-renderer-marked  # 卸载默认markdown解析插件
npm install hexo-renderer-markdown-it	# 安装另一个markdown解析器
npm install @renbaoshuo/markdown-it-katex	# katex 支持
```

## 本地启动

1. 修改站点配置文件_config.yml，不是主题配置文件。
  主题目前支持两种语言: zh-CN (简体中文)、en-US (美式英文)
  ```yaml
   language: zh-CN # 语言
  ```
2. 运行
  ```shell
  hexo g && hexo s
  ```
3. 预览
  ![]()

## 版本号释义

本项目的版本号为 X.Y.Z 格式，但与常见的语义化版本号规范有部分区别，具体释义如下：

X: 产品层面的重新设计，包含重大框架重构，会涉及大范围功能变更与配置变更，更新前必须阅读相关文档

Y: 包含中大型新功能，及无法向下兼容的功能变更与配置变更，更新该版本号可能会需要修改配置或者移除一些原功能

Z: 不仅包含 BUG 修复、小型新功能，还会包含可以向下兼容的原功能更新与配置变更，原则上更新该版本号无需额外动作