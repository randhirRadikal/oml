var Sequelize = require('sequelize');
var connection;
var ProductTypes;


var getList = function(callback){
	ProductTypes.findAll({
		attributes:['id','name','created','status']
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getDetails = function(id,callback){
	ProductTypes.findOne({
		attributes:['id','name','status'],
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
		ProductTypes.update(data,{
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
		ProductTypes.create(data).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
	}
};

var deleteOne = function(venderId,callback){
	ProductTypes.destroy({
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
	ProductTypes = con.define('product_types',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
		    type: Sequelize.STRING,
		    field: 'name'
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
	return {
		getList:getList,
		getDetails:getDetails,
		addUpdate:addUpdate,
		deleteOne:deleteOne
	};

};
