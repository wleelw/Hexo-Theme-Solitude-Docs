import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d6381ae5.js";const d=JSON.parse('{"title":"页面配置📦","description":"","frontmatter":{},"headers":[],"relativePath":"page/about.md","filePath":"page/about.md"}'),p={name:"page/about.md"},o=l(`<h1 id="页面配置📦" tabindex="-1">页面配置📦 <a class="header-anchor" href="#页面配置📦" aria-label="Permalink to &quot;页面配置📦&quot;">​</a></h1><h2 id="关于页面" tabindex="-1">关于页面 <a class="header-anchor" href="#关于页面" aria-label="Permalink to &quot;关于页面&quot;">​</a></h2><ol><li><p>在cmd面板中输入以下命令，它将在source文件夹下生成about目录，其中包含<code>index.md</code>​文件。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">hexo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">page</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">about</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">hexo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">new</span><span style="color:#24292E;"> </span><span style="color:#032F62;">page</span><span style="color:#24292E;"> </span><span style="color:#032F62;">about</span></span></code></pre></div><p>将<code>index.md</code>​中的内容替换成以下：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">关于本站</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2023-10-31 22:24:22</span></span>
<span class="line"><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">about</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">关于本站</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2023-10-31 22:24:22</span></span>
<span class="line"><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">about</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div></li><li><p>在<code>source\\_data\\</code>​文件夹下建立名为<code>about.yaml</code>​的文件，下方内容为模版，根据要求按需添加。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">authorinfo</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">leftTags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;🤖️ 数码科技爱好者&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;🔍 分享与热心帮助&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;🏠 智能家居小能手&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">rightTags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;脚踏实地行动派 🏃&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;团队小组发动机 🧱&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">&quot;壮汉人狠话不多 💢&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://bu.dusays.com/2023/10/31/6540daf117d20.png&quot;</span></span>
<span class="line"><span style="color:#85E89D;">contentinfo</span><span style="color:#E1E4E8;">:  </span><span style="color:#6A737D;"># 顶部个人信息展示</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Solitude</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">一个优雅的 Hexo 主题</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 介绍</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">product</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">优秀的产品</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">design</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">出色的设计</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">program</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">高效的编程</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">user_experience</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">人性化的用户体验</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">skills</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 根据需求添加</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">技能</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">subtitle</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">开启创造力</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">HTML</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/HTML.png</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#e9572b&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/JS.png</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#f7cb4f&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Kotlin</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/kotlin-logo.svg</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#ffffff&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Docker</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/docker.png</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#57b6e6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Flutter</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/flutter.png</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#ffffff&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">WebPack</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#2e3a41&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Git</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/git.png</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#df5b40&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Visual Studio</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/vs-logo.svg</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#ffffff&#39;</span></span>
<span class="line"><span style="color:#85E89D;">careers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;生涯&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">subtitle</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;无限进步&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">items</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">school</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;家里蹲&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">major</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;学习&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#357ef5&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://bu.dusays.com/2023/10/31/654112c2aaef4.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">personalities</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tips</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;性格&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;执政官&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#56a178&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ESFJ-A&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://npm.elemecdn.com/wzheo-absolute@1.0.0/image/source/about/ESFJ-A.svg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://www.16personalities.com/&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">linkText</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;16personalities&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">typeLink</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://www.16personalities.com/ch/infp-人格&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">typeName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;执政官&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">myphoto</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/10/31/6540d809e3dcd.png</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">motto</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">座右铭</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">prefix</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">破釜沉舟，</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">砥砺前行。</span></span>
<span class="line"><span style="color:#85E89D;">expertise</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">特长</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">prefix</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">跑步、写作、唱歌</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">specialist</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">专家</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">学习能力</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">level</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">MAX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">game1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;爱好游戏&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/10/31/654114af5cdcb.png</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;fas fa-gamepad&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">subtitle</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;APEX LEGENDS&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tips_left</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">C位</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tips_right</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ID Wleelw</span></span>
<span class="line"><span style="color:#85E89D;">game2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;爱好游戏&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/10/31/6541152ce393d.png</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">subtitle</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">精灵与萤火意志</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;fas fa-dice-d20&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tips_right</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;跑图大师&quot;</span></span>
<span class="line"><span style="color:#85E89D;">likes</span><span style="color:#E1E4E8;">:	</span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">like-technology</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">bg</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/10/31/65411572727e5.png</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tips</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">关注偏好</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">万物互联</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">subtips</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">手机、电脑、车机软硬件</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">like-music</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">bg</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/10/31/654115a0e6cc2.png</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tips</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">音乐偏好</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">华语流行、轻音乐</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">subtips</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">跟 王卓Sco 一起欣赏更多音乐</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">button_text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">更多推荐</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">button_link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/music/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">oneself</span><span style="color:#E1E4E8;">:	</span><span style="color:#6A737D;"># 按需填写</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">location</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;中国，湖南省&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 所在位置</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">birthYear</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;2004&#39;</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 生日</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">university</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;湖南大学&#39;</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 毕业学校</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">major</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;软件工程&#39;</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 专业</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">occupation</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;学生&#39;</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 职位</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">map</span><span style="color:#E1E4E8;">:	</span><span style="color:#6A737D;"># 你所在位置的地图</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">light</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/10/31/6541161b74b2a.webp</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 白天</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">dark</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/10/31/6541161bc4066.webp</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 夜晚</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">tj</span><span style="color:#E1E4E8;">:	</span><span style="color:#6A737D;"># 统计</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://v6-widget.51.la/v6/3F15j2vtdTo7PPcN/quote.js</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 需要到51la官网注册自行获取</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://bu.dusays.com/2023/03/12/640dc8c72f623.webp</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 背景</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 介绍自己</span></span>
<span class="line"><span style="color:#85E89D;">cause</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&lt;br&gt;创建这个站的时候，想要就是能够有一个自己能够&lt;b&gt;积累知识、积累兴趣&lt;/b&gt;的地方。和他人分享，会让这些成为积累和沉淀。如果能够帮助到更多的人，帮助更多人解决问题，那一定是非常棒的事情。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&lt;br&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">与大多数垂直类的技术博客不同，这里的种类会非常的繁杂，有&lt;b&gt;技能的教程干货&lt;/b&gt;、有&lt;b&gt;生活上的吐槽和妙招&lt;/b&gt;、有&lt;b&gt;话题上的思考和想法&lt;/b&gt;。一般我研究什么、发现了什么都会分享在这里。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&lt;br&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">这些就是创造这个小站的本意，&lt;b&gt;也是我分享生活的方式&lt;/b&gt;。有幸能和你相遇在这里，相信我们能共同留下一段美好记忆。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&lt;br&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">rewardList</span><span style="color:#E1E4E8;">:	</span><span style="color:#6A737D;"># 底部捐赠</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">悦华</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">money</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2023-04-20</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">糕糕手</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">money</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">6.66</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2023-08-11</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">vip</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">幕幕</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">money</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2023-08-11</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">悦华</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">money</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">56</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">vip</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">time</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2023-08-25</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">authorinfo</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">leftTags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;🤖️ 数码科技爱好者&quot;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;🔍 分享与热心帮助&quot;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;🏠 智能家居小能手&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">rightTags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;脚踏实地行动派 🏃&quot;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;团队小组发动机 🧱&quot;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">&quot;壮汉人狠话不多 💢&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://bu.dusays.com/2023/10/31/6540daf117d20.png&quot;</span></span>
<span class="line"><span style="color:#22863A;">contentinfo</span><span style="color:#24292E;">:  </span><span style="color:#6A737D;"># 顶部个人信息展示</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Solitude</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">一个优雅的 Hexo 主题</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 介绍</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">product</span><span style="color:#24292E;">: </span><span style="color:#032F62;">优秀的产品</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">design</span><span style="color:#24292E;">: </span><span style="color:#032F62;">出色的设计</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">program</span><span style="color:#24292E;">: </span><span style="color:#032F62;">高效的编程</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">user_experience</span><span style="color:#24292E;">: </span><span style="color:#032F62;">人性化的用户体验</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">skills</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 根据需求添加</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">技能</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">subtitle</span><span style="color:#24292E;">: </span><span style="color:#032F62;">开启创造力</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">HTML</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/HTML.png</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#e9572b&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Javascript</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/JS.png</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#f7cb4f&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Kotlin</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/kotlin-logo.svg</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#ffffff&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Docker</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/docker.png</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#57b6e6&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Flutter</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/flutter.png</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#ffffff&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">WebPack</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#2e3a41&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Git</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/git.png</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#df5b40&#39;</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Visual Studio</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/vs-logo.svg</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#ffffff&#39;</span></span>
<span class="line"><span style="color:#22863A;">careers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;生涯&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">subtitle</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;无限进步&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">items</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">school</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;家里蹲&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">major</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;学习&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#357ef5&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://bu.dusays.com/2023/10/31/654112c2aaef4.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">personalities</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tips</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;性格&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;执政官&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#56a178&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ESFJ-A&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://npm.elemecdn.com/wzheo-absolute@1.0.0/image/source/about/ESFJ-A.svg&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://www.16personalities.com/&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">linkText</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;16personalities&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">typeLink</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://www.16personalities.com/ch/infp-人格&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">typeName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;执政官&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">myphoto</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/10/31/6540d809e3dcd.png</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">motto</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">座右铭</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">prefix</span><span style="color:#24292E;">: </span><span style="color:#032F62;">破釜沉舟，</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">砥砺前行。</span></span>
<span class="line"><span style="color:#22863A;">expertise</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">特长</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">prefix</span><span style="color:#24292E;">: </span><span style="color:#032F62;">跑步、写作、唱歌</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">specialist</span><span style="color:#24292E;">: </span><span style="color:#032F62;">专家</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">学习能力</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">level</span><span style="color:#24292E;">: </span><span style="color:#032F62;">MAX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">game1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;爱好游戏&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">img</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/10/31/654114af5cdcb.png</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;fas fa-gamepad&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">subtitle</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;APEX LEGENDS&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tips_left</span><span style="color:#24292E;">: </span><span style="color:#032F62;">C位</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tips_right</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ID Wleelw</span></span>
<span class="line"><span style="color:#22863A;">game2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;爱好游戏&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">img</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/10/31/6541152ce393d.png</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">subtitle</span><span style="color:#24292E;">: </span><span style="color:#032F62;">精灵与萤火意志</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;fas fa-dice-d20&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tips_right</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;跑图大师&quot;</span></span>
<span class="line"><span style="color:#22863A;">likes</span><span style="color:#24292E;">:	</span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">like-technology</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">bg</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/10/31/65411572727e5.png</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tips</span><span style="color:#24292E;">: </span><span style="color:#032F62;">关注偏好</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">万物互联</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">subtips</span><span style="color:#24292E;">: </span><span style="color:#032F62;">手机、电脑、车机软硬件</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">like-music</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">bg</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/10/31/654115a0e6cc2.png</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tips</span><span style="color:#24292E;">: </span><span style="color:#032F62;">音乐偏好</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">华语流行、轻音乐</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">subtips</span><span style="color:#24292E;">: </span><span style="color:#032F62;">跟 王卓Sco 一起欣赏更多音乐</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">button</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">button_text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">更多推荐</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">button_link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/music/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">oneself</span><span style="color:#24292E;">:	</span><span style="color:#6A737D;"># 按需填写</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">location</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;中国，湖南省&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 所在位置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">birthYear</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;2004&#39;</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 生日</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">university</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;湖南大学&#39;</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 毕业学校</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">major</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;软件工程&#39;</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 专业</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">occupation</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;学生&#39;</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 职位</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">map</span><span style="color:#24292E;">:	</span><span style="color:#6A737D;"># 你所在位置的地图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">light</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/10/31/6541161b74b2a.webp</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 白天</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">dark</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/10/31/6541161bc4066.webp</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 夜晚</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">tj</span><span style="color:#24292E;">:	</span><span style="color:#6A737D;"># 统计</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://v6-widget.51.la/v6/3F15j2vtdTo7PPcN/quote.js</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 需要到51la官网注册自行获取</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">img</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://bu.dusays.com/2023/03/12/640dc8c72f623.webp</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 背景</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 介绍自己</span></span>
<span class="line"><span style="color:#22863A;">cause</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&lt;br&gt;创建这个站的时候，想要就是能够有一个自己能够&lt;b&gt;积累知识、积累兴趣&lt;/b&gt;的地方。和他人分享，会让这些成为积累和沉淀。如果能够帮助到更多的人，帮助更多人解决问题，那一定是非常棒的事情。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">与大多数垂直类的技术博客不同，这里的种类会非常的繁杂，有&lt;b&gt;技能的教程干货&lt;/b&gt;、有&lt;b&gt;生活上的吐槽和妙招&lt;/b&gt;、有&lt;b&gt;话题上的思考和想法&lt;/b&gt;。一般我研究什么、发现了什么都会分享在这里。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">这些就是创造这个小站的本意，&lt;b&gt;也是我分享生活的方式&lt;/b&gt;。有幸能和你相遇在这里，相信我们能共同留下一段美好记忆。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&lt;br&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">rewardList</span><span style="color:#24292E;">:	</span><span style="color:#6A737D;"># 底部捐赠</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">悦华</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">money</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">time</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2023-04-20</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">糕糕手</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">money</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6.66</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">time</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2023-08-11</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">vip</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">幕幕</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">money</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">time</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2023-08-11</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">悦华</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">money</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">56</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">vip</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">time</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2023-08-25</span></span></code></pre></div></li><li><p>修改主题配置文件<code>_config.solitude.yml</code></p></li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 关于界面</span></span>
<span class="line"><span style="color:#85E89D;">about</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">enable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 是否开启</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">echarts</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 文章统计</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">enable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 是否开启</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">startDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2023-04-20 00:00:00&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 统计开始日期 格式：yyyy-MM-dd hh-mm-ss</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tagLength</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 标签显示数量</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">categoryParent</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 显示父分类</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 关于界面</span></span>
<span class="line"><span style="color:#22863A;">about</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">enable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 是否开启</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">echarts</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 文章统计</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">enable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 是否开启</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">startDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2023-04-20 00:00:00&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 统计开始日期 格式：yyyy-MM-dd hh-mm-ss</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tagLength</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 标签显示数量</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">categoryParent</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 显示父分类</span></span></code></pre></div><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enable</td><td>是否开启</td><td>Boolean</td><td>false</td></tr><tr><td>echarts</td><td>文章统计</td><td>-</td><td>-</td></tr><tr><td>echarts.enable</td><td>是否开启</td><td>Boolean</td><td>false</td></tr><tr><td>echarts.startDate</td><td>统计开始日期</td><td>String</td><td>2023-04-20 00:00:00</td></tr><tr><td>echarts.tagLength</td><td>标签显示数量</td><td>Number</td><td>10</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>这里的echarts需要提前安装echarts插件，详情请到<a href="/page/echart.html">文章统计页面配置</a>查看</p></div>`,6),e=[o];function t(c,E,r,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
