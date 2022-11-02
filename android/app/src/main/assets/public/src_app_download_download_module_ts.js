"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_download_download_module_ts"],{

/***/ 3204:
/*!*****************************************************!*\
  !*** ./src/app/download/download-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageRoutingModule": () => (/* binding */ DownloadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.page */ 7445);




const routes = [
    {
        path: '',
        component: _download_page__WEBPACK_IMPORTED_MODULE_0__.DownloadPage
    }
];
let DownloadPageRoutingModule = class DownloadPageRoutingModule {
};
DownloadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DownloadPageRoutingModule);



/***/ }),

/***/ 7976:
/*!*********************************************!*\
  !*** ./src/app/download/download.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPageModule": () => (/* binding */ DownloadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _download_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-routing.module */ 3204);
/* harmony import */ var _download_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page */ 7445);







let DownloadPageModule = class DownloadPageModule {
};
DownloadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _download_routing_module__WEBPACK_IMPORTED_MODULE_0__.DownloadPageRoutingModule
        ],
        declarations: [_download_page__WEBPACK_IMPORTED_MODULE_1__.DownloadPage]
    })
], DownloadPageModule);



/***/ }),

/***/ 7445:
/*!*******************************************!*\
  !*** ./src/app/download/download.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadPage": () => (/* binding */ DownloadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _download_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.page.html?ngResource */ 5178);
/* harmony import */ var _download_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page.scss?ngResource */ 3258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






let DownloadPage = class DownloadPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
        this.handlerMessage = '';
        this.roleMessage = '';
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Warning',
                subHeader: '',
                message: 'Do you want to receive file from {other Device}?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                        handler: () => {
                            this.handlerMessage = 'Alert cancaled';
                        },
                    },
                    {
                        text: 'Accept',
                        role: 'confirm',
                        handler: () => {
                            this.router.navigate(['/tabs/tab3']);
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
            // Download a file:
            function downloadFunc() {
                const url = 'http://www.example.com/file.pdf';
                this.fileTransfer.download(url, this.dataDirectory + 'file.pdf').then((entry) => {
                    console.log('download complete: ' + entry.toURL());
                }, (error) => {
                    // handle error
                });
            }
            //view more at https://ionicframework.com/docs/native/file-transfer
            // Abort active transfer: cancel
            // this.fileTransfer.abort();
        });
    }
    ngOnInit() { }
};
DownloadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
DownloadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-download',
        template: _download_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_download_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DownloadPage);



/***/ }),

/***/ 3258:
/*!********************************************************!*\
  !*** ./src/app/download/download.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".toolbar-title {\n  display: flex;\n}\n\n.icon {\n  font-size: 20vh;\n}\n\n.textdes {\n  font-size: 2vw;\n}\n\n.btn {\n  width: 92%;\n}\n\n.content {\n  background-color: #131313;\n  color: white;\n  height: 43vh;\n  border-radius: 20px 20px 0 0;\n}\n\n.item {\n  padding: 10px;\n  width: 100%;\n  border-radius: 40px;\n  text-align: center;\n  display: flex;\n}\n\n.type {\n  margin: 0;\n  padding: 20px;\n  background: #434343;\n  border-radius: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcTW9iaWxlJTIwQXBwXFxmbGllclxcc3JjXFxhcHBcXGRvd25sb2FkXFxkb3dubG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNJRjs7QUREQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0lGIiwiZmlsZSI6ImRvd25sb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHZoO1xyXG59XHJcbi50ZXh0ZGVzIHtcclxuICBmb250LXNpemU6IDJ2dztcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQzdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4udHlwZXtcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgYmFja2dyb3VuZDojNDM0MzQzO1xyXG4gIGJvcmRlci1yYWRpdXM6NDBweDtcclxufVxyXG4iLCIudG9vbGJhci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAyMHZoO1xufVxuXG4udGV4dGRlcyB7XG4gIGZvbnQtc2l6ZTogMnZ3O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDkyJTtcbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDN2aDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbn1cblxuLml0ZW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udHlwZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzQzNDM0MztcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbn0iXX0= */";

/***/ }),

/***/ 5178:
/*!********************************************************!*\
  !*** ./src/app/download/download.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <meta name=\"color-scheme\" content=\"light dark\" />\n  <ion-toolbar>\n    <ion-title>\n      <h1 class=\"ion-text-center\">Flier</h1>\n      <!-- <ion-icon name=\"chatbubbles-outline\"></ion-icon> -->\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Download</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <ion-icon class=\"icon\" name=\"cloud-download-outline\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"content\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-card class=\"item\">\n        <ion-card class=\"type\"> </ion-card>\n        <ion-text>filename.jpg</ion-text>\n\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab class=\"btn\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-button\n      color=\"danger\"\n      expand=\"full\"\n      (click)=\"presentAlert()\"\n      shape=\"round\"\n      >Cancel</ion-button\n    >\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_download_download_module_ts.js.map