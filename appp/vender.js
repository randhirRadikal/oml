var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

var requiredError = {
	"error_code":1,
	"message":"Please enter required fields."
};
var accessTokenError = {
	"error_code":10,
	"message":"Access token not valied."
};

var orm = new Sequelize('oml','root','yahoo98663623!@',{
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
		Users.login(req.body.email,req.body.password,'Seller',function(response){
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

router.post('/kitchen/list',function(req,res){
	if(req.body.access_token){
		Users.isVenderExists(req.body.access_token,function(venderId){
			if(venderId){
				Users.getKitchenList(venderId,function(response){
					res.json({
								"error_code":0,
								"message":"Successfully.",
								"data":response
							});
				});
			}else{
				res.json(accessTokenError);
			}
		});
	}else{
		res.json(requiredError);
	}
});

router.post('/kitchen/detail',function(req,res){
	if(req.body.access_token){

	}else{
		res.json(requiredError);
	}
});

router.post('/kitchen/add_edit',function(req,res){
	if(req.body.access_token && req.body.name && req.body.email && req.body.phone_number){
		Users.isVenderExists(req.body.access_token,function(venderId){
			if(venderId){
				req.body.vender_id = venderId;
				req.body.type = "Kitchen";
				Users.addUpdate(req.body,function(response){
					res.json({
								"error_code":0,
								"message":"Successfully.",
								"data":response
							});
				});
			}else{
				res.json(accessTokenError);
			}
		});
	}else{
		res.json(requiredError);
	}
});

router.post('/kitchen/delete',function(req,res){
	if(req.body.email && req.body.password){

	}else{
		res.json(requiredError);
	}
});




module.exports = router;
