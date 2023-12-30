# 页面配置 📦

## 友链页面

1. 在cmd面板中输入以下命令，它将在source文件夹下生成links目录，其中包含`index.md`​文件。

    ```shell
    hexo new page links
    ```

    将`index.md`​中的内容替换成以下：

    ```markdown
    ---
    title: 友情链接
    date: 2023-10-31 20:30:56
    type: links
    ---
    ```
2. 在source文件夹下添加`_data`​​文件夹并建立名为`links.yaml`​​的文件，下方内容为模版，根据要求进行添加。

    ```yaml
    banners:
      - name: 王卓Sco	# 友链名称
        link: https://blog.wzsco.top/	# 友链地址
        avatar: https://bu.dusays.com/2023/12/19/658179febbfb5.png	# 显示头像
    links:
      - class_name: 推荐 # 分类名称
        descr: 参与本站开发、提供设计灵感、捐助本站的优秀博主 # 分类简介
        type: card	# 显示方式，有两种 card / item
        link_list:
          - name: 王卓Sco	# 友链名称
            link: https://blog.wzsco.top/	# 友链地址
            avatar: https://bu.dusays.com/2023/12/19/658179febbfb5.png	# 显示头像
            descr: 宁静致远，热爱生活。	# 友链简介
            topimg: https://bu.dusays.com/2023/12/19/658179febbfb5.png	# 如果是card模式下，将显示
            tag: 技术	# 左上角提示信息
            cover: '#8bdf2d' # tag标签背景颜色
      - class_name: 技术
        descr: 技术知识为主的博客
        type: item
        link_list:
          - name: 王卓Sco	# 友链名称
            link: https://blog.wzsco.top/	# 友链地址
            avatar: https://bu.dusays.com/2023/12/19/658179febbfb5.png	# 显示头像
            descr: 宁静致远，热爱生活。	# 友链简介
    ```
3. 在浏览器查看：/links

    ​![](https://bu.dusays.com/2023/10/31/65410d36190e9.png)​


