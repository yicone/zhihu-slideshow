# zhihu-slideshow


A [Supersized](https://github.com/buildinternet/supersized) demo
[演示地址](http://yicone.github.io/zhihu-slideshow/public/)

## 图片手工抓取的主要步骤

图片来源
https://www.zhihu.com/question/36759180

- 获取所有图片链接

```javascript
var str = ''; $('img[class*="image"]').each(function(){ str += '$(this).attr('data-original') + '\n' + $(this).attr('src') + '\n'; }); console.log(str);
```

- 下载所有图片

```bash
mkdir images && cd images
vi files.txt
# 将前一步得到的图片链接粘帖进去
```

wget --no-check-certificate -i files.txt
```
- 生成slideshow所需的格式数据，提供给slideshow组件

```javascript
var str = ''; $('img[class*="image"]').each(function(){ str += '{image: \'' + $(this).attr('data-original') + '\', thumb: \'' +
$(this).attr('src') + '\'},\n'; }); console.log(str);
``` 

- 在编辑器里写个正则替换，用相对地址替换原始的图片链接

搜索 `https://\w+.zhimg.com/`, 替换为`images/`



本来是想找一个以slideshow的方式，浏览指定网页上图片的网页工具。
一时没找到，就先起了个草稿，在这个基础上，考虑工具如何实现

实现思路：
- 以限定网站为前提
- 后端收到用户提交的网页地址，抓出图片地址
- 异步下载图片到本地
- 用本地图片地址，生成slideshow所需的json格式
- 处理好后邮件通知用户，附上slideshow的网址
- 仅能自己用
