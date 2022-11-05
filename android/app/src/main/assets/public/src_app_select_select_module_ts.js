"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select_select_module_ts"],{

/***/ 9746:
/*!*************************************************!*\
  !*** ./src/app/select/select-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPageRoutingModule": () => (/* binding */ SelectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.page */ 7465);




const routes = [
    {
        path: '',
        component: _select_page__WEBPACK_IMPORTED_MODULE_0__.SelectPage
    }
];
let SelectPageRoutingModule = class SelectPageRoutingModule {
};
SelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectPageRoutingModule);



/***/ }),

/***/ 6028:
/*!*****************************************!*\
  !*** ./src/app/select/select.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPageModule": () => (/* binding */ SelectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _select_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-routing.module */ 9746);
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.page */ 7465);







let SelectPageModule = class SelectPageModule {
};
SelectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectPageRoutingModule
        ],
        declarations: [_select_page__WEBPACK_IMPORTED_MODULE_1__.SelectPage]
    })
], SelectPageModule);



/***/ }),

/***/ 7465:
/*!***************************************!*\
  !*** ./src/app/select/select.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPage": () => (/* binding */ SelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.page.html?ngResource */ 4779);
/* harmony import */ var _select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.page.scss?ngResource */ 3214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SelectPage = class SelectPage {
    constructor() { }
    ngOnInit() {
    }
};
SelectPage.ctorParameters = () => [];
SelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-select',
        template: _select_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectPage);



/***/ }),

/***/ 3214:
/*!****************************************************!*\
  !*** ./src/app/select/select.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4779:
/*!****************************************************!*\
  !*** ./src/app/select/select.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>select</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_select_select_module_ts.js.map