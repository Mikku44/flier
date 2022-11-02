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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






let Tab3Page = class Tab3Page {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
        this.handlerMessage = '';
        this.roleMessage = '';
        this.component = Tab3Page;
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
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = ".toolbar-title {\n  display: flex;\n}\n\n.icon {\n  font-size: 20vh;\n}\n\n.textdes {\n  font-size: 2vw;\n}\n\n.btn {\n  width: 92%;\n}\n\n.content {\n  background-color: #131313;\n  color: white;\n  height: 45vh;\n  border-radius: 20px 20px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxKdW5pb3IlMjAoMylzZW1zZXRlciUyMDFcXDg3MS0yMjYlMjBNT0JJTEUlMjBBUFBMSUNBVElPTiUyMERFVkVMT1BNRU5UXFw2MzIwNjEwMDEwXFxNaW5pcHJvamVjdDY1XFxmbGllclxcc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDRUYiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvb2xiYXItdGl0bGV7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4uaWNvbntcclxuICBmb250LXNpemU6MjB2aDtcclxuXHJcbn1cclxuLnRleHRkZXN7XHJcbiAgZm9udC1zaXplOjJ2dztcclxufVxyXG4uYnRue1xyXG4gIHdpZHRoOjkyJTtcclxufVxyXG4uY29udGVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxMzEzMTM7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgaGVpZ2h0OjQ1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxufVxyXG5cclxuIiwiLnRvb2xiYXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjB2aDtcbn1cblxuLnRleHRkZXMge1xuICBmb250LXNpemU6IDJ2dztcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA5MiU7XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMztcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG59Il19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <meta name=\"color-scheme\" content=\"light dark\" />\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <h1 class=\"ion-text-center\">Flier</h1>\r\n      <!-- <ion-icon name=\"chatbubbles-outline\"></ion-icon> -->\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Receive</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-grid >\r\n  <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n    <ion-col>\r\n  <div class=\"ion-text-center\">\r\n    <ion-icon class=\"icon\"  name=\"cloud-download-outline\"></ion-icon>\r\n    <div class=\"textdes\">Device Name <br> (Device Name)</div>\r\n  </div>\r\n  </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<ion-grid class=\"content\">\r\n  <ion-row class=\"ion-justify-content-center \">\r\n    <div>\r\n      <ion-spinner  name=\"dots\" color=\"medium\"></ion-spinner>\r\n    </div>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center \">\r\n    <div>Waiting for sender</div>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<ion-fab class=\"btn\" vertical=\"bottom\"  horizontal=\"start\" slot=\"fixed\" >\r\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"presentAlert()\"  shape=\"round\">Choose files</ion-button>\r\n</ion-fab>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map