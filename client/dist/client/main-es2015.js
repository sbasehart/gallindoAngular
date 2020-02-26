(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_alert/alert.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_alert/alert.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}} alert-dismissable\">\n    {{alert.message}}\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\n  <br>\n    <div class=\"card text-center\"  id=\"main\">\n      <div class=\"card-title\">\n        <h3>Welcome to your dashboard!</h3>\n      </div>\n      <div class=\"card-text\">\n        Select an option from the admin controls\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"card\"  id=\"secondary\">\n      <div class=\"card-title text-center\">\n        <b>Some Tips for Getting Started!</b>\n      </div>\n      <div class=\"card-text\">\n        <ul>\n          <li>If you need to add a video from youtube, simply go to \"Share\" and then copy the \"Embed\" Code and paste into post entry.</li>\n          <li>If you are entering a photo:</li>\n          <ul>\n            <li>If you are copying the photo from instagram, please paste instagram embed code into entry.</li>\n            <br>\n            <li>If you have your own photo:</li> \n              <ul>\n                <li>Copy the following</li>\n                <li>Paste into \"embed\" section</li>\n                <li>Upload image to the internet (google drive, photos, etc)</li> \n                <li>Right click on photo and select \"copy image address\"</li> \n                <li>Paste into \"src\" quotation marks</li>\n                <li>Type name for image in \"alt\" quotation marks</li>\n                <li>Save</li>\n              </ul> \n              <br>\n            <p class=\"code\">&lt;img alt=\"\" src=\"PASTE HERE\"&gt;</p>\n          </ul>\n          <p>Example of finished code:</p>\n          <p class=\"code\">&lt;img alt=\"Scissors\" src=\"https://www.pinclipart.com/picdir/middle/50-502117_haircut-clipart-shears-hair-scissors-clip-art-png.png\" &gt;</p>\n          <p>Which Generates:</p>\n          <img style=\"max-width:100px\" src=\"https://www.pinclipart.com/picdir/middle/50-502117_haircut-clipart-shears-hair-scissors-clip-art-png.png\" alt=\"Scissors\">\n          </ul>\n        <p class=\"text-center\">-Summer</p>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"example-container\" id=\"mainContainer\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" position=\"end\" style=\"min-width:15%\">\n    <a class=\"menu-toggle rounded\" (click)=\"sidenav.toggle()\" style=\"cursor:pointer\">\n      <span class=\"fa fa-close\"></span></a>\n    <br>\n    <ul>\n      <li>\n        <a class=\"navbar-brand\" (click)=\"sidenav.toggle()\" [routerLink]=\"['/home']\" [fragment]=\"'page-top'\">Galindo</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class=\"nav-link\" (click)=\"sidenav.toggle()\" routerLinkActive=\"active\" [routerLink]=\"['/home']\"\n          [fragment]=\"'page-top'\">Home</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class=\"nav-link\" (click)=\"sidenav.toggle()\" routerLinkActive=\"active\" [routerLink]=\"['/home']\"\n          [fragment]=\"'about'\">About</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class=\"nav-link\" (click)=\"sidenav.toggle()\" routerLinkActive=\"active\" [routerLink]=\"['/home']\"\n          [fragment]=\"'services'\">Gallery</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class=\"nav-link\" (click)=\"sidenav.toggle()\" routerLinkActive=\"active\" [routerLink]=\"['/home']\"\n          [fragment]=\"'portfolio'\">Portfolio</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class=\"nav-link\" (click)=\"sidenav.toggle()\" routerLinkActive=\"active\" [routerLink]=\"['/home']\"\n          [fragment]=\"'contact'\">Contact</a>\n      </li>\n      <li class=\"nav-link\">\n        <a class=\"nav-link\" (click)=\"sidenav.toggle()\" [routerLink]=\"['/resume']\">Résumé</a>\n      </li>\n    </ul>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div class=\"img-wrapper text-center\">\n      <img src=\"https://i.pinimg.com/originals/aa/d0/b0/aad0b0121605be4796c27a379e545966.gif\" alt=\"admin logo\"\n        *ngIf=\"loginStatus === true\">\n    </div>\n\n    <a class=\"menu-toggle rounded\" (click)=\"sidenav.toggle()\" *ngIf=\"loginStatus === false\">\n      <span class=\"fa fa-bars\" style=\"cursor:pointer\"></span>\n    </a>\n\n    <div class=\"topnav\" id=\"myTopnav\" *ngIf=\"loginStatus === true\">\n      <a class=\"topnav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/']\">Admin</a>\n      <a class=\"topnav-link\" routerLinkActive=\"active\" [routerLink]=\"['/category/']\">Categories</a>\n      <a class=\"topnav-link\" routerLinkActive=\"active\" [routerLink]=\"['/post/']\">Jobs</a>\n      <a class=\"topnav-link\" routerLinkActive=\"active\" [routerLink]=\"['/contact/']\">Contacts</a>\n      <a href=\"javascript:void(0);\" class=\"icon\" (click)=\"myFunction()\">\n        <i class=\"fa fa-bars\"></i>\n      </a>\n      <span class=\"navbar-text\" (click)=\"logout()\">Logout</span>\n    </div>\n\n    <router-outlet></router-outlet>\n    <br>\n\n    <footer class=\"footer text-center\">\n      <div class=\"container\">\n        <ul class=\"list-inline mb-5\" >\n          <li class=\"list-inline-item\" *ngIf=\"loginStatus === false\">\n            <a href=\"https://www.instagram.com/gabbygalindohair/\" target=\"_blank\">\n              <img class=\"social-link rounded-circle text-white\" src=\"assets/img/instagram.png\"></a>\n          </li>\n          <li class=\"list-inline-item\" *ngIf=\"loginStatus === false\">\n            <a href=\"https://www.imdb.com/name/nm8321358/\" target=\"_blank\"><img\n                class=\"social-link rounded-circle text-white\" src=\"assets/img/imdb.png\"\n                style=\"position: inline;\"></a>\n          </li>\n          <p class=\"text-muted small mb-0\">Copyright &copy; GabbyGalindo 2019 - Present<br>Grace Designs</p>\n          <small><a [routerLink]=\"['/login/']\" *ngIf=\"loginStatus === false\">Admin</a></small>\n        </ul>\n      </div>\n    </footer>\n\n    <!-- Scroll to Top Button-->\n    <!-- If on Home Page-->\n    <!-- <a class=\"scroll-to-top rounded\" pageScroll [routerLink]=\"['/home']\" [fragment]=\"'page-top'\">\n      <i class=\"fa fa-angle-up\"></i>\n    </a> -->\n\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container content-section\" id=\"form\">\n  <h2 class=\"text-center mb-0\">Admin Login</h2>\n  <div class=\"row text-center\">\n    <img src=\"https://img.pngio.com/hd-opossums-with-white-background-transparent-png-image-download-possum-png-701_346.png\">\n    <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n  </div>\n    <div class=\"row\">\n    <div class=\"col-md-12 login\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your\n              username</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n            [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your\n              password</span>\n          </mat-error>\n        </mat-form-field>\n        <div class=\"button-row\">\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button class=\"btn\">Login</button>\n        </div>\n        <br>\n        <div class=\"button-row\">\n          <button type=\"button\" mat-flat-button (click)=\"register()\" class=\"btn\">Register</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container content-section\" id=\"form\">\n  <h2 class=\"text-center mb-0\">Admin Login</h2>\n  <div class=\"row text-center\">\n    <img src=\"https://img.pngio.com/hd-opossums-with-white-background-transparent-png-image-download-possum-png-701_346.png\">\n    <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n  </div>\n    <div class=\"row\">\n    <div class=\"col-md-12 register\">\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onFormSubmit(registerForm.value)\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"name\" placeholder=\"Full Name\" formControlName=\"Name\" [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!registerForm.get('name').valid && registerForm.get('name').touched\">Please enter your\n              username</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!registerForm.get('username').valid && registerForm.get('username').touched\">Please enter your\n              username</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n            [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\">Please enter your\n              password</span>\n          </mat-error>\n        </mat-form-field>\n        <div class=\"button-row\">\n          <button type=\"submit\" [disabled]=\"!registerForm.valid\" mat-flat-button class=\"btn\">Register</button>\n        </div>\n        <br>\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"videos container justify-content-center\">\n  <nav class=\"container-fluid-nav text-center\">\n    <a class=\"nav-link portfolio-link\" *ngFor=\"let cat of data\" routerLinkActive=\"active\" [routerLink]=\"['/bycategory/', cat._id]\"\n      [fragment]=\"'nav'\">{{cat.catName}}</a>\n  </nav>\n\n  <div class=\"featured-works\">\n    <h2>Featured Works</h2>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\" *ngFor=\"let post of posts\">\n          <div class=\"image-wrapper\">\n            <span [innerHtml]=\"post.postDesc | sanitizeHtml\"></span>\n          </div>\n          <h3>{{post.postTitle}}</h3>\n          <h4>{{post.postClient}}</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"text-center\" style=\"margin-bottom: 3%\">\n  <a class=\"btn btn-dark btn-xl\" [routerLink]=\"['/home']\" [fragment]=\"'portfolio'\">Back to Portfolio</a>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>ß\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\">\n      Back\n    </a>\n  </div>\n  <mat-card class=\"card\" id=\"dashboard\">\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"catName\">Category Name</label>\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category\n            Name</span>\n        </mat-error>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catFirst\">Image URL</label>\n        <input matInput placeholder=\"Category Content\" formControlName=\"catFirst\" required>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catFirst').valid && categoryForm.get('catFirst').touched\">Please Enter Image</span>\n        </mat-error>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"catSecond\">Image URL</label>\n        <input matInput placeholder=\"Category Content\" formControlName=\"catSecond\" required>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catSecond').valid && categoryForm.get('catSecond').touched\">Please Enter Image</span>\n        </mat-error>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"catThird\">Image URL</label>\n        <input matInput placeholder=\"Category Content\" formControlName=\"catThird\" required>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catThird').valid && categoryForm.get('catThird').touched\">Please Enter Image</span>\n        </mat-error>\n      </div> \n      <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\">\n        Save\n      </button>\n    </form>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-1\">\n      <a mat-flat-button [routerLink]=\"['/category']\">Return</a>\n    </div>\n  </div>\n  <div class=\"row posting\">\n    <div class=\"col-md-3\">\n      <p><b>{{category.catName}}</b></p>\n      <p>Updated: {{category.updated | date}}</p>\n    </div>\n    <div class=\"col-md-7\">\n      <p>Slide Images:</p>\n      <img src=\"{{category.catFirst}}\" style=\"max-width:300px\">\n      <img src=\"{{category.catSecond}}\" style=\"max-width:300px\">\n      <img src=\"{{category.catThird}}\" style=\"max-width:300px\">\n    </div>\n    <div class=\"col-md-2\">\n      <a class=\"btn btn-block\" [routerLink]=\"['/category/edit/', category.id]\">\n        <mat-icon>edit</mat-icon>\n      </a>\n      <a class=\"btn btn-block\" button (click)=\"deleteCategory(category.id)\">\n        <mat-icon>delete</mat-icon>\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>ß\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\">\n      Back\n    </a>\n  </div>\n  <mat-card class=\"card\" id=\"dashboard\">\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"catName\">Category Name</label>\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category\n            Name</span>\n        </mat-error>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catFirst\">Image URL</label>\n        <input matInput placeholder=\"Category Content\" formControlName=\"catFirst\" required>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catFirst').valid && categoryForm.get('catFirst').touched\">Please Enter Image</span>\n        </mat-error>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"catSecond\">Image URL</label>\n        <input matInput placeholder=\"Category Content\" formControlName=\"catSecond\" required>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catSecond').valid && categoryForm.get('catSecond').touched\">Please Enter Image</span>\n        </mat-error>\n      </div> \n      <div class=\"form-group\">\n        <label for=\"catThird\">Image URL</label>\n        <input matInput placeholder=\"Category Content\" formControlName=\"catThird\" required>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catThird').valid && categoryForm.get('catThird').touched\">Please Enter Image</span>\n        </mat-error>\n      </div> \n      <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\">\n        Save\n      </button>\n    </form>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"row\">\n    <a mat-flat-button [routerLink]=\"['add']\">Add Category</a>\n  </div>\n  <hr>\n  <h3 class=\"text-center\">Industries:</h3>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 categories\" *ngFor=\"let cat of data\" [routerLink]=\"['details/', cat._id]\">\n        <p><b>{{cat.catName}}</b></p>\n        <p> Updated: {{cat.updated | date: 'dd MMM yyyy'}}</p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-add/contact-add.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-add/contact-add.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"form-container\">\n        <form [formGroup]=\"contactForm\" (ngSubmit)=\"onFormSubmit()\">\n            <h2 class=\"text-center\">Contact Me</h2>\n            <div class=\"ajax-hidden\">\n                <div class=\"form-group\">\n                    <input class=\"form-control\" placeholder=\"Name\"  required=\"required\" formControlName=\"conName\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"email\" placeholder=\"E-mail\" required=\"required\" formControlName=\"conEmail\"/>\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"phone\"  placeholder=\"Phone\" required=\"required\" formControlName=\"conPhone\"/>\n            </div>\n            <div class=\"form-group\">\n                <textarea class=\"form-control\"  rows=\"1\" placeholder=\"Address Line 1 (include Unit/Apt)\" formControlName=\"conAddress1\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <textarea class=\"form-control\"  rows=\"1\" placeholder=\"Address Line 2\" formControlName=\"conAddress2\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <textarea matInput class=\"form-control\"  rows=\"6\" placeholder=\"Message\" formControlName=\"conMessage\" rows=\"5\"></textarea>\n            </div>\n            <p class=\"text-center\">**Must Complete ALL Fields</p>\n            <button class=\"btn btn-block\" type=\"submit\" [disabled]=\"!contactForm.valid\" mat-flat-button>\n                Submit\n            </button>\n            <alert></alert>\n            <br>\n        </form>\n    </div>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-details/contact-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-details/contact-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n    <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\">\n        <a mat-flat-button [routerLink]=\"['/contact']\">Return</a>\n      </div>\n    </div>\n    <div class=\"row contact\">\n      <div class=\"col-md-3\">\n        <p><b>{{contact.conName}}</b></p>\n        <p>{{contact.conEmail}}</p>\n        <p>{{contact.conPhone}}</p>\n      </div>\n      <div class=\"col-md-3\">\n        <p>{{contact.conAddress1}}</p>\n        <p>{{contact.conAddress2}}</p>\n      </div>\n      <div class=\"col-md-1\">\n        <a class=\"btn btn-block\" button (click)=\"deleteContact(contact.id)\">\n          <mat-icon>delete</mat-icon>\n        </a>\n      </div>\n      <div class=\"col-md-12\">\n        <p>Message:</p>\n        <span [innerHtml]=\"contact.conMessage\"></span>       \n      </div>\n\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"row\">\n    <a mat-flat-button [routerLink]=\"['add']\">Add Contact</a>\n  </div>\n  <hr>\n  <h3 class=\"text-center\">Contacts:</h3>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 contact\" *ngFor=\"let data of data\" [routerLink]=\"['details/', data._id]\">\n        <p><b>{{data.conName}}</b></p>\n        <p> Submitted: {{data.updated | date: 'dd MMM yyyy'}}</p>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <mat-card class=\"example-card\" [routerLink]=\"['/details/', post.id]\">\n    <mat-card-header>\n      <mat-card-title>{{post.postTitle}}</mat-card-title>\n      <p>Client: {{post.postClient}}</p>\n    </mat-card-header>\n    <span [innerHtml]=\"post.postDesc | sanitizeHtml\"></span>       \n  </mat-card>\n</div>\n\n<div class=\"text-center\" style=\"margin-bottom: 3%\">\n  <a class=\"btn btn-dark btn-xl js-scroll-trigger\" [routerLink]=\"['/bycategory']\">Back to Portfolio</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <mat-grid-list cols=\"3\">\n    <mat-grid-tile *ngFor=\"let post of posts\">\n      <mat-card class=\"example-card\" [routerLink]=\"['/details/', post._id]\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{post.postTitle}}</mat-card-title>\n          <mat-card-subtitle>{{post.updated}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n        <mat-card-content>\n          {{post.postDesc}}\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div> -->\n\n<header class=\"masthead d-flex\">\n  <div class=\"container text-center my-auto\">\n    <!-- <img src=\"assets/img/Sequence 01.gif\" style=\"max-width: 100px\"> -->\n    <br />\n    <h1 class=\"mb-1\">Gabriella Galindo</h1>\n    <h3 class=\"mb-5\">\n      <em>Los Angeles Based Stylist/Groomer</em>\n    </h3>\n    <a class=\"btn btn-light btn-xl js-scroll-trigger\" pageScroll href=\"#about\">Find Out More</a>\n  </div>\n  <div class=\"overlay\"></div>\n</header>\n\n<!-- About -->\n<section class=\"content-section mb-0\" id=\"about\">\n  <div class=\"container text-center\">\n    <div class=\"row\">\n      <div class=\"col-lg-11 mx-auto\">\n        <h2>Gabriella Galindo</h2>\n        <p class=\"lead mb-2\">\n          <p> Gabriella “Gabby” Galindo is a multi-faceted hairstylist servicing all of the greater Los Angeles area.\n            With over a decade of experience in the entertainment industry, Gabby has lent her talents to the editorial,\n            film, television, advertising, and personal clientele markets. Securing her California Cosmetology License\n            at the age of 18, Gabby has held every position in a salon or on a set. Only further attributing to her well\n            rounded and team first leadership style.\n            <br />\n            <br />\n            As a Native Angeleno, Gabriella reinvests and gives back to her community. She has donated her time and\n            expertise to organizations such as Pop Sugar Beauty and Emerson College. Together, they’ve provided homeless\n            teens with prom makeovers and haircuts for the homeless for over four years running. Never shying away from\n            a challenge or worthy cause.\n            <br />\n            <br />\n            Gabby has assisted under Masters in their fields including Wendy Iles & Lauren Kaye Cohen. A-list Agencies\n            like The Rex Agency and Tracy Mattingly have utilized Gabriella’s skill-set year after year.\n            Working with high end clientele has supplied her with an unequivocal professionalism and eye for detail.\n            Providing luxurious and beneficial products to compliment her vast knowledge to ensure flawless camera ready\n            looks. Ms. Galindo’s expertise extends to wigs; from everyday glamour to period specific styles. With a\n            deeply rooted passion for her craft and superb problem solving skills, Gabriella Galindo will replace your\n            worry and care with nothing less than perfect hair.</p>\n          <img style=\"max-width: 100%; max-height: auto\" src=\"assets/img/bg-callout.jpg\">\n          <br />\n          <a class=\"btn btn-dark btn-xl js-scroll-trigger\" pageScroll href=\"#services\">Past Work</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Services -->\n<section class=\"content-section bg-primary text-white text-center\" id=\"services\">\n  <div class=\"container text-center\">\n    <div class=\"content-section-heading\">\n      <h3 class=\"text-secondary mb-0\">Gallery</h3>\n      <h2 class=\"mb-5\">My Work</h2>\n    </div>\n    <div class=\"row d-flex justify-content-center\">\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\"\n        style=\"max-width: 400px; color: black\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"assets/img/portfolio-1.jpg\" alt=\"First slide\" style=\"max-width: 400px\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h5>Pardis Saremi</h5>\n              <p>BHANSALI - The fine jewelry company devoted to making our world beautiful.</p>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/portfolio-2.jpg\" alt=\"Second slide\" style=\"max-width: 400px\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h5>Max Reeves</h5>\n              <p>BHANSALI - The fine jewelry company devoted to making our world beautiful.</p>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/portfolio-3.jpg\" alt=\"Third slide\" style=\"max-width: 400px\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h5>Nicole Martinez</h5>\n              <p>Tilly's</p>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block\" src=\"assets/img/portfolio-4.jpg\" alt=\"Fourth slide\" style=\"max-width: 400px\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h5>Nicole Martinez</h5>\n              <p>Tilly's</p>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block\" src=\"assets/img/portfolio-5.jpg\" alt=\"Fifth slide\" style=\"max-width: 400px\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h5>Alexa Malia Charleton\n                <br /> &\n                <br />Nicole Martinez</h5>\n              <p>Tilly's</p>\n            </div>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <br />\n    <a class=\"btn btn-light btn-xl js-scroll-trigger\" pageScroll href=\"#portfolio\">Portfolio</a>\n  </div>\n</section>\n\n<!-- Callout -->\n<!-- <section class=\"callout\">\n  <div class=\"container text-center\">\n    <h2 class=\"mx-auto mb-5\">See my\n      <em>Work</em>\n      </h2>\n    <a class=\"btn btn-primary btn-xl\" href=\"#portfolio\">Portfolio</a>\n  </div>\n</section>  -->\n\n<!-- Portfolio -->\n<section class=\"content-section\" id=\"portfolio\">\n  <div class=\"container portfolio-container\">\n    <div class=\"content-section-heading text-center\">\n      <h3 class=\"text-secondary mb-0\">Portfolio</h3>\n      <h2 class=\"mb-2\">Recent Projects</h2>\n    </div>\n    <div class=\"row no-gutters\">\n\n      <div class=\"col-lg-6\" *ngFor=\"let cat of categories\">\n        <a class=\"portfolio-item\" [routerLink]=\"['/bycategory/', cat._id]\" [fragment]=\"'nav'\">\n          <span class=\"caption\">\n            <span class=\"caption-content\">\n              <h2>{{cat.catName}}</h2>\n              <p class=\"mb-0\"></p>\n            </span>\n          </span>\n          <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"{{cat.catFirst}}\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"{{cat.catSecond}}\" alt=\"Second slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"{{cat.catThird}}\" alt=\"Third slide\">\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n\n\n      <!-- <div class=\"col-lg-6\">\n        <a class=\"portfolio-item\" href=\"#\">\n          <span class=\"caption\">\n            <span class=\"caption-content\">\n              <h2>Red Carpet Events</h2>\n              <p class=\"mb-0\"></p>\n            </span>\n          </span>\n          <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_4.jpg\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_5.jpg\" alt=\"Second slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_8.jpg\" alt=\"Third slide\">\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-lg-6\">\n        <a class=\"portfolio-item\" href=\"#\">\n          <span class=\"caption\">\n            <span class=\"caption-content\">\n              <h2>Television</h2>\n              <p class=\"mb-0\"></p>\n            </span>\n          </span>\n          <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_1.jpg\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_2.jpg\" alt=\"Second slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_3.jpg\" alt=\"Third slide\">\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"col-lg-6\">\n        <a class=\"portfolio-item\" href=\"#\">\n          <span class=\"caption\">\n            <span class=\"caption-content\">\n              <h2>Feature Films</h2>\n              <p class=\"mb-0\"></p>\n            </span>\n          </span>\n          <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_6.jpg\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_7.jpg\" alt=\"Second slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_9.jpg\" alt=\"Third slide\">\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class=\"col-lg-6\">\n        <a class=\"portfolio-item\" href=\"#\">\n          <span class=\"caption\">\n            <span class=\"caption-content\">\n              <h2>Music Videos</h2>\n              <p class=\"mb-0\"></p>\n            </span>\n          </span>\n          <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_10.jpg\" alt=\"First slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_11.jpg\" alt=\"Second slide\">\n              </div>\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/img/Screenshot_12.jpg\" alt=\"Third slide\">\n              </div>\n            </div>\n          </div>\n        </a>\n      </div> -->\n    </div>\n  </div>\n  <br />\n  <div class=\"text-center\">\n    <a class=\"btn btn-dark btn-xl\" [routerLink]=\"['/resume']\" [fragment]=\"'print-section'\">Résumé</a>\n  </div>\n</section>\n\n<!-- Call to Action -->\n<section id=\"contact\" class=\"content-section-two bg-primary text-white\">\n  <br>\n  <br>\n  <br>\n  <div class=\"container text-center contact-section\">\n    <h2 class=\"mb-4\">Contact Me</h2>\n    <p>Please schedule a good call-back time for me to answer any questions.<br />\n      For appointments, please include as many details as you can so that I can make an accurate estimation on the cost.\n      I will email you to confirm.<br />\n      Please respond swiftly, and also include any picture references you may have.<br />\n      Stay beautiful!</p>\n    <br />\n\n  </div>\n  <div class=\"text-center\">\n    <a href=\"https://calendly.com/hairbygalindo10\" class=\"btn btn-xl btn-light mr-4\" target=\"_blank\">Book Appointment\n      Now!</a>\n    <a [routerLink]=\"['/contact/add']\" class=\"btn btn-xl btn-primary\">Contact Me for Questions</a>\n  </div>\n  <br />\n  <br>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notFound/not-found.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notFound/not-found.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container content-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">\n            <p>Sorry that is not a valid URL</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\">\n      Back\n    </a>\n  </div>\n  <mat-card class=\"card\">\n    <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\n\n      <label for=\"category\">Category : </label>\n      <select formControlName=\"category\">\n        <option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n          {{cat.catName}}\n        <option>\n      </select>\n      <br>\n      <label for=\"postTitle\">Job Title : </label>\n      <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\" [errorStateMatcher]=\"matcher\">\n      <br>\n      <label for=\"postClient\">Client : </label>\n      <input matInput placeholder=\"Post Client\" formControlName=\"postClient\" [errorStateMatcher]=\"matcher\">\n      <br>\n      <label for=\"postDesc\">Image or Video Embed Code : <span class=\"whatsThis\"><i class=\"fa fa-question-circle\"></i></span></label>\n      <textarea placeholder=\"Paste Embed Code Here (available on youtube and instagram)\" formControlName=\"postDesc\" rows=\"6\"></textarea>\n      <br>\n      <br>\n      <button type=\"submit\" [disabled]=\"!postForm.valid\" mat-flat-button color=\"primary\">\n        Save\n      </button>\n    </form>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-1\">\n      <a mat-flat-button [routerLink]=\"['/post']\">Return</a>\n    </div>\n  </div>\n  <div class=\"row posting\">\n    <div class=\"col-md-6\">\n      <p><b>{{post.postTitle}}</b></p>\n      <p>Created by: {{post.postClient}}</p>\n      <p>Updated: {{post.updated | date}}</p>\n    </div>\n    <div class=\"col-md-4\">\n      <p>Media</p>\n      <span [innerHtml]=\"post.postDesc | sanitizeHtml\"></span>       \n    </div>\n    <div class=\"col-md-1\">\n      <a class=\"btn btn-block\" [routerLink]=\"['/post/edit', post.id]\">\n        <mat-icon>edit</mat-icon>\n      </a>\n      <a class=\"btn btn-block\" button (click)=\"deletePost(post.id)\">\n        <mat-icon>delete</mat-icon>\n      </a>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\">\n      Back\n    </a>\n  </div>\n  <mat-card class=\"card\">\n    <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\n\n      <label for=\"category\">Category : </label>\n      <select formControlName=\"category\">\n        <option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n          {{cat.catName}}\n        <option>\n      </select>\n      <br>\n      <label for=\"postTitle\">Job Title : </label>\n      <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\" [errorStateMatcher]=\"matcher\">\n      <br>\n      <label for=\"postClient\">Client : </label>\n      <input matInput placeholder=\"Post Client\" formControlName=\"postClient\" [errorStateMatcher]=\"matcher\">\n      <br>\n      <label for=\"postDesc\">Image or Video Embed Code : </label>\n      <textarea placeholder=\"Paste Embed Code Here (available on youtube and instagram)\" formControlName=\"postDesc\" rows=\"8\"></textarea>\n      <br>\n      <br>\n      <button type=\"submit\" [disabled]=\"!postForm.valid\" mat-flat-button color=\"primary\">\n        Save\n      </button>\n\n    </form>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\" id=\"dashboard\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"row\">\n    <a mat-flat-button [routerLink]=\"['add']\">Add Job</a>\n  </div>\n  <hr>\n  <h3 class=\"text-center\">Posted Projects:</h3>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-2 posting\" *ngFor=\"let post of data\" [routerLink]=\"['details/', post._id]\">\n        <p><b>{{post.postTitle}}</b></p>\n        <p> Last updated: {{post.updated | date: 'dd MMM yyyy'}}</p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" id=\"resume-bg\">\n    <div id=\"print-section\">\n        <h3 id=\"page-top\" style=\"color: black !important; font-family: 'Lobster', cursive;\">Gabriella *Gabby* Galindo</h3>\n        <br />\n        <h4>Hairstylist and Groomer</h4>\n        <br />\n        <img src=\"assets/img/pin.png\" style=\"max-width: 400px;\">\n        <div>\n            <h3>Feature Films</h3>\n            <br />\n            <p>• Key Hairstylist - Aloha Surf Hotel, <b>IMDb Credited,</b> featured on main cast and crowd scenes.\n                <br />• Hair Department Head - The Silent Natural, <b>IMDb Credited,</b> featured hair prosthetics and\n                full\n                design on cast.\n                <br />• Key Hairstylist - XOXO Netflix Original Movie, <b>IMDb Credited,</b> featured on main cast and\n                crowd\n                scenes.\n                <br />• Key Hairstylist - Happy Birthday!, <b>IMDb Credited,</b> featured prosthetic hair on Steven\n                Tyler.\n                <br />• Key Hairstylist - Rousseau, or on Education <b>IMDb Credited,</b> featured wig work.\n            </p>\n        </div>\n        <img src=\"assets/img/pin.png\" style=\"max-width: 400px;\">\n        <div>\n            <h3>Television</h3>\n            <br />\n            <p>• Key Hairstylist/Groomer - Buddy \"Cake Boss\" Valastro & Duff \"Ace of Cakes\" Goldman on their show\n                <i>Buddy\n                    Vs Duff.</i>\n                <br />• Hairstylist to <i>German's Next Top Model</i> with Hedie Klumm cycles 12 and 13.\n                <br />• Hairstylist to Megyn Kelly's first interview with NBC for the 10th anniversary of <i>Keeping Up\n                    With\n                    the Kardashians.</i>\n                <br />• Key Hairstylist - <i>My Fair Wedding with David Tutera</i>\n                <br />• Key Hairstylist - <i>Pretty Little Liars</i> promo with Shay Mitchell\n                <br />• Key Hairstylist - <i>The Fosters</i> promo with entire cast.\n                <br />• Key Hairstylist - LG commercial featuring a large transition look.\n            </p>\n        </div>\n        <img src=\"assets/img/pin.png\">\n        <div>\n            <h3>Music Videos</h3>\n            <br />\n            <p>• Key Hairstylist - <b>Ball W/O You</b> by 21 Savage.\n                <br />• Key Hairstylist - <b>Curious</b> by Hayley Kiyoko.\n                <br />• Key Hairstylist - <b>Happy</b> by JSoul Brothers, featuring 200 background actors with wig work.\n                <br />• Key Hairstylist - <b>Sweat</b> by All American Rejects, personal styling and wig work of Tyson\n                Ritter.\n                <br />• Key Hairstylist - <b>Close Your Eyes</b> by All American Rejects.\n            </p>\n        </div>\n        <img src=\"assets/img/pin.png\">\n        <div>\n            <h3>Editorial</h3>\n            <br />\n            <p>• Key Hairstylist to Signorelli Shoot featuring Ashley Tisdale.\n                <br />• Head of Hair Department for Tilly's for Spring and Summer of 2018.\n                <br />• Head of Hair Department to Maria Korovilla Luxury Gowns\n                <br />• Head of Hair Department to Blue Diamond campaign\n            </p>\n        </div>\n        <img src=\"assets/img/pin.png\">\n        <div>\n            <h3>Awards Shows</h3>\n            <p>• Golden Globes 2018\n                <br />• Golden Globes 2016\n                <br />• Critic's Choice 2016\n                <br />• SAG 2016\n                <br />• NAACP 2016\n                <br />• Directors Guild Awards 2016\n            </p>\n        </div>\n        <img src=\"assets/img/pin.png\">\n        <div>\n            <h3>Celebrity Client List</h3>\n            <p>• Buddy \"Cake Boss\" Valastro\n                <br />• All American Rejects\n                <br />• Hayley Kiyoko\n                <br />• J Soul Brothers\n                <br />• Marielle Heller\n                <br />• Steven Tyler\n                <br />• Ashley Tisdale\n                <br />• Shay Mitchell\n                <br />• Chris D'Elia\n                <br />• Jorma Taccone\n                <br />• Megyn Kelly\n                <br />• Tyler Mane\n            </p>\n        </div>\n    </div>\n    <div class=\"buttons\">\n        <img src=\"assets/img/pin.png\">\n    <br />\n    <button type=\"submit\" class=\"btn btn-dark btn-lg btn-block\" printSectionId=\"print-section\"\n        ngxPrint style=\"margin-bottom: 3%\">Printable Version</button>\n    <div class=\"text-center\" style=\"margin-bottom: 3%\">\n        <a class=\"btn btn-dark btn-xl js-scroll-trigger\" [routerLink]=\"['/home']\" [fragment]=\"'portfolio'\">Back to\n            Portfolio</a>\n    </div>\n    <br />\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_alert/alert.component.ts":
/*!*******************************************!*\
  !*** ./src/app/_alert/alert.component.ts ***!
  \*******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "./src/app/_alert/alert.model.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./src/app/_alert/alert.service.ts");




let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.subscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.subscription.unsubscribe();
    }
    removeAlert(alert) {
        // remove specified alert from array
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success:
                return 'alert alert-success';
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error:
                return 'alert alert-danger';
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info:
                return 'alert alert-info';
            case _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    }
};
AlertComponent.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "id", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_alert/alert.component.html")).default })
], AlertComponent);



/***/ }),

/***/ "./src/app/_alert/alert.model.ts":
/*!***************************************!*\
  !*** ./src/app/_alert/alert.model.ts ***!
  \***************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/_alert/alert.module.ts":
/*!****************************************!*\
  !*** ./src/app/_alert/alert.module.ts ***!
  \****************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "./src/app/_alert/alert.component.ts");




let AlertModule = class AlertModule {
};
AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })
], AlertModule);



/***/ }),

/***/ "./src/app/_alert/alert.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_alert/alert.service.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.model */ "./src/app/_alert/alert.model.ts");






let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    // enable subscribing to alerts observable
    onAlert(alertId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(x => x && x.alertId === alertId));
    }
    // convenience methods
    success(message, alertId) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Success, alertId }));
    }
    error(message, alertId) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error, alertId }));
    }
    info(message, alertId) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Info, alertId }));
    }
    warn(message, alertId) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ message, type: _alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Warning, alertId }));
    }
    // main alert method    
    alert(alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }
    // clear alerts
    clear(alertId) {
        this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"]({ alertId }));
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/_alert/index.ts":
/*!*********************************!*\
  !*** ./src/app/_alert/index.ts ***!
  \*********************************/
/*! exports provided: AlertModule, AlertService, Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.module */ "./src/app/_alert/alert.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_module__WEBPACK_IMPORTED_MODULE_1__["AlertModule"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/_alert/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]; });

/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.model */ "./src/app/_alert/alert.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"]; });







/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\n.card {\n  border: none;\n}\n\n.code {\n  background-color: grey;\n  padding: 7px;\n  max-width: 100%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgcGFkZGluZzogMCAxMCU7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmVcbn1cblxuLmNvZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG1heC13aWR0aDoxMDAlO1xuICAgIGNvbG9yOndoaXRlXG59XG5cbiIsIi5kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgcGFkZGluZzogN3B4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/category-details/category-details.component */ "./src/app/category/category-details/category-details.component.ts");
/* harmony import */ var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category-add/category-add.component */ "./src/app/category/category-add/category-add.component.ts");
/* harmony import */ var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/category-edit/category-edit.component */ "./src/app/category/category-edit/category-edit.component.ts");
/* harmony import */ var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/post-details/post-details.component */ "./src/app/post/post-details/post-details.component.ts");
/* harmony import */ var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post-add/post-add.component */ "./src/app/post/post-add/post-add.component.ts");
/* harmony import */ var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/post-edit/post-edit.component */ "./src/app/post/post-edit/post-edit.component.ts");
/* harmony import */ var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bycategory/bycategory.component */ "./src/app/bycategory/bycategory.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _contact_contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact/contact-add/contact-add.component */ "./src/app/contact/contact-add/contact-add.component.ts");
/* harmony import */ var _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact-details/contact-details.component */ "./src/app/contact/contact-details/contact-details.component.ts");
/* harmony import */ var _notFound_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notFound/not-found.component */ "./src/app/notFound/not-found.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");























const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        data: { title: 'Blog Home' }
    },
    {
        path: 'resume',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_22__["ResumeComponent"],
        data: { title: 'Resume' }
    },
    {
        path: 'admin',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
        data: { title: 'Blog Admin' }
    },
    {
        path: 'bycategory/:id',
        component: _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_16__["BycategoryComponent"],
        data: { title: 'Post by Category' }
    },
    {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
        data: { title: 'Show Post Details' }
    },
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: { title: 'Login' }
    },
    {
        path: 'register',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: { title: 'Register' }
    },
    {
        path: 'category',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
        data: { title: 'Category' }
    },
    {
        path: 'category/details/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_10__["CategoryDetailsComponent"],
        data: { title: 'Category Details' }
    },
    {
        path: 'category/add',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_11__["CategoryAddComponent"],
        data: { title: 'Category Add' }
    },
    {
        path: 'category/edit/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_12__["CategoryEditComponent"],
        data: { title: 'Category Edit' }
    },
    {
        path: 'post',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
        data: { title: 'Post' }
    },
    {
        path: 'post/details/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_13__["PostDetailsComponent"],
        data: { title: 'Post Details' }
    },
    {
        path: 'post/add',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_14__["PostAddComponent"],
        data: { title: 'Post Add' }
    },
    {
        path: 'post/edit/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_15__["PostEditComponent"],
        data: { title: 'Post Edit' }
    },
    {
        path: 'contact',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        data: { title: 'Contact' }
    },
    {
        path: 'contact/details/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        component: _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_20__["ContactDetailsComponent"],
        data: { title: 'Contact Details' }
    },
    {
        path: 'contact/add',
        component: _contact_contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_19__["ContactAddComponent"],
        data: { title: 'Contact Add' }
    },
    {
        path: '**',
        component: _notFound_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"],
        data: { title: 'Not Found' }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Side Menu */\n.mat-sidenav {\n  background-color: #1d809f !important;\n  max-width: 25%;\n  text-align: left;\n  position: fixed;\n  min-width: 15%;\n}\nul {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\na.nav-link {\n  color: white !important;\n  display: block;\n  padding: 0.5rem 0.5rem !important;\n}\na.nav-link:hover {\n  font-style: italic;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.ng-sidebar--right {\n  top: 3em;\n}\na.navbar-brand, a.navbar-brand:visited {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n  border-bottom: 1px solid white;\n  color: white !important;\n}\nimg {\n  align-self: center;\n  max-width: 300px;\n  margin: 15px auto;\n}\n.topnav {\n  overflow: hidden;\n  background-color: #1d809f;\n  border-radius: 20px;\n}\n.topnav-link {\n  float: left !important;\n  display: block !important;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 10px 25px !important;\n  text-decoration: none;\n  font-size: 17px;\n}\n.topnav-link:hover {\n  background-color: #ddd;\n  color: black;\n}\n.topnav-link.active {\n  background-color: rgba(255, 255, 255, 0.6);\n  color: black;\n}\n.topnav .icon {\n  display: none;\n}\n@media screen and (max-width: 600px) {\n  .topnav-link:not(:first-child) {\n    display: none;\n  }\n\n  .topnav a.icon {\n    float: right;\n    display: block;\n  }\n}\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: relative;\n  }\n\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n}\n.navbar-text {\n  float: right;\n  display: block;\n  text-align: left;\n  color: white;\n  padding: 10px 30px;\n  cursor: pointer;\n}\n.navbar-text:hover {\n  background-color: #ddd;\n  color: black;\n}\n.img-wrapper {\n  background-image: url('header.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center top;\n  background-size: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL19zaWRlYmFyLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUVDO0VBQ0Msb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0M7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7QURHQztFQUNDLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FDQUY7QURHQztFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0FIO0FER0M7RUFDQyxRQUFBO0FDQUY7QURLQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDRkY7QUN2Q0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUQwQ0o7QUN2Q0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUQwQ0o7QUN2Q0U7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUQwQ0o7QUN2Q0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUQwQ0o7QUN2Q0U7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUQwQ0o7QUN2Q0U7RUFDRSxhQUFBO0FEMENKO0FDdkNFO0VBQ0U7SUFBZ0MsYUFBQTtFRDJDbEM7O0VDMUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7RUQ2Q0o7QUFDRjtBQzFDRTtFQUNFO0lBQW9CLGtCQUFBO0VENkN0Qjs7RUM1Q0U7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxNQUFBO0VEK0NKOztFQzdDRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RURnREo7QUFDRjtBQzdDRTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEK0NOO0FDNUNFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FEK0NKO0FDNUNFO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtBRCtDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNpZGUgTWVudSAqL1xuXG4gLm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMjgsIDE1OSkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOjI1JTtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgbWluLXdpZHRoOjE1JVxuIH1cblxuIHVsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gfVxuXG4gYS5uYXYtbGlua3tcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IC41cmVtIC41cmVtICFpbXBvcnRhbnQ7XG4gfVxuXG4gYS5uYXYtbGluazpob3ZlciB7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOztcbiB9XG5cbiAubmctc2lkZWJhci0tcmlnaHQge1xuICB0b3A6IDNlbTtcbn1cblxuXG5cbmEubmF2YmFyLWJyYW5kLCBhLm5hdmJhci1icmFuZDp2aXNpdGVkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogLjMxMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMzEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xufVxuIiwiLyogU2lkZSBNZW51ICovXG4ubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ4MDlmICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi13aWR0aDogMTUlO1xufVxuXG51bCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG5hLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbmEubmF2LWxpbms6aG92ZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5nLXNpZGViYXItLXJpZ2h0IHtcbiAgdG9wOiAzZW07XG59XG5cbmEubmF2YmFyLWJyYW5kLCBhLm5hdmJhci1icmFuZDp2aXNpdGVkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuXG4udG9wbmF2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkODA5ZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnRvcG5hdi1saW5rIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmMmYyZjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4udG9wbmF2LWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50b3BuYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRvcG5hdiAuaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50b3BuYXYtbGluazpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC50b3BuYXYgYS5pY29uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50b3BuYXYucmVzcG9uc2l2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnRvcG5hdi5yZXNwb25zaXZlIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbi5uYXZiYXItdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItdGV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltZy9oZWFkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwJTtcbn0iLCJcbkBpbXBvcnQgXCIuLi9hc3NldHMvc2Nzcy9zaWRlYmFyXCI7XG5cbmltZyB7XG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XG4gICAgbWF4LXdpZHRoOjMwMHB4O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xufVxuXG4udG9wbmF2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDgwOWY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbiAgXG4gIC50b3BuYXYtbGluayB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4gIFxuICAudG9wbmF2LWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAudG9wbmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAudG9wbmF2IC5pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC50b3BuYXYtbGluazpub3QoOmZpcnN0LWNoaWxkKSB7ZGlzcGxheTogbm9uZTt9XG4gICAgLnRvcG5hdiBhLmljb24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC50b3BuYXYucmVzcG9uc2l2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdGV4dCB7XG4gICAgICBmbG9hdDpyaWdodDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyXG4gIH1cblxuICAubmF2YmFyLXRleHQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmltZy13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvaGVhZGVyLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMCU7XG59XG5cblxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.service */ "./src/app/home.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





let AppComponent = class AppComponent {
    constructor(api, authService, router) {
        this.api = api;
        this.authService = authService;
        this.router = router;
        this.title = 'client';
        this.categories = [];
        this.loginStatus = false;
    }
    ngOnInit() {
        this.authService.isLoggedIn.subscribe((status) => {
            console.log(status);
            if (status === true) {
                this.loginStatus = true;
                document.getElementById("mainContainer").style.backgroundColor = "rgba(0,0,0,1)";
            }
            else {
                this.loginStatus = false;
                document.getElementById("mainContainer").style.backgroundColor = "rgba(255,255,255,1)";
            }
        });
        this.api.getCategories()
            .subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
        }, err => {
            console.log(err);
        });
        this.showDiv();
    }
    showDiv() {
        if (this.router.url === '/') {
            this.mybool = false;
        }
        else {
            this.mybool = true;
        }
    }
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    }
    logout() {
        this.authService.logout()
            .subscribe((res) => {
            this.router.navigate(['/']);
        }, err => {
            console.log(err);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category-details/category-details.component */ "./src/app/category/category-details/category-details.component.ts");
/* harmony import */ var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/category-add/category-add.component */ "./src/app/category/category-add/category-add.component.ts");
/* harmony import */ var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/category-edit/category-edit.component */ "./src/app/category/category-edit/category-edit.component.ts");
/* harmony import */ var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post-details/post-details.component */ "./src/app/post/post-details/post-details.component.ts");
/* harmony import */ var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/post-add/post-add.component */ "./src/app/post/post-add/post-add.component.ts");
/* harmony import */ var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post/post-edit/post-edit.component */ "./src/app/post/post-edit/post-edit.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/interceptors/token.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bycategory/bycategory.component */ "./src/app/bycategory/bycategory.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
/* harmony import */ var mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mat-contenteditable */ "./node_modules/mat-contenteditable/fesm2015/mat-contenteditable.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contact/contact-add/contact-add.component */ "./src/app/contact/contact-add/contact-add.component.ts");
/* harmony import */ var _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./contact/contact-details/contact-details.component */ "./src/app/contact/contact-details/contact-details.component.ts");
/* harmony import */ var _notFound_not_found_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./notFound/not-found.component */ "./src/app/notFound/not-found.component.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_alert */ "./src/app/_alert/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");
/* harmony import */ var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sanitize-html.pipe */ "./src/app/sanitize-html.pipe.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
            _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
            _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDetailsComponent"],
            _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__["CategoryAddComponent"],
            _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditComponent"],
            _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailsComponent"],
            _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__["PostAddComponent"],
            _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__["PostEditComponent"],
            _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__["BycategoryComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__["ContactComponent"],
            _contact_contact_add_contact_add_component__WEBPACK_IMPORTED_MODULE_27__["ContactAddComponent"],
            _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_28__["ContactDetailsComponent"],
            _notFound_not_found_component__WEBPACK_IMPORTED_MODULE_29__["NotFoundComponent"],
            _resume_resume_component__WEBPACK_IMPORTED_MODULE_32__["ResumeComponent"],
            _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_35__["sanitizeHtmlPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__["CKEditorModule"],
            mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__["MatContenteditableModule"],
            _alert__WEBPACK_IMPORTED_MODULE_30__["AlertModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_31__["ToastrModule"].forRoot(),
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_33__["NgxPageScrollCoreModule"],
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_34__["NgxPageScrollModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_37__["NgxPrintModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_36__["SidebarModule"].forRoot()
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptor"],
                multi: true
            }
        ],
        exports: [_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_35__["sanitizeHtmlPipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.isLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loggedInStatus = false;
    }
    login(data) {
        return this.http.post(apiUrl + 'auth' + 'login', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.isLoggedIn.emit(true);
            this.loggedInStatus = true;
            localStorage.setItem('user', JSON.stringify({ data }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
    }
    logout() {
        return this.http.post(apiUrl + 'auth' + 'logout', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.isLoggedIn.emit(false);
            this.loggedInStatus = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('logout', [])));
    }
    register(data) {
        return this.http.post(apiUrl + 'auth' + 'register', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('login')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthService.prototype, "isLoggedIn", void 0);
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const url = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url) {
        if (this.authService.loggedInStatus) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lobster&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Krona+One&display=swap\");\n.container {\n  margin: 3% auto 1% auto;\n  background-color: #1D809F;\n  color: white;\n  border: 1px solid #0d4050;\n  box-shadow: 0 5px 5px black;\n  max-width: 1500px;\n}\nimg {\n  align-self: center;\n  max-width: 200px;\n  margin: 15px auto;\n}\nh2 {\n  font-family: \"lobster\";\n}\n.mat-form-field {\n  display: block;\n  padding: 15px;\n}\n.mat-form-field-infix {\n  border: none !important;\n}\n.mat-input-element {\n  background: #FFF;\n  border: 2px solid grey;\n  height: 54px;\n  font-size: 14px;\n  padding: 15px;\n  color: black;\n}\n.button-row p {\n  margin: 20px;\n}\n.btn {\n  margin: 20px;\n  width: 100px;\n  background: red;\n  border: 2px darkred;\n  color: white;\n}\n.register {\n  float: right;\n}\n.link {\n  text-decoration: none !important;\n  color: red !important;\n}\n.link:hover {\n  text-decoration: underline !important;\n  color: gold !important;\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJFQUFBO0FBQ0EsNkVBQUE7QUFFUjtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0E7RUFDSSx1QkFBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURHQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7QUNBSjtBREVBO0VBQ0kscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Lcm9uYStPbmUmZGlzcGxheT1zd2FwJyk7XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAzJSBhdXRvIDElIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEODA5RjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDY0LCA4MCk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IGJsYWNrO1xuICAgIG1heC13aWR0aDogMTUwMHB4O1xufVxuXG5pbWcge1xuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIG1heC13aWR0aDoyMDBweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcImxvYnN0ZXJcIjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nIDoxNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnRcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGNvbG9yOiBibGFja1xufVxuXG4uYnV0dG9uLXJvdyBwIHtcbiAgICBtYXJnaW46MjBweDtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luOjIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBib3JkZXI6IDJweCBkYXJrcmVkO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ucmVnaXN0ZXIge1xuICAgIGZsb2F0OnJpZ2h0XG59XG5cbi5saW5re1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOnJlZCAhaW1wb3J0YW50OyBcbn1cbi5saW5rOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGdvbGQgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUtyb25hK09uZSZkaXNwbGF5PXN3YXBcIik7XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAzJSBhdXRvIDElIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDgwOUY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNDA1MDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IGJsYWNrO1xuICBtYXgtd2lkdGg6IDE1MDBweDtcbn1cblxuaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJsb2JzdGVyXCI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgaGVpZ2h0OiA1NHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ1dHRvbi1yb3cgcCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IGRhcmtyZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IGdvbGQgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.username = '';
        this.password = '';
        this.matcher = new MyErrorStateMatcher();
        this.isLoadingResults = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        this.authService.login(form)
            .subscribe(res => {
            console.log(res);
            if (res.token) {
                localStorage.setItem('token', res.token);
                this.router.navigate(['admin']);
            }
        }, (err) => {
            console.log(err);
        });
    }
    register() {
        this.router.navigate(['register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lobster&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Krona+One&display=swap\");\n.container {\n  margin: 3% auto 1% auto;\n  background-color: #1D809F;\n  color: white;\n  border: 1px solid #0d4050;\n  box-shadow: 0 5px 5px black;\n  max-width: 1500px;\n}\nimg {\n  align-self: center;\n  max-width: 200px;\n  margin: 15px auto;\n}\nh2 {\n  font-family: \"lobster\";\n}\n.mat-form-field {\n  display: block;\n  padding: 15px;\n}\n.mat-form-field-infix {\n  border: none !important;\n}\n.mat-input-element {\n  background: #FFF;\n  border: 2px solid grey;\n  height: 54px;\n  font-size: 14px;\n  padding: 15px;\n  color: black;\n}\n.button-row p {\n  margin: 20px;\n}\n.btn {\n  margin: 20px;\n  width: 100px;\n  background: red;\n  border: 2px darkred;\n  color: white;\n}\n.register {\n  float: right;\n}\n.link {\n  text-decoration: none !important;\n  color: red !important;\n}\n.link:hover {\n  text-decoration: underline !important;\n  color: gold !important;\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJFQUFBO0FBQ0EsNkVBQUE7QUFFUjtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0E7RUFDSSx1QkFBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURHQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7QUNBSjtBREVBO0VBQ0kscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Lcm9uYStPbmUmZGlzcGxheT1zd2FwJyk7XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAzJSBhdXRvIDElIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEODA5RjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMsIDY0LCA4MCk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IGJsYWNrO1xuICAgIG1heC13aWR0aDogMTUwMHB4O1xufVxuXG5pbWcge1xuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIG1heC13aWR0aDoyMDBweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiBcImxvYnN0ZXJcIjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nIDoxNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnRcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGNvbG9yOiBibGFja1xufVxuXG4uYnV0dG9uLXJvdyBwIHtcbiAgICBtYXJnaW46MjBweDtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luOjIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBib3JkZXI6IDJweCBkYXJrcmVkO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ucmVnaXN0ZXIge1xuICAgIGZsb2F0OnJpZ2h0XG59XG5cbi5saW5re1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOnJlZCAhaW1wb3J0YW50OyBcbn1cbi5saW5rOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGdvbGQgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUtyb25hK09uZSZkaXNwbGF5PXN3YXBcIik7XG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAzJSBhdXRvIDElIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDgwOUY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNDA1MDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IGJsYWNrO1xuICBtYXgtd2lkdGg6IDE1MDBweDtcbn1cblxuaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJsb2JzdGVyXCI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgaGVpZ2h0OiA1NHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ1dHRvbi1yb3cgcCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IGRhcmtyZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IGdvbGQgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.fullName = '';
        this.username = '';
        this.password = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        this.authService.register(form)
            .subscribe(res => {
            this.router.navigate(['login']);
        }, (err) => {
            console.log(err);
            alert(err.error);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/bycategory/bycategory.component.scss":
/*!******************************************************!*\
  !*** ./src/app/bycategory/bycategory.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lobster&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Krona+One&display=swap\");\n#resume-bg, .videos {\n  background-color: #155d74;\n  margin: 0;\n  padding-top: 5%;\n  padding-bottom: 5%;\n  padding-left: 10%;\n  padding-right: 10%;\n  max-width: 100%;\n  -webkit-animation: fadeIn;\n          animation: fadeIn;\n}\n.row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.col {\n  margin-right: 5% x;\n}\nh2 {\n  font-family: \"Lobster\", cursive;\n  text-align: center !important;\n  color: #1D809F !important;\n  text-shadow: 0 2px 10px #a8a8a8;\n  margin-bottom: 30px;\n}\nfooter.footer {\n  padding-top: 1rem;\n  padding-bottom: 1.5rem;\n  background-image: url('footer.png');\n}\nfooter.footer .social-link {\n  display: block;\n  max-width: 63px;\n  max-height: 63px;\n  line-height: 4.3rem;\n  font-size: 1.5rem;\n  background-color: #1D809F;\n  -webkit-transition: background-color 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\n}\nfooter.footer .social-link:hover {\n  background-color: #155d74;\n  text-decoration: none;\n  cursor: pointer;\n}\nh3, h4, h5 {\n  text-align: center !important;\n  font-family: \"Krona One\", sans-serif;\n}\nh3 {\n  font-size: 16px;\n}\nh4 {\n  font-size: 10px;\n}\n/* p {\n    text-align: center !important;\n} */\n.video-responsive {\n  overflow: hidden;\n  padding-bottom: 56.25%;\n  position: relative;\n  height: 0;\n}\n.video-responsive iframe {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.nav {\n  position: fixed;\n  left: 45%;\n  -webkit-transform: translate(-40%, 0);\n          transform: translate(-40%, 0);\n  text-align: center;\n  margin-bottom: 20px;\n  border-bottom: 1px white solid;\n}\n.portfolio-link {\n  font-family: \"Krona One\", sans-serif;\n  color: white;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n}\n.nav-link:hover, .nav-link.active {\n  text-transform: uppercase;\n  background-color: rgba(255, 255, 255, 0.6);\n  color: black;\n}\n.featured-works {\n  margin: 1% auto;\n  background-color: white;\n  padding: 2%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);\n}\n.image-wrapper {\n  max-width: 350px !important;\n  max-height: 180px !important;\n  overflow: hidden !important;\n  margin: 10px auto;\n}\n.image-wrapper span {\n  display: block !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9ieWNhdGVnb3J5L2J5Y2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J5Y2F0ZWdvcnkvYnljYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQUNBLDZFQUFBO0FBTVI7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO1VBQUEsaUJBQUE7QUNMSjtBRFFBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURRSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQ0xSO0FEUU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0RBQUE7RUFDQSw4Q0FBQTtFQUVBLDBDQUFBO0FDTFI7QURRTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDTFI7QURTQTtFQUNJLDZCQUFBO0VBQ0Esb0NBQUE7QUNOSjtBRFNBO0VBQ0ksZUFBQTtBQ05KO0FEU0E7RUFDSSxlQUFBO0FDTko7QURRQTs7R0FBQTtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ05KO0FEUUE7RUFDSSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDTEo7QURRQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQUEsK0JBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUNMSjtBRFFBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDTEo7QURRQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2J5Y2F0ZWdvcnkvYnljYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S3JvbmErT25lJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyBib2R5IHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEyOCwgMTU5KSAhaW1wb3J0YW50XG4vLyB9XG5cbiNyZXN1bWUtYmcsIC52aWRlb3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTVkNzQ7IFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogNSU7IFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTsgXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7IFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBtYXgtd2lkdGg6MTAwJTtcblxuICAgIGFuaW1hdGlvbjogZmFkZUluO1xufVxuXG4ucm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxufVxuXG4uY29sIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUleDtcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMxRDgwOUYgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2IoMTY4LCAxNjgsIDE2OCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweFxufVxuXG4gICAgZm9vdGVyLmZvb3RlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvZm9vdGVyLnBuZycpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb290ZXIuZm9vdGVyIC5zb2NpYWwtbGluayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXgtd2lkdGg6IDYzcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDYzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjNyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQ4MDlGO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvb3Rlci5mb290ZXIgLnNvY2lhbC1saW5rOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NWQ3NDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cblxuaDMsIGg0LCBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdLcm9uYSBPbmUnLCBzYW5zLXNlcmlmO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxNnB4XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6IDEwcHhcbn1cbi8qIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufSAqL1xuXG4udmlkZW8tcmVzcG9uc2l2ZXtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgcGFkZGluZy1ib3R0b206NTYuMjUlO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGhlaWdodDowO1xufVxuLnZpZGVvLXJlc3BvbnNpdmUgaWZyYW1le1xuICAgIGxlZnQ6MDtcbiAgICB0b3A6MDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0b1xufVxuXG4ubmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIDApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCB3aGl0ZSBzb2xpZDtcbn1cblxuLnBvcnRmb2xpby1saW5rIHtcbiAgICBmb250LWZhbWlseTogJ0tyb25hIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudFxufVxuXG4ubmF2LWxpbms6aG92ZXIsIC5uYXYtbGluay5hY3RpdmUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgY29sb3I6YmxhY2tcbn1cblxuLmZlYXR1cmVkLXdvcmtzIHtcbiAgICBtYXJnaW46IDElIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNik7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggYXV0bzsgXG59XG5cbi5pbWFnZS13cmFwcGVyIHNwYW4ge1xuICAgIGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S3JvbmErT25lJmRpc3BsYXk9c3dhcFwiKTtcbiNyZXN1bWUtYmcsIC52aWRlb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZDc0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogZmFkZUluO1xufVxuXG4ucm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2wge1xuICBtYXJnaW4tcmlnaHQ6IDUlIHg7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxRDgwOUYgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggI2E4YThhODtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuZm9vdGVyLmZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Zvb3Rlci5wbmdcIik7XG59XG5cbmZvb3Rlci5mb290ZXIgLnNvY2lhbC1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogNjNweDtcbiAgbWF4LWhlaWdodDogNjNweDtcbiAgbGluZS1oZWlnaHQ6IDQuM3JlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDgwOUY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuZm9vdGVyLmZvb3RlciAuc29jaWFsLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZDc0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDMsIGg0LCBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJLcm9uYSBPbmVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4vKiBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0gKi9cbi52aWRlby1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlby1yZXNwb25zaXZlIGlmcmFtZSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggd2hpdGUgc29saWQ7XG59XG5cbi5wb3J0Zm9saW8tbGluayB7XG4gIGZvbnQtZmFtaWx5OiBcIktyb25hIE9uZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtbGluazpob3ZlciwgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZmVhdHVyZWQtd29ya3Mge1xuICBtYXJnaW46IDElIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyJTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uaW1hZ2Utd3JhcHBlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/bycategory/bycategory.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bycategory/bycategory.component.ts ***!
  \****************************************************/
/*! exports provided: BycategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BycategoryComponent", function() { return BycategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home.service */ "./src/app/home.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");






let BycategoryComponent = class BycategoryComponent {
    constructor(route, api, sanitizer, categoryService) {
        this.route = route;
        this.api = api;
        this.sanitizer = sanitizer;
        this.categoryService = categoryService;
        this.posts = [];
        this.isLoadingResults = true;
        this.data = [];
    }
    transform(v) {
        return this.sanitizer.bypassSecurityTrustHtml(v);
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getPostsByCategory(this.route.snapshot.params.id);
        });
        this.categoryService.getCategories()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getPostsByCategory(id) {
        this.posts = [];
        this.api.getPostsByCategory(id)
            .subscribe((res) => {
            this.posts = res;
            console.log(this.posts);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
BycategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }
];
BycategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bycategory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bycategory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bycategory.component.scss */ "./src/app/bycategory/bycategory.component.scss")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    })
], BycategoryComponent);



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'category/';
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Categories')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
    }
    getCategory(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched category by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getCategory id=${id}`)));
    }
    addCategory(category) {
        return this.http.post(apiUrl, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((prod) => console.log(`added category w/ id=${category.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCategory')));
    }
    updateCategory(id, category) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`updated category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCategory')));
    }
    deleteCategory(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`deleted category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteCategory')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/category/category-add/category-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\n.mainContainer {\n  max-width: 100% !important;\n  margin: 0 !important;\n  max-height: 100%;\n}\n\nlabel, input {\n  color: black;\n}\n\nselect {\n  display: block;\n  padding: 10px;\n  width: 95%;\n  margin: 20px;\n}\n\n.form-group {\n  margin: 15px 0 0 15px;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: red;\n  color: white;\n}\n\n.mat-flat-button:disabled {\n  margin: 15px 15px 0 15px;\n  background-color: #7c0000;\n  color: grey !important;\n}\n\n.mat-input-element {\n  padding: 10px;\n  border: 1px solid grey;\n  margin: 20px;\n  width: 95%;\n  background-color: white;\n}\n\nlabel {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1hZGQvY2F0ZWdvcnktYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1hZGQvY2F0ZWdvcnktYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUk7RUFDSSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnktYWRkL2NhdGVnb3J5LWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLm1haW5Db250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgbGFiZWwsIGlucHV0IHtcbiAgICAgICAgY29sb3I6YmxhY2tcbiAgICB9XG5cbiAgICBzZWxlY3R7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAxNXB4O1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjQsIDAsIDApO1xuICAgIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB3aWR0aDo5NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmxhYmVsIHtcbiAgICBtYXJnaW46IDEwcHhcbn1cbiIsIi5kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLm1haW5Db250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbmxhYmVsLCBpbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MwMDAwO1xuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/category/category-add/category-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyErrorStateMatcher, CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





// import { DataStorageService } from '../../interceptors/data-storage.service';
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let CategoryAddComponent = class CategoryAddComponent {
    constructor(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = null;
        this.catName = '';
        this.catFirst = '';
        this.catSecond = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catFirst: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catSecond: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catThird: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addCategory(this.categoryForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/category/']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CategoryAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CategoryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-add.component.scss */ "./src/app/category/category-add/category-add.component.scss")).default]
    })
], CategoryAddComponent);



/***/ }),

/***/ "./src/app/category/category-details/category-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/category/category-details/category-details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\n.posting {\n  background-color: white;\n  color: black !important;\n  padding: 20px;\n  border: 1px solid white;\n  border-radius: 25px;\n}\n\n.btn-block {\n  margin: 15px 15px 0 15px;\n  background-color: red;\n  color: white;\n  padding: 10px 10px 5px;\n}\n\n.btn-block:hover {\n  background-color: #a5a5a5;\n}\n\n.mat-flat-button {\n  margin: 15px;\n  background-color: grey;\n  color: white;\n}\n\n#dashboard .posting {\n  animation: fadein 1.5s;\n  -moz-animation: fadein 1.5s;\n  /* Firefox */\n  -webkit-animation: fadein 1.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 1.5s;\n  /* Opera */\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1kZXRhaWxzL2NhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNRLHVCQUFBO0VBQ0osdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFBNkIsWUFBQTtFQUM3Qiw4QkFBQTtFQUFnQyxzQkFBQTtFQUNoQyx5QkFBQTtFQUEyQixVQUFBO0FDRy9COztBRERBO0VBQ0k7SUFDSSxVQUFBO0VDSU47RURGRTtJQUNJLFVBQUE7RUNJTjtBQUNGOztBRE1BO0VBQTRCLHNCQUFBO0VBQ3hCO0lBQ0ksVUFBQTtFQ01OO0VESkU7SUFDSSxVQUFBO0VDTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLnBvc3Rpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAxKTtcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czoyNXB4XG59XG5cbi5idG4tYmxvY2sge1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcbn1cblxuLmJ0bi1ibG9jazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGNvbG9yOndoaXRlO1xuXG59XG5cbiNkYXNoYm9hcmQgLnBvc3Rpbmcge1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIE9wZXJhICovXG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7IC8qIEZpcmVmb3ggKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW8ta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIE9wZXJhICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbiIsIi5kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLnBvc3Rpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcbn1cblxuLmJ0bi1ibG9jazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWE1YTU7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Rhc2hib2FyZCAucG9zdGluZyB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogRmlyZWZveCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIC8qIE9wZXJhICovXG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIEZpcmVmb3ggKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogT3BlcmEgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/category/category-details/category-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/category/category-details/category-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function() { return CategoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../category.service */ "./src/app/category.service.ts");




let CategoryDetailsComponent = class CategoryDetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.category = { id: null, catName: '', catFirst: '', catSecond: '', catThird: '', updated: null };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getCategoryDetails(this.route.snapshot.params.id);
    }
    getCategoryDetails(id) {
        this.api.getCategory(id)
            .subscribe((data) => {
            this.category = data;
            this.category.id = data._id;
            console.log(this.category);
            this.isLoadingResults = false;
        });
    }
    deleteCategory(id) {
        this.isLoadingResults = true;
        this.api.deleteCategory(id)
            .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/category']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CategoryDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CategoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-details.component.scss */ "./src/app/category/category-details/category-details.component.scss")).default]
    })
], CategoryDetailsComponent);



/***/ }),

/***/ "./src/app/category/category-edit/category-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/category/category-edit/category-edit.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\n.mainContainer {\n  max-width: 100% !important;\n  margin: 0 !important;\n  max-height: 100%;\n}\n\nlabel, input {\n  color: black;\n}\n\nselect {\n  display: block;\n  padding: 10px;\n  width: 95%;\n  margin: 20px;\n}\n\n.form-group {\n  margin: 15px 0 0 15px;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: grey;\n  color: white;\n}\n\n.mat-input-element {\n  padding: 10px;\n  border: 1px solid grey;\n  margin: 20px;\n  width: 95%;\n  background-color: white;\n}\n\nlabel {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1lZGl0L2NhdGVnb3J5LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWVkaXQvY2F0ZWdvcnktZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVJO0VBQ0ksWUFBQTtBQ0NSOztBREVJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NSOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS1lZGl0L2NhdGVnb3J5LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgcGFkZGluZzogMCAxMCU7XG59XG5cbi5tYWluQ29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIGxhYmVsLCBpbnB1dCB7XG4gICAgICAgIGNvbG9yOmJsYWNrXG4gICAgfVxuXG4gICAgc2VsZWN0e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbjogMTVweCAwIDAgMTVweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgd2lkdGg6OTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gICAgbWFyZ2luOiAxMHB4XG59XG4gIiwiLmRhc2hib2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTAlO1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxubGFiZWwsIGlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5zZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMTVweCAwIDAgMTVweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/category/category-edit/category-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-edit/category-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyErrorStateMatcher, CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let CategoryEditComponent = class CategoryEditComponent {
    constructor(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.catName = '';
        this.catFirst = '';
        this.catSecond = '';
        this.catThird = '';
        this.updated = null;
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.getCategory(this.route.snapshot.params.id);
        this.categoryForm = this.formBuilder.group({
            catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catFirst: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catSecond: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catThird: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    getCategory(id) {
        this.api.getCategory(id).subscribe((data) => {
            this.id = data._id;
            this.categoryForm.setValue({
                catName: data.catName,
                catFirst: data.catFirst,
                catSecond: data.catSecond,
                catThird: data.catThird
            });
        });
    }
    ;
    onFormSubmit() {
        this.api.updateCategory(this.id, this.categoryForm.value)
            .subscribe((res) => {
            // const id = res.id;
            this.isLoadingResults = false;
            this.router.navigate(['/post/']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    categoryDetails() {
        this.router.navigate(['/category-details/', this.id]);
    }
};
CategoryEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CategoryEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-edit.component.scss */ "./src/app/category/category-edit/category-edit.component.scss")).default]
    })
], CategoryEditComponent);



/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\nselect {\n  display: block;\n  padding: 10px;\n  width: 95%;\n  margin: 20px;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid white;\n  margin: 1em 0;\n  padding: 0;\n}\n\n.row {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\ntable.mat-table {\n  margin: 15px 0 0 15px;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding: 24px;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: grey;\n  color: white;\n}\n\n.categories {\n  background-color: white;\n  color: black !important;\n  padding: 20px;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.categories:hover {\n  background-color: #a5a5a5;\n}\n\n#dashboard .categories {\n  animation: fadein 1.5s;\n  -moz-animation: fadein 1.5s;\n  /* Firefox */\n  -webkit-animation: fadein 1.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 1.5s;\n  /* Opera */\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNRLHVCQUFBO0VBQ0osdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQTZCLFlBQUE7RUFDN0IsOEJBQUE7RUFBZ0Msc0JBQUE7RUFDaEMseUJBQUE7RUFBMkIsVUFBQTtBQ0kvQjs7QURGQTtFQUNJO0lBQ0ksVUFBQTtFQ0tOO0VESEU7SUFDSSxVQUFBO0VDS047QUFDRjs7QURLQTtFQUE0QixzQkFBQTtFQUN4QjtJQUNJLFVBQUE7RUNPTjtFRExFO0lBQ0ksVUFBQTtFQ09OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuc2VsZWN0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbmhyIHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwOyBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luOiAxZW0gMDsgXG4gICAgcGFkZGluZzogMDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxudGFibGUubWF0LXRhYmxlIHtcbiAgICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZzogMjRweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2F0ZWdvcmllc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMSk7XG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2F0ZWdvcmllczpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XG59XG5cbiNkYXNoYm9hcmQgLmNhdGVnb3JpZXMge1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIE9wZXJhICovXG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7IC8qIEZpcmVmb3ggKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW8ta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIE9wZXJhICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0iLCIuZGFzaGJvYXJkIHtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMCAxMCU7XG59XG5cbnNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbmhyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG50YWJsZS5tYXQtdGFibGUge1xuICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhdGVnb3JpZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXRlZ29yaWVzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcbn1cblxuI2Rhc2hib2FyZCAuY2F0ZWdvcmllcyB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogRmlyZWZveCAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIC8qIE9wZXJhICovXG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIEZpcmVmb3ggKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogT3BlcmEgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");



let CategoryComponent = class CategoryComponent {
    constructor(api) {
        this.api = api;
        this.data = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getCategories()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoryComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CategoryComponent.prototype, "index", void 0);
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'contact/';
let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
    }
    getContacts() {
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched contacts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getContacts', [])));
    }
    getContact(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(result => console.log(result)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getContact id=${id}`)));
    }
    addContact(contact) {
        return this.http.post(apiUrl, contact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((prod) => console.log(`added contact w/ id=${contact.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addContact')));
    }
    getContactsByPost(id) {
        return this.http.get(apiUrl + 'contact/contact-details/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Contacts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getContacts', [])));
    }
    // updateContact(id: any, contact: Contact): Observable<any> {
    //   const url = `${apiUrl}/${id}`;
    //   return this.http.put(url, contact).pipe(
    //     tap(_ => console.log(`updated contact id=${id}`)),
    //     catchError(this.handleError<any>('updateContact'))
    //   );
    // }
    deleteContact(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`deleted contact id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteContact')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ }),

/***/ "./src/app/contact/contact-add/contact-add.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-add/contact-add.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lemonada&display=swap\");\n.container {\n  background-color: #155d74;\n  margin: 0;\n  padding-top: 3%;\n  padding-bottom: 5%;\n  padding-left: 10%;\n  padding-right: 10%;\n  max-width: 100%;\n  -webkit-animation: fadeIn;\n          animation: fadeIn;\n}\n.form-container {\n  margin: 1% auto;\n  background-color: white;\n  padding: 2% 5%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);\n}\nh2 {\n  padding: 3%;\n  font-family: \"Lemonada\", cursive;\n}\n.form-control {\n  background: #f0f0f0;\n}\n.form-item {\n  border: 2px solid #D8E1E4;\n  height: 1%;\n  font-size: 14px;\n  padding: 2%;\n  display: block;\n  color: black;\n  line-height: 1.5;\n  width: 100%;\n}\nselect {\n  background: #FFF;\n  border: 2px solid #D8E1E4;\n  height: 2% !important;\n  font-size: 14px;\n  padding: 2% !important;\n  display: block;\n  color: black;\n  line-height: 1.5;\n  width: 100%;\n}\n.cke_inner {\n  display: none !important;\n}\n.mat-flat-button[disabled][disabled] {\n  background-color: black;\n  display: block;\n  color: grey;\n}\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: grey;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QtYWRkL2NvbnRhY3QtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QtYWRkL2NvbnRhY3QtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDRFQUFBO0FBRVI7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO1VBQUEsaUJBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FDREo7QURJQTtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtBQ0RKO0FESUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDREo7QURJQTtFQUNJLHdCQUFBO0FDREo7QURJQTtFQUNRLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNEUjtBREtBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1hZGQvY29udGFjdC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxlbW9uYWRhJmRpc3BsYXk9c3dhcCcpO1xuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZDc0OyBcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDMlOyBcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7IFxuICAgIHBhZGRpbmctbGVmdDogMTAlOyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgbWF4LXdpZHRoOjEwMCU7XG5cbiAgICBhbmltYXRpb246IGZhZGVJbjtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDElIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMiUgNSU7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLDAuNik7XG59XG5cbmgye1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGZvbnQtZmFtaWx5OiAnTGVtb25hZGEnLCBjdXJzaXZlO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwyNDAsMjQwLDEpO1xufVxuXG4uZm9ybS1pdGVtIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDhFMUU0O1xuICAgIGhlaWdodDogMSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuc2VsZWN0e1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q4RTFFNDtcbiAgICBoZWlnaHQ6IDIlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDIlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBjb2xvcjpibGFjaztcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2tlX2lubmVyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6Z3JleVxuICAgIFxufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxlbW9uYWRhJmRpc3BsYXk9c3dhcFwiKTtcbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZDc0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogZmFkZUluO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBtYXJnaW46IDElIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyJSA1JTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbmgyIHtcbiAgcGFkZGluZzogMyU7XG4gIGZvbnQtZmFtaWx5OiBcIkxlbW9uYWRhXCIsIGN1cnNpdmU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuXG4uZm9ybS1pdGVtIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0Q4RTFFNDtcbiAgaGVpZ2h0OiAxJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAyJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOEUxRTQ7XG4gIGhlaWdodDogMiUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAyJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNrZV9pbm5lciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact-add/contact-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contact/contact-add/contact-add.component.ts ***!
  \**************************************************************/
/*! exports provided: MyErrorStateMatcher, ContactAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddComponent", function() { return ContactAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_alert */ "./src/app/_alert/index.ts");








/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let ContactAddComponent = class ContactAddComponent {
    constructor(router, api, postService, toastr, alertService, formBuilder) {
        this.router = router;
        this.api = api;
        this.postService = postService;
        this.toastr = toastr;
        this.alertService = alertService;
        this.formBuilder = formBuilder;
        this.conName = '';
        this.conEmail = '';
        this.conAddress1 = '';
        this.conAddress2 = '';
        this.conMessage = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
        this.posts = [];
        this.message = "Thank you! You will now be redirected to the home page.";
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            conName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            conEmail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            conPhone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            conAddress1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            conAddress2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            conMessage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    myFunc() {
        alert(this.message);
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addContact(this.contactForm.value)
            .subscribe((res) => {
            const id = res.id;
            this.isLoadingResults = false;
            this.alertService.success(this.message);
            setTimeout(() => {
                this.router.navigate(['/home']);
            }, 5000); //5s
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
ContactAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastContainerDirective"], { static: true })
], ContactAddComponent.prototype, "toastContainer", void 0);
ContactAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-add/contact-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-add.component.scss */ "./src/app/contact/contact-add/contact-add.component.scss")).default]
    })
], ContactAddComponent);



/***/ }),

/***/ "./src/app/contact/contact-details/contact-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/contact/contact-details/contact-details.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\n.contact {\n  background-color: white;\n  color: black !important;\n  padding: 20px;\n  border: 1px solid white;\n  border-radius: 25px;\n}\n\n.btn-block {\n  margin: 15px 15px 0 15px;\n  background-color: red;\n  color: white;\n  padding: 10px 10px 5px;\n}\n\n.btn-block:hover {\n  background-color: #a5a5a5;\n}\n\n.mat-flat-button {\n  margin: 15px;\n  background-color: grey;\n  color: white;\n}\n\n#dashboard .posting {\n  animation: fadein 1.5s;\n  -moz-animation: fadein 1.5s;\n  /* Firefox */\n  -webkit-animation: fadein 1.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 1.5s;\n  /* Opera */\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFBNkIsWUFBQTtFQUM3Qiw4QkFBQTtFQUFnQyxzQkFBQTtFQUNoQyx5QkFBQTtFQUEyQixVQUFBO0FDRy9COztBRERBO0VBQ0k7SUFDSSxVQUFBO0VDSU47RURGRTtJQUNJLFVBQUE7RUNJTjtBQUNGOztBRE1BO0VBQTRCLHNCQUFBO0VBQ3hCO0lBQ0ksVUFBQTtFQ01OO0VESkU7SUFDSSxVQUFBO0VDTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDEwJTtcbn1cblxuLmNvbnRhY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOjI1cHhcbn1cblxuLmJ0bi1ibG9jayB7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xufVxuXG4uYnRuLWJsb2NrOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE2NSwgMTY1KTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgY29sb3I6d2hpdGU7XG5cbn1cblxuI2Rhc2hib2FyZCAucG9zdGluZyB7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIEZpcmVmb3ggKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMS41czsgLyogT3BlcmEgKi9cbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHsgLyogT3BlcmEgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuIiwiLmRhc2hib2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTAlO1xufVxuXG4uY29udGFjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xufVxuXG4uYnRuLWJsb2NrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZGFzaGJvYXJkIC5wb3N0aW5nIHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxLjVzO1xuICAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogT3BlcmEgKi9cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogRmlyZWZveCAqL1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAvKiBPcGVyYSAqL1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact-details/contact-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/contact/contact-details/contact-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contact.service */ "./src/app/contact.service.ts");




let ContactDetailsComponent = class ContactDetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.contact = {
            id: null,
            conName: '',
            conPhone: '',
            conEmail: '',
            conAddress1: '',
            conAddress2: '',
            conMessage: '',
            updated: null
        };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getContactDetails(this.route.snapshot.params.id);
    }
    getContactDetails(id) {
        this.api.getContact(id)
            .subscribe((data) => {
            this.contact = data;
            console.log(this.contact);
            this.isLoadingResults = false;
        });
    }
    deleteContact(id) {
        this.isLoadingResults = true;
        this.api.deleteContact(id)
            .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/contact']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
ContactDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-details/contact-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-details.component.scss */ "./src/app/contact/contact-details/contact-details.component.scss")).default]
    })
], ContactDetailsComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\nlabel {\n  color: black;\n  max-width: 100%;\n}\n\nselect {\n  display: block;\n  padding: 10px;\n  width: 95%;\n  margin: 20px;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: grey;\n  color: white;\n}\n\n.mat-flat-button:disabled {\n  margin: 15px 15px 0 15px;\n  background-color: #7c0000;\n  color: grey !important;\n}\n\n.mat-input-element, input, textarea {\n  padding: 10px;\n  border: 1px solid grey;\n  margin: 20px;\n  width: 95%;\n}\n\n.label {\n  margin: 10px;\n}\n\n.row {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.contact {\n  background-color: white;\n  color: black !important;\n  padding: 20px;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.contact:hover {\n  background-color: #a5a5a5;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: grey;\n  color: white;\n}\n\n#dashboard .contact {\n  animation: fadein 1.5s;\n  -moz-animation: fadein 1.5s;\n  /* Firefox */\n  -webkit-animation: fadein 1.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 1.5s;\n  /* Opera */\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVJO0VBQ0ksWUFBQTtBQ0NSOztBREVJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQ0NSOztBREVJO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREVJO0VBQ0kseUJBQUE7QUNDUjs7QURHSTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQVI7O0FER0k7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQTZCLFlBQUE7RUFDN0IsOEJBQUE7RUFBZ0Msc0JBQUE7RUFDaEMseUJBQUE7RUFBMkIsVUFBQTtBQ0duQzs7QURESTtFQUNJO0lBQ0ksVUFBQTtFQ0lWO0VERk07SUFDSSxVQUFBO0VDSVY7QUFDRjs7QURNSTtFQUE0QixzQkFBQTtFQUN4QjtJQUNJLFVBQUE7RUNNVjtFREpNO0lBQ0ksVUFBQTtFQ01WO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgcGFkZGluZzogMCAxMCU7XG59XG5cbmxhYmVsIHtcbiAgICBjb2xvcjpibGFjaztcbiAgICBtYXgtd2lkdGg6MTAwJVxufVxuXG5zZWxlY3R7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNCwgMCwgMCk7XG4gICAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50LCBpbnB1dCwgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgd2lkdGg6OTUlXG4gICAgfVxuICAgIFxuICAgIC5sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMTBweFxuICAgIH1cblxuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhY3R7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xuICAgICAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGFjdDpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgICNkYXNoYm9hcmQgLmNvbnRhY3Qge1xuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAxLjVzO1xuICAgICAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAxLjVzOyAvKiBPcGVyYSAqL1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBALW8ta2V5ZnJhbWVzIGZhZGVpbiB7IC8qIE9wZXJhICovXG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgIiwiLmRhc2hib2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTAlO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5zZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtZmxhdC1idXR0b246ZGlzYWJsZWQge1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzAwMDA7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCwgaW5wdXQsIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogOTUlO1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250YWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZGFzaGJvYXJkIC5jb250YWN0IHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxLjVzO1xuICAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogT3BlcmEgKi9cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogRmlyZWZveCAqL1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAvKiBPcGVyYSAqL1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");



let ContactComponent = class ContactComponent {
    constructor(api) {
        this.api = api;
        this.data = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getContacts()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home.service */ "./src/app/home.service.ts");




let DetailsComponent = class DetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.post = {
            category: '',
            id: '',
            postTitle: '',
            postClient: '',
            postDesc: '',
            updated: null
        };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getPostDetails(this.route.snapshot.params.id);
    }
    getPostDetails(id) {
        this.api.getPost(id)
            .subscribe((data) => {
            this.post = data;
            console.log(this.post);
            this.isLoadingResults = false;
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/home.service.ts":
/*!*********************************!*\
  !*** ./src/app/home.service.ts ***!
  \*********************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'public/';
let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        return this.http.get(apiUrl + 'category')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Categories')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
    }
    getPosts() {
        return this.http.get(apiUrl + 'post')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPostsByCategory(id) {
        return this.http.get(apiUrl + 'bycategory/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPost(id) {
        return this.http.get(apiUrl + 'post/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched post by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getPost id=${id}`)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Krona+One&display=swap\");\nbody,\nhtml {\n  width: 100%;\n  height: 100%;\n}\nbody {\n  font-family: \"Source Sans Pro\";\n}\n.btn-xl {\n  padding: 1.25rem 2.5rem;\n}\n.btn:link, .btn:visited {\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 15px 40px;\n  display: inline-block;\n  border-radius: 100px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.btn-light:hover, .btn-primary:hover {\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(225, 225, 225, 0.2);\n}\n.btn-dark:hover {\n  -webkit-transform: translateY(-3px);\n          transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n.btn:active {\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.btn-light:active, .btn-primary:active {\n  -webkit-transform: translateY(-1px);\n          transform: translateY(-1px);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.btn-white:link {\n  color: #777;\n  background-color: white;\n}\n.content-section {\n  background-color: white;\n}\n.content-section-two {\n  background-color: white;\n}\n.content-section-three {\n  background-color: #1d809f;\n}\n@media screen and (min-width: 992px) {\n  .content-section {\n    -webkit-clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);\n            clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);\n    min-height: 100% !important;\n  }\n\n  .content-section-two {\n    -webkit-clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);\n            clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);\n    min-height: 100% !important;\n  }\n\n  .content-section-three {\n    -webkit-clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);\n            clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);\n    min-height: 100% !important;\n  }\n}\n@media screen and (max-width: 991px) {\n  .btn-xl:link {\n    min-width: 50%;\n    font-weight: 700;\n    padding: 15px 10px !important;\n    margin-bottom: 5px;\n    font-size: 15px;\n  }\n\n  p {\n    font-size: 20px;\n  }\n\n  .content-section {\n    min-height: 100% !important;\n  }\n\n  .content-section-two {\n    min-height: 100% !important;\n  }\n\n  .content-section-three {\n    min-height: 100% !important;\n  }\n}\n.contact-section {\n  align-content: center;\n}\n.content-section-heading h2 {\n  font-size: 2rem;\n}\n.content-section-heading h3 {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 700;\n}\n.text-faded {\n  color: rgba(255, 255, 255, 0.7);\n}\n/* Map */\n.map {\n  height: 30rem;\n}\n@media (max-width: 992px) {\n  .map {\n    height: 75%;\n  }\n}\n.map iframe {\n  pointer-events: none;\n}\n.scroll-to-top {\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: white;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 45px;\n}\n.scroll-to-top:focus, .scroll-to-top:hover {\n  color: white;\n}\n.scroll-to-top:hover {\n  background: #343a40;\n}\n.scroll-to-top i {\n  font-weight: 800;\n}\n.masthead {\n  min-height: 30rem;\n  position: relative;\n  display: table;\n  width: 100%;\n  height: auto;\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0.1))), url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxED5CYEYq8GWKy7Zm0qirIc1f1huJq4teQS9-bPDLkEgPOB8m\");\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxED5CYEYq8GWKy7Zm0qirIc1f1huJq4teQS9-bPDLkEgPOB8m\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n.masthead h1 {\n  font-size: 4rem;\n  margin: 0;\n  padding: 0;\n  font-family: \"Dancing Script\", cursive;\n  -webkit-animation: moveInLeft 1.5s ease-out;\n          animation: moveInLeft 1.5s ease-out;\n}\n.masthead h3 {\n  -webkit-animation: moveInRight 1.5s ease-out;\n          animation: moveInRight 1.5s ease-out;\n}\n@media (min-width: 992px) {\n  .masthead {\n    height: 100vh;\n  }\n  .masthead h1 {\n    font-size: 5.5rem;\n  }\n}\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n/* Side Menu */\n.mat-sidenav {\n  background-color: #1d809f !important;\n  max-width: 25%;\n  text-align: left;\n  position: fixed;\n  min-width: 15%;\n}\nul {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\na.nav-link {\n  color: white !important;\n  display: block;\n  padding: 0.5rem 0.5rem !important;\n}\na.nav-link:hover {\n  font-style: italic;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.ng-sidebar--right {\n  top: 3em;\n}\na.navbar-brand, a.navbar-brand:visited {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n  border-bottom: 1px solid white;\n  color: white !important;\n}\n.service-icon {\n  background-color: #fff;\n  color: #1D809F;\n  height: 7rem;\n  width: 7rem;\n  display: center;\n  line-height: 7.5rem;\n  font-size: 2.25rem;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.callout {\n  padding: 5rem 0;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0.1))), url(\"http://getwallpapers.com/wallpaper/full/e/e/d/569680.jpg\");\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), url(\"http://getwallpapers.com/wallpaper/full/e/e/d/569680.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.callout h2 {\n  font-size: 3.5rem;\n  font-weight: 700;\n  display: block;\n  max-width: 30rem;\n  color: white;\n}\n.portfolio-item {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  max-width: 530px;\n  margin: auto auto 1rem;\n}\n.portfolio-item .caption {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(33, 37, 41, 0.2);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.portfolio-item .caption .caption-content {\n  color: #fff;\n  margin: auto 2rem 2rem;\n}\n.portfolio-item .caption .caption-content h2 {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n.portfolio-item .caption .caption-content p {\n  font-weight: 300;\n  font-size: 1.2rem;\n}\n@media (min-width: 992px) {\n  .portfolio-item {\n    max-width: none;\n    margin: 0;\n  }\n  .portfolio-item .caption {\n    -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\n    -webkit-clip-path: inset(0px);\n    clip-path: inset(0px);\n  }\n  .portfolio-item .caption .caption-content {\n    -webkit-transition: opacity 0.25s;\n    transition: opacity 0.25s;\n    margin-left: 5rem;\n    margin-right: 5rem;\n    margin-bottom: 5rem;\n  }\n  .portfolio-item img {\n    -webkit-transition: -webkit-clip-path 0.25s ease-out;\n    -webkit-clip-path: inset(-1px);\n    clip-path: inset(-1px);\n  }\n  .portfolio-item:hover img {\n    -webkit-clip-path: inset(2rem);\n    clip-path: inset(2rem);\n  }\n  .portfolio-item:hover .caption {\n    background-color: rgba(29, 128, 159, 0.9);\n    -webkit-clip-path: inset(2rem);\n    clip-path: inset(2rem);\n  }\n}\nfooter.footer {\n  padding-top: 1rem;\n  padding-bottom: 1.5rem;\n  background-image: url('footer.png');\n}\nfooter.footer .social-link {\n  display: block;\n  height: 4rem;\n  width: 4rem;\n  line-height: 4.3rem;\n  font-size: 1.5rem;\n  background-color: #1D809F;\n  -webkit-transition: background-color 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\n}\nfooter.footer .social-link:hover {\n  background-color: #155d74;\n  text-decoration: none;\n  cursor: pointer;\n}\na {\n  color: #1D809F;\n}\na:hover, a:focus, a:active {\n  color: #155d74;\n}\n.btn-primary {\n  background-color: #1D809F !important;\n  border-color: #1D809F !important;\n  color: #fff !important;\n}\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  background-color: #155d74 !important;\n  border-color: #155d74 !important;\n}\n.btn-secondary {\n  background-color: #ecb807 !important;\n  border-color: #ecb807 !important;\n  color: #fff !important;\n}\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\n  background-color: #ba9106 !important;\n  border-color: #ba9106 !important;\n}\n.btn-dark {\n  color: #fff !important;\n}\n.btn {\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\n  font-weight: 700;\n}\n.bg-primary {\n  background-color: #1D809F !important;\n}\n.text-primary {\n  color: #1D809F !important;\n}\n.text-secondary {\n  color: #ecb807 !important;\n}\n.portfolio-container {\n  max-width: 800px;\n}\nh2 {\n  font-family: \"Krona One\", sans-serif;\n  font-size: 24px;\n}\n.carousel-caption {\n  color: white;\n  text-shadow: 2px 2px 8px #1D809F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3VtbWVyL0RvY3VtZW50cy9nYWxsaW5kb0FuZ3VsYXIvY2xpZW50L3NyYy9hc3NldHMvc2Nzcy9fZ2xvYmFsLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL19tYXN0aGVhZC5zY3NzIiwiL1VzZXJzL3N1bW1lci9Eb2N1bWVudHMvZ2FsbGluZG9Bbmd1bGFyL2NsaWVudC9zcmMvYXNzZXRzL3Njc3MvX3NpZGViYXIuc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL19zZXJ2aWNlcy5zY3NzIiwiL1VzZXJzL3N1bW1lci9Eb2N1bWVudHMvZ2FsbGluZG9Bbmd1bGFyL2NsaWVudC9zcmMvYXNzZXRzL3Njc3MvX2NhbGxvdXQuc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL19wb3J0Zm9saW8uc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL19mb290ZXIuc2NzcyIsIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2Fzc2V0cy9zY3NzL19ib290c3RyYXAtb3ZlcnJpZGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsNkVBQUE7QUNEUjs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQ0E7RUVLRSw4QkFBQTtBREZGO0FERUE7RUFDRSx1QkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0NGO0FERUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZ0RBQUE7QUNDRjtBREVBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7QURFQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx5Q0FBQTtBQ0NGO0FERUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EseUNBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDQ0Y7QURLQTtFQUdFLHVCQUFBO0FDSkY7QURPQTtFQUNFLHVCQUFBO0FDSkY7QURPQTtFQUNFLHlCQUFBO0FDSkY7QURPQTtFQUVFO0lBQ0UsMkRBQUE7WUFBQSxtREFBQTtJQUNBLDJCQUFBO0VDTEY7O0VET0E7SUFDRSwyREFBQTtZQUFBLG1EQUFBO0lBQ0EsMkJBQUE7RUNKRjs7RURNQTtJQUNFLDJEQUFBO1lBQUEsbURBQUE7SUFDQSwyQkFBQTtFQ0hGO0FBQ0Y7QURNQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUNKRjs7RURNQTtJQUNFLGVBQUE7RUNIRjs7RURLQTtJQUNFLDJCQUFBO0VDRkY7O0VESUE7SUFDRSwyQkFBQTtFQ0RGOztFREdBO0lBQ0UsMkJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxxQkFBQTtBQ0RGO0FES0U7RUFDRSxlQUFBO0FDRko7QURJRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0ZKO0FET0E7Ozs7OztFQU1FLGdCQUFBO0FDSkY7QURPQTtFQUNFLCtCQUFBO0FDSkY7QURPQSxRQUFBO0FBRUE7RUFDRSxhQUFBO0FDTEY7QURRQTtFQUNFO0lBQ0UsV0FBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFLG9CQUFBO0FDTkY7QURVQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGlDQUFBO0VBRUEsaUJBQUE7QUNaRjtBRGFFO0VBRUUsWUFBQTtBQ1pKO0FEY0U7RUFDRSxtQkc5Sk87QUZrSlg7QURjRTtFQUNFLGdCQUFBO0FDWko7QUdqS0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdPQUFBO0VBQUEsK01BQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FIb0tGO0FHbktFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FIcUtKO0FHbktFO0VBQ0UsNENBQUE7VUFBQSxvQ0FBQTtBSHFLSjtBR25LRTtFQXZCRjtJQXdCSSxhQUFBO0VIc0tGO0VHcktFO0lBQ0UsaUJBQUE7RUh1S0o7QUFDRjtBR2xLQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLHFDQUFBO1lBQUEsNkJBQUE7RUhxS0o7RUduS0E7SUFDSSxtQ0FBQTtZQUFBLDJCQUFBO0VIcUtKO0VHbktBO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUhxS0o7QUFDRjtBR2hMQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLHFDQUFBO1lBQUEsNkJBQUE7RUhxS0o7RUduS0E7SUFDSSxtQ0FBQTtZQUFBLDJCQUFBO0VIcUtKO0VHbktBO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUhxS0o7QUFDRjtBR2xLQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUhvS0o7RUdsS0E7SUFDSSxvQ0FBQTtZQUFBLDRCQUFBO0VIb0tKO0VHbEtBO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUhvS0o7QUFDRjtBRy9LQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUhvS0o7RUdsS0E7SUFDSSxvQ0FBQTtZQUFBLDRCQUFBO0VIb0tKO0VHbEtBO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUhvS0o7QUFDRjtBSTdOQSxjQUFBO0FBRUM7RUFDQyxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FKOE5GO0FJM05DO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBSjhORjtBSTNOQztFQUNDLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FKOE5GO0FJM05DO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FKOE5IO0FJM05DO0VBQ0MsUUFBQTtBSjhORjtBSXpOQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FKNE5GO0FLeFFBO0VBQ0Usc0JIR007RUdGTixjSGNRO0VHYlIsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FMMlFGO0FNbFJBO0VBQ0UsZUFBQTtFQUNBLHdMQUFBO0VBQUEsK0pBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QU5xUkY7QU1wUkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBTnNSSjtBT2xTQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBUHFTRjtBT3BTRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBUHNTSjtBT3JTSTtFQUNFLFdMWkU7RUthRixzQkFBQTtBUHVTTjtBT3RTTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QVB3U1I7QU90U007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FQd1NSO0FPcFNFO0VBNUJGO0lBNkJJLGVBQUE7SUFDQSxTQUFBO0VQdVNGO0VPdFNFO0lBQ0UsMkVBQUE7SUFDQSw2QkFBQTtJQUNBLHFCQUFBO0VQd1NKO0VPdlNJO0lBQ0UsaUNBQUE7SUFBQSx5QkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFUHlTTjtFT3RTRTtJQUNFLG9EQUFBO0lBQ0EsOEJBQUE7SUFDQSxzQkFBQTtFUHdTSjtFT3JTSTtJQUNFLDhCQUFBO0lBQ0Esc0JBQUE7RVB1U047RU9yU0k7SUFDRSx5Q0FBQTtJQUNBLDhCQUFBO0lBQ0Esc0JBQUE7RVB1U047QUFDRjtBUS9WQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBUmtXRjtBUWpXRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Qk5NTTtFTUxOLHNEQUFBO0VBQUEsOENBQUE7RUFDQSwwQ0FBQTtBUm1XSjtBUWxXSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FSb1dOO0FTcFhBO0VBQ0UsY1BlUTtBRndXVjtBU3RYRTtFQUdFLGNBQUE7QVRzWEo7QVNsWEE7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QVRxWEY7QVNwWEU7RUFHRSxvQ0FBQTtFQUNBLGdDQUFBO0FUb1hKO0FTaFhBO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FUbVhGO0FTbFhFO0VBR0Usb0NBQUE7RUFDQSxnQ0FBQTtBVGtYSjtBUzlXQTtFQUNFLHNCQUFBO0FUaVhGO0FTOVdBO0VBQ0UsOENBQUE7RUFDQSxnQkFBQTtBVGlYRjtBUzlXQTtFQUNFLG9DQUFBO0FUaVhGO0FTOVdBO0VBQ0UseUJBQUE7QVRpWEY7QVM5V0E7RUFDRSx5QkFBQTtBVGlYRjtBRmhhQTtFQUNJLGdCQUFBO0FFbWFKO0FGaGFBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0FFbWFKO0FGaGFBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0FFbWFKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zY3NzL3N0eWxpc2gtcG9ydGZvbGlvLnNjc3NcIjtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S3JvbmErT25lJmRpc3BsYXk9c3dhcCcpO1xuXG5cbi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNHB4XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggIzFEODA5Rjtcbn1cbiIsImJvZHksXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIEBpbmNsdWRlIGJvZHktZm9udDtcbn1cblxuLy8gQ3VzdG9tIEJ1dHRvbiBTaXplXG4uYnRuLXhsIHtcbiAgcGFkZGluZzogMS4yNXJlbSAyLjVyZW07XG59XG5cbi5idG46bGluaywgLmJ0bjp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOjE1cHggNDBweDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB0cmFuc2l0aW9uOmFsbCAuMnM7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIsIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgyMjUsMjI1LDIyNSwwLjIpO1xufVxuXG4uYnRuLWRhcms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLmJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uYnRuLWxpZ2h0OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi5idG4td2hpdGU6bGluayB7XG4gIGNvbG9yOiAjNzc3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi8vIENvbnRlbnQgU2VjdGlvblxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIC8vIHBhZGRpbmctdG9wOiA1cmVtO1xuICAvLyBwYWRkaW5nLWJvdHRvbTogNy41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi10aHJlZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDEyOCwgMTU5LCAxKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAuY29udGVudC1zZWN0aW9uIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMCUsIDEwMCUgMCwgMTAwJSA5MCUsIDAgMTAwJSk7XG4gICAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250ZW50LXNlY3Rpb24tdHdvIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMCUsIDEwMCUgMCwgMTAwJSA5MCUsIDAgMTAwJSk7XG4gICAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250ZW50LXNlY3Rpb24tdGhyZWUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwJSwgMTAwJSAwLCAxMDAlIDkwJSwgMCAxMDAlKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmJ0bi14bDpsaW5re1xuICAgIG1pbi13aWR0aDogNTAlOyAgICBcbiAgICBmb250LXdlaWdodDo3MDA7XG4gICAgcGFkZGluZzogMTVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOjIwcHhcbiAgfVxuICAuY29udGVudC1zZWN0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRlbnQtc2VjdGlvbi10d28ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGVudC1zZWN0aW9uLXRocmVlIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi1oZWFkaW5nIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxuLy8gVHlwb2dyYXBoeVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRleHQtZmFkZWQge1xuICBjb2xvcjogZmFkZS1vdXQoJHdoaXRlLCAwLjMpO1xufVxuXG4vKiBNYXAgKi9cblxuLm1hcCB7XG4gIGhlaWdodDogMzByZW07XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYXAge1xuICAgIGhlaWdodDogNzUlO1xuICB9XG59XG5cbi5tYXAgaWZyYW1lIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8vIFNjcm9sbCB0byB0b3AgYnV0dG9uXG4uc2Nyb2xsLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcblxuICBkaXNwbGF5OiBub25lO1xuXG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogZmFkZS1vdXQoJGdyYXktODAwLCAuNSk7XG5cbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkZ3JheS04MDA7XG4gIH1cbiAgaSB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S3JvbmErT25lJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHksXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiO1xufVxuXG4uYnRuLXhsIHtcbiAgcGFkZGluZzogMS4yNXJlbSAyLjVyZW07XG59XG5cbi5idG46bGluaywgLmJ0bjp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyLCAuYnRuLXByaW1hcnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC4yKTtcbn1cblxuLmJ0bi1kYXJrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJ0bi1saWdodDphY3RpdmUsIC5idG4tcHJpbWFyeTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYnRuLXdoaXRlOmxpbmsge1xuICBjb2xvcjogIzc3NztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi10aHJlZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDgwOWY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250ZW50LXNlY3Rpb24ge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwJSwgMTAwJSAwLCAxMDAlIDkwJSwgMCAxMDAlKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGVudC1zZWN0aW9uLXR3byB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTAlLCAxMDAlIDAsIDEwMCUgOTAlLCAwIDEwMCUpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250ZW50LXNlY3Rpb24tdGhyZWUge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwJSwgMTAwJSAwLCAxMDAlIDkwJSwgMCAxMDAlKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5idG4teGw6bGluayB7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQtc2VjdGlvbiB7XG4gICAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnQtc2VjdGlvbi10d28ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250ZW50LXNlY3Rpb24tdGhyZWUge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLmNvbnRhY3Qtc2VjdGlvbiB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbi1oZWFkaW5nIGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmNvbnRlbnQtc2VjdGlvbi1oZWFkaW5nIGgzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udGV4dC1mYWRlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi8qIE1hcCAqL1xuLm1hcCB7XG4gIGhlaWdodDogMzByZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFwIHtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgfVxufVxuLm1hcCBpZnJhbWUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNjcm9sbC10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA1OCwgNjQsIDAuNSk7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuLnNjcm9sbC10by10b3A6Zm9jdXMsIC5zY3JvbGwtdG8tdG9wOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNjcm9sbC10by10b3A6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xufVxuLnNjcm9sbC10by10b3AgaSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5tYXN0aGVhZCB7XG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDhyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJSksIHVybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1R4RUQ1Q1lFWXE4R1dLeTdabTBxaXJJYzFmMWh1SnE0dGVRUzktYlBETGtFZ1BPQjhtXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFzdGhlYWQgaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0IDEuNXMgZWFzZS1vdXQ7XG59XG4ubWFzdGhlYWQgaDMge1xuICBhbmltYXRpb246IG1vdmVJblJpZ2h0IDEuNXMgZWFzZS1vdXQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm1hc3RoZWFkIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5tYXN0aGVhZCBoMSB7XG4gICAgZm9udC1zaXplOiA1LjVyZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5MZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuLyogU2lkZSBNZW51ICovXG4ubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ4MDlmICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi13aWR0aDogMTUlO1xufVxuXG51bCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG5hLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbmEubmF2LWxpbms6aG92ZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5nLXNpZGViYXItLXJpZ2h0IHtcbiAgdG9wOiAzZW07XG59XG5cbmEubmF2YmFyLWJyYW5kLCBhLm5hdmJhci1icmFuZDp2aXNpdGVkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc2VydmljZS1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMxRDgwOUY7XG4gIGhlaWdodDogN3JlbTtcbiAgd2lkdGg6IDdyZW07XG4gIGRpc3BsYXk6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDcuNXJlbTtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jYWxsb3V0IHtcbiAgcGFkZGluZzogNXJlbSAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMCUpLCB1cmwoXCJodHRwOi8vZ2V0d2FsbHBhcGVycy5jb20vd2FsbHBhcGVyL2Z1bGwvZS9lL2QvNTY5NjgwLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jYWxsb3V0IGgyIHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDMwcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wb3J0Zm9saW8taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogNTMwcHg7XG4gIG1hcmdpbjogYXV0byBhdXRvIDFyZW07XG59XG4ucG9ydGZvbGlvLWl0ZW0gLmNhcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzNywgNDEsIDAuMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG59XG4ucG9ydGZvbGlvLWl0ZW0gLmNhcHRpb24gLmNhcHRpb24tY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IGF1dG8gMnJlbSAycmVtO1xufVxuLnBvcnRmb2xpby1pdGVtIC5jYXB0aW9uIC5jYXB0aW9uLWNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wb3J0Zm9saW8taXRlbSAuY2FwdGlvbiAuY2FwdGlvbi1jb250ZW50IHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucG9ydGZvbGlvLWl0ZW0ge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnBvcnRmb2xpby1pdGVtIC5jYXB0aW9uIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtY2xpcC1wYXRoIDAuMjVzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuN3M7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDBweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwcHgpO1xuICB9XG4gIC5wb3J0Zm9saW8taXRlbSAuY2FwdGlvbiAuY2FwdGlvbi1jb250ZW50IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG4gIC5wb3J0Zm9saW8taXRlbSBpbWcge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1jbGlwLXBhdGggMC4yNXMgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KC0xcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoLTFweCk7XG4gIH1cbiAgLnBvcnRmb2xpby1pdGVtOmhvdmVyIGltZyB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDJyZW0pO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gIH1cbiAgLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5jYXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxMjgsIDE1OSwgMC45KTtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgycmVtKTtcbiAgfVxufVxuXG5mb290ZXIuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZm9vdGVyLnBuZ1wiKTtcbn1cbmZvb3Rlci5mb290ZXIgLnNvY2lhbC1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGxpbmUtaGVpZ2h0OiA0LjNyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQ4MDlGO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5mb290ZXIuZm9vdGVyIC5zb2NpYWwtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTVkNzQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hIHtcbiAgY29sb3I6ICMxRDgwOUY7XG59XG5hOmhvdmVyLCBhOmZvY3VzLCBhOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMTU1ZDc0O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQ4MDlGICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzFEODA5RiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZDc0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzE1NWQ3NCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2I4MDcgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZWNiODA3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6Zm9jdXMsIC5idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTkxMDYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjYmE5MTA2ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGFyayB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRDgwOUYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMUQ4MDlGICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZWNiODA3ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJLcm9uYSBPbmVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4ICMxRDgwOUY7XG59IiwiLy8gTWl4aW5zXG4vLyBCYWNrZ3JvdW5kIENvdmVyIE1peGluXG5AbWl4aW4gYmFja2dyb3VuZC1jb3ZlciB7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vLyBGb250IE1peGluc1xuQG1peGluIGJvZHktZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJztcbn1cbiIsIi8vIFZhcmlhYmxlc1xuXG4vLyBSZXN0YXRlZCBCb290c3RyYXAgVmFyaWFibGVzXG5cbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzg2OGU5NiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICMxRDgwOUYgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjZWNiODA3ICFkZWZhdWx0O1xuIiwiLm1hc3RoZWFkIHtcbiAgbWluLWhlaWdodDogMzByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA4cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCBmYWRlLW91dCgkd2hpdGUsIDAuOSkgMCUsIGZhZGUtb3V0KCR3aGl0ZSwgMC45KSAxMDAlKSwgdXJsKCdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUeEVENUNZRVlxOEdXS3k3Wm0wcWlySWMxZjFodUpxNHRlUVM5LWJQRExrRWdQT0I4bScpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0IDEuNXMgZWFzZS1vdXQ7XG4gIH1cbiAgaDMge1xuICAgIGFuaW1hdGlvbjogbW92ZUluUmlnaHQgMS41cyBlYXNlLW91dDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNS41cmVtO1xuICAgIH1cbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgbW92ZUluTGVmdCB7XG4gIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KVxuICB9XG4gIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweClcbiAgfVxuICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVJblJpZ2h0IHtcbiAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweClcbiAgfVxuICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KVxuICB9XG4gIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxuICB9XG59XG4iLCIvKiBTaWRlIE1lbnUgKi9cblxuIC5tYXQtc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTI4LCAxNTkpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDoyNSU7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIG1pbi13aWR0aDoxNSVcbiB9XG5cbiB1bCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuIH1cblxuIGEubmF2LWxpbmt7XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAhaW1wb3J0YW50O1xuIH1cblxuIGEubmF2LWxpbms6aG92ZXIge1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTs7XG4gfVxuXG4gLm5nLXNpZGViYXItLXJpZ2h0IHtcbiAgdG9wOiAzZW07XG59XG5cblxuXG5hLm5hdmJhci1icmFuZCwgYS5uYXZiYXItYnJhbmQ6dmlzaXRlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IC4zMTI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjMxMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbn1cbiIsIi5zZXJ2aWNlLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbiAgaGVpZ2h0OiA3cmVtO1xuICB3aWR0aDogN3JlbTtcbiAgZGlzcGxheTogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNy41cmVtO1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiIsIi8vIENhbGxvdXRcbi5jYWxsb3V0IHtcbiAgcGFkZGluZzogNXJlbSAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGZhZGUtb3V0KCR3aGl0ZSwgMC45KSAwJSwgZmFkZS1vdXQoJHdoaXRlLCAwLjkpIDEwMCUpLCB1cmwoJ2h0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9lL2UvZC81Njk2ODAuanBnJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgY29sb3I6IHdoaXRlXG4gIH1cbn1cbiIsIi5wb3J0Zm9saW8taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogNTMwcHg7XG4gIG1hcmdpbjogYXV0byBhdXRvIDFyZW07XG4gIC5jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkZ3JheS05MDAsIDAuOCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICAuY2FwdGlvbi1jb250ZW50IHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBtYXJnaW46IGF1dG8gMnJlbSAycmVtO1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIC5jYXB0aW9uIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1jbGlwLXBhdGggMC4yNXMgZWFzZS1vdXQsIGJhY2tncm91bmQtY29sb3IgMC43cztcbiAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwcHgpO1xuICAgICAgY2xpcC1wYXRoOiBpbnNldCgwcHgpO1xuICAgICAgLmNhcHRpb24tY29udGVudCB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gICAgICB9XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtY2xpcC1wYXRoIDAuMjVzIGVhc2Utb3V0O1xuICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KC0xcHgpO1xuICAgICAgY2xpcC1wYXRoOiBpbnNldCgtMXB4KTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBpbWcge1xuICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gICAgICB9XG4gICAgICAuY2FwdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRwcmltYXJ5LCAwLjEpO1xuICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMnJlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGJvZHl7XG4vLyAgIHBhZGRpbmc6IDMwcHhcbi8vIH1cbiAgXG4vLyAubmV3cy1ldmVudHMtcGFnZS0tbGlzdC1wYWdle1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXJcbi8vIH1cblxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4vLyAgIC5tb2RhbC1kaWFsb2cge1xuLy8gICAgIHdpZHRoOiA5ODBweFxuLy8gICB9XG4vLyB9IFxuICAgIFxuLy8gLmN1c3RvbU5hdmlnYXRpb257XG4vLyAgIGF7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMzU7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogYXV0bztcbi8vICAgICBwYWRkaW5nOiAzMHB4O1xuLy8gICAgIGZsb2F0OiBsZWZ0O1xuLy8gICAgIGZvbnQtc2l6ZTogM2VtO1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB6LWluZGV4OiAxXG4vLyAgIH1cbiAgICBcbi8vICAgICAmLm5leHQge1xuLy8gICAgICAgbGVmdDogYXV0bztcbi8vICAgICAgIHJpZ2h0OiAwXG4vLyAgICAgfVxuICAgICAgXG4vLyAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4vLyAgICAgICB0b3A6IDIwJX1cbiAgICAgIFxuLy8gICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuLy8gICAgICAgdG9wOiAyNSV9XG4gICAgICBcbi8vICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xuLy8gICAgICAgdG9wOiAzMCV9XG4gICAgXG4vLyAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcbi8vICAgICAgIHRvcDogMzUlfVxuLy8gICAgIH1cbiAgXG4vLyAjc3luYzEge1xuLy8gICAuaXRlbSB7XG4vLyAgIGJhY2tncm91bmQ6ICMwYzgzZTc7XG4vLyAgIG1hcmdpbjogNXB4O1xuLy8gICBjb2xvcjogI0ZGRjtcbi8vICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4vLyAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuLy8gICBib3JkZXItcmFkaXVzOiAzcHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgfVxuLy8gfVxuXG4vLyAjc3luYzIge1xuLy8gICAub3dsLWl0ZW0ge1xuLy8gICAgIC5pdGVtIHtcbi8vICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4vLyAgICAgICBtYXJnaW46IDVweDtcbi8vICAgICAgIGNvbG9yOiAjRkZGO1xuLy8gICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4vLyAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgIGltZ3tcbi8vICAgICAgICAgb3BhY2l0eTogMC41XG4vLyAgICAgICB9XG4vLyAgICAgfSAgIFxuLy8gICAgICYuc3luY2VkIHtcbi8vICAgICAgIC5pdGVte1xuLy8gICAgICAgICBpbWcge1xuLy8gICAgICAgICAgIG9wYWNpdHk6IDFcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyAubW9kYWwuaW4ge1xuLy8gICAubW9kYWwtZGlhbG9nIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMHB4XG4vLyAgIH1cbiAgXG4vLyAgIC5tb2RhbC1jb250ZW50e1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweFxuLy8gICB9XG4gICAgXG4vLyAgICAgLm1vZGFsLWhlYWRlcntcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuLy8gICAgIH1cbi8vICAgfVxuICAgIFxuICAgIFxuXG4iLCJmb290ZXIuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9mb290ZXIucG5nJyk7XG4gIC5zb2NpYWwtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0LjNyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDEwJSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG4iLCJhIHtcbiAgY29sb3I6ICRwcmltYXJ5O1xuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMTAlKTtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMTAlKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAxMCUpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeSAhaW1wb3J0YW50O1xuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeSwgMTAlKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnksIDEwJSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYnRuLWRhcmsge1xuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbn1cblxuLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICRzZWNvbmRhcnkgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home.service */ "./src/app/home.service.ts");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");





let HomeComponent = class HomeComponent {
    constructor(api, pageScrollService, document) {
        this.api = api;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.categories = [];
        this.posts = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getPosts()
            .subscribe((res) => {
            this.posts = res;
            console.log(this.posts);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
        this.api.getCategories()
            .subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
    { type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_4__["PageScrollService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], HomeComponent);



/***/ }),

/***/ "./src/app/interceptors/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TokenInterceptor = class TokenInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log(error);
            if (error.status === 401) {
                this.router.navigate(['login']);
            }
            if (error.status === 400) {
                alert(error.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/notFound/not-found.component.scss":
/*!***************************************************!*\
  !*** ./src/app/notFound/not-found.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9ub3RGb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdEZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25vdEZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMyVcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMyU7XG59Il19 */");

/***/ }),

/***/ "./src/app/notFound/not-found.component.ts":
/*!*************************************************!*\
  !*** ./src/app/notFound/not-found.component.ts ***!
  \*************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notFound/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/notFound/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'post/';
let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPost(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched post by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getPost id=${id}`)));
    }
    addPost(post) {
        return this.http.post(apiUrl, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((prod) => console.log(`added post w/ id=${post.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addPost')));
    }
    updatePost(id, post) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`updated post id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePost')));
    }
    deletePost(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`deleted post id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deletePost')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/post/post-add/post-add.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/post/post-add/post-add.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\nlabel {\n  color: black;\n  max-width: 100%;\n}\n\nselect {\n  display: block;\n  padding: 10px;\n  width: 95%;\n  margin: 20px;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: red;\n  color: white;\n}\n\n.mat-flat-button:disabled {\n  margin: 15px 15px 0 15px;\n  background-color: #7c0000;\n  color: grey !important;\n}\n\n.mat-input-element, input, textarea {\n  padding: 10px;\n  border: 1px solid grey;\n  margin: 20px;\n  width: 95%;\n}\n\n.label {\n  margin: 10px;\n}\n\n.whatsThis {\n  cursor: pointer;\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9wb3N0L3Bvc3QtYWRkL3Bvc3QtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0L3Bvc3QtYWRkL3Bvc3QtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWFkZC9wb3N0LWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDEwJTtcbn1cblxubGFiZWwge1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIG1heC13aWR0aDoxMDAlXG59XG5cbnNlbGVjdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjQsIDAsIDApO1xuICAgIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCwgaW5wdXQsIHRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHdpZHRoOjk1JVxufVxuICAgIFxuLmxhYmVsIHtcbiAgICBtYXJnaW46IDEwcHhcbn1cblxuLndoYXRzVGhpcyB7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgY29sb3I6IG9yYW5nZVxufSIsIi5kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAwIDEwJTtcbn1cblxubGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtZmxhdC1idXR0b246ZGlzYWJsZWQge1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzAwMDA7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCwgaW5wdXQsIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogOTUlO1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi53aGF0c1RoaXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/post/post-add/post-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/post/post-add/post-add.component.ts ***!
  \*****************************************************/
/*! exports provided: MyErrorStateMatcher, PostAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAddComponent", function() { return PostAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");






/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let PostAddComponent = class PostAddComponent {
    constructor(router, api, catApi, formBuilder) {
        this.router = router;
        this.api = api;
        this.catApi = catApi;
        this.formBuilder = formBuilder;
        this.category = '';
        this.postTitle = '';
        this.postClient = '';
        this.postDesc = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
        this.categories = [];
    }
    ngOnInit() {
        this.getCategories();
        this.postForm = this.formBuilder.group({
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postClient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addPost(this.postForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/post/']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getCategories() {
        this.catApi.getCategories()
            .subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
PostAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
PostAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-add.component.scss */ "./src/app/post/post-add/post-add.component.scss")).default]
    })
], PostAddComponent);



/***/ }),

/***/ "./src/app/post/post-details/post-details.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/post/post-details/post-details.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 0 10%;\n}\n\n.posting {\n  background-color: white;\n  color: black !important;\n  padding: 20px;\n  border: 1px solid white;\n  border-radius: 10px;\n}\n\n.btn-block {\n  margin: 15px;\n  background-color: red;\n  color: white;\n  padding: 10px 10px 5px;\n}\n\n.btn-block:hover {\n  background-color: #a5a5a5;\n}\n\n.mat-flat-button {\n  margin: 15px;\n  background-color: grey;\n  color: white;\n}\n\n#dashboard .posting {\n  animation: fadein 1.5s;\n  -moz-animation: fadein 1.5s;\n  /* Firefox */\n  -webkit-animation: fadein 1.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 1.5s;\n  /* Opera */\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9wb3N0L3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3QvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNRLHVCQUFBO0VBQ0osdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUE2QixZQUFBO0VBQzdCLDhCQUFBO0VBQWdDLHNCQUFBO0VBQ2hDLHlCQUFBO0VBQTJCLFVBQUE7QUNJL0I7O0FERkE7RUFDSTtJQUNJLFVBQUE7RUNLTjtFREhFO0lBQ0ksVUFBQTtFQ0tOO0FBQ0Y7O0FES0E7RUFBNEIsc0JBQUE7RUFDeEI7SUFDSSxVQUFBO0VDT047RURMRTtJQUNJLFVBQUE7RUNPTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWRldGFpbHMvcG9zdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTAlO1xufVxuXG4ucG9zdGluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XG59XG5cbi5idG4tYmxvY2s6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuI2Rhc2hib2FyZCAucG9zdGluZyB7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIEZpcmVmb3ggKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMS41czsgLyogT3BlcmEgKi9cbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHsgLyogT3BlcmEgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuIiwiLmRhc2hib2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTAlO1xufVxuXG4ucG9zdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW46IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xufVxuXG4uYnRuLWJsb2NrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZGFzaGJvYXJkIC5wb3N0aW5nIHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxLjVzO1xuICAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgLyogT3BlcmEgKi9cbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogRmlyZWZveCAqL1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAvKiBPcGVyYSAqL1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/post/post-details/post-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/post/post-details/post-details.component.ts ***!
  \*************************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../post.service */ "./src/app/post.service.ts");




let PostDetailsComponent = class PostDetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.post = {
            category: '',
            id: '',
            postTitle: '',
            postClient: '',
            postDesc: '',
            updated: null
        };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getPostDetails(this.route.snapshot.params.id);
    }
    getPostDetails(id) {
        this.api.getPost(id)
            .subscribe((data) => {
            this.post = data;
            this.post.id = data._id;
            console.log(this.post);
            this.isLoadingResults = false;
        });
    }
    deletePost(id) {
        this.isLoadingResults = true;
        this.api.deletePost(id)
            .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/post']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
PostDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PostDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-details.component.scss */ "./src/app/post/post-details/post-details.component.scss")).default]
    })
], PostDetailsComponent);



/***/ }),

/***/ "./src/app/post/post-edit/post-edit.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/post/post-edit/post-edit.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 5% 10%;\n}\n\nlabel {\n  color: black;\n  max-width: 100%;\n}\n\nselect {\n  display: block;\n  padding: 10px;\n  width: 95%;\n  margin: 20px;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: grey;\n  color: white;\n}\n\n.mat-flat-button:disabled {\n  margin: 15px 15px 0 15px;\n  background-color: #7c0000;\n  color: grey !important;\n}\n\n.mat-input-element, input, textarea {\n  padding: 10px;\n  border: 1px solid grey;\n  margin: 20px;\n  width: 95%;\n}\n\n.label {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9wb3N0L3Bvc3QtZWRpdC9wb3N0LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3QvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVJO0VBQ0ksWUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LWVkaXQvcG9zdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDUlIDEwJTtcbn1cblxubGFiZWwge1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIG1heC13aWR0aDoxMDAlXG59XG5cbnNlbGVjdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtZmxhdC1idXR0b246ZGlzYWJsZWQge1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0LCAwLCAwKTtcbiAgICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQsIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB3aWR0aDo5NSVcbiAgICB9XG4gICAgXG4gICAgLmxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4XG4gICAgfSIsIi5kYXNoYm9hcmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiA1JSAxMCU7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbnNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjMDAwMDtcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50LCBpbnB1dCwgdGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/post/post-edit/post-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/post/post-edit/post-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: MyErrorStateMatcher, PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");






/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let PostEditComponent = class PostEditComponent {
    constructor(router, route, api, catApi, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.catApi = catApi;
        this.formBuilder = formBuilder;
        this.id = '';
        this.category = '';
        this.postTitle = '';
        this.postClient = '';
        this.postDesc = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
        this.categories = [];
    }
    ngOnInit() {
        this.getCategories();
        this.getPost(this.route.snapshot.params.id);
        this.postForm = this.formBuilder.group({
            postTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postClient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    getPost(id) {
        this.api.getPost(id).subscribe((data) => {
            this.id = data._id;
            this.postForm.setValue({
                postTitle: data.postTitle,
                category: data.category,
                postClient: data.postClient,
                postDesc: data.postDesc,
            });
        });
    }
    getCategories() {
        this.catApi.getCategories()
            .subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.updatePost(this.id, this.postForm.value)
            .subscribe((res) => {
            // const id = res.id;
            this.isLoadingResults = false;
            this.router.navigate(['/post/']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
PostEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-edit.component.scss */ "./src/app/post/post-edit/post-edit.component.scss")).default]
    })
], PostEditComponent);



/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\n  min-height: 600px;\n  background-color: white;\n  border-radius: 10px;\n  width: 98%;\n  margin: 10px auto;\n  padding: 2% 3%;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid white;\n  margin: 1em 0;\n  padding: 0;\n}\n\n.row {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.posting {\n  background-color: white;\n  color: black !important;\n  padding: 20px;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.posting:hover {\n  background-color: #a5a5a5;\n}\n\n.mat-flat-button {\n  margin: 15px 15px 0 15px;\n  background-color: grey;\n  color: white;\n}\n\n#dashboard .posting {\n  animation: fadein 1.5s;\n  -moz-animation: fadein 1.5s;\n  /* Firefox */\n  -webkit-animation: fadein 1.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 1.5s;\n  /* Opera */\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FER0E7RUFDSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUE2QixZQUFBO0VBQzdCLDhCQUFBO0VBQWdDLHNCQUFBO0VBQ2hDLHlCQUFBO0VBQTJCLFVBQUE7QUNHL0I7O0FEREE7RUFDSTtJQUNJLFVBQUE7RUNJTjtFREZFO0lBQ0ksVUFBQTtFQ0lOO0FBQ0Y7O0FETUE7RUFBNEIsc0JBQUE7RUFDeEI7SUFDSSxVQUFBO0VDTU47RURKRTtJQUNJLFVBQUE7RUNNTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIlIDMlO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlcjogMDsgXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbjogMWVtIDA7IFxuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0aW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBvc3Rpbmc6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1xufVxuXG5cbi5tYXQtZmxhdC1idXR0b24ge1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Rhc2hib2FyZCAucG9zdGluZyB7XG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMS41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIEZpcmVmb3ggKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMS41czsgLyogT3BlcmEgKi9cbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4geyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbn1cbkAtby1rZXlmcmFtZXMgZmFkZWluIHsgLyogT3BlcmEgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4iLCIuZGFzaGJvYXJkIHtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMiUgMyU7XG59XG5cbmhyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ucG9zdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBvc3Rpbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVhNWE1O1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNkYXNoYm9hcmQgLnBvc3Rpbmcge1xuICBhbmltYXRpb246IGZhZGVpbiAxLjVzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxLjVzO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtby1hbmltYXRpb246IGZhZGVpbiAxLjVzO1xuICAvKiBPcGVyYSAqL1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAvKiBGaXJlZm94ICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIE9wZXJhICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



let PostComponent = class PostComponent {
    constructor(api) {
        this.api = api;
        this.data = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getPosts()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/resume.service.ts":
/*!***********************************!*\
  !*** ./src/app/resume.service.ts ***!
  \***********************************/
/*! exports provided: ResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeService", function() { return ResumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'public/';
let ResumeService = class ResumeService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        return this.http.get(api + 'category')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Categories')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
    }
    getPosts() {
        return this.http.get(api + 'post')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPostsByCategory(id) {
        return this.http.get(api + 'bycategory/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPost(id) {
        return this.http.get(api + 'post/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched post by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getPost id=${id}`)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
ResumeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ResumeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ResumeService);



/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lobster&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Krona+One&display=swap\");\n#resume-bg, .videos {\n  background-color: #155d74;\n  margin: 0;\n  padding-top: 3%;\n  padding-bottom: 5%;\n  padding-left: 10%;\n  padding-right: 10%;\n  max-width: 100%;\n  -webkit-animation: fadeIn;\n          animation: fadeIn;\n}\n.row {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.col {\n  margin-right: 5% x;\n}\nh2 {\n  font-family: \"Lobster\", cursive;\n  text-align: center !important;\n  color: #1D809F !important;\n  text-shadow: 0 2px 10px #a8a8a8;\n  margin-bottom: 30px;\n}\nfooter.footer {\n  padding-top: 1rem;\n  padding-bottom: 1.5rem;\n  background-image: url('footer.png');\n}\nfooter.footer .social-link {\n  display: block;\n  max-width: 63px;\n  max-height: 63px;\n  line-height: 4.3rem;\n  font-size: 1.5rem;\n  background-color: #1D809F;\n  -webkit-transition: background-color 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out;\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\n}\nfooter.footer .social-link:hover {\n  background-color: #155d74;\n  text-decoration: none;\n  cursor: pointer;\n}\nh3, h4, h5 {\n  text-align: center !important;\n  font-family: \"Krona One\", sans-serif;\n}\n/* p {\n    text-align: center !important;\n} */\n.video-responsive {\n  overflow: hidden;\n  padding-bottom: 56.25%;\n  position: relative;\n  height: 0;\n}\n.video-responsive iframe {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.nav {\n  position: absolute;\n  left: 45%;\n  -webkit-transform: translate(-40%, 0);\n          transform: translate(-40%, 0);\n  text-align: center;\n  margin-bottom: 30px;\n  border-bottom: 1px white solid;\n}\n.nav-link {\n  font-family: \"Krona One\", sans-serif;\n  color: white;\n}\n.nav-link:hover, .nav-link.active {\n  text-transform: uppercase;\n  background-color: rgba(255, 255, 255, 0.6);\n  color: black;\n}\n#print-section, .buttons {\n  margin: 1% auto;\n  background-color: white;\n  padding: 5%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);\n}\n.image-wrapper {\n  width: 350px !important;\n  height: 180px !important;\n  overflow: hidden !important;\n  margin: 10px auto;\n}\n.image-wrapper span {\n  display: block !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1tZXIvRG9jdW1lbnRzL2dhbGxpbmRvQW5ndWxhci9jbGllbnQvc3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJFQUFBO0FBQ0EsNkVBQUE7QUFNUjtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEseUJBQUE7VUFBQSxpQkFBQTtBQ0xKO0FEUUE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDTEo7QURRQTtFQUNJLGtCQUFBO0FDTEo7QURRQTtFQUNJLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFFJO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FDTFI7QURRTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzREFBQTtFQUNBLDhDQUFBO0VBRUEsMENBQUE7QUNMUjtBRFFNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNMUjtBRFNBO0VBQ0ksNkJBQUE7RUFDQSxvQ0FBQTtBQ05KO0FEUUE7O0dBQUE7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNOSjtBRFFBO0VBQ0ksT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNMSjtBRFFBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0FDTEo7QURRQTtFQUNJLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FDTEo7QURRQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQ0xKO0FEUUE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Lcm9uYStPbmUmZGlzcGxheT1zd2FwJyk7XG5cbi8vIGJvZHkge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTI4LCAxNTkpICFpbXBvcnRhbnRcbi8vIH1cblxuI3Jlc3VtZS1iZywgLnZpZGVvcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NWQ3NDsgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctdG9wOiAzJTsgXG4gICAgcGFkZGluZy1ib3R0b206IDUlOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTsgXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIG1heC13aWR0aDoxMDAlO1xuXG4gICAgYW5pbWF0aW9uOiBmYWRlSW47XG59XG5cbi5yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG59XG5cbi5jb2wge1xuICAgIG1hcmdpbi1yaWdodDogNSV4O1xufVxuXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzFEODA5RiAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYigxNjgsIDE2OCwgMTY4KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG59XG5cbiAgICBmb290ZXIuZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9mb290ZXIucG5nJyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvb3Rlci5mb290ZXIgLnNvY2lhbC1saW5rIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC13aWR0aDogNjNweDtcbiAgICAgICAgbWF4LWhlaWdodDogNjNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQuM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDgwOUY7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9vdGVyLmZvb3RlciAuc29jaWFsLWxpbms6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU1ZDc0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuXG5oMywgaDQsIGg1IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ0tyb25hIE9uZScsIHNhbnMtc2VyaWY7XG59XG4vKiBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0gKi9cblxuLnZpZGVvLXJlc3BvbnNpdmV7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIHBhZGRpbmctYm90dG9tOjU2LjI1JTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBoZWlnaHQ6MDtcbn1cbi52aWRlby1yZXNwb25zaXZlIGlmcmFtZXtcbiAgICBsZWZ0OjA7XG4gICAgdG9wOjA7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cbn1cblxuLm5hdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAwKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggd2hpdGUgc29saWQ7XG59XG5cbi5uYXYtbGluayB7XG4gICAgZm9udC1mYW1pbHk6ICdLcm9uYSBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOndoaXRlXG59XG5cbi5uYXYtbGluazpob3ZlciwgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBjb2xvcjpibGFja1xufVxuXG4jcHJpbnQtc2VjdGlvbiwgLmJ1dHRvbnMge1xuICAgIG1hcmdpbjogMSUgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOjUlO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLDAsMCwwLjYpO1xufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCBhdXRvOyBcbn1cblxuLmltYWdlLXdyYXBwZXIgc3BhbiB7XG4gICAgZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Lcm9uYStPbmUmZGlzcGxheT1zd2FwXCIpO1xuI3Jlc3VtZS1iZywgLnZpZGVvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTVkNzQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiBmYWRlSW47XG59XG5cbi5yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbCB7XG4gIG1hcmdpbi1yaWdodDogNSUgeDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFEODA5RiAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCAjYThhOGE4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5mb290ZXIuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZm9vdGVyLnBuZ1wiKTtcbn1cblxuZm9vdGVyLmZvb3RlciAuc29jaWFsLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA2M3B4O1xuICBtYXgtaGVpZ2h0OiA2M3B4O1xuICBsaW5lLWhlaWdodDogNC4zcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEODA5RjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5mb290ZXIuZm9vdGVyIC5zb2NpYWwtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTVkNzQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oMywgaDQsIGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIktyb25hIE9uZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0gKi9cbi52aWRlby1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi52aWRlby1yZXNwb25zaXZlIGlmcmFtZSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggd2hpdGUgc29saWQ7XG59XG5cbi5uYXYtbGluayB7XG4gIGZvbnQtZmFtaWx5OiBcIktyb25hIE9uZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYtbGluazpob3ZlciwgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jcHJpbnQtc2VjdGlvbiwgLmJ1dHRvbnMge1xuICBtYXJnaW46IDElIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1JTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmltYWdlLXdyYXBwZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _resume_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume.service */ "./src/app/resume.service.ts");



let ResumeComponent = class ResumeComponent {
    constructor(api) {
        this.api = api;
        this.posts = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getPosts()
            .subscribe((res) => {
            this.posts = res;
            console.log(this.posts);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
ResumeComponent.ctorParameters = () => [
    { type: _resume_service__WEBPACK_IMPORTED_MODULE_2__["ResumeService"] }
];
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")).default]
    })
], ResumeComponent);



/***/ }),

/***/ "./src/app/sanitize-html.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/sanitize-html.pipe.ts ***!
  \***************************************/
/*! exports provided: sanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeHtmlPipe", function() { return sanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let sanitizeHtmlPipe = class sanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value) {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
};
sanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
sanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sanitizeHtml' })
], sanitizeHtmlPipe);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/summer/Documents/gallindoAngular/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map