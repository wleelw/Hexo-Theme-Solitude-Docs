import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.e7e1adb3.js";const m=JSON.parse('{"title":"进阶配置 🚀","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/index.md","filePath":"advanced/index.md"}'),l={name:"advanced/index.md"},p=o(`<h1 id="进阶配置-🚀" tabindex="-1">进阶配置 🚀 <a class="header-anchor" href="#进阶配置-🚀" aria-label="Permalink to &quot;进阶配置 🚀&quot;">​</a></h1><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h2><h3 id="评论" tabindex="-1">评论 <a class="header-anchor" href="#评论" aria-label="Permalink to &quot;评论&quot;">​</a></h3><p>目前只支持<code>twikoo</code>并且非常完善，其他的评论系统正在路上……</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 评论</span></span>
<span class="line"><span style="color:#85E89D;">comment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">enable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">twikoo</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">envId</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://twikoo.sondy.top</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># twikoo 部署地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">window.location.pathname</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">lang</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 评论</span></span>
<span class="line"><span style="color:#22863A;">comment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">enable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">twikoo</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">envId</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://twikoo.sondy.top</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># twikoo 部署地址</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">window.location.pathname</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">lang</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>开启<code>twikoo</code>评论后默认开启热评功能。</p></div>`,6),e=[p];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const _=s(l,[["render",t]]);export{m as __pageData,_ as default};