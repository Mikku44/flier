"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_send-file_send-file_module_ts"],{

/***/ 8534:
/*!*******************************************************!*\
  !*** ./src/app/send-file/send-file-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendFilePageRoutingModule": () => (/* binding */ SendFilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _send_file_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-file.page */ 5792);




const routes = [
    {
        path: '',
        component: _send_file_page__WEBPACK_IMPORTED_MODULE_0__.SendFilePage
    }
];
let SendFilePageRoutingModule = class SendFilePageRoutingModule {
};
SendFilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendFilePageRoutingModule);



/***/ }),

/***/ 9521:
/*!***********************************************!*\
  !*** ./src/app/send-file/send-file.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendFilePageModule": () => (/* binding */ SendFilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _send_file_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-file-routing.module */ 8534);
/* harmony import */ var _send_file_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-file.page */ 5792);







let SendFilePageModule = class SendFilePageModule {
};
SendFilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _send_file_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendFilePageRoutingModule
        ],
        declarations: [_send_file_page__WEBPACK_IMPORTED_MODULE_1__.SendFilePage]
    })
], SendFilePageModule);



/***/ }),

/***/ 5792:
/*!*********************************************!*\
  !*** ./src/app/send-file/send-file.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendFilePage": () => (/* binding */ SendFilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _send_file_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-file.page.html?ngResource */ 5767);
/* harmony import */ var _send_file_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-file.page.scss?ngResource */ 4073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let SendFilePage = class SendFilePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    gotoPrevPage() {
        this.navCtrl.navigateRoot('tabs');
    }
};
SendFilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
SendFilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-send-file',
        template: _send_file_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_send_file_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendFilePage);



/***/ }),

/***/ 4073:
/*!**********************************************************!*\
  !*** ./src/app/send-file/send-file.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  width: 100px;\n  height: 100px;\n  text-align: center;\n}\n\n.iconsend {\n  background: white;\n  border: 1px solid white;\n  aspect-ratio: 1/1;\n  border-radius: 100%;\n  display: flex;\n  box-shadow: 20px 2px 2px 2px 2px;\n  align-items: center;\n  justify-content: space-evenly;\n  align-content: stretch;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  margin: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtZmlsZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXE1vYmlsZSUyMEFwcFxcZmxpZXJcXHNyY1xcYXBwXFxzZW5kLWZpbGVcXHNlbmQtZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDRixnQ0FBQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDRixXQUFBO0FDRUYiLCJmaWxlIjoic2VuZC1maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWNvbnNlbmR7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBhc3BlY3QtcmF0aW86IDEvMTsvL+C4geC4s+C4q+C4meC4lOC4guC4meC4suC4lOC4quC4teC5iOC5gOC4q+C4peC4teC5iOC4ouC4oeC4iOC4seC4leC4uOC4o+C4seC4qjEvMeC5g+C4q+C5ieC5gOC4l+C5iOC4suC4geC4seC4mSAxNi854Lic4Li34LiZ4Lic4LmJ4LiyXHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTsvL+C5g+C4q+C5ieC5gOC4m+C5h+C4meC4p+C4h+C4geC4peC4oSDguKLguLTguYjguYnguIfguYDguKLguK3guLDguKLguLTguYjguIfguIHguKXguKFcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5ib3gtc2hhZG93OiAyMHB4IDJweCAycHggMnB4IDJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgbWFyZ2luOiAxMCU7XHJcbn1cclxuXHJcbiIsIi5pY29uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uc2VuZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDIwcHggMnB4IDJweCAycHggMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbjogMTAlO1xufSJdfQ== */";

/***/ }),

/***/ 5767:
/*!**********************************************************!*\
  !*** ./src/app/send-file/send-file.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Filer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"ion-justify-content-center ion-margin-top\"\r\n    >Contact Flier</ion-row\r\n  >\r\n  <div class=\"iconsend\">\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n      <ion-icon class=\"icon\" name=\"rocket-outline\" class=\"icon\"></ion-icon>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">Send</ion-row>\r\n  </div>\r\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"gotoPrevPage()\"\r\n    >finish\r\n  </ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_send-file_send-file_module_ts.js.map