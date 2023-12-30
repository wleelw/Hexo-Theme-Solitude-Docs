# 进阶配置 🚀

## 评论

目前支持`twikoo`和`waline`，推荐使用`twikoo`，其他的评论系统正在路上……

```yaml
# 评论
comment:
  enable: false # 是否开启评论
  type:  # valine, twikoo
  lazyload: false # 是否开启懒加载
  count: false  # 是否显示评论数
  # 评论系统
  twikoo:
    envId: # url: https://twikoo.js.org/
    lang: 'zh-CN' # 语言
    accessToken:  # accessToken
  waline:
    envId:  # url: https://waline.js.org/
    pageview: false # 是否开启页面访问量统计
    option: # waline配置项
```

## Ai文章摘要

::: tip

使用前，tianliGPT的key请到[爱发电](https://afdian.net/item/f18c2e08db4411eda2f25254001e7c00)
中购买，10元5万字符（常有优惠）。请求过的内容再次请求不会消耗key，可以无限期使用。

- 购买完成后，进入[管理后台](summary.zhheo.com)：summary.zhheo.com ，登录后点击右上角的“添加新网站”，输入密钥即可绑定成功。
- 若需要进行本地调试，请在管理后台将 `127.0.0.1:端口` 加入白名单，否则会触发防盗KEY，无法正常获取摘要。
  :::

> 主题自带ScoAI摘要。依托于tianliGPT，仅在1.2.6版本及以上可用。
```yaml
# 文章页面AI
ai:
  enable: false # 是否开启
  # 右侧显示的模型名称
  modelName: GPT 4
  # key
  key:
  # 自介
  talk: 我是王卓Sco开发的摘要生成助理ScoGPT，ScoGPT在静态部署时进行摘要的撰写，并且在访客访问时通过ScoCorrection转译后的文本摘要实现工具。我在这里只负责已经生成的摘要显示，你无法与我直接沟通，但我可以回答一些预设的问题。
  # 随机文章按钮
  randomPost: false
  # 举报链接，不填不显示
  report: https://blog.wzsco.top/about/
  # 底部提示
  tips: 此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结
```

> 具体效果请查看主题作者博客文章：[Solitude 主题标签 Tag Plugins](https://blog.wzsco.top/p/e19cb4b7.html)

## Gulp使用

使用Gulp对代码进行压缩

1. 安装相关插件：
    ```shell
     npm install gulp --save
     npm install compress --save
     npm install gulp-clean-css --save
     npm install gulp-html-minifier-terser --save
     npm install gulp-htmlclean --save
     npm install gulp-terser --save
    ```
2. 在项目根目录创建 `gulpfile.js` 文件，复制以下内容：
    ```js
    var gulp = require('gulp');
    var cleanCSS = require('gulp-clean-css');
    var htmlmin = require('gulp-html-minifier-terser');
    var htmlclean = require('gulp-htmlclean');
    var terser = require('gulp-terser');
    // 压缩js
    gulp.task('compress', () =>
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(terser())
    .pipe(gulp.dest('./public'))
    )
    //压缩css
    gulp.task('minify-css', () => {
    return gulp.src(['./public/**/*.css'])
    .pipe(cleanCSS({
    compatibility: 'ie11'
    }))
    .pipe(gulp.dest('./public'));
    });
    //压缩html
    gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
    removeComments: true, //清除html注释
    collapseWhitespace: true, //压缩html
    collapseBooleanAttributes: true,
    //省略布尔属性的值，例如：<input checked="true"/> ==> <input />
    removeEmptyAttributes: true,
    //删除所有空格作属性值，例如：<input id="" /> ==> <input />
    removeScriptTypeAttributes: true,
    //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,
    //删除<style>和<link>的 type="text/css"
    minifyJS: true, //压缩页面 JS
    minifyCSS: true, //压缩页面 CSS
    minifyURLs: true  //压缩页面URL
    }))
    .pipe(gulp.dest('./public'))
    });
    
    // 运行gulp命令时依次执行以下任务
    gulp.task('default', gulp.parallel(
    'compress', 'minify-css', 'minify-html'
    ))
    ```
3. 每次提交时使用gulp进行压缩

```shell
hexo clean && hexo g && gulp && hexo deploy
```