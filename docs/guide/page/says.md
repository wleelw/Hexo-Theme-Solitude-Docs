---
title: 即刻短文配置
---

# 页面配置 📦

## 即刻短文配置

在cmd面板中输入以下命令，它将在source文件夹下生成`essay`目录，其中包含`index.md`​文件。

```sh
$ hexo new page essay
```

将`index.md`​中的内容替换成以下：

```markdown
---
title: 即刻短文
date: 2023-11-01 13:43:20
type: says
cover: ''
desc: 分享生活的小确幸
leftend: ''
rightend: ''
---
```

::: tabs key:says

=== 静态版
在source文件夹下添加`_data`​​文件夹并建立名为`essay.yaml`​​的文件，下方内容为模版，根据要求进行添加。

```yaml
essay_list:
  - content: 视频播放测试！
    date: 2023-10-31 15:32
    video:
      bilibili: //player.bilibili.com/player.html?aid=569564218&bvid=BV1Cv4y1p717&cid=1084656892&p=1&autoplay=0
  - content: 音乐播放测试！
    date: 2023-10-31 15:32
    aplayer:
      server: netease
      id: 571340283
  - content: 主题交流群已建立！
    date: 2023-10-31 15:32
    image:
      - https://bu.dusays.com/2023/10/31/6540ee019755a.png
    link: https://wzsco.top/
```

|       参数       | 释义                                                                     |
|:--------------:|------------------------------------------------------------------------|
|    content     | 文字内容                                                                   |
|      date      | 发布日期，格式建议为 2022/10/26 08:00:00                                         |
|     image      | 图片链接, 可填写多张图片                                                          |
|      link      | 左下角链接按钮，填写url                                                          |
| aplayer.server | 音乐播放器的服务商，可选netease / tencent                                          |
|   aplayer.id   | 单曲id，列如：https:\/\/music.163.com/#/song?id=571340283，在song?id=后面的数字即是id |
|  video.player  | 原生视频播放器，直接填写你的视频直链即可                                                   |
| video.bilibili | 哔哩哔哩播放器，填入外嵌视频地址即可（注意：如果不需要自动播放，就在你的链接后面加上`&autoplay=0`）               |
=== 动态JSON
开发中...
=== 动态Memos
开发中...
:::
配置 `主题配置文件`

```yaml
says:
  enable: true # 是否开启
  # @todo: 实现动态加载
  # type: json # 数据加载方式，可选：default / json / memos
  home_mini: true # 主页的即刻轮播条
  style: 1 # 1：张洪heo样式 / 2：Leonus样式
```

|    参数     | 释义                     |
|:---------:|------------------------|
|  enable   | 是否开启                   |
| home_mini | 主页的即刻轮播条               |
|   style   | 1：张洪heo样式 / 2：Leonus样式 |

![](https://bu.dusays.com/2023/11/01/6541e7a2105c0.png)