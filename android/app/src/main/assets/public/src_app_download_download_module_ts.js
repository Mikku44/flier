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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _download_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.page.html?ngResource */ 5178);
/* harmony import */ var _download_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.page.scss?ngResource */ 3258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ 9058);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.module */ 6747);












let DownloadPage = class DownloadPage {
    constructor(alertController, navCtrl, router) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.db = _app_module__WEBPACK_IMPORTED_MODULE_5__.AppModule.db;
        this.progress = 0;
        setInterval(() => {
            this.progress += 0.01;
            if (this.progress > 1) {
                setTimeout(() => {
                    this.progress = 0;
                }, 1000);
                this.navCtrl.navigateBack('tabs/tab3');
            }
        }, 50);
        try {
            this.fetchData();
            console.log('no error');
        }
        catch (e) {
            // this.navCtrl.navigateBack('tabs/tab3');
            console.log('error');
        }
    }
    ngOnInit() { }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Warning',
                subHeader: '',
                message: 'Do you want to cancel this process?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                        handler: () => {
                            console.log('cancel');
                        },
                    },
                    {
                        text: 'Accept',
                        role: 'confirm',
                        handler: () => {
                            this.navCtrl.navigateBack('tabs/tab3');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    download() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_3__.getApp)();
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(firebaseApp, 'gs://flier-4735f.appspot.com/');
            const starsRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `upload/${this.file}`);
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(starsRef)
                .then((url) => {
                // Insert url into an <img> tag to "download"
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
                console.log(url);
            })
                .catch((error) => {
                switch (error.code) {
                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
                }
            });
        });
    }
    fetchData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.db, 'files'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('receiver', '==', 'test'));
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(q, (querySnapshot) => {
                const files = [];
                querySnapshot.forEach((data) => {
                    if (data.data().status === 'not') {
                        files.push(data.data().name);
                        this.file = data.data().name;
                        this.download();
                        this.updateData(data.id);
                    }
                });
                console.log('Current files : ', files.join(', '));
            });
        });
    }
    updateData(document) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.db, 'files', document);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(docRef, { status: 'yes' });
        });
    }
};
DownloadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
DownloadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

module.exports = ".icon {\n  font-size: 12vh;\n}\n\n.textdes {\n  font-size: 2vw;\n}\n\n.btn {\n  width: 92%;\n  position: fixed;\n  bottom: 20px;\n}\n\n.content {\n  padding: 20px;\n  background: #131313;\n  color: white;\n  height: 100vh;\n  border-radius: 20px 20px 0 0;\n}\n\n.item {\n  padding: 10px;\n  border-radius: 40px;\n  background: white;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n}\n\n.circle {\n  background: #131313;\n  border-radius: 100%;\n  padding: 15px;\n}\n\nion-progress-bar {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcTW9iaWxlJTIwQXBwXFxmbGllclxcc3JjXFxhcHBcXGRvd25sb2FkXFxkb3dubG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDTUY7O0FESkE7RUFDRSxVQUFBO0FDT0YiLCJmaWxlIjoiZG93bmxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJ2aDtcclxufVxyXG4udGV4dGRlcyB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDkyJTtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBib3R0b206MjBweDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxMzEzMTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNpcmNsZXtcclxuICBiYWNrZ3JvdW5kOiMxMzEzMTM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuaW9uLXByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4iLCIuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJ2aDtcbn1cblxuLnRleHRkZXMge1xuICBmb250LXNpemU6IDJ2dztcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA5MiU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxMzEzMTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbn1cblxuLml0ZW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzEzMTMxMztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiA4MCU7XG59Il19 */";

/***/ }),

/***/ 5178:
/*!********************************************************!*\
  !*** ./src/app/download/download.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <meta name=\"color-scheme\" content=\"light dark\" />\n  <ion-toolbar>\n    <ion-title>\n      <h1 class=\"ion-text-center\">Flier</h1>\n      <!-- <ion-icon name=\"chatbubbles-outline\"></ion-icon> -->\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Download</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <ion-icon class=\"icon\" name=\"cloud-download-outline\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"content\">\n    <ion-text>Download List</ion-text>\n    <ion-card class=\"item\">\n\n      <div class=\"flex\">\n        <div class=\"circle\">.....</div>\n        <div style=\"width: 100vw\">\n          <ion-row class=\"ion-justify-content-center\">{{this.file}}</ion-row\n          ><ion-row class=\"ion-justify-content-center ion-margin-top\"\n            ><ion-progress-bar [value]=\"progress\"></ion-progress-bar\n          ></ion-row>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n  <ion-fab class=\"btn\" horizontal=\"start\" slot=\"fixed\">\n    <ion-button\n      color=\"danger\"\n      expand=\"full\"\n      (click)=\"presentAlert()\"\n      shape=\"round\">Cancel</ion-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_download_download_module_ts.js.map