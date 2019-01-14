var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var login = require('./controller/login');
var users = require('./controller/users');



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

app.use('/admin/login', login);
app.use('/admin/users', users);

app.get('/', function (req, res) {

  res.render('login_view/index', { title: 'Home',data:{"email":"randhir@isisdsn.net","password":"123456"},error:{} });
  //res.render('login/index', { title: 'Home',data:{"email":"","password":""},error:{} });
});

app.listen(2213, function () {
  console.log('Oml app listening on port 2213!');
});
