import{_ as s,o as a,c as n,R as p}from"./chunks/framework.PTukmy-M.js";const E=JSON.parse('{"title":"订阅页面配置","description":"","frontmatter":{"title":"订阅页面配置"},"headers":[],"relativePath":"guide/page/rss.md","filePath":"guide/page/rss.md"}'),i={name:"guide/page/rss.md"},e=p(`<h1 id="页面配置-📦" tabindex="-1">页面配置 📦 <a class="header-anchor" href="#页面配置-📦" aria-label="Permalink to &quot;页面配置 📦&quot;">​</a></h1><h2 id="订阅页面配置" tabindex="-1">订阅页面配置 <a class="header-anchor" href="#订阅页面配置" aria-label="Permalink to &quot;订阅页面配置&quot;">​</a></h2><ol><li><p>在cmd面板中输入以下命令，它将在source文件夹下生成<code>rss</code>目录，其中包含<code>index.md</code>​文件。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> page</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rss</span></span></code></pre></div><p>将<code>index.md</code>​中的内容替换成以下：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">订阅本站</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023-11-01 16:28:06</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rss</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div></li><li><p>以下是我的模版，按需修改，将其放置在<code>rss/index.md</code>中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 订阅本站</span></span>
<span class="line"><span></span></span>
<span class="line"><span>首先感谢你对本站的文章产生一些兴趣，本站的主要内容风格为设计分享、设计及电脑资源分享、电脑骚操作，如果你对这方面内容感兴趣，欢迎关注。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 精选文章订阅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>公众号订阅可以收到我觉得有价值，很重要，比较精彩的文章。这些文章将通过微信公众号发送。并不是所有博客文章都会发到公众号中。建议所有用户订阅。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![](https://bu.dusays.com/2023/11/01/65420e1c6d3cc.png)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>公众号名称：**王卓Sco**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 全部文章订阅方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你不只是想看我的精选文章，想要看全部文章，还可以通过下面的方式获取全部文章的订阅。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 爱发电（文章摘要）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你可以在爱发电中看到最新的博客文章（免费）以及部分付费文章。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[立即访问爱发电](https://afdian.net/a/wleelw0u0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### RSS订阅（文章摘要）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你可以使用第三方RSS客户端接收到博客的文章摘要通知。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https://acrylic-next.sondy.top/atom.xml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 本站是如何维持的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>做公众号其一是为了**保护文章版权**，因为发布在个人博客站点对于版权保护能力比较弱，所以发在公众号并且标记为原创可以对文章版权有很好的保护。第二是因为我想让流量主的广告收入**覆盖掉运营博客产生的阿里云网站加速流量费用**。所以对于盈利压力来说并没有企业运营的设计公众号的压力那么大，再加上我个人十分讨厌设计类公众号的课程软广（看见就取关），这也是作出**无课程软广**的承诺的原因。</span></span></code></pre></div></li></ol><p>3.打开主题配置文件<code>_config.solitude.yaml</code>中的<code>footer &gt; rss</code>，将其设置为<code>true</code>，即可在页脚看到订阅按钮。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rss</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><p><img src="https://bu.dusays.com/2023/11/01/65420eca229cf.png" alt=""></p>`,6),l=[e];function t(h,c,d,k,o,r){return a(),n("div",null,l)}const y=s(i,[["render",t]]);export{E as __pageData,y as default};
