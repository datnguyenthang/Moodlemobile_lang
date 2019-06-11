webpackJsonp([60],{

/***/ 1923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonQRScannerInputInfoPagePageModule", function() { return AddonQRScannerInputInfoPagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_qrscanner__ = __webpack_require__(2070);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddonQRScannerInputInfoPagePageModule = /** @class */ (function () {
    function AddonQRScannerInputInfoPagePageModule() {
    }
    AddonQRScannerInputInfoPagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__my_qrscanner__["a" /* AddonQRScannerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__my_qrscanner__["a" /* AddonQRScannerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonQRScannerInputInfoPagePageModule);
    return AddonQRScannerInputInfoPagePageModule;
}());

//# sourceMappingURL=my-qrscanner.module.js.map

/***/ }),

/***/ 2070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonQRScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabs_tabs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(980);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.










/**
 * Page that displays the list of calendar events.
 */
var AddonQRScannerPage = /** @class */ (function () {
    function AddonQRScannerPage(utils, sitesProvider, eventsProvider, navCtrl, appProvider, translate, alertController, data, barcodeScanner) {
        this.utils = utils;
        this.sitesProvider = sitesProvider;
        this.eventsProvider = eventsProvider;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.alertController = alertController;
        this.data = data;
        this.barcodeScanner = barcodeScanner;
        this.prefetchIconsInitialized = false;
    }
    AddonQRScannerPage.prototype.ionViewWillEnter = function () {
        this.scanQR();
    };
    AddonQRScannerPage.prototype.exitPage = function () {
        this.navCtrl.setRoot("CoreLoginInitPage");
    };
    AddonQRScannerPage.prototype.scanQR = function () {
        var _this = this;
        window.document.querySelector('.closeCamera').classList.remove('hide');
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.dataHandle(barcodeData.text);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    AddonQRScannerPage.prototype.dataHandle = function (data) {
        try {
            var obj = JSON.parse(data);
            if (this.checkDataHandle(obj)) {
                switch (obj.type) {
                    case 'EVALUATE':
                        this.data.setData(obj.value, "scanner");
                        this.navCtrl.popToRoot();
                        this.navCtrl.parent.select(2);
                        break;
                    case 'COURSE':
                        this.navCtrl.push('CoreCourseSectionPage', { course: { id: obj.value } });
                        break;
                }
            }
        }
        catch (e) {
        }
    };
    AddonQRScannerPage.prototype.checkDataHandle = function (obj) {
        var result = false;
        var TeamplateData = { type: '', value: '' };
        for (var el in obj) {
            result = TeamplateData.hasOwnProperty(el);
        }
        return result;
    };
    /**
     * Page destroyed.
     */
    AddonQRScannerPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonQRScannerPage.prototype, "tabsComponent", void 0);
    AddonQRScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-my-qrscanner',template:/*ion-inline-start:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/qrscanner/pages/my-qrscanner/my-qrscanner.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'addon.qrscanner.qrscanner\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card>\n			<button ion-button class="button button-light hide closeCamera" (click)="exitPage()">\n				<ion-icon name="close"></ion-icon>\n			</button>\n    	<ion-card-content>\n    		<h3>{{ \'addon.qrscanner.notification\' | translate }}</h3>\n    		<button ion-button block color="primary" (click)="scanQR()">{{ \'addon.qrscanner.scan\' | translate }}</button>\n  		</ion-card-content>\n    	\n   	</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/qrscanner/pages/my-qrscanner/my-qrscanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_sites__["a" /* CoreSitesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_app__["a" /* CoreAppProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], AddonQRScannerPage);
    return AddonQRScannerPage;
}());

//# sourceMappingURL=my-qrscanner.js.map

/***/ })

});
//# sourceMappingURL=60.js.map