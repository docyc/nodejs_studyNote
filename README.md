# NodeJS 学习笔记

## nodeJS下载安装配置

- 下载地址 https://nodejs.org/en/download/
- nvm for nodejs 版本管理工具(我们在很多时候，会安装几个版本的nodejs 来回切换)
    + NVM github地址 https://github.com/creationix/nvm
    + window版 github地址 https://github.com/coreybutler/nvm-windows  文件下载 https://github.com/coreybutler/nvm-windows/releases


### window下nodeJS

#### window下NVM的安装配置

- 1.下载nvm程序文件 `nvm-noinstall.zip` 解压会得到5个文件( elevate.cmd elsvate.vbs install.cmd nvm.exe LICENSE )
- 2.在解压的目录中 新建一个 `settings.txt` 文件 在里面编写如下代码：
```shell
root: D:\RuanJian\nvm  # nvm所在路径
path: D:\RuanJian\nodejs  # nodejs所在路径
arch: 64  # 系统位数
proxy: none
node_mirror: https://npm.taobao.org/mirrors/node/  # node taobao源
npm_mirror: https://npm.taobao.org/mirrors/npm/  # npm taobao源
```
- 3.配置环境变量  在此电脑上右键 -> 属性 -> 高级系统设置 -> 高级 -> 环境变量  在用户变量新增加两个nvm和nodejs 路径 然后加载到 Path 上
```shell
NVM_HOME = D:\RuanJian\nvm
NVM_SYMLINK = D:\RuanJian\nodejs

# 在Path 中加入这两个
Path = ;%NVM_HOME%;%NVM_SYMLINK%;
```
- 4.打开cdm 命令行  输入 nvm --version 显示版本 就便是安装配置成功了

#### NVM

- 安装nodejs   `nvm install node[@版本号] [系统位数( 32 64 )]`
- 查看安装了那些nodejs   `nvm list`
- 切换到指定版本 `nvm use v10.8.0`
- 删除某个版本 `nvm uninstall v10.8.0`

#### npm

- npm 安装nodejs 就已经一起安装了 可以使用 `npm -v` 查看版本
- npm 安装包  例如安装bower  `npm install bower[@版本号] --global `   --global 是全局安装
- npm 初始化  `npm init --yes` 、 `npm init -y` 、 `npm init`
- npm 初始化后 会在当前文件新建一个 `package.json` 文件
- npm

##  nodeJS API 学习

### fs文件系统

- 引包 var fs = require('fs')
- fs.readFile(文件路径, 指定编码, 回调函数)
- fs.writeFile(文件路径, 数据, 回调函数)

### http 服务器

- 引包 var http = require('http')
- 创建服务器 var app = http.createServer()
- 监听请求 app.on('request', function(request, response){  })
    + request.url 请求url地址
    + 解析get参数 request.query  返回一个json对象
    + 响应内容 response.write(响应体)
    + 响应结束 response.end()
    + 响应状态码 response.statusCode = '404'
    + 301跳转 response.redirect = '/'
- 服务器监听端口 app.listen(3000, function(){ console.log('running ...') })

### require 模块加载

#### 系统内置模块

- 加载方式 var fs = require('fs')
- fs
- http
- path
- ...

#### 自己写的模块

- 加载方式 var docyc = require('./docyc.js')

#### 第三方模块

- 加载方式 var express = require('express')
- 加载顺序
    + 先找当前目录中的 `node_modules` 中找包名文件夹中的 `package.json` 中找入口函数 `main:` 对应的值
    + 没有`main` 就在`node_modules`中找包名文件夹 找 `insex.js`
    + 没有 返回项目上一级按照上面顺序再找
    + 知道磁盘根目录 如/ 或者 C：


## nodejs 使用模板引擎`art-template`

### 下载安装

- github地址 https://github.com/aui/art-template
- 官网地址 https://aui.github.io/art-template/
- 使用npm安装方式
    + npm install art-template express-art-template --save

### 使用方法见下面例子

```javascript
...

// `'html'`是指定模板的后缀名
server.engine('html', require('express-art-template'))

server.on('request', function(req, res){
    // `'index.html'` 是指定模板的名字  默认是在当前目录叫`views`的文件夹中找
    res.render('index.html', {
        // 模板数据对象
    })
})

...
```


## nodejs 第三方模块Express框架

### 下载安装

- github地址 https://github.com/expressjs/express
- 官网地址 https://expressjs.com
- 使用npm安装方式
    + npm install express --save

### 使用方法见下面例子

```javascript
// 引包
var express = require('express')

var app = express()

// GET请求
app.get('/', function(request, response){
    // 具体代码
})

// POST请求
app.post('/', function(request, response){
    // 具体代码
})

// 监听端口
app.listen(3000, function(){
    console.log('Server running ... ')
})
```

### express 静态文件开放

使用如下命令

```javascript
// 说明：`/public/`是请求的url地址 `./public`是静态文件所在位置
app.use('/public/', express.static('./public'))

```

### 路由分离（router）

- 第一步 在当前项目建立一个router.js文件 ，中的代码如下

```javascript
var express = require('express')
var router = express.Router()

//具体路由
router.get('/', function(request, response){
    // 具体代码
})

router.post('/', function(request, response){
    // 具体代码
})

//
module.exports = roter
```
- 第二步 在app.js文件中配置
```javascript
var express = require('express')
// 引用自定义路由
var router1 = require('./router.js')
// 使用路由
app.use(router1)
```

### express中解析`POST`请求之`body-parser`

- github地址 https://github.com/expressjs/body-parser
- 安装方法
    + npm安装 `npm install body-parser --save`
- 使用方法
```javascript
// 引包
var express = require('express')
var bodyParser = require('body-parser')
var app = express

// 配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 使用
app.get('/', function(req, res){
    console.log(req.body)
})

app.listen(3000)
```