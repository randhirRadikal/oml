var Sequelize = require('sequelize');
var connection;
var Users;


var getList = function(type,callback){
	Users.findAll({
		attributes:['id','name','email','phone_number','profile_pic','status'],
		where:{"is_deleted":0,"type":type}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getDetails = function(id,callback){
	Users.findOne({
		attributes:['id','name','email','phone_number'],
		where:{"id":id}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var addUpdate = function(data,callback){
	console.log(data);
	var id = data.id;
	delete data.id;
	if(id != "0"){
		Users.update(data,{
				where:{
					id:{
						$eq:id
					}
				}
			}).then(function(res){
				callback(true);
			}).catch(function(err){
				console.log(err);
				callback(false);
			});
	}else{
		Users.create(data).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
	}
};

var deleteOne = function(venderId,callback){
	Users.update({is_deleted:1},{
			where:{
				id:{
					$eq:venderId
				}
			}
		}).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
};

module.exports = function(con){
	connection = con;
	Users = con.define('users',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
		    type: Sequelize.STRING,
		    field: 'name'
		},
		email: {
		    type: Sequelize.STRING,
		    field: 'email'
		},
		password: {
		    type: Sequelize.STRING,
		    field: 'password'
		},
		phone_number: {
		    type: Sequelize.STRING,
		    field: 'phone_number'
		},
		profile_pic: {
		    type: Sequelize.STRING,
		    field: 'profile_pic'
		},
		access_token: {
		    type: Sequelize.STRING,
		    field: 'access_token'
		},
		verification_code: {
		    type: Sequelize.STRING,
		    field: 'verification_code'
		},
		type: {
		    type: Sequelize.STRING,
		    field: 'type'
		},
		otp: {
		    type: Sequelize.INTEGER,
		    field: 'otp'
		},
		last_login_ip: {
		    type: Sequelize.STRING,
		    field: 'last_login_ip'
		},
		last_login_time: {
		    type: Sequelize.DATE,
		    field: 'last_login_time'
		},
		is_deleted: {
		    type: Sequelize.INTEGER,
		    field: 'is_deleted'
		},
		status: {
		    type: Sequelize.INTEGER,
		    field: 'status'
		}
	});
	return {
		getList:getList,
		getDetails:getDetails,
		addUpdate:addUpdate,
		deleteOne:deleteOne
	};

};
