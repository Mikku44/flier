"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ 6747);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 1866);









let Tab3Page = class Tab3Page {
    constructor(alertController, router, navCtrl) {
        this.alertController = alertController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.handlerMessage = '';
        this.roleMessage = '';
        this.user = 'test';
        this.component = Tab3Page;
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule.app);
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.db, 'files'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('receiver', '==', this.user));
        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(q, (querySnapshot) => {
            const files = [];
            querySnapshot.forEach((data) => {
                if (data.data().status === 'not') {
                    files.push(data.data().name);
                    console.log(data.id); // delete this
                    this.device = data.data().sender;
                }
            });
            console.log('Current files : ', files.join(', '));
            if (files.length > 0) {
                this.presentAlert();
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Warning',
                subHeader: '',
                message: 'Do you want to receive file from ' + this.device + '?',
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
                            this.router.navigate(['/download']);
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    downloadPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/download']);
        });
    }
    gotoContactPage() {
        this.navCtrl.navigateForward('mycontact');
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".toolbar-title {\n  display: flex;\n}\n\n.icon {\n  font-size: 12vh;\n}\n\n.textdes {\n  font-size: 2vw;\n}\n\n.btn {\n  width: 92%;\n}\n\n.content-panel {\n  background-color: #131313;\n  color: white;\n  height: 60vh;\n  border-radius: 20px 20px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxNb2JpbGUlMjBBcHBcXGZsaWVyXFxzcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNFRiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9vbGJhci10aXRsZXtcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZToxMnZoO1xyXG5cclxufVxyXG4udGV4dGRlc3tcclxuICBmb250LXNpemU6MnZ3O1xyXG59XHJcbi5idG57XHJcbiAgd2lkdGg6OTIlO1xyXG59XHJcbi5jb250ZW50LXBhbmVse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzEzMTMxMztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBoZWlnaHQ6NjB2aDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG59XHJcblxyXG4iLCIudG9vbGJhci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAxMnZoO1xufVxuXG4udGV4dGRlcyB7XG4gIGZvbnQtc2l6ZTogMnZ3O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDkyJTtcbn1cblxuLmNvbnRlbnQtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNjB2aDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbn0iXX0= */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <meta name=\"color-scheme\" content=\"light dark\" />\n  <ion-toolbar>\n    <ion-title>\n      <h1 class=\"ion-text-center\">Flier</h1>\n      <!-- <ion-icon name=\"chatbubbles-outline\"></ion-icon> -->\n    </ion-title>\n     <ion-buttons\n      class=\"contact\"\n      (click)=\"gotoContactPage()\"\n      slot=\"end\"\n      color=\"light\"\n    >\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"content\">\n      <ion-title  size=\"large\">Receive</ion-title>\n            <ion-button\n        class=\"contact\"\n        (click)=\"gotoContactPage()\"\n        slot=\"end\"\n        color=\"light\"\n      >\n        <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      </ion-button>\n    </ion-toolbar>\n  </ion-header>\n<ion-grid>\n  <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n    <ion-col>\n  <div class=\"ion-text-center\">\n    <ion-icon class=\"icon\"  name=\"cloud-download-outline\"></ion-icon>\n    <div class=\"textdes\">Device Name <br> (Device Name)</div>\n  </div>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"content-panel\">\n  <ion-row class=\"ion-justify-content-center \">\n    <div>\n      <ion-spinner  name=\"dots\" color=\"medium\"></ion-spinner>\n    </div>\n  </ion-row>\n  <ion-row class=\"ion-justify-content-center \">\n    <div>Waiting for sender</div>\n  </ion-row>\n</ion-grid>\n<ion-fab class=\"btn\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-button\n\n      expand=\"full\"\n      (click)=\"downloadPage()\"\n      shape=\"round\"\n      >Send</ion-button\n    >\n  </ion-fab>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map