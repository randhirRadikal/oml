var Sequelize = require('sequelize');
var connection;
var Users;

var login = function(email,password,type,callback){
	Users.findOne({
		attributes:['id','name','email','phone_number','access_token','vender_id'],
		where:{"email":email,"password":password,"type":type}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

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

var getKitchenList = function(venderId,callback){
	console.log(venderId);
	Users.findAll({
		attributes:['id','name','email','phone_number','profile_pic','status'],
		where:{"vender_id":venderId,"type":"Kitchen"}
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
	var id = "0";
	if(data.id){
		id = data.id;
	}
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

var isVenderExists = function(access_token,callback){
	Users.findOne({
		attributes:['id','access_token','access_token'],
		where:{"access_token":access_token,"type":"Seller"}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		if(data){
			if(data.id){
				callback(data.id);
			}else{
				callback(false);
			}
		}else{
			callback(false);
		}

	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getKitchenList = function(venderId,callback){
	console.log(venderId);
	Users.findAll({
		attributes:['id','name','email','phone_number','profile_pic','status'],
		where:{"vender_id":venderId,"type":"Kitchen"}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getDetail = function(id,callback){
	Users.findOne({
		attributes:['id','name','email','phone_number','status'],
		where:{"id":id,"type":"Kitchen"}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback(false);
	});
};

var isKitchenExists = function(access_token,callback){
	Users.findOne({
		attributes:['id','name'],
		where:{"access_token":access_token,"type":"Kitchen"}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
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
		vender_id: {
		    type: Sequelize.INTEGER,
		    field: 'vender_id'
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

	UserAddress = con.define('users_addresses',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		user_id:{
			field:'user_id',
			type:Sequelize.INTEGER
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

	Users.hasMany(UserAddress,{foreignKey: 'user_id'});

	return {
		login:login,
		getList:getList,
		addUpdate:addUpdate,
		deleteOne:deleteOne,
		isVenderExists:isVenderExists,
		getKitchenList:getKitchenList,
		getDetail:getDetail,
		isKitchenExists:isKitchenExists
	};

};
