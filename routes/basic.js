var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    res.render('index.html', {
        name:"乐马创意设计"
    })
})

module.exports = router