import{_ as p,D as l,o as e,c as E,I as a,w as n,R as k,k as s,a as i}from"./chunks/framework.PTukmy-M.js";const f=JSON.parse('{"title":"额外配置","description":"","frontmatter":{"title":"额外配置"},"headers":[],"relativePath":"guide/global-extra.md","filePath":"guide/global-extra.md"}'),r={name:"guide/global-extra.md"},d=k("",46),g=s("ol",null,[s("li",null,[i("安装 "),s("a",{href:"https://github.com/next-theme/hexo-generator-searchdb",target:"_blank",rel:"noreferrer"},"hexo-generator-searchdb"),i(" 或者 "),s("a",{href:"https://github.com/PaicHyperionDev/hexo-generator-search",target:"_blank",rel:"noreferrer"},"hexo-generator-search"),i("，根据它的文档去做相应配置")]),s("li",null,[i("修改 "),s("code",null,"主题配置文件"),s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"local_search"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 本地搜索")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  enable"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  preload"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  CDN"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")])])])])])],-1),y=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"参数"),s("th",null,"解释")])]),s("tbody",null,[s("tr",null,[s("td",null,"enable"),s("td",null,"是否开启搜索")]),s("tr",null,[s("td",null,"preload"),s("td",null,"预加载，开启后，进入网页后会自动加载搜索文件。关闭时，只有点击搜索按钮后，才会加载搜索文件")]),s("tr",null,[s("td",null,"CDN"),s("td",null,"搜索文件的 CDN 地址（默认使用的本地链接）")])])],-1),o=s("blockquote",null,[s("p",null,"如果你使用 hexo-algoliasearch，请记得配置 fields 参数的 title, permalink 和 content")],-1),c=s("ol",null,[s("li",null,[i("安装 "),s("a",{href:"https://github.com/oncletom/hexo-algolia",target:"_blank",rel:"noreferrer"},"hexo-algolia"),i(" 或 "),s("a",{href:"https://github.com/LouisBarranqueiro/hexo-algoliasearch",target:"_blank",rel:"noreferrer"},"hexo-algoliasearch"),i(". 根据它们的使用文档去做相应的配置。")]),s("li",null,[i("修改 "),s("code",null,"主题配置文件"),s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}}," algolia_search"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"   enable"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"   hits"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"     per_page"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"6")])])])])])],-1),F=k("",10);function u(D,A,C,b,B,m){const h=l("PluginTabsTab"),t=l("PluginTabs");return e(),E("div",null,[d,a(t,null,{default:n(()=>[a(h,{label:"本地搜索"},{default:n(()=>[g,y]),_:1}),a(h,{label:"Algolia 搜索"},{default:n(()=>[o,c]),_:1})]),_:1}),F])}const v=p(r,[["render",u]]);export{f as __pageData,v as default};