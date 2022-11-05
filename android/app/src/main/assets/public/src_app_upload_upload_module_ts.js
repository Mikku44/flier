"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_upload_upload_module_ts"],{

/***/ 6563:
/*!*************************************************!*\
  !*** ./src/app/upload/upload-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPageRoutingModule": () => (/* binding */ UploadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.page */ 292);




const routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_0__.UploadPage
    }
];
let UploadPageRoutingModule = class UploadPageRoutingModule {
};
UploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadPageRoutingModule);



/***/ }),

/***/ 4494:
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPageModule": () => (/* binding */ UploadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-routing.module */ 6563);
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.page */ 292);







let UploadPageModule = class UploadPageModule {
};
UploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadPageRoutingModule
        ],
        declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_1__.UploadPage]
    })
], UploadPageModule);



/***/ }),

/***/ 292:
/*!***************************************!*\
  !*** ./src/app/upload/upload.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPage": () => (/* binding */ UploadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.page.html?ngResource */ 9669);
/* harmony import */ var _upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.page.scss?ngResource */ 3474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ 9058);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.module */ 6747);












let UploadPage = class UploadPage {
    constructor(alertController, router, navCtrl, toastController) {
        this.alertController = alertController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.handlerMessage = '';
        this.roleMessage = '';
        this.db = _app_module__WEBPACK_IMPORTED_MODULE_5__.AppModule.db;
        this.progress = 0;
        try {
            this.file = 'll';
            console.log(this.file);
            this.upload();
        }
        catch (e) {
            this.navCtrl.navigateBack('tabs/tab1');
        }
    }
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
                            this.handlerMessage = 'Alert cancaled';
                            this.uploadTask.cancel();
                        },
                    },
                    {
                        text: 'Accept',
                        role: 'confirm',
                        handler: () => {
                            this.router.navigate(['/tabs/tab1']);
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    upload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_3__.getApp)();
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(firebaseApp, 'gs://flier-4735f.appspot.com/');
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, 'upload/' + this.file.name);
            this.uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, this.file);
            // UploadTask.uploadProgress(uploadTask);
            this.uploadProgress(this.uploadTask);
            const url = 'gs://flier-4735f.appspot.com/upload/' + this.file.name;
            this.setData(url);
        });
    }
    setData(fileRef) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Add a new document in collection "cities"
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.db, 'files', `${this.file}`), {
                name: this.file.name,
                status: 'not',
                receiver: 'test',
                url: fileRef,
                sender: 'sm-001',
            });
        });
    }
    uploadProgress(file) {
        file.on('state_changed', (snapshot) => {
            this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + this.progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        }, (error) => {
        }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(file.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                this.presentToast();
                this.navCtrl.navigateBack('tabs/tab1');
            });
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<ion-icon name="rocket-outline"></ion-icon> Flier <ion-row class="ion-justify-content-center">Upload file success.</ion-row>',
                duration: 1500,
                position: 'top',
            });
            yield toast.present();
        });
    }
    ngOnInit() { }
};
UploadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
UploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-upload',
        template: _upload_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upload_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UploadPage);



/***/ }),

/***/ 3474:
/*!****************************************************!*\
  !*** ./src/app/upload/upload.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  font-size: 12vh;\n}\n\n.textdes {\n  font-size: 2vw;\n}\n\n.btn {\n  width: 92%;\n}\n\n.content {\n  padding: 20px;\n  background: #131313;\n  color: white;\n  height: 80vh;\n  border-radius: 20px 20px 0 0;\n}\n\n.item {\n  padding: 10px;\n  border-radius: 40px;\n  background: white;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n}\n\n.circle {\n  background: #131313;\n  border-radius: 100%;\n  padding: 15px;\n}\n\nion-progress-bar {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXE1vYmlsZSUyMEFwcFxcZmxpZXJcXHNyY1xcYXBwXFx1cGxvYWRcXHVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ01GOztBREpBO0VBQ0UsVUFBQTtBQ09GIiwiZmlsZSI6InVwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMnZoO1xyXG59XHJcbi50ZXh0ZGVzIHtcclxuICBmb250LXNpemU6IDJ2dztcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzEzMTMxMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jaXJjbGV7XHJcbiAgYmFja2dyb3VuZDojMTMxMzEzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgcGFkZGluZzoxNXB4O1xyXG59XHJcbmlvbi1wcm9ncmVzcy1iYXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuIiwiLmljb24ge1xuICBmb250LXNpemU6IDEydmg7XG59XG5cbi50ZXh0ZGVzIHtcbiAgZm9udC1zaXplOiAydnc7XG59XG5cbi5idG4ge1xuICB3aWR0aDogOTIlO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxMzEzMTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjMTMxMzEzO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDgwJTtcbn0iXX0= */";

/***/ }),

/***/ 9669:
/*!****************************************************!*\
  !*** ./src/app/upload/upload.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <meta name=\"color-scheme\" content=\"light dark\" />\n  <ion-toolbar>\n    <ion-title>\n      <h1 class=\"ion-text-center\">Flier</h1>\n      <!-- <ion-icon name=\"chatbubbles-outline\"></ion-icon> -->\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Upload</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <ion-icon class=\"icon\" name=\"cloud-upload-outline\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    <div class=\"content\">\n      <ion-text>Upload List</ion-text>\n      <ion-card class=\"item \">\n        <div class=\"flex \">\n          <br>\n          <div class=\"circle\">.....</div>\n          <div style=\"width: 100vw\">\n            <ion-row class=\"ion-justify-content-center\">file.jpg</ion-row\n            ><ion-row class=\"ion-justify-content-center ion-margin-top\"\n              ><ion-progress-bar [value]=\"progress\"></ion-progress-bar\n            ></ion-row>\n          </div>\n        </div>\n      </ion-card>\n    </div>\n  <ion-fab class=\"btn\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-button\n      color=\"danger\"\n      expand=\"full\"\n      (click)=\"presentAlert()\"\n      shape=\"round\"\n      >Cancel</ion-button\n    >\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_upload_upload_module_ts.js.map