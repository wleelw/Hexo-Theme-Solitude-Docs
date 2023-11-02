---
title: 额外配置
---

# 额外配置 🚀

## 页脚（Footer）

```yaml
# Footer Settings
# --------------------------------------
footer:
  # 底部上方一排图标
  information:
    left: # 左侧显示图标
        Github: # 悬停提示文本
          icon: ri-github-fill  # 必须是icon
          url: https://github.com/wleelw  # 路径/http(s)链接
        Mail:
          icon: ri-mail-fill
          url: mailto:wleelw@sondy.top
    right: # 右侧显示图标
        Bilibili:
          icon: ri-bilibili-fill
          url: https://space.bilibili.com/1329819902
        抖音:
          icon: ri-tiktok-line
          url: https://v.douyin.com/iJsLc8jt/
  # 底部导航栏
  group: # 从左至右
      导航: # 显示文本
        归档: /archives/  # 路径/http(s)链接
        分类: /categories/
        标签: /tags/
      服务:
        阿里云: https://aliyun.com/
        51la统计: https://v6.51.la/
        百度统计: https://tongji.baidu.com/
      支持:
        打赏记录: /about/
      协议:
        Cookies: /cookies/
        用户协议: /privacy/
        版权协议: /copyright/

  # 底部随机友链
  randomlink: true
  # rss
  rss:
    enable: true  # 需配置rss页面
    wechatOA: # 微信公众号链接
    emailOA:  # 邮箱链接
    rss:  # rss订阅链接
  # 版权
  license:
    url: /copyright/ # 路径/http(s)链接
```
## 第三方配置

```yaml
# 第三方设置
thirdparty:
  wordcount: true # 字数统计
  busuanzi:
    enable: true
    usecomment: true #当评论系统开启时文章页面使用评论系统的统计数据
  search: # 搜索
    algolia_search: # 需安装插件
      enable: false
      # hits:
      #   per_page: 6
    local_search: # 本地搜索
      enable: false
      preload: false
      CDN:  

  aplayer: # 播放器
    enable: false
    server: tencent # netease, tencent, kugou, xiami, baidu
    id: 8651639768 # 歌单ID
    api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r" #自定义api
  #中控台拓展
  consolePlus: true
```
## 关于页面
是否打开about页面
```yaml
about: true
```

## 分析统计

## 加载动画
在页面加载时会显示一个页面覆盖内容，加载完成消失。
```yaml
# 加载动画
loading:
  fullpage: true
  pace: true
```

## 代码高亮
开启后代码块会有对应的语言提示
```yaml
#代码高亮增强
hightlight:
  enable: true
  hightlimit: 200
```


## 懒加载

```yaml
# 懒加载
lazyload:
  enable: true  # 是否打开懒加载
  placeholder: /img/loading.gif # 加载中显示图片
  errorimg: /img/error_load.png # 加载失败显示图片
```

## 图片灯箱

```yaml
lightbox: true
```

## Inject

插入额外代码 如：统计，广告等
```yaml
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
# 插入额外代码 如：统计，广告等
extends: 
  head: # 在head中插入
  body: # 在body中插入
```

## 站点验证
```yaml
# 站点验证
verify:
  # 百度
  baidu:
```

## PWA

PWA 全称为 `Progressive Web App`，中文译为渐进式Web APP，其目的是通过各种 Web 技术实现与原生 App 相近的用户体验。
纵观现有 Web 应用与原生应用的对比差距，如离线缓存、沉浸式体验等等，可以通过已经实现的 Web 技术去弥补这些差距，最终达到与原生应用相近的用户体验效果。

### 使用教程

1. 在 `主题配置文件` 中开启 pwa 选项

```yml
# PWA
# https://github.com/JLHwung/hexo-offline
pwa:
  enable: true
  startup_image_enable: true
```

2. 在根目录下执行 `npm install hexo-offline --save` 或者 `yarn add hexo-offline` 进行安装hexo-offline插件

3. 在根目录创建 `hexo-offline.config.cjs` 文件，并增加以下内容

```js
// offline config passed to workbox-build.
module.exports = {
	// 静态文件合集，如果你的站点使用了例如 webp 格式的文件，请将文件类型添加进去。
	globPatterns: ["**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}"],
	globDirectory: "public",
	swDest: "public/service-worker.js",
	maximumFileSizeToCacheInBytes: 10485760, // 缓存的最大文件大小，以字节为单位。
	skipWaiting: true,
	clientsClaim: true,
	manifestTransforms: [
		async (manifestEntries, compilation) => {
			const timestamp = new Date()
				.toISOString()
				.replace(/[-:.TZ]/g, ""); // 获取当前时间戳
			manifestEntries.push({
				url: "/",
				revision: `index-${timestamp}`,
			});
			return {
				manifest: manifestEntries
			};
		},
	],
};
```

4. 新建 `[根目录]/source/manifest.json` 文件，并新增以下内容

```json
{
    "name": "Solitude",
    "short_name": "Solitude",
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "fullscreen",
    "scope": "/",
    "start_url": "/",
    "id": "/",
    "icons": [
        {
            "src": "/img/pwa/192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "/img/pwa/192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
        },
        {
            "src": "/img/pwa/512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "/img/pwa/512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
        }
    ],
    "splash_pages": null
}
```

5. 全部步骤操作完成后，你可以通过Chrome控制台的 `Lighthouse` 检查 PWA 配置是否生效以及配置是否正确。

### PWA图片素材

你可以通过 [PWA：让你的网站变成桌面应用APP](https://meuicat.com/blog/80#PWA%E7%B4%A0%E6%9D%90) 文章下方进行获取，文章内包含了如何一键批量生成教程。

## CDN
此部分切勿轻易修改，以保证稳定。
```yaml
# 非必要勿动
cdn:
  head:
    remixicon: https://cdn.bootcdn.net/ajax/libs/remixicon/3.5.0/remixicon.css
    instantsearch: https://cdn.bootcdn.net/ajax/libs/instantsearch.js/4.9.1/instantsearch.production.min.js
    twikoojs: https://cdn.bootcdn.net/ajax/libs/twikoo/1.6.16/twikoo.all.min.js
    algolia: https://cdn.bootcdn.net/ajax/libs/algoliasearch/4.9.3/algoliasearch-lite.umd.min.js
    pacejs: https://cdn.bootcdn.net/ajax/libs/pace/1.2.4/pace.min.js
    snackbarcss: /lib/snackbar.min.css
  body:
    swiperjs: https://cdn.bootcdn.net/ajax/libs/Swiper/9.2.4/swiper-bundle.min.js
    busuanzijs: https://cdn.bootcdn.net/ajax/libs/busuanzi/2.3.0/bsz.pure.mini.min.js
    swipercss: https://cdn.bootcdn.net/ajax/libs/Swiper/9.2.4/swiper-bundle.min.css
    pjaxjs: https://cdn.bootcdn.net/ajax/libs/pjax/0.2.8/pjax.min.js
    viewimagejs: /lib/view-image.js
    waterfalljs: /lib/waterfall.min.js
    lazyloadjs: /lib/lazyload.js
    snackbarjs: /lib/snackbar.js
    aplayercss: https://cdn.bootcdn.net/ajax/libs/aplayer/1.9.1/APlayer.min.css
    aplayerjs: https://cdn.bootcdn.net/ajax/libs/aplayer/1.9.1/APlayer.min.js
    metingjs: https://cdn.bootcdn.net/ajax/libs/meting/2.0.1/Meting.min.js
    katexcss: https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.6/katex.min.css
    katexjs: https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.6/katex.min.js
```