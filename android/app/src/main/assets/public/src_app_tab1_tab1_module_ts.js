"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

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
        this.info = _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(_app_module__WEBPACK_IMPORTED_MODULE_4__.AppModule.app);
        this.setData();
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
    setData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.countDataSent();
            this.countDataRev();
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();
            if (this.numOfSent === undefined) {
                this.numOfSent = 0;
            }
            if (this.numOfRev === undefined) {
                this.numOfRev = 0;
            }
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.db, 'users', `${info.uuid}`), {
                numOfSent: this.numOfSent,
                numOfSize: 0,
                numOfSRev: 0,
                numOfRev: this.numOfRev,
                receive: 'off',
            });
        });
    }
    countDataSent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            {
                const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();
                const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.db, 'files'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('sender', '==', `${info.uuid}`));
                const send = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(q, (querySnapshot) => {
                    const files = [];
                    querySnapshot.forEach((data) => {
                        console.log(data.data());
                        if (data.data().sender === info.uuid) {
                            files.push(data.data());
                        }
                    });
                    this.numOfSent = files.length;
                    console.log(this.numOfSent);
                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.db, 'users', `${info.uuid}`), {
                        numOfSent: this.numOfSent,
                    });
                });
            }
        });
    }
    countDataRev() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_3__.Device.getId();
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.db, 'files'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('receiver', '==', `${info.uuid}`));
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(q, (querySnapshot) => {
                querySnapshot.forEach((data) => {
                    console.log(data.data());
                    this.numOfRev += 1;
                });
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.db, 'users', `${info.uuid}`), {
                    numOfRev: this.numOfRev,
                });
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

module.exports = ".btn {\n  width: 92%;\n}\n\n.contact {\n  right: 0;\n  position: fixed;\n}\n\nion-toolbar ion-icon {\n  font-size: 28px;\n  color: white;\n}\n\n.container::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.container::before {\n  content: \"Select file\";\n  position: fixed;\n  display: inline-block;\n  background: var(--ion-color-primary-contrast);\n  border: 1px solid #999;\n  border-radius: 10px;\n  padding: 50px 28px;\n  outline: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-size: 12pt;\n  width: 70vw;\n}\n\n.container:hover::before {\n  border-color: var();\n}\n\ndiv.select {\n  text-align: center;\n  padding: 3%;\n  border: thin solid black;\n  border-radius: 10px;\n  background: white;\n}\n\n.none {\n  background: none;\n}\n\n.title {\n  font-size: 28px;\n  font-weight: bold;\n  padding: 0px 15px;\n}\n\n.content {\n  font-size: 18px;\n  padding: 0px 15px;\n}\n\n.top {\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxNb2JpbGUlMjBBcHBcXGZsaWVyXFxzcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxRQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQyxpQkFBQTtBQ0dIOztBREFBO0VBQ0UsaUJBQUE7QUNHRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuLmNvbnRhY3Qge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXI6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJTZWxlY3QgZmlsZVwiO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1MHB4IDI4cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgd2lkdGg6NzB2dztcclxuICAvLyBoZWlnaHQ6NTBweDtcclxufVxyXG4uY29udGFpbmVyOmhvdmVyOjpiZWZvcmUge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKCk7XHJcbn1cclxuXHJcbmRpdi5zZWxlY3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzJTtcclxuICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLm5vbmV7XHJcbiAgYmFja2dyb3VuZDpub25lO1xyXG59XHJcbi50aXRsZXtcclxuICBmb250LXNpemU6MjhweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIHBhZGRpbmc6MHB4IDE1cHg7XHJcblxyXG59XHJcbi5jb250ZW50e1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gICBwYWRkaW5nOjBweCAxNXB4O1xyXG59XHJcblxyXG4udG9we1xyXG4gIHBhZGRpbmctdG9wOjMwcHg7XHJcbn1cclxuIiwiLmJ0biB7XG4gIHdpZHRoOiA5MiU7XG59XG5cbi5jb250YWN0IHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lcjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jb250YWluZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiU2VsZWN0IGZpbGVcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNTBweCAyOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgd2lkdGg6IDcwdnc7XG59XG5cbi5jb250YWluZXI6aG92ZXI6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKCk7XG59XG5cbmRpdi5zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMlO1xuICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubm9uZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi50b3Age1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn0iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      class=\"contact\"\r\n      (click)=\"gotoContactPage()\"\r\n      slot=\"end\"\r\n      color=\"light\"\r\n    >\r\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title align=\"center\"><h1>Flier</h1></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"content\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-button\r\n        class=\"contact\"\r\n        (click)=\"gotoContactPage()\"\r\n        slot=\"end\"\r\n        color=\"light\"\r\n      >\r\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-title size=\"large\" vertical=\"center\" horizontal=\"start\" class=\"font\"\r\n        >Flier</ion-title\r\n      >\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"paneltop\">\r\n      <div class=\"title top\">Hello,</div>\r\n      <div class=\"content\">Do you want to send some file?</div>\r\n      <ion-label id=\"imageName\"></ion-label>\r\n    </div>\r\n\r\n  <script>\r\n        let input = document.getElementById(\"inputTag\");\r\n        let imageName = document.getElementById(\"imageName\")\r\n\r\n        input.addEventListener(\"change\", ()=>{\r\n            let inputImage = document.querySelector(\"input[type=file]\").files[0];\r\n\r\n            imageName.innerText = inputImage.name;\r\n        })\r\n    </script>\r\n  <ion-row class=\"ion-justify-content-center\"><ion-card class=\"none\"><input id=\"inputTag\" class=\"container\" type=\"file\" (change)=\"onFileChange($event)\" required /></ion-card></ion-row>\r\n  <ion-fab class=\"btn\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-button expand=\"full\" (click)=\"downloadPage()\" shape=\"round\"\r\n      >Send</ion-button\r\n    >\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map