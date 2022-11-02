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
                            this.router.navigate(['/tabs']);
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

module.exports = ".toolbar-title {\n  display: flex;\n}\n\n.icon {\n  font-size: 20vh;\n}\n\n.textdes {\n  font-size: 2vw;\n}\n\n.btn {\n  width: 92%;\n}\n\n.content {\n  background-color: #131313;\n  color: white;\n  height: 43vh;\n  border-radius: 20px 20px 0 0;\n}\n\n.item {\n  padding: 10px;\n  width: 100%;\n  border-radius: 40px;\n  text-align: center;\n  display: flex;\n}\n\n.type {\n  margin: 0;\n  padding: 20px;\n  background: #434343;\n  border-radius: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSnVuaW9yJTIwKDMpc2Vtc2V0ZXIlMjAxXFw4NzEtMjI2JTIwTU9CSUxFJTIwQVBQTElDQVRJT04lMjBERVZFTE9QTUVOVFxcNjMyMDYxMDAxMFxcTWluaXByb2plY3Q2NVxcZmxpZXJcXHNyY1xcYXBwXFxkb3dubG9hZFxcZG93bmxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNJRiIsImZpbGUiOiJkb3dubG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjB2aDtcclxufVxyXG4udGV4dGRlcyB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA0M3ZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czo0MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLnR5cGV7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIGJhY2tncm91bmQ6IzQzNDM0MztcclxuICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbn1cclxuIiwiLnRvb2xiYXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjB2aDtcbn1cblxuLnRleHRkZXMge1xuICBmb250LXNpemU6IDJ2dztcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA5MiU7XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnR5cGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM0MzQzNDM7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59Il19 */";

/***/ }),

/***/ 5178:
/*!********************************************************!*\
  !*** ./src/app/download/download.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <meta name=\"color-scheme\" content=\"light dark\" />\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <h1 class=\"ion-text-center\">Flier</h1>\r\n      <!-- <ion-icon name=\"chatbubbles-outline\"></ion-icon> -->\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Download</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n      <ion-col>\r\n        <div class=\"ion-text-center\">\r\n          <ion-icon class=\"icon\" name=\"cloud-download-outline\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"content\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-card class=\"item\">\r\n        <ion-card class=\"type\"> </ion-card>\r\n        <ion-text>filename.jpg</ion-text>\r\n\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-fab class=\"btn\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-button\r\n      color=\"danger\"\r\n      expand=\"full\"\r\n      (click)=\"presentAlert()\"\r\n      shape=\"round\"\r\n      >Cancel</ion-button\r\n    >\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_download_download_module_ts.js.map