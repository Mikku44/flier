"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mycontact_mycontact_module_ts"],{

/***/ 2102:
/*!*******************************************************!*\
  !*** ./src/app/mycontact/mycontact-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MycontactPageRoutingModule": () => (/* binding */ MycontactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _mycontact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycontact.page */ 741);




const routes = [
    {
        path: '',
        component: _mycontact_page__WEBPACK_IMPORTED_MODULE_0__.MycontactPage
    }
];
let MycontactPageRoutingModule = class MycontactPageRoutingModule {
};
MycontactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MycontactPageRoutingModule);



/***/ }),

/***/ 2449:
/*!***********************************************!*\
  !*** ./src/app/mycontact/mycontact.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MycontactPageModule": () => (/* binding */ MycontactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mycontact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycontact-routing.module */ 2102);
/* harmony import */ var _mycontact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycontact.page */ 741);







let MycontactPageModule = class MycontactPageModule {
};
MycontactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mycontact_routing_module__WEBPACK_IMPORTED_MODULE_0__.MycontactPageRoutingModule
        ],
        declarations: [_mycontact_page__WEBPACK_IMPORTED_MODULE_1__.MycontactPage]
    })
], MycontactPageModule);



/***/ }),

/***/ 741:
/*!*********************************************!*\
  !*** ./src/app/mycontact/mycontact.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MycontactPage": () => (/* binding */ MycontactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mycontact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycontact.page.html?ngResource */ 6047);
/* harmony import */ var _mycontact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycontact.page.scss?ngResource */ 4194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let MycontactPage = class MycontactPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    gotoPrevPage() {
        this.navCtrl.navigateBack('tabs');
    }
};
MycontactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
MycontactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mycontact',
        template: _mycontact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mycontact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MycontactPage);



/***/ }),

/***/ 4194:
/*!**********************************************************!*\
  !*** ./src/app/mycontact/mycontact.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  font-size: 100px;\n}\n\n.font {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.textarea {\n  background: rgb(235, 235, 235);\n  border: 1px solid black;\n  width: 100;\n  height: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y29udGFjdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXE1vYmlsZSUyMEFwcFxcZmxpZXJcXHNyY1xcYXBwXFxteWNvbnRhY3RcXG15Y29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQyxnQkFBQTtBQ0REOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6Im15Y29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbntcclxuXHJcbiAvLyBoZWlnaHQ6IDEwMDtcclxuIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuLmZvbnR7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRleHRhcmVhe1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDoxMDA7XHJcbiAgaGVpZ2h0OjEwMDtcclxufVxyXG4iLCIuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG5cbi5mb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDA7XG4gIGhlaWdodDogMTAwO1xufSJdfQ== */";

/***/ }),

/***/ 6047:
/*!**********************************************************!*\
  !*** ./src/app/mycontact/mycontact.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>mycontact</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"font\"><ion-icon name=\"rocket-outline\" class=\"icon\"></ion-icon>Contact Flier\r\n</div>\r\n  <ion-textarea class=\"textarea\" color=\"dark\" cols=\"5\" rows=\"10\"\r\n    placeholder=\"Enter text, leave the textarea, come back, and type to clear\"\r\n    [clearOnEdit]=\"true\">\r\n  </ion-textarea>\r\n\r\n  <ion-button expand=\"full\" shape=\"round\"\r\n              (click)=\"gotoPrevPage()\">Back</ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mycontact_mycontact_module_ts.js.map