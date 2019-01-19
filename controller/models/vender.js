var Sequelize = require('sequelize');
var connection;
var Venders;


var getVenderList = function(callback){
	Venders.findAll({
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

var getVenderDetails = function(id,callback){
	Venders.findOne({
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
	var venderId = data.id;
	delete data.id;
	if(venderId != "0"){
		Venders.update(data,{
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
	}else{
		Venders.create(data).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
	}
};

var deleteVender = function(venderId,callback){
	Venders.update({is_deleted:1},{
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
	Venders = con.define('venders',{
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
		getVenderList:getVenderList,
		getVenderDetails:getVenderDetails,
		addUpdate:addUpdate,
		deleteVender:deleteVender
	};

};
