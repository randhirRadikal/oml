var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

var requiredError = {
	"error_code":1,
	"message":"Please enter required fields."
};

var orm = new Sequelize('freelancer_oml','root','',{
	logging : function(query){
		console.log('sql Log: ',query);
	},
	host: 'localhost',
	dialect: 'mysql',
	pool:{
		max:5,
		min:0,
		idle: 10000
	},
	define: {
	    timestamps: false // true by default
	}
});

var Users = require('./models/user')(orm);


router.get('/',function(req,res){
	res.json({
				"error_code":0,
				"message":"Url not valied."
			});
});

router.post('/login',function(req,res){
	if(req.body.email && req.body.password){
		Users.login(req.body.email,req.body.password,'Buyer',function(response){
			if(response){
				res.json({
							"error_code":0,
							"message":"Login successfully.",
							"data":response
						});
			}else{
				res.json({
							"error_code":3,
							"message":"Email and password wrong."
						});
			}
		});
	}else{
		res.json(requiredError);
	}
});


module.exports = router;
