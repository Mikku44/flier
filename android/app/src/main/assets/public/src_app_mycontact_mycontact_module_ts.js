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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mycontact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mycontact.page.html?ngResource */ 6047);
/* harmony import */ var _mycontact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mycontact.page.scss?ngResource */ 4194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.module */ 6747);







let MycontactPage = class MycontactPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.db = _app_module__WEBPACK_IMPORTED_MODULE_3__.AppModule.db;
    }
    ngOnInit() { }
    gotoPrevPage() {
        this.navCtrl.navigateBack('tabs');
    }
    gotoContactPage(title) {
        this.setData(title);
        this.navCtrl.navigateBack('send-file');
    }
    setData(detail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.db, 'contact'), {
                date: new Date(),
                detail,
            });
        });
    }
};
MycontactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
MycontactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = ".icon {\n  font-size: 100px;\n}\n\n.font {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.textarea {\n  background: var(--ion-color-primary-contrast);\n  border-radius: 10px;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y29udGFjdC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXE1vYmlsZSUyMEFwcFxcZmxpZXJcXHNyY1xcYXBwXFxteWNvbnRhY3RcXG15Y29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQyxnQkFBQTtBQ0REOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFQTtFQUNFLDZDQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0FDQUYiLCJmaWxlIjoibXljb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xyXG5cclxuIC8vIGhlaWdodDogMTAwO1xyXG4gZm9udC1zaXplOiAxMDBweDtcclxufVxyXG4uZm9udHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGV4dGFyZWF7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6ODAlO1xyXG5cclxuXHJcbn1cclxuIiwiLmljb24ge1xuICBmb250LXNpemU6IDEwMHB4O1xufVxuXG4uZm9udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA4MCU7XG59Il19 */";

/***/ }),

/***/ 6047:
/*!**********************************************************!*\
  !*** ./src/app/mycontact/mycontact.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"gotoPrevPage()\">\r\n      <h1><ion-icon class=\"white\" name=\"chevron-back-outline\"></ion-icon></h1>\r\n    </ion-buttons>\r\n    <ion-title align=\"center\" >Contact us</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"font white\">\r\n    <ion-icon name=\"rocket-outline\" class=\"icon\"></ion-icon>Contact Flier\r\n  </div>\r\n  <ion-row class='ion-justify-content-center'>\r\n\r\n    <ion-textarea\r\n    #titleInput\r\n      class=\"textarea \"\r\n      cols=\"5\"\r\n      rows=\"10\"\r\n      placeholder=\"Type something right here to tell us...\"\r\n      [clearOnEdit]=\"true\"\r\n    >\r\n  </ion-textarea>\r\n</ion-row>\r\n\r\n  <!-- <ion-button expand=\"full\" shape=\"round\" (click)=\"gotoPrevPage()\"\r\n    >Back</ion-button\r\n  > -->\r\n\r\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"gotoContactPage(titleInput.value)\"\r\n    >Send File</ion-button\r\n  >\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mycontact_mycontact_module_ts.js.map