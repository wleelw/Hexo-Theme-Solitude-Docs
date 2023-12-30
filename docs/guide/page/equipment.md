---
title: 我的装备页面配置
---

# 页面配置📦

## 我的装备页面配置

1. 在cmd面板中输入以下命令，它将在source文件夹下生成`equipment`目录，其中包含`index.md`​文件。

    ```shell
    hexo new page equipment
    ```

   将`index.md`​中的内容替换成以下：（按需修改）

    ```markdown
    ---
    title: 我的装备
    date: 2023-11-01 13:14:42
    type: equipment
    cover: ''
    desc: 实物装备推荐
    leftend: 跟 王卓Sco 一起享受科技带来的乐趣
    rightend: ''
    ---
    ```
2. 在`source\_data\`​文件夹下建立名为`equipment.yaml`​的文件，下方内容为模版，根据要求按需添加。
   ```yaml
   - class_name: 生产力
     description: 提升自己生产效率的硬件设备
     equipment_list:
         - name: 群晖 DS920+
           specification: 性价比超高
           description: 很棒的网络存储解决方案以及流媒体传输服务器
           image: https://bu.dusays.com/2023/11/01/6541e17663fc7.png
         - name: iPhone 12 Pro Max
           specification: 海蓝色 / 1TB
           description: 功能强大，外观抢眼，设计耐用。
           image: https://bu.dusays.com/2023/11/01/6541e18d971de.png
           link: https://support.apple.com/kb/SP832?locale=zh_CN
   - class_name: 出行
     description: 用来出行的实物及设备
     equipment_list:
        - name: AirPods Pro
          specification: 标准版
          description: 可以说是非常强的耳机了，还有好几次固件大幅度更新。apple生态只要有两个设备及以上，必入。
          image: https://bu.dusays.com/2023/11/01/6541e1c11f701.png
          link: https://www.apple.com.cn/airpods-pro/
   ```
   | 参数           | 解释      |
   | -------------- | --------- |
   | class_name     | 分类名称  |
   | description    | 分类介绍  |
   | equipment_list | items列表 |

   equipment_list:

   | name          | item 显示名称                                                |
   | ------------- | ------------------------------------------------------------ |
   | specification | 类型/属性（例如：8+128G，终极版）                            |
   | description   | 简介                                                         |
   | image         | item图片                                                     |
   | link          | 左下角链接按钮（填写地址例如：/post/test/将显示查看文章，为外链http(s)则显示链接按钮） |
   
![](https://bu.dusays.com/2023/11/01/6541e46c19396.png)