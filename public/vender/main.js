(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('oml_user_details')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/authKitchen.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/_guards/authKitchen.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthKitchenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthKitchenGuard", function() { return AuthKitchenGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthKitchenGuard = /** @class */ (function () {
    function AuthKitchenGuard(router) {
        this.router = router;
    }
    AuthKitchenGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('oml_kitchen_user_details')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/kitchen_login']);
        return false;
    };
    AuthKitchenGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthKitchenGuard);
    return AuthKitchenGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard, AuthKitchenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _authKitchen_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authKitchen.guard */ "./src/app/_guards/authKitchen.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthKitchenGuard", function() { return _authKitchen_guard__WEBPACK_IMPORTED_MODULE_1__["AuthKitchenGuard"]; });





/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = { headers: headers };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/login", data);
    };
    AuthenticationService.prototype.registration = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/Registration", data);
    };
    AuthenticationService.prototype.checkPoint = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/CheckPoint");
    };
    AuthenticationService.prototype.professionalQualification = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/ProfessionalQualification");
    };
    AuthenticationService.prototype.specificTraining = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/SpecificTraining ");
    };
    AuthenticationService.prototype.hhs = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/HHS");
    };
    AuthenticationService.prototype.positionTitle = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/PositionTitle");
    };
    AuthenticationService.prototype.stream = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/Stream");
    };
    AuthenticationService.prototype.paypointGroup = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/PaypointGroup");
    };
    AuthenticationService.prototype.availability = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/Availability");
    };
    AuthenticationService.prototype.leadTime = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/LeadTime");
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, KitchenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _kitchen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kitchen.service */ "./src/app/_services/kitchen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KitchenService", function() { return _kitchen_service__WEBPACK_IMPORTED_MODULE_3__["KitchenService"]; });







/***/ }),

/***/ "./src/app/_services/kitchen.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/kitchen.service.ts ***!
  \**********************************************/
/*! exports provided: KitchenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenService", function() { return KitchenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KitchenService = /** @class */ (function () {
    function KitchenService(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem('oml_kitchen_user_details'));
    }
    KitchenService.prototype.login = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = { headers: headers };
        console.log(data);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/kitchen_login", data);
    };
    KitchenService.prototype.getKitchenList = function () {
        var data = {
            "access_token": this.currentUser.access_token
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/kitchen_user", data);
    };
    KitchenService.prototype.getProductList = function () {
        var data = {
            "access_token": this.currentUser.access_token,
            "kitchen_id": this.currentUser.kitchen_id
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/product/list", data);
    };
    KitchenService.prototype.getAddEditData = function () {
        var data = {
            "access_token": this.currentUser.access_token,
            "kitchen_id": this.currentUser.kitchen_id
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/product/add_edit_data", data);
    };
    KitchenService.prototype.addEditProduct = function (data) {
        data.access_token = this.currentUser.access_token;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/product/add_edit", data);
    };
    KitchenService.prototype.deleteProduct = function (id) {
    };
    KitchenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KitchenService);
    return KitchenService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem('oml_user_details'));
    }
    UserService.prototype.getKitchenList = function () {
        var data = {
            "access_token": this.currentUser.access_token
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/kitchen/list", data);
    };
    UserService.prototype.getKitchenDetails = function (id) {
        var data = {
            "access_token": this.currentUser.access_token,
            "id": id
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/kitchen/detail", data);
    };
    UserService.prototype.addEditkitchen = function (data) {
        data.access_token = this.currentUser.access_token;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/kitchen/add_edit", data);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.getUserList = function () {
        var data = {
            "access_token": this.currentUser.access_token
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/user/list", data);
    };
    UserService.prototype.getUserDetails = function (id) {
        var data = {
            "access_token": this.currentUser.access_token,
            "id": id
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/user/detail", data);
    };
    UserService.prototype.addEditUser = function (data) {
        data.access_token = this.currentUser.access_token;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/vender/user/add_edit", data);
    };
    UserService.prototype.deleteUser = function (id) {
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/add_kitchen/add_kitchen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add_kitchen/add_kitchen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add_kitchen/add_kitchen.component.html":
/*!********************************************************!*\
  !*** ./src/app/add_kitchen/add_kitchen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<!-- ============================================================== -->\n\t<!-- Topbar header - style you can find in pages.scss -->\n\t<!-- ============================================================== -->\n\t<header class=\"topbar\">\n\t\t<app-header></app-header>\n\t</header>\n\t<!-- ============================================================== -->\n\t<!-- End Topbar header -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<aside class=\"left-sidebar\">\n\t\t<!-- Sidebar scroll-->\n\t\t<div class=\"scroll-sidebar\">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t\t<!-- End Sidebar scroll-->\n\t</aside>\n\t<!-- ============================================================== -->\n\t<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row page-titles\">\n\t\t\t\t<div class=\"col-md-5 align-self-center\">\n\t\t\t\t\t<h4 class=\"text-themecolor\">Add Kitchen</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 align-self-center text-right\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end align-items-center\">\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Kitchen</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\"><i class=\"fa fa-plus-circle\"></i> Create New</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- charts -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Add Kitchen</h4>\n\t\t\t\t\t\t\t<form class=\"form-material m-t-40\" name=\"form\" #addKitchenForm=\"ngForm\" (ngSubmit)=\"addKitchenForm.form.valid && onSubmit()\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(name.invalid && ((name.dirty || name.touched) || addKitchenForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\t placeholder=\"Name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Address</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"address\" [(ngModel)]=\"model.address\" #address=\"ngModel\" required\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(address.invalid && ((address.dirty || address.touched) || addKitchenForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Address\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Phone Number</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"phone_number\" [(ngModel)]=\"model.phone_number\" #phone_number=\"ngModel\" required\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(phone_number.invalid && ((phone_number.dirty || phone_number.touched) || addKitchenForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Phone Number\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Profile Icon</label>\n\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"profile_icon\" [(ngModel)]=\"model.profile_icon\" #profile_icon=\"ngModel\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(profile_icon.invalid && ((profile_icon.dirty || profile_icon.touched) || addKitchenForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Profile Icon\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 text-right\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" type=\"button\" (click)=\"pressBackButton();\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" style=\"margin-left:20px;\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End PAge Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- footer -->\n\t<!-- ============================================================== -->\n\t<footer class=\"footer\">\n\t\t© 2018 Eliteadmin by themedesigner.in\n\t</footer>\n\t<!-- ============================================================== -->\n\t<!-- End footer -->\n\t<!-- ============================================================== -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/add_kitchen/add_kitchen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add_kitchen/add_kitchen.component.ts ***!
  \******************************************************/
/*! exports provided: AddKitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKitchenComponent", function() { return AddKitchenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddKitchenComponent = /** @class */ (function () {
    function AddKitchenComponent(router, activatedRouter, userService) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.userService = userService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.model = {};
        this.isLoader = true;
        //s
    }
    AddKitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.kitchenId = +params['id'];
            console.log(_this.kitchenId);
            _this.openLoginModel(_this.kitchenId);
        });
    };
    AddKitchenComponent.prototype.pressBackButton = function () {
        this.router.navigate(['/kitchen']);
    };
    AddKitchenComponent.prototype.openLoginModel = function (kitchenId) {
        var _this = this;
        if (kitchenId) {
            this.userService.getKitchenDetails(kitchenId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(function (data) {
                _this.response = data;
                console.log(_this.response);
                if (_this.response.error_code == 0) {
                    _this.model = _this.response.data;
                }
                else {
                    alert(_this.response.message);
                    _this.router.navigate(['/kitchen']);
                }
                _this.isLoader = false;
            }, function (error) {
                console.log(error);
                alert("Problem in api");
                _this.isLoader = false;
            });
        }
        else {
            this.model = {};
            this.isLoader = false;
        }
    };
    AddKitchenComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        this.isLoader = true;
        if (!this.model.id) {
            this.model.id = 0;
        }
        this.userService.addEditkitchen(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                _this.router.navigate(['/kitchen']);
            }
            else {
                _this.router.navigate(['/login']);
            }
            console.log(data);
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    AddKitchenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-kitchen',
            template: __webpack_require__(/*! ./add_kitchen.component.html */ "./src/app/add_kitchen/add_kitchen.component.html"),
            styles: [__webpack_require__(/*! ./add_kitchen.component.css */ "./src/app/add_kitchen/add_kitchen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AddKitchenComponent);
    return AddKitchenComponent;
}());



/***/ }),

/***/ "./src/app/add_kitchen/index.ts":
/*!**************************************!*\
  !*** ./src/app/add_kitchen/index.ts ***!
  \**************************************/
/*! exports provided: AddKitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_kitchen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_kitchen.component */ "./src/app/add_kitchen/add_kitchen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddKitchenComponent", function() { return _add_kitchen_component__WEBPACK_IMPORTED_MODULE_0__["AddKitchenComponent"]; });




/***/ }),

/***/ "./src/app/add_product/add_product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add_product/add_product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add_product/add_product.component.html":
/*!********************************************************!*\
  !*** ./src/app/add_product/add_product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<!-- ============================================================== -->\n\t<!-- Topbar header - style you can find in pages.scss -->\n\t<!-- ============================================================== -->\n\t<header class=\"topbar\">\n\t\t<app-header></app-header>\n\t</header>\n\t<!-- ============================================================== -->\n\t<!-- End Topbar header -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<aside class=\"left-sidebar\">\n\t\t<!-- Sidebar scroll-->\n\t\t<div class=\"scroll-sidebar\">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t\t<!-- End Sidebar scroll-->\n\t</aside>\n\t<!-- ============================================================== -->\n\t<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row page-titles\">\n\t\t\t\t<div class=\"col-md-5 align-self-center\">\n\t\t\t\t\t<h4 class=\"text-themecolor\">Add Product</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 align-self-center text-right\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end align-items-center\">\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Add Product</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- charts -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Add Product</h4>\n\t\t\t\t\t\t\t<form class=\"form-material m-t-40\" name=\"form\" #addForm=\"ngForm\" (ngSubmit)=\"addForm.form.valid && onSubmit()\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Product Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(name.invalid && ((name.dirty || name.touched) || addForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\t placeholder=\"Name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Description</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"description\" [(ngModel)]=\"model.description\" #description=\"ngModel\" required\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(description.invalid && ((description.dirty || description.touched) || addForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\t placeholder=\"Description\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Price</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"price\" [(ngModel)]=\"model.price\" #price=\"ngModel\" required\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(price.invalid && ((price.dirty || price.touched) || addForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Price\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Meal Type</label>\n\t\t\t\t\t\t\t\t\t<select name=\"product_type_id\" [(ngModel)]=\"model.product_type_id\" #product_type_id=\"ngModel\"\n\t\t\t\t\t\t\t\t\trequired id=\"hhs\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(product_type_id.invalid && ((product_type_id.dirty || product_type_id.touched) || addForm.submitted))?'activeErrorBorder':''}}\" >\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Meal Type</option>\n\t\t\t\t\t                    <option *ngFor=\"let result of productTypeList; let i = index\" value=\"{{result.id}}\">{{result.name}}</option>\n\t\t\t\t\t                </select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"example-email\">When</label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"product_location_id\" [(ngModel)]=\"model.product_location_id\" #product_location_id=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\trequired id=\"hhs\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control {{(product_location_id.invalid && ((product_location_id.dirty || product_location_id.touched) || addForm.submitted))?'activeErrorBorder':''}}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select When</option>\n\t\t\t\t\t\t\t                    <option *ngFor=\"let result of productLoactionList; let i = index\" value=\"{{result.id}}\">{{result.name}}</option>\n\t\t\t\t\t\t\t                </select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Where</label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"product_time_id\" [(ngModel)]=\"model.product_time_id\" #product_time_id=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\trequired id=\"hhs\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control {{(product_time_id.invalid && ((product_time_id.dirty || product_time_id.touched) || addForm.submitted))?'activeErrorBorder':''}}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Where</option>\n\t\t\t\t\t\t\t                    <option *ngFor=\"let result of productTimesList; let i = index\" value=\"{{result.id}}\">{{result.name}}</option>\n\t\t\t\t\t\t\t                </select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Status</label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"status\" [(ngModel)]=\"model.status\" #status=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\trequired id=\"hhs\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control {{(status.invalid && ((status.dirty || status.touched) || addForm.submitted))?'activeErrorBorder':''}}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select When</option>\n\t\t\t\t\t\t\t                    <option value=\"1\">Publish</option>\n\t\t\t\t\t\t\t                    <option value=\"2\">Pending for review</option>\n\t\t\t\t\t\t\t                    <option value=\"3\">Draft</option>\n\t\t\t\t\t\t\t                </select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Where</label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"product_time_id\" [(ngModel)]=\"model.product_time_id\" #product_time_id=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\trequired id=\"hhs\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control {{(product_time_id.invalid && ((product_time_id.dirty || product_time_id.touched) || addForm.submitted))?'activeErrorBorder':''}}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Where</option>\n\t\t\t\t\t\t\t                    <option *ngFor=\"let result of productTimesList; let i = index\" value=\"{{result.id}}\">{{result.name}}</option>\n\t\t\t\t\t\t\t                </select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 text-right\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" type=\"button\" (click)=\"pressBackButton();\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" style=\"margin-left:20px;\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End PAge Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- footer -->\n\t<!-- ============================================================== -->\n\t<footer class=\"footer\">\n\t\t© 2018 Eliteadmin by themedesigner.in\n\t</footer>\n\t<!-- ============================================================== -->\n\t<!-- End footer -->\n\t<!-- ============================================================== -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/add_product/add_product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add_product/add_product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(router, kitchenService) {
        this.router = router;
        this.kitchenService = kitchenService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.productTypeList = [];
        this.productLoactionList = [];
        this.productTimesList = [];
        this.isLoader = false;
        this.model = {};
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kitchenService.getAddEditData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                _this.productTypeList = _this.response.data.product_types;
                _this.productLoactionList = _this.response.data.product_locations;
                _this.productTimesList = _this.response.data.product_times;
            }
            else {
                alert(_this.response.message);
            }
            console.log(_this.response);
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    AddProductComponent.prototype.pressBackButton = function () {
        this.router.navigate(['/product']);
    };
    AddProductComponent.prototype.openLoginModel = function () {
    };
    AddProductComponent.prototype.onSubmit = function () {
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add_product.component.html */ "./src/app/add_product/add_product.component.html"),
            styles: [__webpack_require__(/*! ./add_product.component.css */ "./src/app/add_product/add_product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["KitchenService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/add_product/index.ts":
/*!**************************************!*\
  !*** ./src/app/add_product/index.ts ***!
  \**************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_product.component */ "./src/app/add_product/add_product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return _add_product_component__WEBPACK_IMPORTED_MODULE_0__["AddProductComponent"]; });




/***/ }),

/***/ "./src/app/add_user/add_user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add_user/add_user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add_user/add_user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add_user/add_user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<!-- ============================================================== -->\n\t<!-- Topbar header - style you can find in pages.scss -->\n\t<!-- ============================================================== -->\n\t<header class=\"topbar\">\n\t\t<app-header></app-header>\n\t</header>\n\t<!-- ============================================================== -->\n\t<!-- End Topbar header -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<aside class=\"left-sidebar\">\n\t\t<!-- Sidebar scroll-->\n\t\t<div class=\"scroll-sidebar\">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t\t<!-- End Sidebar scroll-->\n\t</aside>\n\t<!-- ============================================================== -->\n\t<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row page-titles\">\n\t\t\t\t<div class=\"col-md-5 align-self-center\">\n\t\t\t\t\t<h4 class=\"text-themecolor\">Add User</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 align-self-center text-right\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end align-items-center\">\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">User</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info d-none d-lg-block m-l-15\"><i class=\"fa fa-plus-circle\"></i> Create New</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- charts -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Add User</h4>\n\t\t\t\t\t\t\t<form class=\"form-material m-t-40\" name=\"form\" autocomplete=\"off\" #addKitchenForm=\"ngForm\" (ngSubmit)=\"addKitchenForm.form.valid && onSubmit()\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(name.invalid && ((name.dirty || name.touched) || addKitchenForm.submitted))?'activeAllErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\t placeholder=\"Name\" autocomplete=\"off\" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Email</label>\n\t\t\t\t\t\t\t\t\t<input type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(email.invalid && ((email.dirty || email.touched) || addKitchenForm.submitted))?'activeAllErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Email\" autocomplete=\"off\" required email>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Phone Number</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"phone_number\" [(ngModel)]=\"model.phone_number\" #phone_number=\"ngModel\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(phone_number.invalid && ((phone_number.dirty || phone_number.touched) || addKitchenForm.submitted))?'activeAllErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Phone Number\" autocomplete=\"off\" required>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"!model.id\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Password</label>\n\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control {{(password.invalid && ((password.dirty || password.touched) || addKitchenForm.submitted))?'activeAllErrorBorder':''}}\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Password\" autocomplete=\"off\" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Kitchens</label>\n\t\t\t\t\t\t\t\t\t<ng-multiselect-dropdown\n\t\t\t\t                      name=\"kitchen_ids\"\n\t\t\t\t                      [placeholder]=\"'&nbsp;'\"\n\t\t\t\t                      [data]=\"kitchenList\"\n\t\t\t\t                      [(ngModel)]=\"model.kitchen_ids\"\n\t\t\t\t                      [settings]=\"dropdownSettings\"\n\t\t\t\t                      class=\"form-control custom-multi-select\"\n\t\t\t\t                    >\n\t\t\t\t                    </ng-multiselect-dropdown>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"example-email\">Status</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"status\" [(ngModel)]=\"model.status\" #status=\"ngModel\" required>\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Active</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Inactive</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 text-right\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" type=\"button\" (click)=\"pressBackButton();\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\" style=\"margin-left:20px;\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End PAge Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- footer -->\n\t<!-- ============================================================== -->\n\t<footer class=\"footer\">\n\t\t© 2018 Eliteadmin by themedesigner.in\n\t</footer>\n\t<!-- ============================================================== -->\n\t<!-- End footer -->\n\t<!-- ============================================================== -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/add_user/add_user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add_user/add_user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(router, activatedRouter, userService) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.userService = userService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.model = {};
        this.isLoader = true;
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 100,
            allowSearchFilter: false
        };
        //s
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.kitchenId = +params['id'];
            console.log(_this.kitchenId);
            _this.openLoginModel(_this.kitchenId);
        });
    };
    AddUserComponent.prototype.pressBackButton = function () {
        this.router.navigate(['/kitchen']);
    };
    AddUserComponent.prototype.openLoginModel = function (kitchenId) {
        var _this = this;
        if (kitchenId) {
            this.userService.getUserDetails(kitchenId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(function (data) {
                _this.response = data;
                console.log(_this.response);
                if (_this.response.error_code == 0) {
                    _this.model = _this.response.data;
                    var tempData = [];
                    _this.response.data.kitchen.forEach(function (val) {
                        console.log(val);
                        tempData.push(val.kitchen);
                    });
                    _this.model.kitchen_ids = tempData;
                }
                else {
                    alert(_this.response.message);
                    _this.router.navigate(['/kitchen']);
                }
                _this.isLoader = false;
            }, function (error) {
                console.log(error);
                alert("Problem in api");
                _this.isLoader = false;
            });
        }
        else {
            this.model = {};
            this.model.kitchen_ids = [];
            this.isLoader = false;
        }
        this.userService.getKitchenList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                console.log(_this.response);
                _this.kitchenList = _this.response.data;
            }
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        this.isLoader = true;
        if (!this.model.id) {
            this.model.id = 0;
        }
        delete this.model.kitchen;
        this.userService.addEditUser(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                _this.router.navigate(['/user']);
            }
            else {
                alert(_this.response.message);
                //this.router.navigate(['/login']);
            }
            console.log(data);
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add_user.component.html */ "./src/app/add_user/add_user.component.html"),
            styles: [__webpack_require__(/*! ./add_user.component.css */ "./src/app/add_user/add_user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/add_user/index.ts":
/*!***********************************!*\
  !*** ./src/app/add_user/index.ts ***!
  \***********************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_user.component */ "./src/app/add_user/add_user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return _add_user_component__WEBPACK_IMPORTED_MODULE_0__["AddUserComponent"]; });




/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isUserLogin = false;
        this.submitted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (localStorage.getItem('currentUser')) {
            this.isUserLogin = true;
        }
        else {
            this.isUserLogin = false;
        }
    };
    AppComponent.prototype.onSubmit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registration */ "./src/app/registration/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header */ "./src/app/header/index.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer */ "./src/app/footer/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _browse_kitchen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./browse_kitchen */ "./src/app/browse_kitchen/index.ts");
/* harmony import */ var _add_product__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add_product */ "./src/app/add_product/index.ts");
/* harmony import */ var _add_kitchen__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add_kitchen */ "./src/app/add_kitchen/index.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user */ "./src/app/user/index.ts");
/* harmony import */ var _add_user__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add_user */ "./src/app/add_user/index.ts");
/* harmony import */ var _kitchen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./kitchen */ "./src/app/kitchen/index.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product */ "./src/app/product/index.ts");
/* harmony import */ var _kitchen_header__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./kitchen_header */ "./src/app/kitchen_header/index.ts");
/* harmony import */ var _kitchen_side_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kitchen_side_menu */ "./src/app/kitchen_side_menu/index.ts");
/* harmony import */ var _kitchen_login__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./kitchen_login */ "./src/app/kitchen_login/index.ts");
/* harmony import */ var _kitchen_dashboard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./kitchen_dashboard */ "./src/app/kitchen_dashboard/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to create fake backend
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                _registration__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
                _home__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _header__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _footer__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _browse_kitchen__WEBPACK_IMPORTED_MODULE_16__["BrowseKitchenComponent"],
                _kitchen__WEBPACK_IMPORTED_MODULE_21__["KitchenComponent"],
                _login__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _add_product__WEBPACK_IMPORTED_MODULE_17__["AddProductComponent"],
                _add_kitchen__WEBPACK_IMPORTED_MODULE_18__["AddKitchenComponent"],
                _add_user__WEBPACK_IMPORTED_MODULE_20__["AddUserComponent"],
                _user__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _product__WEBPACK_IMPORTED_MODULE_22__["ProductComponent"],
                _kitchen_header__WEBPACK_IMPORTED_MODULE_23__["KitchenHeaderComponent"],
                _kitchen_side_menu__WEBPACK_IMPORTED_MODULE_24__["KitchenSideMenuComponent"],
                _kitchen_login__WEBPACK_IMPORTED_MODULE_25__["KitchenLoginComponent"],
                _kitchen_dashboard__WEBPACK_IMPORTED_MODULE_26__["KitchenDashboardComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _guards__WEBPACK_IMPORTED_MODULE_9__["AuthKitchenGuard"],
                _services__WEBPACK_IMPORTED_MODULE_10__["KitchenService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration */ "./src/app/registration/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _browse_kitchen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browse_kitchen */ "./src/app/browse_kitchen/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _kitchen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kitchen */ "./src/app/kitchen/index.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product */ "./src/app/product/index.ts");
/* harmony import */ var _add_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add_product */ "./src/app/add_product/index.ts");
/* harmony import */ var _add_kitchen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add_kitchen */ "./src/app/add_kitchen/index.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user */ "./src/app/user/index.ts");
/* harmony import */ var _add_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add_user */ "./src/app/add_user/index.ts");
/* harmony import */ var _kitchen_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kitchen_login */ "./src/app/kitchen_login/index.ts");
/* harmony import */ var _kitchen_dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kitchen_dashboard */ "./src/app/kitchen_dashboard/index.ts");














var appRoutes = [
    { path: 'registration', component: _registration__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    { path: 'browse_kitchen', component: _browse_kitchen__WEBPACK_IMPORTED_MODULE_4__["BrowseKitchenComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'kitchen', component: _kitchen__WEBPACK_IMPORTED_MODULE_6__["KitchenComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'user', component: _user__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'product', component: _product__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthKitchenGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'kitchen_login', component: _kitchen_login__WEBPACK_IMPORTED_MODULE_12__["KitchenLoginComponent"] },
    { path: 'kitchen_dashboard', component: _kitchen_dashboard__WEBPACK_IMPORTED_MODULE_13__["KitchenDashboardComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthKitchenGuard"]] },
    { path: 'add_user/:id', component: _add_user__WEBPACK_IMPORTED_MODULE_11__["AddUserComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'add_product/:id', component: _add_product__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthKitchenGuard"]] },
    { path: 'add_kitchen/:id', component: _add_kitchen__WEBPACK_IMPORTED_MODULE_9__["AddKitchenComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/browse_kitchen/browse_kitchen.component.css":
/*!*************************************************************!*\
  !*** ./src/app/browse_kitchen/browse_kitchen.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/browse_kitchen/browse_kitchen.component.html":
/*!**************************************************************!*\
  !*** ./src/app/browse_kitchen/browse_kitchen.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<!-- SubHeader =============================================== -->\n<section class=\"header-video\">\n\t<div id=\"hero_video\">\n\t\t<div id=\"sub_content\">\n\t\t\t<h1>Order Takeaway or Delivery Food</h1>\n\t\t\t<p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>\n\t\t\t<form method=\"post\" action=\"http://www.ansonika.com/quickfood/list_page.html\">\n\t\t\t\t<div id=\"custom-search-input\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\" search-query\" placeholder=\"Your Address or postal code\">\n\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn_search\" value=\"submit\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div><!-- End sub_content -->\n\t</div>\n\t<img src=\"./assets/img/video_fix.png\" alt=\"\" class=\"header-video--media\" data-video-src=\"\" data-teaser-source=\"video/intro\" data-provider=\"\" data-video-width=\"1920\" data-video-height=\"960\">\n\t<div id=\"count\" class=\"hidden-xs\">\n\t\t<ul>\n\t\t\t<li><span class=\"number\">2650</span> Restaurant</li>\n\t\t\t<li><span class=\"number\">5350</span> People Served</li>\n\t\t\t<li><span class=\"number\">12350</span> Registered Users</li>\n\t\t</ul>\n\t</div>\n</section><!-- End Header video -->\n<!-- End SubHeader ============================================ -->\n\n<!-- Content ================================================== -->\n<div class=\"container margin_60\">\n\t <div class=\"main_title\">\n\t\t<h2 class=\"nomargin_top\" style=\"padding-top:0\">How it works</h2>\n\t\t<p>\n\t\t\tCum doctus civibus efficiantur in imperdiet deterruisset.\n\t\t</p>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"box_home\" id=\"one\">\n\t\t\t\t<span>1</span>\n\t\t\t\t<h3>Search by address</h3>\n\t\t\t\t<p>\n\t\t\t\t\tFind all restaurants available in your zone.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"box_home\" id=\"two\">\n\t\t\t\t<span>2</span>\n\t\t\t\t<h3>Choose a restaurant</h3>\n\t\t\t\t<p>\n\t\t\t\t\tWe have more than 1000s of menus online.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"box_home\" id=\"three\">\n\t\t\t\t<span>3</span>\n\t\t\t\t<h3>Pay by card or cash</h3>\n\t\t\t\t<p>\n\t\t\t\t\tIt's quick, easy and totally secure.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"box_home\" id=\"four\">\n\t\t\t\t<span>4</span>\n\t\t\t\t<h3>Delivery or takeaway</h3>\n\t\t\t\t<p>You are lazy? Are you backing home?</p>\n\t\t\t</div>\n\t\t</div>\n\t</div><!-- End row -->\n\t<div id=\"delivery_time\" class=\"hidden-xs\">\n\t\t<strong><span>2</span><span>5</span></strong>\n\t\t<h4>The minutes that usually takes to deliver!</h4>\n\t</div>\n</div><!-- End container -->\n\n<div class=\"white_bg\">\n\t<div class=\"container margin_60\">\n\t\t<div class=\"main_title\">\n\t\t\t<h2 class=\"nomargin_top\">Choose from Most Popular</h2>\n\t\t\t<p>\n\t\t\t\tCum doctus civibus efficiantur in imperdiet deterruisset.\n\t\t\t</p>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<a href=\"detail_page.html\" class=\"strip_list\">\n\t\t\t\t<div class=\"ribbon_1\">Popular</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<div class=\"thumb_strip\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/thumb_restaurant.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Taco Mexican</h3>\n\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\tMexican / American\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"location\">\n\t\t\t\t\t\t\t135 Newtownards Road, Belfast, BT4. <span class=\"opening\">Opens at 17:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Take away<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t\t<li>Delivery<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!-- End desc-->\n\t\t\t\t</a><!-- End strip_list-->\n\t\t\t   <a href=\"detail_page.html\" class=\"strip_list\">\n\t\t\t   <div class=\"ribbon_1\">Popular</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<div class=\"thumb_strip\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/thumb_restaurant_2.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Naples Pizza</h3>\n\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\tItalian / Pizza\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"location\">\n\t\t\t\t\t\t\t135 Newtownards Road, Belfast, BT4. <span class=\"opening\">Opens at 17:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Take away<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t\t<li>Delivery<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!-- End desc-->\n\t\t\t\t</a><!-- End strip_list-->\n\t\t\t\t<a href=\"detail_page.html\" class=\"strip_list\">\n\t\t\t\t<div class=\"ribbon_1\">Popular</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<div class=\"thumb_strip\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/thumb_restaurant_3.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Japan Food</h3>\n\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\tSushi / Japanese\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"location\">\n\t\t\t\t\t\t\t135 Newtownards Road, Belfast, BT4. <span class=\"opening\">Opens at 17:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Take away<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t\t<li>Delivery<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!-- End desc-->\n\t\t\t\t</a><!-- End strip_list-->\n\t\t\t</div><!-- End col-md-6-->\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<a href=\"detail_page.html\" class=\"strip_list\">\n\t\t\t\t<div class=\"ribbon_1\">Popular</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<div class=\"thumb_strip\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/thumb_restaurant_4.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Sushi Gold</h3>\n\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\tSushi / Japanese\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"location\">\n\t\t\t\t\t\t\t135 Newtownards Road, Belfast, BT4. <span class=\"opening\">Opens at 17:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Take away<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t\t<li>Delivery<i class=\"icon_close_alt2 no\"></i></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!-- End desc-->\n\t\t\t\t</a><!-- End strip_list-->\n\t\t\t\t<a href=\"detail_page.html\" class=\"strip_list\">\n\t\t\t\t<div class=\"ribbon_1\">Popular</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<div class=\"thumb_strip\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/thumb_restaurant_5.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Dragon Tower</h3>\n\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\tChinese / Thai\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"location\">\n\t\t\t\t\t\t\t135 Newtownards Road, Belfast, BT4. <span class=\"opening\">Opens at 17:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Take away<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t\t<li>Delivery<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!-- End desc-->\n\t\t\t\t</a><!-- End strip_list-->\n\t\t\t\t<a href=\"detail_page.html\" class=\"strip_list\">\n\t\t\t\t<div class=\"ribbon_1\">Popular</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<div class=\"thumb_strip\">\n\t\t\t\t\t\t\t<img src=\"./assets/img/thumb_restaurant_6.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star voted\"></i><i class=\"icon_star\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>China Food</h3>\n\t\t\t\t\t\t<div class=\"type\">\n\t\t\t\t\t\t\tChinese / Vietnam\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"location\">\n\t\t\t\t\t\t\t135 Newtownards Road, Belfast, BT4. <span class=\"opening\">Opens at 17:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Take away<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t\t<li>Delivery<i class=\"icon_check_alt2 ok\"></i></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!-- End desc-->\n\t\t\t\t</a><!-- End strip_list-->\n\t\t\t</div>\n\t\t</div><!-- End row -->\n\t</div><!-- End container -->\n</div><!-- End white_bg -->\n\n<div class=\"high_light\">\n\t<div class=\"container\">\n\t\t<h3>Choose from over 2,000 Restaurants</h3>\n\t\t<p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>\n\t\t<a href=\"list_page.html\">View all Restaurants</a>\n\t</div><!-- End container -->\n</div><!-- End hight_light -->\n\n<section class=\"parallax-window\" data-parallax=\"scroll\" data-image-src=\"./assets/img/bg_office.jpg\" data-natural-width=\"1200\" data-natural-height=\"600\">\n\t<div class=\"parallax-content\">\n\t\t<div class=\"sub_content\">\n\t\t\t<i class=\"icon_mug\"></i>\n\t\t\t<h3>We also deliver to your office</h3>\n\t\t\t<p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>\n\t\t</div><!-- End sub_content -->\n\t</div><!-- End subheader -->\n</section><!-- End section -->\n<!-- End Content =============================================== -->\n<div class=\"container margin_60\">\n  \t<div class=\"main_title margin_mobile\">\n\t\t<h2 class=\"nomargin_top\">Work with Us</h2>\n\t\t<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4 col-md-offset-2\">\n\t\t\t<a class=\"box_work\" href=\"submit_restaurant.html\">\n\t\t\t<img src=\"./assets/img/submit_restaurant.jpg\" width=\"848\" height=\"480\" alt=\"\" class=\"img-responsive\">\n\t\t\t<h3>Submit your Restaurant<span>Start to earn customers</span></h3>\n\t\t\t<p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>\n\t\t\t<div class=\"btn_1\">Read more</div>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<a class=\"box_work\" href=\"submit_driver.html\">\n\t\t\t<img src=\"./assets/img/delivery.jpg\" width=\"848\" height=\"480\" alt=\"\" class=\"img-responsive\">\n\t\t\t<h3>We are looking for a Driver<span>Start to earn money</span></h3>\n\t\t\t<p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>\n\t\t\t<div class=\"btn_1\">Read more</div>\n\t\t\t</a>\n\t\t</div>\n  \t</div><!-- End row -->\n</div><!-- End container -->\n\n<app-footer></app-footer>\n\n<!-- SPECIFIC SCRIPTS -->\n"

/***/ }),

/***/ "./src/app/browse_kitchen/browse_kitchen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/browse_kitchen/browse_kitchen.component.ts ***!
  \************************************************************/
/*! exports provided: BrowseKitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseKitchenComponent", function() { return BrowseKitchenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrowseKitchenComponent = /** @class */ (function () {
    function BrowseKitchenComponent() {
        this.loading = false;
    }
    BrowseKitchenComponent.prototype.ngOnInit = function () {
    };
    BrowseKitchenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./browse_kitchen.component.html */ "./src/app/browse_kitchen/browse_kitchen.component.html"),
            styles: [__webpack_require__(/*! ./browse_kitchen.component.css */ "./src/app/browse_kitchen/browse_kitchen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrowseKitchenComponent);
    return BrowseKitchenComponent;
}());



/***/ }),

/***/ "./src/app/browse_kitchen/index.ts":
/*!*****************************************!*\
  !*** ./src/app/browse_kitchen/index.ts ***!
  \*****************************************/
/*! exports provided: BrowseKitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_kitchen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse_kitchen.component */ "./src/app/browse_kitchen/browse_kitchen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseKitchenComponent", function() { return _browse_kitchen_component__WEBPACK_IMPORTED_MODULE_0__["BrowseKitchenComponent"]; });




/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- User Profile-->\n<div class=\"user-profile\">\n\t<div class=\"user-pro-body\">\n\t\t<div><img src=\"./assets/images/users/2.jpg\" alt=\"user-img\" class=\"img-circle\"></div>\n\t\t<div class=\"dropdown\">\n\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-toggle u-dropdown link hide-menu\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Steave Gection <span class=\"caret\"></span></a>\n\t\t\t<div class=\"dropdown-menu animated flipInY\">\n\t\t\t\t<!-- text-->\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ti-user\"></i> My Profile</a>\n\t\t\t\t<!-- text-->\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ti-wallet\"></i> My Orders</a>\n\t\t\t\t<!-- text-->\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<!-- text-->\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ti-settings\"></i> Account Setting</a>\n\t\t\t\t<!-- text-->\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<!-- text-->\n\t\t\t\t<a (click)=\"logout();\" href=\"javascript:void(0);\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i> Logout</a>\n\t\t\t\t<!-- text-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Sidebar navigation-->\n<nav class=\"sidebar-nav\">\n\t<ul id=\"sidebarnav\">\n\t\t<!-- <li class=\"nav-small-cap\">--- PERSONAL</li> -->\n\t\t<li class=\"\">\n\t\t\t<a class=\"waves-effect waves-dark\" [routerLink]=\"['/']\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"far fa-circle text-success\"></i>\n\t\t\t\t<span class=\"hide-menu\">Dashboard</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"\">\n\t\t\t<a class=\"waves-effect waves-dark\" [routerLink]=\"['/kitchen']\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"far fa-circle text-success\"></i>\n\t\t\t\t<span class=\"hide-menu\">Kitchen</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"active\">\n\t\t\t<a class=\"waves-effect waves-dark\" [routerLink]=\"['/user']\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"far fa-circle text-success\"></i>\n\t\t\t\t<span class=\"hide-menu\">Users</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<div class=\"dropdown-divider\"></div>\n\t\t<!-- text-->\n\t\t<!-- <a href=\"javascript:void(0);\" (click)=\"logout();\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i> Logout</a> -->\n\t\t<!-- <li class=\"nav-small-cap\">--- SUPPORT</li> -->\n\t</ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//private heroService: HeroService
var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.loading = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.logout = function () {
        localStorage.setItem('oml_user_details', "");
        this.router.navigate(['/login']);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer/index.ts":
/*!*********************************!*\
  !*** ./src/app/footer/index.ts ***!
  \*********************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });




/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar top-navbar navbar-expand-md navbar-dark\">\n\t<!-- ============================================================== -->\n\t<!-- Logo -->\n\t<!-- ============================================================== -->\n\t<div class=\"navbar-header\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['/']\">\n\t\t\t<b>\n\t\t\t\t<!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n\t\t\t\t<!-- Dark Logo icon -->\n\t\t\t\t<img src=\"../assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n\t\t\t\t<!-- Light Logo icon -->\n\t\t\t\t<img src=\"../assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" />\n\t\t\t</b>\n\t\t\t<!--End Logo icon -->\n\t\t\t<!-- Logo text -->\n\t\t\t<span>\n\t\t\t\t<!-- dark Logo text -->\n\t\t\t\t<img src=\"../assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n\t\t\t\t<!-- Light Logo text -->\n\t\t\t\t<img src=\"../assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" />\n\t\t\t</span>\n\t\t</a>\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Logo -->\n\t<!-- ============================================================== -->\n\t<div class=\"navbar-collapse\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- toggle and nav items -->\n\t\t<!-- ============================================================== -->\n\t\t<ul class=\"navbar-nav mr-auto\">\n\n\t\t</ul>\n\t\t<!-- ============================================================== -->\n\t\t<!-- User profile and search -->\n\t\t<!-- ============================================================== -->\n\t\t<ul class=\"navbar-nav my-lg-0\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- mega menu -->\n\t\t\t<!-- ============================================================== -->\n\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End mega menu -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<li class=\"nav-item right-side-toggle\">\n\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//private heroService: HeroService
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.loading = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/index.ts":
/*!*********************************!*\
  !*** ./src/app/header/index.ts ***!
  \*********************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });




/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<!-- ============================================================== -->\n\t<!-- Topbar header - style you can find in pages.scss -->\n\t<!-- ============================================================== -->\n\t<header class=\"topbar\">\n\t\t<app-header></app-header>\n\t</header>\n\t<!-- ============================================================== -->\n\t<!-- End Topbar header -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<aside class=\"left-sidebar\">\n\t\t<!-- Sidebar scroll-->\n\t\t<div class=\"scroll-sidebar\">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t\t<!-- End Sidebar scroll-->\n\t</aside>\n\t<!-- ============================================================== -->\n\t<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row page-titles\">\n\t\t\t\t<div class=\"col-md-5 align-self-center\">\n\t\t\t\t\t<h4 class=\"text-themecolor\">Dashboard</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 align-self-center text-right\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- charts -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Dashboard</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End PAge Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- footer -->\n\t<!-- ============================================================== -->\n\t<footer class=\"footer\">\n\t\t© 2018 Eliteadmin by themedesigner.in\n\t</footer>\n\t<!-- ============================================================== -->\n\t<!-- End footer -->\n\t<!-- ============================================================== -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openLoginModel = function () {
    };
    HomeComponent.prototype.onSubmit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/kitchen/index.ts":
/*!**********************************!*\
  !*** ./src/app/kitchen/index.ts ***!
  \**********************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kitchen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen.component */ "./src/app/kitchen/kitchen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return _kitchen_component__WEBPACK_IMPORTED_MODULE_0__["KitchenComponent"]; });




/***/ }),

/***/ "./src/app/kitchen/kitchen.component.css":
/*!***********************************************!*\
  !*** ./src/app/kitchen/kitchen.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen/kitchen.component.html":
/*!************************************************!*\
  !*** ./src/app/kitchen/kitchen.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<!-- ============================================================== -->\n\t<!-- Topbar header - style you can find in pages.scss -->\n\t<!-- ============================================================== -->\n\t<header class=\"topbar\">\n\t\t<app-header></app-header>\n\t</header>\n\t<!-- ============================================================== -->\n\t<!-- End Topbar header -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<aside class=\"left-sidebar\">\n\t\t<!-- Sidebar scroll-->\n\t\t<div class=\"scroll-sidebar\">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t\t<!-- End Sidebar scroll-->\n\t</aside>\n\t<!-- ============================================================== -->\n\t<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row page-titles\">\n\t\t\t\t<div class=\"col-md-5 align-self-center\">\n\t\t\t\t\t<h4 class=\"text-themecolor\">Kitchen</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 align-self-center text-right\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end align-items-center\">\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Kitchen</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<a [routerLink]=\"['/add_kitchen/0']\" class=\"btn btn-info d-none d-lg-block m-l-15\"><i class=\"fa fa-plus-circle\"></i> Create New</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- charts -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Kitchen List</h5>\n\t\t\t\t\t\t\t<div class=\"table-responsive m-t-30\">\n\t\t\t\t\t\t\t\t<table class=\"table product-overview\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Phone Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Icon</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actions</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"!isLoader\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let result of kitchenList; let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.address}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.phone_number}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.profile_icon}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"result.status\" class=\"label label-success\">Active</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!result.status\" class=\"label label-danger\">Inactive</span>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/add_kitchen/', result.id]\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Edit\"><i class=\"ti-marker-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Delete\"><i class=\"ti-trash\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"isLoader\">\n\t\t\t\t\t\t\t\t\t\t<tr colspan=\"4\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"isLoader\" src=\"./assets/images/loader-button.gif\" alt=\"\" width=\"30\">\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End PAge Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- footer -->\n\t<!-- ============================================================== -->\n\t<footer class=\"footer\">\n\t\t© 2018 Eliteadmin by themedesigner.in\n\t</footer>\n\t<!-- ============================================================== -->\n\t<!-- End footer -->\n\t<!-- ============================================================== -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/kitchen/kitchen.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kitchen/kitchen.component.ts ***!
  \**********************************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return KitchenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KitchenComponent = /** @class */ (function () {
    function KitchenComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.isLoader = true;
    }
    KitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoader = true;
        this.userService.getKitchenList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                console.log(_this.response);
                _this.kitchenList = _this.response.data;
            }
            else {
                _this.router.navigate(['/login']);
            }
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    KitchenComponent.prototype.openLoginModel = function () {
    };
    KitchenComponent.prototype.onSubmit = function () {
    };
    KitchenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen',
            template: __webpack_require__(/*! ./kitchen.component.html */ "./src/app/kitchen/kitchen.component.html"),
            styles: [__webpack_require__(/*! ./kitchen.component.css */ "./src/app/kitchen/kitchen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], KitchenComponent);
    return KitchenComponent;
}());



/***/ }),

/***/ "./src/app/kitchen_dashboard/index.ts":
/*!********************************************!*\
  !*** ./src/app/kitchen_dashboard/index.ts ***!
  \********************************************/
/*! exports provided: KitchenDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kitchen_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen_dashboard.component */ "./src/app/kitchen_dashboard/kitchen_dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KitchenDashboardComponent", function() { return _kitchen_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["KitchenDashboardComponent"]; });




/***/ }),

/***/ "./src/app/kitchen_dashboard/kitchen_dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/kitchen_dashboard/kitchen_dashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen_dashboard/kitchen_dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/kitchen_dashboard/kitchen_dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(./assets/images/background/login-register.jpg);\">\n\t<div class=\"login-box card\">\n\t\t<div class=\"card-body\">\n\t\t\t<h3 class=\"text-center m-b-20\">Kitchens</h3>\n\t\t\t<div class=\"row text-center\" (click)=\"onClickKitchen(result.id);\" style=\"background-color:#fb7878b5; padding:20px; border: 1px solid;\" *ngFor=\"let result of kitchenUserList; let i = index;\">\n\t\t\t\t{{result.kitchen.name}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/kitchen_dashboard/kitchen_dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/kitchen_dashboard/kitchen_dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: KitchenDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenDashboardComponent", function() { return KitchenDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KitchenDashboardComponent = /** @class */ (function () {
    function KitchenDashboardComponent(router, kitchenService) {
        this.router = router;
        this.kitchenService = kitchenService;
        this.model = {};
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.isLoader = false;
        this.kitchenUserList = [];
        this.currentUser = JSON.parse(localStorage.getItem('oml_kitchen_user_details'));
        if (this.currentUser.kitchen_id) {
            //this.router.navigate(['/product']);
        }
    }
    KitchenDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kitchenService.getKitchenList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                _this.kitchenUserList = _this.response.data;
            }
            else {
                alert(_this.response.message);
            }
            console.log(_this.response);
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    KitchenDashboardComponent.prototype.openLoginModel = function () {
    };
    KitchenDashboardComponent.prototype.onClickKitchen = function (kitchenId) {
        this.currentUser.kitchen_id = kitchenId;
        localStorage.setItem('oml_kitchen_user_details', JSON.stringify(this.currentUser));
        this.router.navigate(['/product']);
    };
    KitchenDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-dashboard',
            template: __webpack_require__(/*! ./kitchen_dashboard.component.html */ "./src/app/kitchen_dashboard/kitchen_dashboard.component.html"),
            styles: [__webpack_require__(/*! ./kitchen_dashboard.component.css */ "./src/app/kitchen_dashboard/kitchen_dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["KitchenService"]])
    ], KitchenDashboardComponent);
    return KitchenDashboardComponent;
}());



/***/ }),

/***/ "./src/app/kitchen_header/index.ts":
/*!*****************************************!*\
  !*** ./src/app/kitchen_header/index.ts ***!
  \*****************************************/
/*! exports provided: KitchenHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kitchen_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen_header.component */ "./src/app/kitchen_header/kitchen_header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KitchenHeaderComponent", function() { return _kitchen_header_component__WEBPACK_IMPORTED_MODULE_0__["KitchenHeaderComponent"]; });




/***/ }),

/***/ "./src/app/kitchen_header/kitchen_header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/kitchen_header/kitchen_header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen_header/kitchen_header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/kitchen_header/kitchen_header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar top-navbar navbar-expand-md navbar-dark\">\n\t<!-- ============================================================== -->\n\t<!-- Logo -->\n\t<!-- ============================================================== -->\n\t<div class=\"navbar-header\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['/kitchen_dashboard']\">\n\t\t\t<b>\n\t\t\t\t<!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n\t\t\t\t<!-- Dark Logo icon -->\n\t\t\t\t<img src=\"./assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n\t\t\t\t<!-- Light Logo icon -->\n\t\t\t\t<img src=\"./assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" />\n\t\t\t</b>\n\t\t\t<!--End Logo icon -->\n\t\t\t<!-- Logo text -->\n\t\t\t<span>\n\t\t\t\t<!-- dark Logo text -->\n\t\t\t\t<img src=\"./assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n\t\t\t\t<!-- Light Logo text -->\n\t\t\t\t<img src=\"./assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" />\n\t\t\t</span>\n\t\t</a>\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Logo -->\n\t<!-- ============================================================== -->\n\t<div class=\"navbar-collapse\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- toggle and nav items -->\n\t\t<!-- ============================================================== -->\n\t\t<ul class=\"navbar-nav mr-auto\">\n\n\t\t</ul>\n\t\t<!-- ============================================================== -->\n\t\t<!-- User profile and search -->\n\t\t<!-- ============================================================== -->\n\t\t<ul class=\"navbar-nav my-lg-0\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- mega menu -->\n\t\t\t<!-- ============================================================== -->\n\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End mega menu -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<li class=\"nav-item right-side-toggle\">\n\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/kitchen_header/kitchen_header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/kitchen_header/kitchen_header.component.ts ***!
  \************************************************************/
/*! exports provided: KitchenHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenHeaderComponent", function() { return KitchenHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//private heroService: HeroService
var KitchenHeaderComponent = /** @class */ (function () {
    function KitchenHeaderComponent() {
        this.loading = false;
    }
    KitchenHeaderComponent.prototype.ngOnInit = function () {
    };
    KitchenHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-header',
            template: __webpack_require__(/*! ./kitchen_header.component.html */ "./src/app/kitchen_header/kitchen_header.component.html"),
            styles: [__webpack_require__(/*! ./kitchen_header.component.css */ "./src/app/kitchen_header/kitchen_header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KitchenHeaderComponent);
    return KitchenHeaderComponent;
}());



/***/ }),

/***/ "./src/app/kitchen_login/index.ts":
/*!****************************************!*\
  !*** ./src/app/kitchen_login/index.ts ***!
  \****************************************/
/*! exports provided: KitchenLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kitchen_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen_login.component */ "./src/app/kitchen_login/kitchen_login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KitchenLoginComponent", function() { return _kitchen_login_component__WEBPACK_IMPORTED_MODULE_0__["KitchenLoginComponent"]; });




/***/ }),

/***/ "./src/app/kitchen_login/kitchen_login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/kitchen_login/kitchen_login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen_login/kitchen_login.component.html":
/*!************************************************************!*\
  !*** ./src/app/kitchen_login/kitchen_login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(./assets/images/background/login-register.jpg);\">\n\t<div class=\"login-box card\">\n\t\t<div class=\"card-body\">\n\t\t\t<form class=\"form-horizontal form-material\" name=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.form.valid && onSubmit()\">\n\t\t\t\t<h3 class=\"text-center m-b-20\">Sign In</h3>\n\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<input name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n\t\t\t\t\t\tclass=\"form-control {{(email.invalid && ((email.dirty || email.touched) || loginForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\ttype=\"text\" required placeholder=\"Username\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<input name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n\t\t\t\t\t\tclass=\"form-control {{(password.invalid && ((password.dirty || password.touched) || loginForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\ttype=\"password\" required placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"d-flex no-block align-items-center\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-muted\"><i class=\"fas fa-lock m-r-5\"></i> Forgot pwd?</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t<div class=\"col-xs-12 p-b-20\">\n\t\t\t\t\t\t<button class=\"btn btn-block btn-lg btn-info btn-rounded\" type=\"submit\" [disabled]=\"isLoader\">\n\t\t\t\t\t\t\tLog In\n\t\t\t\t\t\t\t<img *ngIf=\"isLoader\" src=\"./assets/images/loader-button.gif\" alt=\"\" width=\"30\">\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-b-0\">\n\t\t\t\t\t<!-- <div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\tDon't have an account? <a [routerLink]=\"['/registration']\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/kitchen_login/kitchen_login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/kitchen_login/kitchen_login.component.ts ***!
  \**********************************************************/
/*! exports provided: KitchenLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenLoginComponent", function() { return KitchenLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KitchenLoginComponent = /** @class */ (function () {
    function KitchenLoginComponent(router, kitchenService) {
        this.router = router;
        this.kitchenService = kitchenService;
        this.model = {};
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.isLoader = false;
    }
    KitchenLoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('oml_kitchen_user_details')) {
            this.router.navigate(['/kitchen_dashboard']);
        }
    };
    KitchenLoginComponent.prototype.openLoginModel = function () {
    };
    KitchenLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        this.isLoader = true;
        this.kitchenService.login(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                localStorage.setItem('oml_kitchen_user_details', JSON.stringify(_this.response.data));
                _this.router.navigate(['/kitchen_dashboard']);
            }
            else {
                alert(_this.response.message);
            }
            console.log(_this.response);
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    KitchenLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-login',
            template: __webpack_require__(/*! ./kitchen_login.component.html */ "./src/app/kitchen_login/kitchen_login.component.html"),
            styles: [__webpack_require__(/*! ./kitchen_login.component.css */ "./src/app/kitchen_login/kitchen_login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["KitchenService"]])
    ], KitchenLoginComponent);
    return KitchenLoginComponent;
}());



/***/ }),

/***/ "./src/app/kitchen_side_menu/index.ts":
/*!********************************************!*\
  !*** ./src/app/kitchen_side_menu/index.ts ***!
  \********************************************/
/*! exports provided: KitchenSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kitchen_side_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen_side_menu.component */ "./src/app/kitchen_side_menu/kitchen_side_menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KitchenSideMenuComponent", function() { return _kitchen_side_menu_component__WEBPACK_IMPORTED_MODULE_0__["KitchenSideMenuComponent"]; });




/***/ }),

/***/ "./src/app/kitchen_side_menu/kitchen_side_menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/kitchen_side_menu/kitchen_side_menu.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen_side_menu/kitchen_side_menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/kitchen_side_menu/kitchen_side_menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- User Profile-->\n<div class=\"user-profile\">\n\t<div class=\"user-pro-body\">\n\t\t<div><img src=\"./assets/images/users/2.jpg\" alt=\"user-img\" class=\"img-circle\"></div>\n\t\t<div class=\"dropdown\">\n\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-toggle u-dropdown link hide-menu\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Steave Gection <span class=\"caret\"></span></a>\n\t\t\t<div class=\"dropdown-menu animated flipInY\">\n\t\t\t\t<!-- text-->\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ti-user\"></i> My Profile</a>\n\t\t\t\t<!-- text-->\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<!-- text-->\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"ti-settings\"></i> Account Setting</a>\n\t\t\t\t<!-- text-->\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<!-- text-->\n\t\t\t\t<a href=\"login.html\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i> Logout</a>\n\t\t\t\t<!-- text-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Sidebar navigation-->\n<nav class=\"sidebar-nav\">\n\t<ul id=\"sidebarnav\">\n\t\t<!-- <li class=\"nav-small-cap\">--- PERSONAL</li> -->\n\t\t<li>\n\t\t\t<a class=\"waves-effect waves-dark\" [routerLink]=\"['/kitchen_dashboard']\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"far fa-circle text-success\"></i>\n\t\t\t\t<span class=\"hide-menu\">Dashboard</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"waves-effect waves-dark\" [routerLink]=\"['/product']\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"far fa-circle text-success\"></i>\n\t\t\t\t<span class=\"hide-menu\">Product</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<!-- <li>\n\t\t\t<a class=\"waves-effect waves-dark\" href=\"/admin/users/\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"far fa-circle text-success\"></i>\n\t\t\t\t<span class=\"hide-menu\">Users</span>\n\t\t\t</a>\n\t\t</li> -->\n\t</ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/kitchen_side_menu/kitchen_side_menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/kitchen_side_menu/kitchen_side_menu.component.ts ***!
  \******************************************************************/
/*! exports provided: KitchenSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenSideMenuComponent", function() { return KitchenSideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//private heroService: HeroService
var KitchenSideMenuComponent = /** @class */ (function () {
    function KitchenSideMenuComponent() {
        this.loading = false;
    }
    KitchenSideMenuComponent.prototype.ngOnInit = function () {
    };
    KitchenSideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-sidemenu',
            template: __webpack_require__(/*! ./kitchen_side_menu.component.html */ "./src/app/kitchen_side_menu/kitchen_side_menu.component.html"),
            styles: [__webpack_require__(/*! ./kitchen_side_menu.component.css */ "./src/app/kitchen_side_menu/kitchen_side_menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KitchenSideMenuComponent);
    return KitchenSideMenuComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(./assets/images/background/login-register.jpg);\">\n\t<div class=\"login-box card\">\n\t\t<div class=\"card-body\">\n\t\t\t<form class=\"form-horizontal form-material\" name=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.form.valid && onSubmit()\">\n\t\t\t\t<h3 class=\"text-center m-b-20\">Sign In</h3>\n\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<input name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n\t\t\t\t\t\tclass=\"form-control {{(email.invalid && ((email.dirty || email.touched) || loginForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\ttype=\"text\" required placeholder=\"Username\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<input name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n\t\t\t\t\t\tclass=\"form-control {{(password.invalid && ((password.dirty || password.touched) || loginForm.submitted))?'activeErrorBorder':''}}\"\n\t\t\t\t\t\ttype=\"password\" required placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"d-flex no-block align-items-center\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-muted\"><i class=\"fas fa-lock m-r-5\"></i> Forgot pwd?</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t<div class=\"col-xs-12 p-b-20\">\n\t\t\t\t\t\t<button class=\"btn btn-block btn-lg btn-info btn-rounded\" type=\"submit\" [disabled]=\"isLoader\">\n\t\t\t\t\t\t\tLog In\n\t\t\t\t\t\t\t<img *ngIf=\"isLoader\" src=\"./assets/images/loader-button.gif\" alt=\"\" width=\"30\">\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group m-b-0\">\n\t\t\t\t\t<!-- <div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\tDon't have an account? <a [routerLink]=\"['/registration']\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.isLoader = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('oml_user_details')) {
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.openLoginModel = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model);
        this.isLoader = true;
        this.authenticationService.login(this.model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                localStorage.setItem('oml_user_details', JSON.stringify(_this.response.data));
                _this.router.navigate(['/']);
            }
            else {
                alert(_this.response.message);
            }
            console.log(_this.response);
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/product/index.ts":
/*!**********************************!*\
  !*** ./src/app/product/index.ts ***!
  \**********************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return _product_component__WEBPACK_IMPORTED_MODULE_0__["ProductComponent"]; });




/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<!-- ============================================================== -->\n\t<!-- Topbar header - style you can find in pages.scss -->\n\t<!-- ============================================================== -->\n\t<header class=\"topbar\">\n\t\t<app-kitchen-header></app-kitchen-header>\n\t</header>\n\t<!-- ============================================================== -->\n\t<!-- End Topbar header -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<aside class=\"left-sidebar\">\n\t\t<!-- Sidebar scroll-->\n\t\t<div class=\"scroll-sidebar\">\n\t\t\t<app-kitchen-sidemenu></app-kitchen-sidemenu>\n\t\t</div>\n\t\t<!-- End Sidebar scroll-->\n\t</aside>\n\t<!-- ============================================================== -->\n\t<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row page-titles\">\n\t\t\t\t<div class=\"col-md-5 align-self-center\">\n\t\t\t\t\t<h4 class=\"text-themecolor\">Product</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 align-self-center text-right\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end align-items-center\">\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">Product</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<a [routerLink]=\"['/add_product/0']\" class=\"btn btn-info d-none d-lg-block m-l-15\"><i class=\"fa fa-plus-circle\"></i> Create New</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- charts -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Product List</h5>\n\t\t\t\t\t\t\t<div class=\"table-responsive m-t-30\">\n\t\t\t\t\t\t\t\t<table class=\"table product-overview\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Product ID</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Image</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Kitchen</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actions</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"!isLoader\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let result of productList; let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.id}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.image}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.kitchen.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.price}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/add_kitchen/', result.id]\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Edit\"><i class=\"ti-marker-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Delete\"><i class=\"ti-trash\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"isLoader\">\n\t\t\t\t\t\t\t\t\t\t<tr colspan=\"4\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"isLoader\" src=\"./assets/images/loader-button.gif\" alt=\"\" width=\"30\">\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End PAge Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- footer -->\n\t<!-- ============================================================== -->\n\t<footer class=\"footer\">\n\t\t© 2018 Eliteadmin by themedesigner.in\n\t</footer>\n\t<!-- ============================================================== -->\n\t<!-- End footer -->\n\t<!-- ============================================================== -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(router, kitchenService) {
        this.router = router;
        this.kitchenService = kitchenService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.isLoader = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kitchenService.getProductList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                _this.productList = _this.response.data;
            }
            else {
                alert(_this.response.message);
            }
            console.log(_this.response);
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    ProductComponent.prototype.openLoginModel = function () {
        $('#login').modal('show');
    };
    ProductComponent.prototype.onSubmit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["KitchenService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/registration/index.ts":
/*!***************************************!*\
  !*** ./src/app/registration/index.ts ***!
  \***************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.component */ "./src/app/registration/registration.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return _registration_component__WEBPACK_IMPORTED_MODULE_0__["RegistrationComponent"]; });




/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\">\n\t<div class=\"login-register\" style=\"background-image:url(../assets/images/background/login-register.jpg);\">\n\t\t<div class=\"login-box card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<form class=\"form-horizontal form-material\" id=\"loginform\" action=\"\">\n\t\t\t\t\t<h3 class=\"text-center m-b-20\">Sign Up</h3>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Confirm Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheck1\">I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group text-center p-b-20\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<button class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\" type=\"submit\">Sign Up</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group m-b-0\">\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\tAlready have an account? <a [routerLink]=\"['/login']\" class=\"text-info m-l-5\"><b>Sign In</b></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Hero } from '../hero';


//private heroService: HeroService
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/index.ts":
/*!*******************************!*\
  !*** ./src/app/user/index.ts ***!
  \*******************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]; });




/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<!-- ============================================================== -->\n\t<!-- Topbar header - style you can find in pages.scss -->\n\t<!-- ============================================================== -->\n\t<header class=\"topbar\">\n\t\t<app-header></app-header>\n\t</header>\n\t<!-- ============================================================== -->\n\t<!-- End Topbar header -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<aside class=\"left-sidebar\">\n\t\t<!-- Sidebar scroll-->\n\t\t<div class=\"scroll-sidebar\">\n\t\t\t<app-footer></app-footer>\n\t\t</div>\n\t\t<!-- End Sidebar scroll-->\n\t</aside>\n\t<!-- ============================================================== -->\n\t<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<div class=\"page-wrapper\">\n\t\t<!-- ============================================================== -->\n\t\t<!-- Container fluid  -->\n\t\t<!-- ============================================================== -->\n\n\t\t<div class=\"container-fluid\">\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row page-titles\">\n\t\t\t\t<div class=\"col-md-5 align-self-center\">\n\t\t\t\t\t<h4 class=\"text-themecolor\">User</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-7 align-self-center text-right\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end align-items-center\">\n\t\t\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n\t\t\t\t\t\t\t<li class=\"breadcrumb-item active\">User</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<a [routerLink]=\"['/add_user/0']\" class=\"btn btn-info d-none d-lg-block m-l-15\"><i class=\"fa fa-plus-circle\"></i> Create New</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End Bread crumb and right sidebar toggle -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- charts -->\n\t\t\t<!-- ============================================================== -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">User List</h5>\n\t\t\t\t\t\t\t<div class=\"table-responsive m-t-30\">\n\t\t\t\t\t\t\t\t<table class=\"table product-overview\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Phone Number</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Actions</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"!isLoader\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let result of kitchenList; let i = index;\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.email}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{result.phone_number}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"result.status\" class=\"label label-success\">Active</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!result.status\" class=\"label label-danger\">Inactive</span>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/add_user/', result.id]\" class=\"text-inverse p-r-10\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Edit\"><i class=\"ti-marker-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"\" data-toggle=\"tooltip\" data-original-title=\"Delete\"><i class=\"ti-trash\"></i></a> -->\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"isLoader\">\n\t\t\t\t\t\t\t\t\t\t<tr colspan=\"8\" class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"isLoader\" src=\"./assets/images/loader-button.gif\" alt=\"\" width=\"30\">\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- ============================================================== -->\n\t\t\t<!-- End PAge Content -->\n\t\t\t<!-- ============================================================== -->\n\t\t</div>\n\n\t\t<!-- ============================================================== -->\n\t\t<!-- End Container fluid  -->\n\t\t<!-- ============================================================== -->\n\t</div>\n\t<!-- ============================================================== -->\n\t<!-- End Page wrapper  -->\n\t<!-- ============================================================== -->\n\t<!-- ============================================================== -->\n\t<!-- footer -->\n\t<!-- ============================================================== -->\n\t<footer class=\"footer\">\n\t\t© 2018 Eliteadmin by themedesigner.in\n\t</footer>\n\t<!-- ============================================================== -->\n\t<!-- End footer -->\n\t<!-- ============================================================== -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.isLoader = true;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoader = true;
        this.userService.getUserList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.error_code == 0) {
                console.log(_this.response);
                _this.kitchenList = _this.response.data;
            }
            else {
                _this.router.navigate(['/login']);
            }
            _this.isLoader = false;
        }, function (error) {
            console.log(error);
            alert("Problem in api");
            _this.isLoader = false;
        });
    };
    UserComponent.prototype.openLoginModel = function () {
    };
    UserComponent.prototype.onSubmit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'http://149.56.142.36:2213/api',
    // apiUrl: 'http://149.56.142.36:2213/api',
    base_url: 'http://localhost:4200/',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular6\omlVender\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map