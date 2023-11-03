---
title: 即刻短文配置
---

# 页面配置 📦

| todolist | 本地yml | 动态JSON | 动态Memos |
| :----: | :----: | :----: | :----: |
| 瀑布流 | ✔️支持 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |
| 图片灯箱 | ✔️支持 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |
| 多图显示 | ✔️支持 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |
| 外部链接 | ✔️支持 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |
| 自定标识 | 💻待添加 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |
| 快速评论 | ✔️支持 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |
| 音乐模块 | ✔️支持 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |
| 视频模块 | ✔️支持 | ⚠️待适配动态功能 | ⚠️待适配动态功能 |

## 即刻短文配置

1. 在cmd面板中输入以下命令，它将在source文件夹下生成`essay`目录，其中包含`index.md`​文件。

    ```shell
    hexo new page essay
    ```

   将`index.md`​中的内容替换成以下：

    ```markdown
    ---
    title: 即刻短文
    date: 2023-11-01 13:43:20
    type: says
    cover: ''
    desc: 分享生活的小确幸
    tipl: 
    tipr: 
    ---
    ```
2. 在source文件夹下添加`_data`​​文件夹并建立名为`essay.yaml`​​的文件，下方内容为模版，根据要求进行添加。
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

| 参数 | 释义 |
| :----: | ---- |
| content | 文字内容 |
| date | 发布日期，格式建议为 2022/10/26 08:00:00 |
| image | 图片链接, 可填写多张图片 |
| link | 左下角链接按钮，填写url |
| aplayer.server | 音乐播放器的服务商，可选netease / tencent |
| aplayer.id | 单曲id，列如：https:\/\/music.163.com/#/song?id=571340283，在song?id=后面的数字即是id |
| video.player | 原生视频播放器，直接填写你的视频直链即可 |
| video.bilibili | 哔哩哔哩播放器，填入外嵌视频地址即可（注意：如果不需要自动播放，就在你的链接后面加上`&autoplay=0`） |

::: tip
记得把首页中的bbtime打开哦。
```yaml
# 首页顶部样式
hometop:
  bbtime: true # 即刻顶部是否开启
```
:::

![](https://bu.dusays.com/2023/11/01/6541e7a2105c0.png)
