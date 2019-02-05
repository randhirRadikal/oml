var Sequelize = require('sequelize');
var connection;
var Kitchen;
var KitchenUsers;


var getList = function(venderId,callback){
	Kitchen.findAll({
		attributes:['id','name','address','phone_number','profile_icon','created','status'],
		where:{vender_id:venderId}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getDetails = function(id,callback){
	Kitchen.findOne({
		attributes:['id','name','address','phone_number','profile_icon','created','status'],
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
		Kitchen.update(data,{
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
		Kitchen.create(data).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
	}
};

var deleteOne = function(venderId,callback){
	Kitchen.destroy({
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

var getUserKitchen = function(venderId,callback){
	KitchenUsers.findAll({
		attributes:['id','user_id','kitchen_id'],
		where:{user_id:venderId},
		include:[
			{
				attributes:['id','name'],
				model:Kitchen,
				required: true
			}
		]
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var addKitchenUser = function(data,callback){
	KitchenUsers.destroy({
			where:{
				user_id:{
					$eq:data.id
				}
			}
		}).then(function(res){
			var tempData = {
				user_id:data.id
			};
			console.log(data.kitchen_ids);
			data.kitchen_ids.forEach(function(val){
				console.log(val);
				tempData.kitchen_id = val.id;
				KitchenUsers.create(tempData).then(function(res){

				}).catch(function(err){
					console.log(err);

				});
			});
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
};

module.exports = function(con){
	connection = con;
	Kitchen = con.define('kitchens',{
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
		address: {
		    type: Sequelize.TEXT,
		    field: 'address'
		},
		phone_number: {
		    type: Sequelize.STRING,
		    field: 'phone_number'
		},
		profile_icon: {
		    type: Sequelize.STRING,
		    field: 'profile_icon'
		},
		created: {
		    type: Sequelize.DATE,
		    field: 'created'
		},
		status:{
			type: Sequelize.INTEGER,
			field: 'status'
		}
	});

	KitchenUsers = con.define('kitchen_users',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		user_id: {
		    type: Sequelize.INTEGER,
		    field: 'user_id'
		},
		kitchen_id: {
		    type: Sequelize.INTEGER,
		    field: 'kitchen_id'
		},
		created: {
		    type: Sequelize.DATE,
		    field: 'created'
		}
	});

	KitchenUsers.belongsTo(Kitchen,{foreignKey: 'kitchen_id'});

	return {
		getList:getList,
		getDetails:getDetails,
		addUpdate:addUpdate,
		deleteOne:deleteOne,
		getUserKitchen:getUserKitchen,
		addKitchenUser:addKitchenUser
	};

};
