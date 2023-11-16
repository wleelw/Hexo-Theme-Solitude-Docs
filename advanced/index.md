# 进阶配置 🚀

## 评论

目前只支持`twikoo`并且非常完善，其他的评论系统正在路上……

```yaml
# 评论
comment:
  enable: false
  twikoo:
    envId: https://twikoo.sondy.top # twikoo 部署地址
    path: window.location.pathname  # 
    lang: 'zh-CN' # 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js
    accessToken:  # accessToken 
```

::: tip
开启`twikoo`评论后默认开启热评功能。
:::

## Ai文章摘要

已整合 `@qxchuckle`的Ai文章摘要工具 `Post-Summary-AI 5.8`，将持续进行功能开发、更新等等

```yaml
ai: # 文章页面AI
  enable: false
  key: # 前往tianli-AI 购买
  rec_method: # 推荐文章方式（all:匹配数据库所有文章、web:仅当前博客文章）默认：web
```

::: tip

使用前，tianliGPT的key请到[爱发电](https://afdian.net/item/f18c2e08db4411eda2f25254001e7c00)中购买，10元5万字符（常有优惠）。请求过的内容再次请求不会消耗key，可以无限期使用。

- 购买完成后，进入[管理后台](summary.zhheo.com)：summary.zhheo.com ，登录后点击右上角的“添加新网站”，输入密钥即可绑定成功。
- 若需要进行本地调试，请在管理后台将 `127.0.0.1:端口` 加入白名单，否则会触发防盗KEY，无法正常获取摘要。
:::

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