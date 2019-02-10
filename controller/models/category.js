var Sequelize = require('sequelize');
var connection;
var Category;
var SubCategory;


var getCategoryList = function(callback){
	Category.findAll({
		attributes:['id','name','created','status']
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getCategoryDetails = function(id,callback){
	Category.findOne({
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

var addUpdateCategory = function(data,callback){
	console.log(data);
	var id = data.id;
	delete data.id;
	if(id != "0"){
		Category.update(data,{
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
		Category.create(data).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
	}
};

var deleteCategory = function(venderId,callback){
	Category.destroy({
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

var getSubCategoryList = function(callback){
	SubCategory.findAll({
		attributes:['id','name','created','status'],
		include: [
	        { model: Category,attributes:['id','name'],required: false }
	    ]
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var getSubCategoryDetails = function(id,callback){
	SubCategory.findOne({
		attributes:['id','name','status'],
		where:{"id":id},
		include: [
	        { model: Category,attributes:['id','name'],required: false }
	    ]
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

var addUpdateSubCategory = function(data,callback){
	console.log(data);
	var id = data.id;
	delete data.id;
	if(id != "0"){
		SubCategory.update(data,{
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
		SubCategory.create(data).then(function(res){
			callback(true);
		}).catch(function(err){
			console.log(err);
			callback(false);
		});
	}
};

var deleteSubCategory = function(venderId,callback){
	SubCategory.destroy({
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

var getCategoryListForDropdown = function(callback){
	Category.findAll({
		attributes:['id','name'],
		where:{status:1},
	}).then(function(res){
		var data = JSON.parse(JSON.stringify(res));
		callback(data);
	}).catch(function(err){
		console.log(err);
		callback([]);
	});
};

module.exports = function(con){
	connection = con;
	Category = con.define('categories',{
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
	SubCategory = con.define('sub_categories',{
		id:{
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		category_id: {
		    type: Sequelize.INTEGER,
		    field: 'category_id'
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

	Category.belongsTo(SubCategory,{foreignKey: 'category_id'});

	return {
		getCategoryList:getCategoryList,
		getCategoryDetails:getCategoryDetails,
		addUpdateCategory:addUpdateCategory,
		deleteCategory:deleteCategory,
		getSubCategoryList:getSubCategoryList,
		getSubCategoryDetails:getSubCategoryDetails,
		addUpdateSubCategory:addUpdateSubCategory,
		deleteSubCategory:deleteSubCategory,
		getCategoryListForDropdown:getCategoryListForDropdown
	};

};
