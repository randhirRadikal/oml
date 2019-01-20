var Sequelize = require('sequelize');
var connection;
var Users;


var getList = function(callback){
	Users.findAll({
		attributes:['id','first_name','last_name','email','phone_number','profile_pic','status'],
		where:{"is_deleted":0}
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
		attributes:['id','first_name','last_name','email','phone_number'],
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
		phone_number: {
		    type: Sequelize.STRING,
		    field: 'phone_number'
		},
		password: {
		    type: Sequelize.STRING,
		    field: 'password'
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
