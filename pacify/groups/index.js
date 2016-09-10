var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


router.get("/:id", function(req,res,next) {
	res.render('index.html')
})


router.post("/:id", function(req,res,next) {
	
})


router.post('/message',function(req,res,next) {
	
})


module.exports = router