---
title: 即刻短文配置
---

# 页面配置 📦

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
      - content: 主题交流群已建立！
        date: 2023-10-31 15:32
        image:
          - https://bu.dusays.com/2023/10/31/6540ee019755a.png
        link: https://wzsco.top/
    ```

   | content | 文字内容           |
   | ------- |----------------|
   | date    | 发布日期           |
   | image   | 显示图片组，item为url |
   | link    | 左下角链接按钮，填写url  |

::: tip
记得把首页重的bbtime打开哦。
```yaml
# 首页顶部样式
hometop:
  bbtime: true # 即刻顶部是否开启
```
:::

![](https://bu.dusays.com/2023/11/01/6541e7a2105c0.png)
