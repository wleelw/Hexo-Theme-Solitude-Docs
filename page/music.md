---
title: 音乐馆页面配置
---

# 页面配置 📦

## 音乐馆页面配置

1. 在cmd面板中输入以下命令，它将在source文件夹下生成`music`目录，其中包含`index.md`​文件。

    ```shell
    hexo new page music
    ```

2. 修改主题配置文件 `_config.yml`，将 `enable` 设置成 `true`，并填写以下对应的内容。

```yaml
# 音乐馆界面
music:
  enable: false
  id: 1994908354
  server: netease # 播放列表的服务商。netease：网易云 / tencent：腾讯 / kugou：酷狗 / xiami：小米 / baidu：百度
  type: playlist # 播放列表的类型。song：单曲 / playlist：歌单 / album：专辑 / artist：歌手
  volume: 0.8 # 初始音量。0.8 = 80%，范围 0 到 1
  mutex: true # 是否开启互斥模式，即同时只能有一个播放器播放
```

::: tip

**关于ID的获取：**

以网易云音乐为例，链接为：`https://music.163.com/#/playlist?id=1994908354`，可以看到id后面有一串数字，直接复制即可。

:::