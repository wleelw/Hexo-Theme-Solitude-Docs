import{_ as s,o as a,c as o,Q as e}from"./chunks/framework.e7e1adb3.js";const F=JSON.parse('{"title":"常见问题 📖","description":"","frontmatter":{},"headers":[],"relativePath":"FAQ.md","filePath":"FAQ.md"}'),n={name:"FAQ.md"},l=e(`<h1 id="常见问题-📖" tabindex="-1">常见问题 📖 <a class="header-anchor" href="#常见问题-📖" aria-label="Permalink to &quot;常见问题 📖&quot;">​</a></h1><h2 id="error-cannot-find-module-katex" tabindex="-1">Error: Cannot find module &#39;katex&#39; <a class="header-anchor" href="#error-cannot-find-module-katex" aria-label="Permalink to &quot;Error: Cannot find module &#39;katex&#39;&quot;">​</a></h2><p>缺少 <code>katex</code> 数学插件，在博客根目录里执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@renbaoshuo/markdown-it-katex</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@renbaoshuo/markdown-it-katex</span></span></code></pre></div><h2 id="error-cannot-find-module-cheerio" tabindex="-1">Error: Cannot find module &#39;cheerio&#39; <a class="header-anchor" href="#error-cannot-find-module-cheerio" aria-label="Permalink to &quot;Error: Cannot find module &#39;cheerio&#39;&quot;">​</a></h2><p>缺少 <code>cheerio</code> 统计图插件，在博客根目录里执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cheerio</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cheerio</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span></span></code></pre></div><h2 id="site-categories-data-is-not-iterable" tabindex="-1">site.categories.data is not iterable <a class="header-anchor" href="#site-categories-data-is-not-iterable" aria-label="Permalink to &quot;site.categories.data is not iterable&quot;">​</a></h2><p>Hexo 版本过高</p><p>主题还未适配 Hexo 7.0.0，如新安装的 Hexo-Cli，请在初始化完后手动将Hexo降级至 6.3.0 版本，我们将在不久后进行适配。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">hexo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">un</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hexo</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 卸载最新的Hexo</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hexo@6.3.0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将 Hexo 手动降级至 6.3.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">hexo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 初始化</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">un</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hexo</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 卸载最新的Hexo</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hexo@6.3.0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将 Hexo 手动降级至 6.3.0</span></span></code></pre></div>`,11),p=[l];function t(r,c,i,d,h,y){return a(),o("div",null,p)}const u=s(n,[["render",t]]);export{F as __pageData,u as default};