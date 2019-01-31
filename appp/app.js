var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Sequelize = require('sequelize');

var admin = require('./controller/admin');
var users = require('./controller/users');
var apiUser = require('./controller/api/user');
var apiVender = require('./controller/api/vender');

app.set('view engine', 'ejs');

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('images'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
	secret: "randhirJha__randhirjha2212@gmail.net",
	resave: false,
	saveUninitialized: false
}));

app.use('/admin', admin);
app.use('/admin/users', users);
app.use('/api/user', apiUser);
app.use('/api/vender', apiVender);

app.get('/', function (req, res) {
  	//res.render('admin/login/index', { title: 'Home',data:{"email":"randhir@isisdsn.net","password":"123456"},error:{} });
	res.json({
				"error_code":0,
				"message":"Url not valied."
			});
});

app.listen(2213, function () {
  console.log('Oml app listening on port 2213!');
});
