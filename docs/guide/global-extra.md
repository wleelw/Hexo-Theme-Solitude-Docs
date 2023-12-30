---
title: 额外配置
---

# 额外配置 🚀

## 页脚（Footer）

### 底部上方一排图标

```yaml
# 底部上方一排图标
information:
  left: # 左侧显示图标
    Github: # 悬停提示文本
      icon: scoicon sco-github-line  # 必须是icon
      url: https://github.com/wleelw  # 路径/http(s)链接
    Mail:
      icon: scoicon sco-mail-line
      url: mailto:wleelw@sondy.top
  right: # 右侧显示图标
    Bilibili: # 悬停提示文字
      icon: scoicon sco-bilibili-line # 图标
      url: https://space.bilibili.com/1329819902 # 路径/http(s)链接
    抖音:
      icon: scoicon sco-douyin-fill
      url: https://v.douyin.com/iJsLc8jt/
```

### 底部导航栏

```yaml
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
```

### 其他项

```yaml
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

## 加载动画

在页面加载时会显示一个页面覆盖内容，加载完成消失。

```yaml
# 加载动画
loading:
  fullpage: true # 全屏家在动画
  pace: true # 顶部加载胶囊
```

## 代码高亮

开启后代码块会有对应的语言提示

```yaml
#代码高亮增强
hightlight:
  enable: true # 是否开启
  hightlimit: 200 # 代码高亮高度限制
```
::: tip
开启代码高亮后，代码块会有对应的语言提示，但是会增加网页体积，如果你不需要这个功能，可以关闭。
:::

## 懒加载

```yaml
# 懒加载
lazyload:
  enable: true  # 是否打开懒加载
  placeholder: /img/loading.gif # 加载中显示图片
  errorimg: /img/error_load.png # 加载失败显示图片
```

::: tip
开启懒加载后，图片会在进入可视区域后加载，可以减少网页体积，提高网页加载速度。
:::

## 图片灯箱

```yaml
lightbox: true # 是否开启图片灯箱
```
::: tip
开启图片灯箱后，点击图片会弹出大图，可以查看图片的详细信息。
:::

## Inject

插入额外代码 如：统计，广告等

```yaml
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
# 插入额外代码 如：统计，广告等
extends:
  head: # 在head中插入
    - <script>console.log("head")</script>
  body: # 在body中插入
    - <script>console.log("body")</script>
```

::: tip
如果你需要在网页中插入额外的代码，可以使用这个功能。
:::

## 站点验证

```yaml
# 站点验证
verify:
  # 百度
  baidu: 验证代码

  # 谷歌
  google:
```

::: tip
如果你需要在网页中插入额外的代码，可以使用这个功能。
只需要填写验证代码即可。
:::

## PWA
::: tip PWA支持的前提条件
全站资源必须为HTTPS。
:::

PWA 全称为 `Progressive Web App`，中文译为渐进式Web APP，其目的是通过各种 Web 技术实现与原生 App 相近的用户体验。
纵观现有 Web 应用与原生应用的对比差距，如离线缓存、沉浸式体验等等，可以通过已经实现的 Web 技术去弥补这些差距，最终达到与原生应用相近的用户体验效果。
### 使用教程

> 以下内容为 hexo-swpp 支持，旧版 hexo-offline 已经不维护了

1. 在 `主题配置文件` 中开启 pwa 选项

   ```yml
   # PWA
   pwa:
     enable: true
     startup_image_enable: true
   ```
2. 安装 `hexo-swpp`、`hexo-backends` 插件
   ```sh
   npm install hexo-swpp swpp-backends --save
   ```
3. 修改 `根目录/_config.yml` 文件，新增以下内容

   ```yml
   swpp:
      # 是否启用插件
      enable: true
      # 是否在发布前自动执行脚本
      # auto_exec: true
      # 构建时拉取版本文件的警告等级，缺省为 1（该功能仅在 swpp-backends 版本号 >= 2.1.2 时可用）
      # 0 - 表示不允许出现 404 情况；1 - 表示允许服务器返回 404 状态码；2 - 表示允许任何 404（包括 DNS 解析失败等）
      # warn_level: 1
      # 检查版本的 URL，不能以 '/' 结尾
      # npm_url: 'https://registry.npmmirror.com'
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

5. 新建 `[根目录]/sw-rules.js` 文件，并新增以下内容

   ```js
   module.exports.config = {
    /** @type {?ServiceWorkerConfig|boolean} */
    serviceWorker: {
        escape: 0,
        cacheName: 'SolitudeCache',
        debug: false
    },
    register: {
        onsuccess: undefined,
        onerror: () => console.error('Service Worker 注册失败！可能是由于您的浏览器不支持该功能！'),
        builder: (root, framework, pluginConfig) => {
            const {onerror, onsuccess} = pluginConfig.register;
            return `
            <script>
                (() => {
                    const sw = navigator.serviceWorker;
                    const error = ${onerror && onerror.toString()};
                    if (!sw?.register('${new URL(root).pathname}sw.js')
                        ${onsuccess ? `?.then(${onsuccess.toString()})` : ''}
                        ?.catch(error)
                    ) error()
                })()
            </script>`;
        }
    },
    /** @type {?DomConfig|boolean} */
    dom: {
        /** @type {?VoidFunction} */
        onsuccess: () => {
            caches.match(location.href).then(res => {
                if (res)
                    res.json().then(json => {
                        utils && utils.snackbarShow(`已刷新缓存，更新为${json.global + '.' + json.local}版本最新内容`, false, 2000)
                    })
                else
                    console.info('未找到缓存')
            }).catch((error) => console.error("缓存匹配出错", error))
        }
    },
    /** @type {?VersionJsonConfig|boolean} */
    json: {
        /** @type {number} */
        maxHtml: 15,
        /** @type {number} */
        charLimit: 1024,
        /** @type {string[]} */
        merge: [],
        exclude: {
            /** @type {RegExp[]} */
            localhost: [],
            /** @type {RegExp[]} */
            other: []
        }
    },
    /** @type {?ExternalMonitorConfig|boolean} */
    external: {
        /** @type {number} */
        timeout: 5000,
        /** 拉取文件时地并发限制 */
        concurrencyLimit: 100,
        /** @type {({head: string, tail: string}|function(string):string[])[]} */
        js: [],
        /** @type {RegExp[]} */
        stable: [
            /^https:\/\/npm\.elemecdn\.com\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
            /^https:\/\/cdn\.cbd\.int\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
            /^https:\/\/cdn\.jsdelivr\.net\/npm\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
        ],
        replacer: srcUrl => {
            if (srcUrl.startsWith('https://cdn.jsdelivr.net/npm/')) {
                const pathname = new URL(srcUrl).pathname;
                return [
                    srcUrl,
                    `https://cdn.cbd.int/${pathname}`,
                    `https://npm.elemecdn.com/${pathname}`,
                    `https://fastly.jsdelivr.net/npm/${pathname}`,
                ];
            } else {
                return srcUrl;
            }
        }
    }
   };
   
   module.exports.cacheRules = {
   simple: {
   clean: true,
   search: false,
   match: (url,$eject) => url.host === $eject.domain && ["/404.html"].includes(url.pathname)
   },
   cdn: {
   clean: true,
   match: url => [
   "cdn.cbd.int",
   "lf26-cdn-tos.bytecdntp.com",
   "lf6-cdn-tos.bytecdntp.com",
   "lf3-cdn-tos.bytecdntp.com",
   "lf9-cdn-tos.bytecdntp.com",
   "cdn.staticfile.org",
   "npm.elemecdn.com",
   ].includes(url.host) && url.pathname.match(/\.(js|css|woff2|woff|ttf|cur)$/),
   
       }
   };
   
   module.exports.getSpareUrls = srcUrl => {
   if (srcUrl.startsWith("https://npm.elemecdn.com")) {
   return {
   timeout: 3000,
   list: [srcUrl, `https://fastly.jsdelivr.net/${new URL(srcUrl).pathname}`],
   };
   }
   }
   
   module.exports.ejectValues = (hexo, rules) => {
   return {
   domain: {
   prefix: "const",
   value: new URL(hexo.config.url).host,
   },
   };
   };
   ```

6. 全部步骤操作完成后，你可以通过Chrome控制台的 `Lighthouse` 检查 PWA 配置是否生效以及配置是否正确。

::: info
sw 需要到线上进行查看，本地无法查看是否成功。
:::

### PWA图片素材

你可以通过 [PWA：让你的网站变成桌面应用APP](https://meuicat.com/blog/80#PWA%E7%B4%A0%E6%9D%90) 文章下方进行获取，文章内包含了如何一键批量生成教程。

## 第三方配置

### 字数统计

打开前需要安装 [hexo-wordcount](https://github.com/willin/hexo-wordcount)。

```yaml
# 第三方设置
thirdparty:
  wordcount: false # 字数统计
```

### 不蒜子

打开后将会使用busuanzi统计网站访问

usercomment: 当评论系统开启时文章页面使用评论系统的统计数据

```yaml
busuanzi:
  enable: false
  usecomment: false #当评论系统开启时文章页面使用评论系统的统计数据
```

### Search 搜索

::: tabs
== 本地搜索

1. 安装 [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb)
   或者 [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)，根据它的文档去做相应配置
2. 修改 `主题配置文件`
    ```yaml
    local_search: # 本地搜索
      enable: true
      preload: false
      CDN:
    ```

| 参数      | 解释                                            |
|---------|-----------------------------------------------|
| enable  | 是否开启搜索                                        |
| preload | 预加载，开启后，进入网页后会自动加载搜索文件。关闭时，只有点击搜索按钮后，才会加载搜索文件 | 
| CDN     | 搜索文件的 CDN 地址（默认使用的本地链接）                       |

== Algolia 搜索
> 如果你使用 hexo-algoliasearch，请记得配置 fields 参数的 title, permalink 和 content

1. 安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia)
   或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根据它们的使用文档去做相应的配置。
2. 修改 `主题配置文件`
   ```yaml
    algolia_search:
      enable: false
      hits:
        per_page: 6 
   ```

:::

### aplayer 音乐播放器

```yaml
# 全局底部音乐播放胶囊
aplayer:
enable: false
# netease, tencent, kugou, xiami, baidu
server: netease
# 歌单ID
# tip：不是用户的id，是歌单的id
id: 8407304077
# 自定义api，参照格式写
# tip：如果没有自己的api，请不要随意更改
api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r"
```

### consolePlus

中控台扩展

```yaml
# 中控台拓展
# tip：扩展后，右侧会显示最新评论
consolePlus: false
```

开启后控制台会显示评论

## CDN

此部分切勿轻易修改，以保证稳定。

```yaml
# 非必要勿动
cdn:
   # 如果没有请留空
   # tip：目前主题还在更新，请注意群内通知。
   prefix: # cdn前缀 https://cdn.jsdelivr.net/gh/用户名/仓库名@版本号/
   head:
      scoicon: https://cdn3.codesign.qq.com/icons/7pOrz0WXB5ZWJPX/latest/iconfont.css
      aplayercss: https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css
      swipercss: https://cdn.bootcdn.net/ajax/libs/Swiper/9.2.4/swiper-bundle.min.css
      twikoojs: https://cdn.bootcdn.net/ajax/libs/twikoo/1.6.20/twikoo.all.min.js
      instantsearch: https://cdn.bootcdn.net/ajax/libs/instantsearch.js/4.9.1/instantsearch.production.min.js
      algoliajs: https://cdn.bootcdn.net/ajax/libs/algoliasearch/4.9.3/algoliasearch-lite.umd.min.js
      pacejs: https://cdn.bootcdn.net/ajax/libs/pace/1.2.4/pace.min.js
      echartsjs: https://cdn.bootcdn.net/ajax/libs/echarts/5.4.2/echarts.min.js
      lunrjs: https://cdn.bootcdn.net/ajax/libs/lunr.js/2.3.9/lunr.min.js
      walinecss: https://cdn.staticfile.org/waline/2.15.8/waline.min.css
      walinejs: https://cdn.staticfile.org/waline/2.15.8/waline.min.js
   body:
      swiperjs: https://cdn.bootcdn.net/ajax/libs/Swiper/9.2.4/swiper-bundle.min.js
      busuanzijs: https://cdn.bootcdn.net/ajax/libs/busuanzi/2.3.0/bsz.pure.mini.min.js
      pjaxjs: https://cdn.bootcdn.net/ajax/libs/pjax/0.2.8/pjax.min.js
      aplayerjs: https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js
      metingjs: https://cdn.bootcdn.net/ajax/libs/meting/2.0.1/Meting.min.js
      katexcss: https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.6/katex.min.css
      katexjs: https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.6/katex.min.js
```

::: danger
主题内静态资源都支持CDN，如果需要实现资源与网站分离，请按照主题作者的文章进行使用。（暂时只有dev有此功能）
:::