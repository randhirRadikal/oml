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

var orm = new Sequelize('freelancer_oml','root','',{
//var orm = new Sequelize('oml','root','yahoo98663623!@',{
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
var Product = require('./models/products')(orm);
var Kitchen = require('./models/kitchen')(orm);


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
				Kitchen.getList(venderId,function(response){
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
	if(req.body.access_token && req.body.id){
		Users.isVenderExists(req.body.access_token,function(venderId){
			if(venderId){
				Kitchen.getDetails(req.body.id,function(response){
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

router.post('/kitchen/add_edit',function(req,res){
	if(req.body.access_token && req.body.name && req.body.address){
		Users.isVenderExists(req.body.access_token,function(venderId){
			if(venderId){
				req.body.vender_id = venderId;
				req.body.type = "Kitchen";
				delete req.body.access_token;
				Kitchen.addUpdate(req.body,function(response){
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
	if(req.body.access_token && req.body.kitchen_id){

	}else{
		res.json(requiredError);
	}
});

router.post('/user/list',function(req,res){
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

router.post('/user/detail',function(req,res){
	if(req.body.access_token && req.body.id){
		Users.isVenderExists(req.body.access_token,function(venderId){
			if(venderId){
				Kitchen.getUserKitchen(req.body.id,function(kitchenUser){
					Users.getDetail(req.body.id,function(response){
						response.kitchen = kitchenUser;
						res.json({
							"error_code":0,
							"message":"Successfully.",
							"data":response
						});
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

router.post('/user/add_edit',function(req,res){
	if(req.body.access_token && req.body.name && req.body.email && req.body.phone_number){
		Users.isVenderExists(req.body.access_token,function(venderId){
			if(venderId){
				req.body.vender_id = venderId;
				req.body.type = "Kitchen";
				delete req.body.access_token;
				Kitchen.addKitchenUser(req.body,function(){
					Users.addUpdate(req.body,function(response){
						res.json({
							"error_code":0,
							"message":"Successfully.",
							"data":response
						});
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

router.post('/user/delete',function(req,res){
	if(req.body.access_token && req.body.kitchen_id){

	}else{
		res.json(requiredError);
	}
});





router.post('/kitchen_login',function(req,res){
	if(req.body.email && req.body.password){
		Users.login(req.body.email,req.body.password,'Kitchen',function(response){
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


router.post('/kitchen_user',function(req,res){
	if(req.body.access_token){
		Users.isKitchenExists(req.body.access_token,function(kitchenDetails){
			console.log(kitchenDetails);
			if(kitchenDetails){
				Kitchen.getUserKitchen(kitchenDetails.id,function(response){
					res.json({
						"error_code":0,
						"message":"Login successfully.",
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

router.post('/product/list',function(req,res){
	if(req.body.access_token && req.body.kitchen_id){
		Users.isKitchenExists(req.body.access_token,function(kitchenDetails){
			if(kitchenDetails){
				Product.getList(kitchenDetails.id,req.body.kitchen_id,function(response){
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

router.post('/product/add_edit_data',function(req,res){
	if(req.body.access_token){
		Users.isKitchenExists(req.body.access_token,function(kitchenDetails){
			if(kitchenDetails){
				Product.getProductTypesList(function(productTypes){
					Product.getProductLocationsList(function(productLocations){
						Product.getProductTimesList(function(productTimes){
							Product.getHealthConditionOptionsList(function(healthConditionOptions){
								Product.getPrepStyleOptionsList(function(prepStyleOptions){
									res.json({
										"error_code":0,
										"message":"Successfully.",
										"data":{
											"product_types":productTypes,
											"product_locations":productLocations,
											"product_times":productTimes,
											"health_condition_options":healthConditionOptions,
											"prep_style_options":prepStyleOptions,
										}
									});
								});
							});
						});
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

router.post('/product/change_status',function(req,res){
	if(req.body.access_token){
		Users.isVenderExists(req.body.access_token,function(venderId){
			if(venderId){
				Products.getList(venderId,function(response){
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



module.exports = router;
