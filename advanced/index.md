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

## Ai文章摘要（dev版）

已整合 `@qxchuckle`的Ai文章摘要工具 `Post-Summary-AI 5.8`，将持续进行功能开发、更新等等

::: tip

使用前，tianliGPT的key请到[爱发电](https://afdian.net/item/f18c2e08db4411eda2f25254001e7c00)中购买，10元5万字符（常有优惠）。请求过的内容再次请求不会消耗key，可以无限期使用。

- 购买完成后，进入[管理后台](summary.zhheo.com)：summary.zhheo.com ，登录后点击右上角的“添加新网站”，输入密钥即可绑定成功。
- 若需要进行本地调试，请在管理后台将 `127.0.0.1:端口` 加入白名单，否则会触发防盗KEY，无法正常获取摘要。
:::

```yml
  ai: # 文章页面AI
    enable: false
    key: # 前往tianli-AI 购买
    rec_method: # 推荐文章方式（all:匹配数据库所有文章、web:仅当前博客文章）默认：web
    ai_name: # 左上角AI名称
    ai_tips: # 右上角GPT版本文字
    ai_introduce: # AI自我介绍
    hide_shuttle: false # 隐藏矩阵穿梭按钮
    typewriter: true # 打字机效果
    speed: 20 # 打字机速度，默认20ms
    BlackWhite_List:
      mode: false  # false：全部文章显示摘要AI / black：让指定页面、文章不显示摘要AI / white：只让指定文章（页面）显示摘要AI
      List: 
        # - 544ba770
        # - /article/544ba770.html
```

### 黑白名单

本主题适配了 `BlackWhite_List` 黑白名单功能，有 <font color="red">false</font>、<font color="red">black</font>、<font color="red">white</font> 三种模式，为**false**时，将为所有文章显示Ai摘要
 - black：黑名单，让指定页面、文章不显示摘要AI。可能你想让某篇文章没有摘要AI。通过填写`List`进行排除匹配。

例如你想让 https://www.qcqx.cn/article/544ba770.html 这篇文章不显示摘要AI，544ba770 是可以唯一标识该文章的字符串，则将其加入到数组中

当然，你也可以将除去域名外的路径，填入数组中。

```yml
    BlackWhite_List:
      mode: black  # false：全部文章显示摘要AI / black：让指定页面、文章不显示摘要AI / white：只让指定文章（页面）显示摘要AI
      List: 
        - 544ba770
        - /article/544ba770.html
```

 - white：白名单，只让指定页面显示摘要AI。当你需要确定在某类页面才有摘要AI时，通过填写`List`进行排除匹配。

和黑名单差不多的用法，例如你只想让 https://www.qcqx.cn/article/***.html 这种文章页面显示摘要AI，article 是可以唯一标识该类页面的字符串，则将其加入到数组中。

```yml
    BlackWhite_List:
      mode: white  # false：全部文章显示摘要AI / black：让指定页面、文章不显示摘要AI / white：只让指定文章（页面）显示摘要AI
      List: 
        - article
        - /article/
```

### 自定义文章截取字数及比例

由于GPT有字数限制，所以对于较长的文章，将会按照一定比例，在文章的前中后截取一定字数的内容后，提交给后端生成摘要，默认为 1000 字数，按 5:3:2 截取

可以通过`文章配置项`的 `ai_total_length` 设置文章截取字数，`ai_ratio_string` 设置前中后截取比例。你可以降低字符数来让扣费变得更少，也可以增加字符数让摘要变得更准确。上限为5000，配置超过5000会重置为上限。

```markdown
---
ai_total_length: 1000
ai_ratio_string: 5:3:2
---
```

⚠️注意：更改此变量损失已消耗过的key，因为你提交的内容发生了变化。

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