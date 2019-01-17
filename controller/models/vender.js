var Sequelize = require('sequelize');
var connection;
var Venders;


var getVenderList = function(callback){
	Venders.findAll({
		attributes:['id','first_name','last_name','email','phone_number','profile_pic','status']
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

var addEditVender = function(data,callback){
	if(data.id){
		//update
	}else{
		//create
	}
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
		getVenderDetails:getVenderDetails
	};

};
