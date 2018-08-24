var express = require('express')
var app = express()
var path = require('path')
var router = require('./routes/basic.js')

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname,'./views/'))


app.use('/public', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules/')))

app.use(router)

app.listen(3000, function(){
    console.log('Server Running ...')
})