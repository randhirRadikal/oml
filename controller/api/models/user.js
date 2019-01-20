var Sequelize = require('sequelize');
var connection;
var Users;

var login = function(email,password,callback){
	Users.findOne({
		attributes:['id','first_name','last_name','email','phone_number','access_token'],
		where:{"email":email,"password":password}
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

	UserAddress = con.define('users_addresses',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		address1:{
			field:'address1',
			type:Sequelize.STRING
		},
		address2:{
			field:'address2',
			type:Sequelize.STRING
		},
		city:{
			field:'city',
			type:Sequelize.STRING
		},
		state_id:{
			field:'state_id',
			type:Sequelize.INTEGER
		},
		country_id:{
			field:'country_id',
			type:Sequelize.INTEGER
		},
		zip_code:{
			field:'zip_code',
			type:Sequelize.STRING
		},
		title:{
			field:'title',
			type:Sequelize.STRING
		},
		is_deleted:{
			field:'is_deleted',
			type:Sequelize.INTEGER
		},
		status:{
			field:'status',
			type:Sequelize.INTEGER
		}
	});

	return {
		login:login,
	};

};
