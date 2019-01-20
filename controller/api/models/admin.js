var Sequelize = require('sequelize');
var connection;
var Admins;


var loginFunction = function (email,password,callback){
	Admins.findOne({
		attributes:['id','first_name','last_name','email','profile_img','status'],
		where:{email:email,password:password}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback({error:false,result:data});
	}).catch(function(err){
		callback({error:true,result:err});
	});
};

module.exports = function(con){
	connection = con;
	Admins = con.define('admins',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		first_name: {
		    type: Sequelize.STRING,
		    field: 'first_name'
		},
		last_name: {
		    type: Sequelize.STRING,
		    field: 'last_name'
		},
		email: {
		    type: Sequelize.STRING,
		    field: 'email'
		},
		password: {
		    type: Sequelize.STRING,
		    field: 'password'
		},
		profile_img: {
		    type: Sequelize.STRING,
		    field: 'profile_img'
		},
		status: {
		    type: Sequelize.INTEGER,
		    field: 'status'
		}
	});
	return {
		loginFunction:loginFunction
	};

};
