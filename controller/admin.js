var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

var base_url = "http://localhost:2213/";
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

var Admins = require('./models/admin')(orm);
var Users = require('./models/user')(orm);
var ProductTypes = require('./models/product_type')(orm);
var HealthConditionOptions = require('./models/health_condition')(orm);
var PrepStyleOptions = require('./models/prep_style_options')(orm);
var ProductLocations = require('./models/product_locations')(orm);
var ProductTimes = require('./models/product_times')(orm);
var Category = require('./models/category')(orm);

router.get('/',function(req,res){
	res.render('admin/login/index', { base_url:base_url,title: 'Home',data:{"username":"randhirjha2212@gmail.com","password":"123456"},error:false });
});

router.get('/logout',function(req,res){
	res.redirect('/admin');
});

router.post('/',function(req,res){
	if(req.body.username === '' || req.body.password ===''){
		res.render('admin/login/index', { base_url:base_url,title: 'Home',
					data:req.body,
					error:"Please enter all required fields."
				});
	}else{
		Admins.loginFunction(req.body.username,req.body.password,function(response){
			if(response.error){
				res.render('admin/login/index', { base_url:base_url,title: 'Home',
							data:req.body,
							error:"Please send valied username and password."
						});
			}else{
				req.session.user=response.result;
				res.redirect('/admin/dashboard');
			}
		});
	}
});

router.get('/dashboard',function(req,res){
	res.render('admin/dashboard/index', { base_url:base_url,title: 'Home',data:{"username":"randhirjha2212@gmail.com","password":"123456"},error:false });
});

router.get('/venders',function(req,res){
	Users.getList('Seller',function(response){
		res.render('admin/venders/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/venders/delete/:id',function(req,res){
	Users.deleteOne(req.params.id,function(response){
		res.redirect('/admin/venders');
	});
});

router.get('/venders/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/venders/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			email:"",
			id:"0",
			phone_number:""
		},error:false });
	}else{
		Users.getDetails(req.params.id,function(response){
			res.render('admin/venders/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/venders/add_edit/:id',function(req,res){
	if(req.body.name && req.body.email && req.body.phone_number ){
		req.body.type = "Seller";
		Users.addUpdate(req.body,function(response){
			if(response){
				res.redirect('/admin/venders');
			}else{
				res.render('admin/venders/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/venders/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}

});

router.get('/users',function(req,res){
	Users.getList('Buyer',function(response){
		res.render('admin/users/index', { base_url:base_url,title: 'Home',userList:response,error:false });
	});
});

router.get('/users/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/users/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			email:"",
			id:"0",
			phone_number:""
		},error:false });
	}else{
		Users.getDetails(req.params.id,function(response){
			res.render('admin/users/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/users/add_edit/:id',function(req,res){
	if(req.body.name && req.body.email && req.body.phone_number ){
		req.body.type = "Buyer";
		Users.addUpdate(req.body,function(response){
			if(response){
				res.redirect('/admin/users');
			}else{
				res.render('admin/users/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/users/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}

});

router.get('/users/delete/:id',function(req,res){
	Users.deleteOne(req.params.id,function(response){
		res.redirect('/admin/venders');
	});
});

router.get('/product_type',function(req,res){
	ProductTypes.getList(function(response){
		res.render('admin/product_type/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/product_type/delete/:id',function(req,res){
	ProductTypes.deleteOne(req.params.id,function(response){
		res.redirect('/admin/product_type');
	});
});

router.get('/product_type/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/product_type/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			status:"",
			id:"0"
		},error:false });
	}else{
		ProductTypes.getDetails(req.params.id,function(response){
			res.render('admin/product_type/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/product_type/add_edit/:id',function(req,res){
	if(req.body.name){
		ProductTypes.addUpdate(req.body,function(response){
			if(response){
				res.redirect('/admin/product_type');
			}else{
				res.render('admin/product_type/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/product_type/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}

});

router.get('/health_condition',function(req,res){
	HealthConditionOptions.getList(function(response){
		res.render('admin/health_condition/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/health_condition/delete/:id',function(req,res){
	HealthConditionOptions.deleteOne(req.params.id,function(response){
		res.redirect('/admin/health_condition');
	});
});

router.get('/health_condition/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/health_condition/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			status:"",
			id:"0"
		},error:false });
	}else{
		HealthConditionOptions.getDetails(req.params.id,function(response){
			res.render('admin/health_condition/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/health_condition/add_edit/:id',function(req,res){
	if(req.body.name){
		HealthConditionOptions.addUpdate(req.body,function(response){
			if(response){
				res.redirect('/admin/health_condition');
			}else{
				res.render('admin/health_condition/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/health_condition/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}
});

// prep styles options

router.get('/prep_style_option',function(req,res){
	PrepStyleOptions.getList(function(response){
		res.render('admin/prep_style_option/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/prep_style_option/delete/:id',function(req,res){
	PrepStyleOptions.deleteOne(req.params.id,function(response){
		res.redirect('/admin/prep_style_option');
	});
});

router.get('/prep_style_option/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/prep_style_option/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			status:"",
			id:"0"
		},error:false });
	}else{
		PrepStyleOptions.getDetails(req.params.id,function(response){
			res.render('admin/prep_style_option/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/prep_style_option/add_edit/:id',function(req,res){
	if(req.body.name){
		PrepStyleOptions.addUpdate(req.body,function(response){
			if(response){
				res.redirect('/admin/prep_style_option');
			}else{
				res.render('admin/prep_style_option/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/prep_style_option/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}
});

// product times
router.get('/product_time',function(req,res){
	ProductTimes.getList(function(response){
		res.render('admin/product_time/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/product_time/delete/:id',function(req,res){
	ProductTimes.deleteOne(req.params.id,function(response){
		res.redirect('/admin/product_time');
	});
});

router.get('/product_time/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/product_time/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			status:"",
			id:"0"
		},error:false });
	}else{
		ProductTimes.getDetails(req.params.id,function(response){
			res.render('admin/product_time/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/product_time/add_edit/:id',function(req,res){
	if(req.body.name){
		ProductTimes.addUpdate(req.body,function(response){
			if(response){
				res.redirect('/admin/product_time');
			}else{
				res.render('admin/product_time/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/product_time/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}
});

//product location
router.get('/product_location',function(req,res){
	ProductLocations.getList(function(response){
		res.render('admin/product_location/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/product_location/delete/:id',function(req,res){
	ProductLocations.deleteOne(req.params.id,function(response){
		res.redirect('/admin/product_location');
	});
});

router.get('/product_location/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/product_location/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			status:"",
			id:"0"
		},error:false });
	}else{
		ProductLocations.getDetails(req.params.id,function(response){
			res.render('admin/product_location/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/product_location/add_edit/:id',function(req,res){
	if(req.body.name){
		ProductLocations.addUpdate(req.body,function(response){
			if(response){
				res.redirect('/admin/product_location');
			}else{
				res.render('admin/product_location/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/product_location/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}
});

// category
router.get('/category',function(req,res){
	Category.getCategoryList(function(response){
		res.render('admin/category/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/category/delete/:id',function(req,res){
	Category.deleteCategory(req.params.id,function(response){
		res.redirect('/admin/category');
	});
});

router.get('/category/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/category/add_edit', { base_url:base_url,title: 'Home',data:{
			name:"",
			status:"",
			id:"0"
		},error:false });
	}else{
		Category.getCategoryDetails(req.params.id,function(response){
			res.render('admin/category/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/category/add_edit/:id',function(req,res){
	if(req.body.name){
		Category.addUpdateCategory(req.body,function(response){
			if(response){
				res.redirect('/admin/category');
			}else{
				res.render('admin/category/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/category/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}
});

// sub category
router.get('/sub_category',function(req,res){
	Category.getSubCategoryList(function(response){
		console.log(response);
		res.render('admin/sub_category/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/sub_category/delete/:id',function(req,res){
	Category.deleteSubCategory(req.params.id,function(response){
		res.redirect('/admin/sub_category');
	});
});

router.get('/sub_category/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		Category.getCategoryListForDropdown(function(categoryList){
			res.render('admin/sub_category/add_edit', { base_url:base_url,title: 'Home',data:{
				name:"",
				status:"",
				id:"0",
				category:categoryList
			},error:false });
		});

	}else{
		Category.getCategoryListForDropdown(function(categoryList){
			Category.getSubCategoryDetails(req.params.id,function(response){
				response.category = categoryList;
				res.render('admin/sub_category/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
			});
		});
	}
});

router.post('/sub_category/add_edit/:id',function(req,res){
	if(req.body.name){
		Category.addUpdateSubCategory(req.body,function(response){
			if(response){
				res.redirect('/admin/sub_category');
			}else{
				res.render('admin/sub_category/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Something wrong, please try again later." });
			}
		});
	}else{
		res.render('admin/sub_category/add_edit', { base_url:base_url,title: 'Home',data:req.body,error:"Please send all required fields." });
	}
});


module.exports = router;
