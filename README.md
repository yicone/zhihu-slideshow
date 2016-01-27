# zhihu-slideshow

A [Supersized](https://github.com/buildinternet/supersized) demo



图片来源
https://www.zhihu.com/question/36759180

- 获取所有图片链接
```javascript
var str = ''; $('img[class*="image"]').each(function(){ str += '{image: \'' + $(this).attr('data-original') + '\', thumb: \'' +
$(this).attr('src') + '\'},\n'; }); console.log(str);
```

- 下载所有图片

```bash
mkdir images && cd images
vi files.txt
# paste all images url
...

wget --no-check-certificate -i files.txt
```

- 在编辑器里写个正则替换，用相对地址替换原始的图片链接

搜索 `https://\w+.zhimg.com/`, 替换为`images/`
