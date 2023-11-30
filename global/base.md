---
title: 基本配置
---

# 基本配置

## Site （网站信息）

修改网站各种资料，例如标题、副标题和邮箱等个人资料，请修改博客根目录的 `_config.yml` 。

```yaml
title: 王卓Sco  # 博客标题
subtitle: '宁静致远，热爱生活。'  # 博客子标题
description: '一个平凡但不拘于世的不羁少年' # 博客简介
keywords: '王卓Sco,Sco,Solitude'  # 博客关键词
author: 王卓Sco # 博主名称
language: zh-CN # 语言
timezone: 'Asia/Shanghai' # 时区（请自行查询）
```

## 导航菜单配置

修改 主题配置文件`_config.solitude.yml`

### 导航栏左侧

```yaml
  #导航栏左侧
  left:
    enable: true
    menu:
      项目:
        Solitude:
          icon: https://bu.dusays.com/2023/10/31/6540daf117d20.png
          url: https://github.com/DuoSco/Hexo-Theme-solitude
```

::: tip

```yaml
left:
  enable: true #false则关闭左侧，nav图标不显示
  menu:
    菜单名:
      item 0:
        icon: 显示图标
        url: http(s)链接
      item 1:
        icon: 显示图标
        url: http(s)链接 
```

:::

### 导航栏内容

```yaml
  # 导航栏内容
  menu:
    文库:
      url: false
      child:
        文章列表:
          url: /archives/
          icon: scoicon sco-folder-fill
        全部分类:
          url: /categories/
          icon: scoicon sco-checkbox-multiple-blank-fill
        全部标签:
          url: /tags/
          icon: scoicon sco-price-tag-fill
  #      友链:
  #        url: false
  #        child:
  #          鱼塘:
  #            url: /moments/
  #            icon: scoicon sco-wifi-fill
  #          友情链接:
  #            url: /links/
  #            icon: scoicon sco-group-fill
  #          宝藏博主:
  #            url: javascript:travelling()
  #            icon: scoicon sco-gift-fill
  #      我的:
  #        url: false
  #        child:
  #          装备:
  #            url: /equipment/
  #            icon: scoicon sco-laptop-line
  #          工具箱:
  #            url: /tlink/
  #            icon: scoicon sco-tools-fill
  #      关于:
  #        url: false
  #        child:
  #          关于本站:
  #            url: /about/
  #            icon: scoicon sco-contacts-fill
```

::: tip

```yaml
menu:
  菜单名:
    url: http(s)链接 # false则不需要跳转
    child: # 是否有子菜单，可不填
      menu 1:
      url: http(s)链接
      icon: 显示图标
```

:::

### 导航栏右侧

```yaml
  # 导航栏右侧快捷菜单 (true,false)
  right: # @todo 允许用户自定义
    travellings: true   #开往
    random: true        #随机文章
    console: true       #控制台
```

| 参数          | 解释       |
|-------------|----------|
| travellings | 显示开往按钮   |
| random      | 显示随机文章按钮 |
| console     | 显示中控台按钮  |

## 首页顶部配置

```yaml
# 首页顶部样式
hometop:
  banner:
    enable: false # 是否打开顶部banner
    title: 宁静致远<br>热爱生活 # 左上角显示文字
    url: Hexo-Theme-Solitude # title下方小字
    # 轮播icon
    icon:
  #      HTML:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/HTML.png
  #        color: '#e9572b'
  #      JS:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/JS.png
  #        color: '#f7cb4f'
  #      Kotlin:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/kotlin-logo.svg
  #        color: '#ffffff'
  #      Docker:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/docker.png
  #        color: '#57b6e6'
  #      Flutter:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/flutter.png
  #        color: '#ffffff'
  #      WebPack:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png
  #        color: '#2e3a41'
  #      Git:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/git.png
  #        color: '#df5b40'
  #      VS:
  #        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/vs-logo.svg
  #        color: '#ffffff'

  # 顶部三大分类
  categoryGroup:
    G1:
      name: 必看精选
      icon: scoicon sco-star-smile-fill
      url: /tags/精选/
    G2:
      name: 热门文章
      icon: scoicon sco-fire-fill
      url: /categories/热门/
    G3:
      name: 实用教程
      icon: scoicon sco-book-mark-fill
      url: /tags/教程/

  # 右侧置顶列表（在文章的front matter中添加“recommend: true”）
  recommendList:
    sup: 置顶 # 左上角显示文字
    title: Solitude主题文档 # 左下角大字
    url: https://docs.wzsco.top/ # 点击跳转链接
    img: /img/default.png # 显示背景
    color: '#ff0000' # 背景颜色
```

::: tabs

== banner

| 参数     | 解释          |
|--------|-------------|
| enable | 是否开启        |
| title  | 左上角显示文字     |
| url    | title文字下方小字 |
| icon   | 瀑布流图标       |

== categoryGroup
G1、G2、G3 左至右依次

| 参数   | 解释      |
|------|---------|
| name | 显示名称    |
| icon | 显示图标    |
| url  | 跳转链接、路径 |

:::

## 侧边栏

```yaml
# 侧边栏
aside:
  # 值：about（关于我）、power（爱发电）、newestPost（最新文章）、allInfo（网站信息）、flip（公众号二维码）、welcome（个性定位）、history（那年今日）
  home: # 在主页显示的侧边栏信息
    noSticky: "about"
    Sticky: "allInfo"
  post: # 在文章页显示的侧边栏信息
    noSticky: "about"
    Sticky: "newestPost"
  page: # 在页面中显示的侧边栏信息
    noSticky: "about"
    Sticky: "newestPost,allInfo"
  # 爱发电
  power:
    link: https://afdian.net/a/wleelw0u0 # 爱发电链接
  #    list:
  #      - name: 王卓Sco
  #        avatar: https://bu.dusays.com/2023/11/04/6545e8a57f97b.jpg
  #        descr: 宁静致远，热爱生活。
  #        link: https://afdian.net/u/wleelw0u0
  # 侧边栏个人信息卡片
  card:
    # 头像信息
    author:
      img: https://bu.dusays.com/2023/11/08/654af68b25bb8.jpg # 头像图片
      js: https://cdn3.codesign.qq.com/icons/XgRxnjPG4VZLmqr/latest/iconfont.js # 自定义图标js（用于显示带颜色的状态表情）
      state: "#sco-smile" # 状态表情（使用symbol）
    content: 分享自己对编程的<b>热爱</b>，对美好生活的<b>向往</b>，对知识海洋<b>探索历程</b>。 # 文案1
    content2: 相信你可以在这里找到对你有用的知识和教程。 # 文案2
    # 个人信息卡片底部的小图标，按照例子填写
    information:
      Github:
        icon: scoicon sco-github-line
        url: https://github.com/DuoSco/Hexo-Theme-slitude
      Bilibili:
        icon: scoicon sco-bilibili-line
        url: https://space.bilibili.com/1329819902
  # 公众号二维码
  flip:
    favicon: # 右下角头像
    face: # 正面
    backface: # 鼠标悬停翻转图片
  # 个性定位
  welcome:
    enable: false
    title: #【选填】留空将默认显示为：来访者
    icon: #【选填】留空将默认显示为：scoicon sco-map-pin-line
    key: # 腾讯key
    longitude: 112.8455033596802 # 经度
    Latitude: 26.430308353457896 # 纬度
  # 那年今日
  history:
    enable: false
    title: #【选填】留空将默认显示为：那年今日
    icon: #【选填】留空将默认显示为：scoicon sco-calendar-line
  # 页面目录
  toc:
    post: true # 在文章页显示
    page: false # 在任意页显示

  # 侧边栏文章列表
  tags:
    enable: false # 是否显示标签
    highlight: false # 高亮显示
    list: # 高亮显示标签列表
      - 'Solitude-使用'

  # 侧边栏归档
  archive:
    enable: false # 是否显示

  # 建站信息
  siteinfo:
    postcount: true # 文章数
    wordcount: true # 总字数
    pv: true # 访问量
    uv: true # 访客数
    updatetime: true # 最后更新日期
    runtimeenable: true # 建站时间
    runtime: '2023-04-20 00:00:00' # 格式：yyyy-MM-dd hh-mm-ss
```

::: tabs

== home、post、page
想在哪个页面显示将名称添加进去

| 参数       | 解释        |
|----------|-----------|
| noSticky | 下滑侧边栏会隐藏  |
| Sticky   | 下滑侧边栏固定显示 |

== card（个人信息）
about

| 参数          | 解释                |
|-------------|-------------------|
| author      | 头像以及又有右下角的状态表情    |
| content     | 悬停about侧边栏显示文字（上） |
| content2    | 悬停about侧边栏显示文字（下） |
| information | 下方显示按钮            |

== power（爱发电）

| 参数   | 解释 |
|------|----|
| link | 链接 |

list格式：

```yaml
- name: 王卓Sco
  avatar: https://bu.dusays.com/2023/11/04/6545e8a57f97b.jpg
  descr: 宁静致远，热爱生活。
  link: https://afdian.net/u/wleelw0u0
```

== flip（公众号）

| 参数       | 解释            |
|----------|---------------|
| favicon  | 右下角头像         |
| face     | 正面图片（url）     |
| backface | 鼠标悬停翻转图片（url） |

== welcome（个性定位）

| 参数        | 属性                         |
|-----------|----------------------------|
| enable    | 是否开启                       |
| title     | 名称                         |
| icon      | 自定义小图标，默认为sco-map-pin-fill |
| key       | 腾讯地图key                    |
| longitude | 所在经度                       |
| Latitude  | 所在纬度                       |

> 经纬度可前往此处获取：[百度API](http://jingweidu.757dy.com/)

>
腾讯key获取方式：[Butterfly的魔改教程：个性定位信息](https://meuicat.com/blog/42#%E4%B8%AA%E6%80%A7%E5%AE%9A%E4%BD%8D%E6%AC%A2%E8%BF%8E%E8%AF%AD)

== history（那年今日）

| 参数     | 解释   |
|--------|------|
| enable | 是否开启 |
| title  | 名称   |
| icon   | 显示图标 |

== tags（标签云）

| 参数        | 解释               |
|-----------|------------------|
| enable    | 是否开启             |
| highlight | 是否开启高亮显示         |
| list      | 需要高亮显示标签列表（每行一个） |

== archive（归档）

| 参数     | 解释   |
|--------|------|
| enable | 是否开启 |

== siteinfo（建站信息）

| 参数            | 解释       |
|---------------|----------|
| postcount     | 文章数      |
| wordcount     | 总字数      |
| pv            | 访问了      |
| uv            | 访客数      |
| updatetime    | 最后更新日期   |
| runtimeenable | 建站时间是否开启 |
| runtime       | 建站时间     |

== toc（目录）
不需要手动添加，只要配置在哪种页面显示即可

:::

::: warning
建站信息：

wordcount（需要安装`hexo-wordcount`）
:::

## 页面默认配置

```yaml
# 页面页默认设置
page:
  error: true  # 404页面
  tags: true # 标签页
  categories: true # 分类页
  default: # 默认值
    cover: /img/default.png # 默认图片
```

## 文章默认配置

```yaml
post:
  default:
    cover: /img/default.png
    locate: 衡阳
    copyright:
      enable: true
      license: CC BY-NC-SA 4.0
      licenurl: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh
  # 顶部文章简介
  meta:
    date: false # 发布日期
    updated: false # 更新日期
    locate: false # 位置
    wordcount: false # 字数
    readtime: false # 访问
    pv: false # 浏览量
    comment: false # 评论数
  # 打赏
  award:
    enable: false # 开启后文章底部显示打赏按钮
    wechat: https://bu.dusays.com/2023/11/07/6549e79364fa3.png # 微信收款码
    alipay: https://bu.dusays.com/2023/11/07/6549e79d02bd6.png # 支付宝收款码
    url: /about # 打赏统计页面链接
  # 文章颜色获取
  covercolor: #文章cover取色
    enable: false # 是否开启
    local: true # 本地取色
  # 底部头像背景
  author_back: https://bu.dusays.com/2023/11/01/6541f6d4b2573.png    
```

## 推荐文章

开启后，文章底部会显示相同标签、分类的文章。

```yaml
# 文章底部推荐文章
related_post:
  enable: true  # 是否开启推荐
  limit: 2 # 推荐文章数量
  date_type: created # 根据创建日期（created）或是更新日期（updated）
```