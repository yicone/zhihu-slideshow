var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(methodOverride());

// 设定静态文件目录，比如本地文件
// 目录为demo/public/images，访问
// 网址则显示为http://localhost:3000/images
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'));