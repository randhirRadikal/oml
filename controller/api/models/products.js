var Sequelize = require('sequelize');
var connection;
var Products;
var ProductTypes;
var ProductLocations;
var ProductTimes;


var getList = function(venderId,callback){
	Products.findAll({
		where:{"is_deleted":0,"vender_id":venderId},
		include: [
	        { model: ProductLocations,required: false }
	    ],
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getDetails = function(id,callback){
	Products.findOne({
		attributes:['id','name','last_name','email','phone_number'],
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
		Products.update(data,{
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
		Products.create(data).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
	}
};

var deleteOne = function(venderId,callback){
	Products.update({is_deleted:1},{
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

var getProductTypesList = function(callback){
	ProductTypes.findAll({}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(){
		callback([]);
	});
};

var getProductLocationsList = function(callback){
	ProductLocations.findAll({
		attributes:['id','name','status'],
		where:{"status":1}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(){
		callback([]);
	});
};

var getProductTimesList = function(callback){
	ProductTimes.findAll({
		attributes:['id','name','status'],
		where:{"status":1}
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(){
		callback([]);
	});
};

module.exports = function(con){
	connection = con;
	Products = con.define('products',{
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
		price: {
		    type: Sequelize.STRING,
		    field: 'price'
		},
		product_type_id: {
		    type: Sequelize.INTEGER,
		    field: 'product_type_id'
		},
		image: {
		    type: Sequelize.STRING,
		    field: 'image'
		},
		more_image: {
		    type: Sequelize.STRING,
		    field: 'more_image'
		},
		description: {
		    type: Sequelize.STRING,
		    field: 'description'
		},
		is_in_stock: {
		    type: Sequelize.INTEGER,
		    field: 'is_in_stock'
		},
		is_veg: {
		    type: Sequelize.INTEGER,
		    field: 'is_veg'
		},
		status: {
		    type: Sequelize.INTEGER,
		    field: 'status'
		},
		created: {
		    type: Sequelize.DATE,
		    field: 'created'
		}
	});

	var ProductTypes = con.define('product_types',{
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

	var ProductLocations = con.define('product_locations',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
		    type: Sequelize.STRING,
		    field: 'name'
		},
		key_name: {
		    type: Sequelize.STRING,
		    field: 'key_name'
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

	var ProductTimes = con.define('product_times',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
		    type: Sequelize.STRING,
		    field: 'name'
		},
		key_name: {
		    type: Sequelize.STRING,
		    field: 'key_name'
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

	Products.belongsTo(ProductTypes,{foreignKey: 'product_type_id'});
	Products.belongsTo(ProductLocations,{foreignKey: 'product_location_id'});
	Products.belongsTo(ProductTimes,{foreignKey: 'product_time_id'});

	return {
		getList:getList,
		getDetails:getDetails,
		addUpdate:addUpdate,
		deleteOne:deleteOne,
		getProductTypesList:getProductTypesList,
		getProductLocationsList:getProductLocationsList,
		getProductTimesList:getProductTimesList
	};

};
