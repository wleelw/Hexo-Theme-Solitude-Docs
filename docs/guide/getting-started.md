---
title: 主题安装
lang: zh-CN
layout: doc
---

# 主题安装

## 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

## 作者的话

请注意`_config.solitude.yml`中的配置优先级大于主题的`_config.yml`
，所以更新主题后需要比对主题文件夹中的`theme/solitude/_config.yml`
文件内容，一般在[release](https://github.com/DuoSco/Hexo-theme-solitude/releases)的说明里会特别提示或给出配置文件版本对比diff，同步修改原配置文件即可。

::: tip

致主题的新用户，

欢迎使用我们的主题！在开始之前，请阅读以下优化后的指南，它经过多次精心打磨，详细说明了大部分功能，希望能帮助你节省时间并避免困扰：

- 请仔细阅读指南中的内容，这样可以确保了解每个功能的具体说明，节约你自己和他人的时间。

- 提到的"站点配置"指的是你 Hexo 博客目录下的 _config.yml 文件，而"主题配置"指的是 theme/solitude/_config.yml 或者 _
  config.solitude.yml 文件，请确保正确区分。

- 所提及的 "source" 目录均指的是你博客目录下的 source 文件夹，我们不建议直接修改主题内的 source 目录。

- 在每次执行 hexo g 或 hexo s 前，最好先运行 hexo clean 命令清除本地缓存，以确保操作的准确性。

- 页面的显示结果以本地 hexo s 运行结果为准。如果你在部署后发现异常，大部分情况下是由于线上缓存引起的，请在确认没有报错的情况下，耐心等待一段时间后再次检查，问题应该会得到解决。

- 由于主题版本之间可能存在配置差异，请以最新版本为准查看本指南中的内容。

感谢你选择我们的主题，希望这份优化过的指南能帮助你更好地使用它。如果你有任何问题，请随时向我们咨询，欢迎加入我们的讨论QQ群。

:::

本指南并未包含所有配置的说明，但几乎每个配置在主题配置中都有注释，你可以结合指南和注释一起参考使用。

此外，本指南仅包含主题范围内的使用说明。如果涉及到 Hexo 的使用或 Hexo 插件的使用，请参阅它们各自的文档。

若存在其他主题相关的疑问请在 [issues](https://github.com/DuoSco/Hexo-theme-solitude/issues) 留言。

## 主题安装

::: tip
Solitude主题拥有Main(稳定)和Dev(测试)两种版本, 我们推荐你安装使用Github(稳定)以获得最佳的主题体验
:::

::: tabs key:init

== Git

- GitHub 稳定版【推荐】

在博客根目录里执行：

```sh
$ git clone -b main https://github.com/DuoSco/Hexo-theme-solitude.git themes/solitude
```

- Gitee 稳定版

在博客根目录里执行：

```sh
$ git clone -b master https://gitee.com/yife68/hexo-theme-solitude.git themes/solitude
```

- GitHub 开发版

如果想要安装比较新的 `dev` 分支，可以在博客根目录里执行：

```sh
$ git clone -b dev https://github.com/DuoSco/Hexo-theme-solitude.git themes/solitude
```

- 升级方法

在主题目录下运行：

```sh
$ git pull
```

**<font color="red">注意：</font>开发版可能存在 bug，追求稳定的请安装稳定版**

== NPM

- 稳定版【推荐】

在博客根目录里执行：

```sh
$ npm install hexo-theme-solitude
```

- 升级方法

在博客根目录里执行：

```sh
$ npm update hexo-theme-solitude
```

**<font color="red">注意：</font>此方法只支持 Hexo 5.0.0 以上版本。通过 npm 安装并不会在 themes 里生成主题文件夹，而是在
node_modules 里生成**

== Release

- GitHub【推荐】

下载 [最新 release 版本](https://github.com/DuoSco/Hexo-theme-solitude/releases) 解压到 `themes`
目录，并将解压出的文件夹重命名为 `solitude` 即可

- Gitee

下载 [最新 release 版本](https://gitee.com/yife68/hexo-theme-solitude/releases/) 解压到 `themes`
目录，并将解压出的文件夹重命名为 `solitude` 即可
:::

## 应用主题

修改hexo根目录配置文件`_config.yml`，把主题改为`solitude`​

```yaml
theme: solitude
```

## 安装 Pug 和 Stylus 渲染插件

```shell
$ npm install hexo-renderer-pug hexo-renderer-stylus --save
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

```sh
$ hexo clen && hexo g && hexo s --debug
```

## 更好的配置

::: tabs key:init
== Git

* macos/linux  
  在博客根目录运行

```sh
$ cp -rf ./themes/solitude/_config.yml ./_config.solitude.yml
```

* windows  
  复制`/themes/solitude/_config.yml`​此文件到hexo根目录，并重命名为`_config.solitude.yml`​
  == NPM

* macos/linux  
  在博客根目录运行

```sh
$ cp -rf ./node_modules/hexo-theme-solitude/_config.yml ./_config.solitude.yml
```

* windows  
  复制`/node_modules/hexo-theme-solitude/_config.yml`​此文件到hexo根目录，并重命名为`_config.solitude.yml`​
  :::

:::tip

- 根目录的 `_config.solitude.yml` 的配置都是高优先级，因此，渲染时会优先采用此文件的配置项内容
- 在更新主题时可能会存在配置变更，请注意更新说明，可能需要手动对 `_config.solitude.yml` 同步修改
- 想查看覆盖配置有没有生效，可以通过 `hexo g --debug` 查看命令行输出

:::

## 视频教程

::: danger 视屏教程
如果无法通过文档成功配置，这里有视频 [Solitude 主题使用教程](https://space.bilibili.com/1329819902/channel/seriesdetail?sid=3761808)
:::

## 版本号释义

本项目的版本号为 X.Y.Z 格式，但与常见的[语义化版本号规范](https://semver.org/lang/zh-CN/)有部分区别，具体释义如下：

- X: 产品层面的重新设计，包含重大框架重构，会涉及大范围功能变更与配置变更，更新前必须阅读相关文档

- Y: 包含中大型新功能，及无法向下兼容的功能变更与配置变更，更新该版本号可能会需要修改配置或者移除一些原功能

- Z: 不仅包含 BUG 修复、小型新功能，还会包含可以向下兼容的原功能更新与配置变更，原则上更新该版本号无需额外动作