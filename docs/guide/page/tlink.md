---
title: 工具箱页面配置🧰
---

# 页面配置 📦

## 工具箱页面配置🧰

1. 在cmd面板中输入以下命令，它将在source文件夹下生成`tlink`目录，其中包含`index.md`​文件。

    ```shell
    hexo new page tlink
    ```

   将`index.md`​中的内容替换成以下：

    ```markdown
    ---
    title: 在线工具
    date: 2023-11-01 13:57:53
    type: tlink
    cover: ''
    desc: 在线工具推荐
    tipl: 跟 王卓Sco 一起高效的数字生活
    tipr:
    ---
    ```
2. 在source文件夹下添加`_data`​​文件夹并建立名为`tlink.yaml`​​的文件，下方内容为模版，根据要求进行添加。

   ```yaml
   links:
     - class_name: 技能
       descr: 我会的技能点
       link_list:
         - name: C#
           avatar: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/Csharp_Logo.png
           descr: 一个简单的、现代的、通用的、面向对象的编程语言。
           link: /
         - name: .NET
           avatar: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/dotnet-logo.svg
           descr: 免费、开源，快速和跨平台，新式和高效。
           link: /
      ```

   | class_name | 分类名称 |
   | ---------- | -------- |
   | descr      | 分类介绍 |

   link_list:

   | name   | item 名称 |
   | ------ | --------- |
   | avatar | 显示图片  |
   | descr  | 简介      |
   | link   | 链接地址  |

![](https://bu.dusays.com/2023/11/01/6541ea063f84b.png)