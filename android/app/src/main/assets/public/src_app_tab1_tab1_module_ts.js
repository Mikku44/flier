"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 1088:
/*!**********************************!*\
  !*** ./src/app/services/file.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetFile": () => (/* binding */ GetFile)
/* harmony export */ });
class GetFile {
    constructor() { }
    static fileCollect(fileChangeEvent) {
        this.file = fileChangeEvent.target.files[0];
    }
}


/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ 6747);
/* harmony import */ var _services_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/file */ 1088);









let Tab1Page = class Tab1Page {
    constructor(navCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_app_module__WEBPACK_IMPORTED_MODULE_4__.AppModule.app);
    }
    onFileChange(fileChangeEvent) {
        this.file = fileChangeEvent.target.files[0];
        _services_file__WEBPACK_IMPORTED_MODULE_5__.GetFile.fileCollect(fileChangeEvent);
    }
    downloadPage() {
        this.navCtrl.navigateForward('upload');
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const formData = new FormData();
                formData.append('files', this.file, this.file.name);
            }
            catch (e) {
                this.presentToast(e);
            }
        });
    }
    gotoContactPage() {
        this.navCtrl.navigateForward('mycontact');
    }
    presentToast(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<ion-icon name="rocket-outline"></ion-icon> Flier [' +
                    error +
                    ']<ion-row class="ion-justify-content-center">You not selected file.</ion-row>',
                duration: 1500,
                position: 'top',
            });
            yield toast.present();
        });
    }
    setData(detail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.db, 'users', `${info.uuid}`), {
                numOfSent: 0,
                numOfSize: 0,
                numOfSRev: 0,
                numOfRev: 0,
                receive: 'on',
            });
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".btn {\n  width: 92%;\n}\n\n.contact {\n  right: 0;\n  position: fixed;\n}\n\nion-toolbar ion-icon {\n  font-size: 28px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxNb2JpbGUlMjBBcHBcXGZsaWVyXFxzcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxRQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNFRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgd2lkdGg6OTIlO1xyXG59XHJcbi5jb250YWN0e1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIgaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbiIsIi5idG4ge1xuICB3aWR0aDogOTIlO1xufVxuXG4uY29udGFjdCB7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      class=\"contact\"\r\n      (click)=\"gotoContactPage()\"\r\n      slot=\"end\"\r\n      color=\"light\"\r\n    >\r\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title align=\"center\"><h1> Flier </h1></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"content\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-button\r\n        class=\"contact\"\r\n        (click)=\"gotoContactPage()\"\r\n        slot=\"end\"\r\n        color=\"light\"\r\n      >\r\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-title size=\"large\" vertical=\"center\" horizontal=\"start\" class=\"font\"\r\n        >Flier</ion-title\r\n      >\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-fab vertical=\"center\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-button>\r\n      <ion-icon name=\"laptop-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-fab>\r\n  <ion-fab class=\"btn\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-button\r\n      expand=\"full\"\r\n      (click)=\"downloadPage()\"\r\n      shape=\"round\"\r\n      >Send</ion-button\r\n    >\r\n  </ion-fab>\r\n\r\n  <div id=\"container\">\r\n    <ion-item>\r\n      <input type=\"file\" (change)=\"onFileChange($event)\" required />\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map