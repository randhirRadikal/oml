var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
	res.render('user_view/list', { title: 'Home',data:{"email":"randhir@isisdsn.net","password":"123456"},error:{} });
});


module.exports = router;
