"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 3440:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 3440);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 9184);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 6747);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let Tab4Page = class Tab4Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule.app);
        this.test();
    }
    ngOnInit() { }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_4__.Device.getId();
            this.uid = info.uuid;
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.db, 'users', this.uid), { includeMetadataChanges: true }, (data) => {
                console.log(this.uid);
                console.log(data.data());
                this.numOfSize = data.data().numOfSize;
                this.numOfSent = data.data().numOfSent;
                this.numOfSent = data.data().numOfSent;
                this.numOfRev = data.data().numOfRev;
                this.numOfSRev = data.data().numOfSRev;
                this.percent = (this.numOfSize * 100) / 10240;
            });
        });
    }
    gotoContactPage() {
        this.navCtrl.navigateForward('mycontact');
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  padding: 30px;\n  border-radius: 10px;\n}\n\n.value {\n  aspect-ratio: 1/1;\n  padding: 25%;\n  margin: 2px;\n  border-radius: 10px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n}\n\n.bg {\n  background-color: #ed5252;\n}\n\n.storage {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxNb2JpbGUlMjBBcHBcXGZsaWVyXFxzcmNcXGFwcFxcdGFiNFxcdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUVFLGlCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBwYWRkaW5nOjMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuLnZhbHVlIHtcclxuICAvLyB3aWR0aDogMzB2aDtcclxuICBhc3BlY3QtcmF0aW86IDEvMTtcclxuXHJcbiAgcGFkZGluZzogMjUlO1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIC8vIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5mbGV4e1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZWQ1MjUyO1xyXG59XHJcbi5zdG9yYWdle1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG4iLCJpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi52YWx1ZSB7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBwYWRkaW5nOiAyNSU7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1MjUyO1xufVxuXG4uc3RvcmFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */";

/***/ }),

/***/ 9184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title size=\"large\" align=\"center\"><h1>History</h1> </ion-title>\r\n    <ion-buttons\r\n       class=\"contact\"\r\n       (click)=\"gotoContactPage()\"\r\n       slot=\"end\"\r\n       color=\"light\"\r\n     >\r\n       <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content\" [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar class=\"content\">\r\n      <ion-title size=\"large\">History</ion-title>\r\n            <ion-button\r\n        class=\"contact\"\r\n        (click)=\"gotoContactPage()\"\r\n        slot=\"end\"\r\n        color=\"light\"\r\n      >\r\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-card><ion-card-title>Device info </ion-card-title>\r\n    <ion-card-content>Device uuid: {{uid}}</ion-card-content>\r\n    <ion-card-content>Device name: {{uid}}</ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <div>\r\n      <div>Storage in used</div>\r\n      <div>{{numOfSize}}MB from 10GB/Day</div>\r\n    </div>\r\n    <div><div>{{percent| number:'1.2-2' }}%</div></div>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-title>Sent</ion-card-title>\r\n    <ion-card-content class=\"flex\">\r\n      <div class=\"value pink\">{{numOfSent}} files</div>\r\n      <div class=\"value purple\">{{numOfSize}} MB</div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-title>Receive</ion-card-title>\r\n    <ion-card-content class=\"flex\">\r\n      <div class=\"value yellow\">{{numOfRev}} Files</div>\r\n      <div class=\"value pink\">{{numOfSRev}} MB</div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map