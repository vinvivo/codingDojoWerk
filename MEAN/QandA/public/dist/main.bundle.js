webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-answer/add-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav>\n      <a [routerLink]=\"['/dashboard']\">Home</a>\n      <a [routerLink]=\"['/question', question._id]\">Go Back to Question</a>\n      <a [routerLink]=\"['']\">Logout</a>\n  </nav>\n  <h1>{{question.q_text}}</h1>\n  <p>{{question.desc}}</p>\n  <form #formData=\"ngForm\">\n    <label>Your Answer:\n      <textarea\n      name=\"a_text\"\n      required\n      minlength=\"5\"\n      [(ngModel)]=\"answer.a_text\"\n      #a_text=\"ngModel\"></textarea>\n      <p *ngIf=\"a_text.errors && a_text.dirty\">Error mesage</p>\n    </label>\n    <br>\n    <label>Supporting details (optional):\n      <textarea\n      name=\"details\"\n      [(ngModel)]=\"answer.details\"\n      #details=\"ngModel\"></textarea>\n      <p *ngIf=\"details.errors && details.dirty\">Error mesage</p>\n    </label>\n  </form>\n  <div>\n    <input [routerLink]=\"['/dashboard']\" type=\"button\" value=\"Cancel\">\n    <input (click)=\"onSubmit()\" [routerLink]=\"['/dashboard']\" type=\"submit\" value=\"Submit\" [disabled]=\"!formData.valid\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-answer/add-answer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-answer/add-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAnswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAnswerComponent = (function () {
    function AddAnswerComponent(_api, _router) {
        this._api = _api;
        this._router = _router;
        this.question = {
            _id: 0,
            q_text: "",
            desc: ""
        };
        this.answer = {
            user: "",
            likes: 0
        };
    }
    AddAnswerComponent.prototype.ngOnInit = function () {
        this.getOneQuestion();
        this.getUser();
    };
    AddAnswerComponent.prototype.getUser = function () {
        this.answer.user = this._api.getUser().name;
    };
    AddAnswerComponent.prototype.getOneQuestion = function () {
        var _this = this;
        this._router.paramMap
            .switchMap(function (params) {
            return _this._api.getOneQuestion(params.get('id'));
        })
            .subscribe(function (data) { return _this.question = data; });
    };
    AddAnswerComponent.prototype.onSubmit = function () {
        this._api.createAnswer(this.answer, this.question._id);
    };
    return AddAnswerComponent;
}());
AddAnswerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-answer',
        template: __webpack_require__("../../../../../src/app/add-answer/add-answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-answer/add-answer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddAnswerComponent);

var _a, _b;
//# sourceMappingURL=add-answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-question/add-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav>\n    <a [routerLink]=\"['/dashboard']\">Home</a>\n    <a [routerLink]=\"['']\">Logout</a>\n  </nav>\n  <h3>New Question</h3>\n  <form #formData='ngForm'>\n    <label>Question:\n      <textarea name=\"q_text\"\n       required\n       minlength=\"10\"\n       [(ngModel)]=\"question.q_text\"\n       #q_text='ngModel'\n      ></textarea>\n      <span *ngIf=\"q_text.errors && q_text.dirty\">Question must be at least 10 characters</span>\n    </label>\n    <br>\n    <label>Description (optional):\n      <textarea name=\"desc\"\n       [(ngModel)]=\"question.desc\"\n       #desc='ngModel'\n      ></textarea>\n    </label>\n    <br>\n    <input [routerLink]=\"['/dashboard']\" type=\"button\" value=\"Cancel\">\n    <input (click)=\"onSubmit()\" [routerLink]=\"['/dashboard']\" type=\"submit\" value=\"Submit\" [disabled]=\"!formData.valid\">\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-question/add-question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-question/add-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddQuestionComponent = (function () {
    function AddQuestionComponent(_api) {
        this._api = _api;
        this.question = {};
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.onSubmit = function () {
        this._api.createQuestion(this.question);
    };
    return AddQuestionComponent;
}());
AddQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-question',
        template: __webpack_require__("../../../../../src/app/add-question/add-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-question/add-question.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AddQuestionComponent);

var _a;
//# sourceMappingURL=add-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
        this.user = { name: "Qanda" };
    }
    ApiService.prototype.login = function (username) {
        this.user = username;
    };
    ApiService.prototype.getUser = function () {
        return this.user;
    };
    ApiService.prototype.getAllQuestions = function () {
        return this._http.get('questions')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.getOneQuestion = function (q_id) {
        return this._http.get('/questions/' + q_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.createQuestion = function (question) {
        this._http.post('/questions', question)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.createAnswer = function (answer, q_id) {
        this._http.post('/answers/' + q_id, answer)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.getAllAnswers = function (q_id) {
        return this._http.get('/answers/' + q_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.addLike = function (a_id) {
        console.log("addLike ", a_id);
        this._http.get('/answerslikes/' + a_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.destroy = function (a_id) {
        console.log("api.service.destroy ", a_id);
        this._http.delete('/answers/' + a_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_question_add_question_component__ = __webpack_require__("../../../../../src/app/add-question/add-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_question_show_question_component__ = __webpack_require__("../../../../../src/app/show-question/show-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_answer_add_answer_component__ = __webpack_require__("../../../../../src/app/add-answer/add-answer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new_question', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__add_question_add_question_component__["a" /* AddQuestionComponent */] },
    { path: 'question/:id/new_answer', component: __WEBPACK_IMPORTED_MODULE_6__add_answer_add_answer_component__["a" /* AddAnswerComponent */] },
    { path: 'question/:id', component: __WEBPACK_IMPORTED_MODULE_5__show_question_show_question_component__["a" /* ShowQuestionComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Q&A';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_question_add_question_component__ = __webpack_require__("../../../../../src/app/add-question/add-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__show_question_show_question_component__ = __webpack_require__("../../../../../src/app/show-question/show-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_answer_add_answer_component__ = __webpack_require__("../../../../../src/app/add-answer/add-answer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__add_question_add_question_component__["a" /* AddQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__show_question_show_question_component__["a" /* ShowQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__add_answer_add_answer_component__["a" /* AddAnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <h2>Hi, {{user.name}}!</h2>\n  <a [routerLink]=\"['']\">Logout</a>\n</nav>\n<a [routerLink]=\"['/new_question']\">Add a Question</a>\n<table>\n  <tr>\n    <th>Question</th>\n    <th>Answers</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let question of questions\">\n    <td>{{ question.q_text }}</td>\n    <td>{{ question._answer.length }}</td>\n    <td>\n      <a [routerLink]=\"['/question', question._id]\">Show</a>\n      <a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer</a>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav * {\n  display: inline-block; }\n\ntable, th, td {\n  border: 1px solid mistyrose; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_api) {
        this._api = _api;
        this.user = {};
        this.questions = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this._api.getUser(); // for welcome message
        this.getAll();
    };
    DashboardComponent.prototype.getAll = function () {
        var _this = this;
        this._api.getAllQuestions()
            .then(function (data) { return _this.questions = data; })
            .catch(function (errors) { console.log(errors); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formData='ngForm'>\n    <label>Username: \n      <input type=\"text\" name=\"name\" required minlength=\"2\" [(ngModel)] = \"user.name\" #name='ngModel'> {{name.errors | json}}\n    </label>\n    <input type=\"submit\" [routerLink]=\"['/dashboard']\" (click)=\"onClick()\" type=submit value=\"Enter\" [disabled]=\"!formData.valid\">\n  </form>\n  Form Data: {{user | json}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_api) {
        this._api = _api;
        this.user = { name: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClick = function () {
        this._api.login(this.user);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/show-question/show-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a [routerLink]=\"['/dashboard']\">Home</a> |\n  <a [routerLink]=\"['/question', question._id, 'new_answer']\">Answer this Question</a>\n  <a [routerLink]=\"['']\">Logouts</a>\n  <h1>{{question.q_text}}</h1>\n  <p>{{question.desc}}</p>\n  <div *ngFor=\"let answer of question._answer\">\n    <fieldset>\n      <p>{{answer.user}}</p>\n      <p>{{answer.a_text}}</p>\n      <p>{{answer.likes}}</p>\n      <p>{{answer.details}}</p>\n      <button (click)=\"addLike(answer._id)\">Like!</button>\n      <div *ngIf=\"user.name === answer.user\"><button (click)=\"delete(answer._id)\">Delete</button></div>\n      <br>User.name = {{user.name}}\n      <br>Answer.user = {{answer.user}}\n    </fieldset>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/show-question/show-question.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-question/show-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowQuestionComponent = (function () {
    function ShowQuestionComponent(_api, _router) {
        this._api = _api;
        this._router = _router;
        this.user = {};
        this.question = {
            _id: 0,
            q_text: "",
            desc: ""
        };
    }
    ShowQuestionComponent.prototype.ngOnInit = function () {
        this.getOneQuestion();
        this.user = this._api.getUser();
        console.log(this.question);
    };
    ShowQuestionComponent.prototype.getOneQuestion = function () {
        var _this = this;
        this._router.paramMap
            .switchMap(function (params) {
            return _this._api.getAllAnswers(params.get('id'));
        })
            .subscribe(function (data) { return _this.question = data; });
    };
    ShowQuestionComponent.prototype.addLike = function (a_id) {
        console.log("Answer ID: ", a_id);
        this._api.addLike(a_id);
        this.getOneQuestion();
    };
    ShowQuestionComponent.prototype.delete = function (a_id) {
        console.log("Delete ", a_id);
        this._api.destroy(a_id);
        this.getOneQuestion();
    };
    return ShowQuestionComponent;
}());
ShowQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-show-question',
        template: __webpack_require__("../../../../../src/app/show-question/show-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show-question/show-question.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ShowQuestionComponent);

var _a, _b;
//# sourceMappingURL=show-question.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map