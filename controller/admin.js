var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

var base_url = "http://localhost:2213/";
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

var Admins = require('./models/admin')(orm);
var Venders = require('./models/vender')(orm);
var Users = require('./models/user')(orm);

router.get('/',function(req,res){
	res.render('admin/login/index', { base_url:base_url,title: 'Home',data:{"username":"randhirjha2212@gmail.com","password":"123456"},error:false });
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
	Venders.getVenderList(function(response){
		res.render('admin/venders/index', { base_url:base_url,title: 'Home',venderList:response,error:false });
	});
});

router.get('/venders/delete/:id',function(req,res){
	Venders.deleteVender(req.params.id,function(response){
		res.redirect('/admin/venders');
	});
});

router.get('/venders/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/venders/add_edit', { base_url:base_url,title: 'Home',data:{
			first_name:"",
			last_name:"",
			email:"",
			id:"0",
			phone_number:""
		},error:false });
	}else{
		Venders.getVenderDetails(req.params.id,function(response){
			res.render('admin/venders/add_edit', { base_url:base_url,title: 'Home',data:response,error:false });
		});
	}
});

router.post('/venders/add_edit/:id',function(req,res){
	if(req.body.first_name && req.body.last_name && req.body.email && req.body.phone_number ){
		Venders.addUpdate(req.body,function(response){
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
	Users.getList(function(response){
		res.render('admin/users/index', { base_url:base_url,title: 'Home',userList:response,error:false });
	});
});

router.get('/users/add_edit/:id',function(req,res){
	if(req.params.id == "0"){
		res.render('admin/users/add_edit', { base_url:base_url,title: 'Home',data:{
			first_name:"",
			last_name:"",
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
	if(req.body.first_name && req.body.last_name && req.body.email && req.body.phone_number ){
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


module.exports = router;
