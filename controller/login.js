var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
	res.render('login_view/index', { title: 'Home',data:{"email":"randhir@isisdsn.net","password":"123456"},error:{} });
});


module.exports = router;
