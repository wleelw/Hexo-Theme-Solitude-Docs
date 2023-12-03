# 页面配置📦

## 关于页面

1. 在cmd面板中输入以下命令，它将在source文件夹下生成about目录，其中包含`index.md`​文件。

    ```shell
    hexo new page about
    ```

   将`index.md`​中的内容替换成以下：

    ```markdown
    ---
    title: 关于本站
    date: 2023-10-31 22:24:22
    type: about
    ---
    ```
2. 在`source\_data\`​文件夹下建立名为`about.yaml`​的文件，下方内容为模版，根据要求按需添加。

    ```yaml
    authorinfo:
      leftTags:
        - "🤖️ 数码科技爱好者"
        - "🔍 分享与热心帮助"
        - "🏠 智能家居小能手"
      rightTags:
        - "脚踏实地行动派 🏃"
        - "团队小组发动机 🧱"
        - "壮汉人狠话不多 💢"
      image: "https://bu.dusays.com/2023/10/31/6540daf117d20.png"
    contentinfo:  # 顶部个人信息展示
      name: Solitude  # 名称
      title: 一个优雅的 Hexo 主题  # 介绍
      product: 优秀的产品
      design: 出色的设计
      program: 高效的编程
      user_experience: 人性化的用户体验

    skills: # 根据需求添加
      title: 技能
      subtitle: 开启创造力
      tags:
        - title: HTML
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/HTML.png
          color: '#e9572b'
        - title: Javascript
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/JS.png
          color: '#f7cb4f'
        - title: Kotlin
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/kotlin-logo.svg
          color: '#ffffff'
        - title: Docker
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/docker.png
          color: '#57b6e6'
        - title: Flutter
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/flutter.png
          color: '#ffffff'
        - title: WebPack
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png
          color: '#2e3a41'
        - title: Git
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/git.png
          color: '#df5b40'
        - title: Visual Studio
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/vs-logo.svg
          color: '#ffffff'
    careers:
      title: "生涯"
      subtitle: "无限进步"
      items:
        - school: "家里蹲"
          major: "学习"
          color: "#357ef5"
      image: "https://bu.dusays.com/2023/10/31/654112c2aaef4.png"

    personalities:
      tips: "性格"
      title: "执政官"
      color: "#56a178"
      type: "ESFJ-A"
      image: "https://npm.elemecdn.com/wzheo-absolute@1.0.0/image/source/about/ESFJ-A.svg"
      link: "https://www.16personalities.com/"
      linkText: "16personalities"
      typeLink: "https://www.16personalities.com/ch/infp-人格"
      typeName: "执政官"
      myphoto: https://bu.dusays.com/2023/10/31/6540d809e3dcd.png

    motto:
      title: 座右铭
      prefix: 破釜沉舟，
      content: 砥砺前行。
    expertise:
      title: 特长
      prefix: 跑步、写作、唱歌
      specialist: 专家
      content: 学习能力
      level: MAX

    game1:
      title: "爱好游戏"
      img: https://bu.dusays.com/2023/10/31/654114af5cdcb.png
      icon: "fas fa-gamepad"
      subtitle: "APEX LEGENDS"
      tips_left: C位
      tips_right: ID Wleelw
    game2:
      title: "爱好游戏"
      img: https://bu.dusays.com/2023/10/31/6541152ce393d.png
      subtitle: 精灵与萤火意志
      icon: "fas fa-dice-d20"
      tips_right: "跑图大师"
    likes:	#
      - type: like-technology
        bg: https://bu.dusays.com/2023/10/31/65411572727e5.png
        tips: 关注偏好
        title: 万物互联
        subtips: 手机、电脑、车机软硬件
      - type: like-music
        bg: https://bu.dusays.com/2023/10/31/654115a0e6cc2.png
        tips: 音乐偏好
        title: 华语流行、轻音乐
        subtips: 跟 王卓Sco 一起欣赏更多音乐
        button: true
        button_text: 更多推荐
        button_link: /music/


    oneself:	# 按需填写
      location: '中国，湖南省' # 所在位置
      birthYear: '2004'	# 生日
      university: '湖南大学'	# 毕业学校
      major: '软件工程'	# 专业
      occupation: '学生'	# 职位
      map:	# 你所在位置的地图
        light: https://bu.dusays.com/2023/10/31/6541161b74b2a.webp	# 白天
        dark: https://bu.dusays.com/2023/10/31/6541161bc4066.webp	# 夜晚

    tj:	# 统计
      url: https://v6-widget.51.la/v6/3F15j2vtdTo7PPcN/quote.js	# 需要到51la官网注册自行获取
      img: https://bu.dusays.com/2023/03/12/640dc8c72f623.webp # 背景

    # 介绍自己
    cause: <br>创建这个站的时候，想要就是能够有一个自己能够<b>积累知识、积累兴趣</b>的地方。和他人分享，会让这些成为积累和沉淀。如果能够帮助到更多的人，帮助更多人解决问题，那一定是非常棒的事情。
      <br>
      与大多数垂直类的技术博客不同，这里的种类会非常的繁杂，有<b>技能的教程干货</b>、有<b>生活上的吐槽和妙招</b>、有<b>话题上的思考和想法</b>。一般我研究什么、发现了什么都会分享在这里。
      <br>
      这些就是创造这个小站的本意，<b>也是我分享生活的方式</b>。有幸能和你相遇在这里，相信我们能共同留下一段美好记忆。
      <br>

    rewardList:	# 底部捐赠
      - name: 悦华
        money: 5
        time: 2023-04-20
      - name: 糕糕手
        money: 6.66
        time: 2023-08-11
        vip: true
      - name: 幕幕
        money: 5
        time: 2023-08-11
      - name: 悦华
        money: 56
        vip: true
        time: 2023-08-25
    ```

3. 修改主题配置文件`_config.solitude.yml`

```yaml
# 关于界面
about:
  enable: false # 是否开启
  echarts: # 文章统计
    enable: false # 是否开启
    startDate: "2023-04-20 00:00:00" # 统计开始日期 格式：yyyy-MM-dd hh-mm-ss
    tagLength: 10 # 标签显示数量
    categoryParent: true # 显示父分类
```

| 参数                | 说明     | 类型      | 默认值                 |
|-------------------|--------|---------|---------------------|
| enable            | 是否开启   | Boolean | false               |
| echarts           | 文章统计   | -       | -                   |
| echarts.enable    | 是否开启   | Boolean | false               |
| echarts.startDate | 统计开始日期 | String  | 2023-04-20 00:00:00 |
| echarts.tagLength | 标签显示数量 | Number  | 10                  |

::: tip
这里的echarts需要提前安装echarts插件，详情请到[文章统计页面配置](/page/echart.html)查看
:::