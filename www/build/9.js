webpackJsonp([9],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(2071);
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
    function AddonQRScannerPage(navCtrl, alertController, data, qrScanner) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.data = data;
        this.qrScanner = qrScanner;
        this.prefetchIconsInitialized = false;
    }
    AddonQRScannerPage.prototype.ionViewWillEnter = function () {
        this.scanQR();
    };
    AddonQRScannerPage.prototype.exitPage = function () {
        this.navCtrl.setRoot('CoreLoginInitPage');
    };
    AddonQRScannerPage.prototype.scanQR = function () {
        var _this = this;
        this.qrScanner.scan().subscribe(function (text) {
            console.log('Scanned something', text);
            _this.dataHandle(text);
        });
    };
    AddonQRScannerPage.prototype.dataHandle = function (data) {
        try {
            var obj = JSON.parse(data);
            if (this.checkDataHandle(obj)) {
                switch (obj.type) {
                    case 'EVALUATE':
                        this.data.setData(obj.value, 'scanner');
                        this.navCtrl.popToRoot();
                        this.navCtrl.parent.select(2);
                        break;
                    case 'COURSE':
                        this.navCtrl.push('CoreCourseSectionPage', { course: { id: obj.value } });
                        break;
                    default:
                        this.navCtrl.setRoot('CoreLoginInitPage');
                }
            }
        }
        catch (e) {
            console.log('Error is', e);
        }
    };
    AddonQRScannerPage.prototype.checkDataHandle = function (obj) {
        var result = false;
        var teamplateData = { type: '', value: '' };
        for (var el in obj) {
            result = teamplateData.hasOwnProperty(el);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonQRScannerPage.prototype, "tabsComponent", void 0);
    AddonQRScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-my-qrscanner',template:/*ion-inline-start:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/qrscanner/pages/my-qrscanner/my-qrscanner.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'addon.qrscanner.qrscanner\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<button ion-button class="button button-light closecamera" (click)="exitPage()">\n	<ion-icon ios="ios-close" md="md-close"></ion-icon>\n</button>\n<ion-content>\n    <ion-card>\n    	<ion-card-content>\n    		<h3>{{ \'addon.qrscanner.notification\' | translate }}</h3>\n    		<button ion-button block color="primary" (click)="scanQR()">{{ \'addon.qrscanner.scan\' | translate }}</button>\n  		</ion-card-content>\n    	\n   	</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/qrscanner/pages/my-qrscanner/my-qrscanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], AddonQRScannerPage);
    return AddonQRScannerPage;
}());

//# sourceMappingURL=my-qrscanner.js.map

/***/ }),

/***/ 2071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRScanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name QR Scanner
 * @description
 * A fast, energy efficient, highly-configurable QR code scanner for Cordova apps.
 *
 * Requires Cordova plugin: `cordova-plugin-qrscanner`. For more info, please see the [QR Scanner plugin docs](https://github.com/bitpay/cordova-plugin-qrscanner).
 *
 * @usage
 * ```typescript
 * import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
 *
 *
 * constructor(private qrScanner: QRScanner) { }
 *
 * ...
 *
 * // Optionally request the permission early
 * this.qrScanner.prepare()
 *   .then((status: QRScannerStatus) => {
 *      if (status.authorized) {
 *        // camera permission was granted
 *
 *
 *        // start scanning
 *        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
 *          console.log('Scanned something', text);
 *
 *          this.qrScanner.hide(); // hide camera preview
 *          scanSub.unsubscribe(); // stop scanning
 *        });
 *
 *      } else if (status.denied) {
 *        // camera permission was permanently denied
 *        // you must use QRScanner.openSettings() method to guide the user to the settings page
 *        // then they can grant the permission from there
 *      } else {
 *        // permission was denied, but not permanently. You can ask for permission again at a later time.
 *      }
 *   })
 *   .catch((e: any) => console.log('Error is', e));
 *
 *
 * ```
 * @interfaces
 * QRScannerStatus
 */
var QRScanner = (function (_super) {
    __extends(QRScanner, _super);
    function QRScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Request permission to use QR scanner.
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Request permission to use QR scanner.
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.prepare = /**
       * Request permission to use QR scanner.
       * @return {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.
     * @return {Observable<string>} returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
     */
    /**
       * Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.
       * @return {Observable<string>} returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
       */
    QRScanner.prototype.scan = /**
       * Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.
       * @return {Observable<string>} returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
       */
    function () {
        return;
    };
    /**
     * Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.
     * @returns {Promise<QRScannerStatus>}
     */
    /**
       * Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.
       * @returns {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.show = /**
       * Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.
       * @returns {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Configures the native webview to be opaque with a white background, covering the video preview.
     * @returns {Promise<QRScannerStatus>}
     */
    /**
       * Configures the native webview to be opaque with a white background, covering the video preview.
       * @returns {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.hide = /**
       * Configures the native webview to be opaque with a white background, covering the video preview.
       * @returns {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Enable the device's light (for scanning in low-light environments).
     * @returns {Promise<QRScannerStatus>}
     */
    /**
       * Enable the device's light (for scanning in low-light environments).
       * @returns {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.enableLight = /**
       * Enable the device's light (for scanning in low-light environments).
       * @returns {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Destroy the scanner instance.
     * @returns {Promise<QRScannerStatus>}
     */
    /**
       * Destroy the scanner instance.
       * @returns {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.destroy = /**
       * Destroy the scanner instance.
       * @returns {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Disable the device's light.
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Disable the device's light.
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.disableLight = /**
       * Disable the device's light.
       * @return {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Use front camera
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Use front camera
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.useFrontCamera = /**
       * Use front camera
       * @return {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Use back camera
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Use back camera
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.useBackCamera = /**
       * Use back camera
       * @return {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Set camera to be used.
     * @param camera {number} Provide `0` for back camera, and `1` for front camera.
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Set camera to be used.
       * @param camera {number} Provide `0` for back camera, and `1` for front camera.
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.useCamera = /**
       * Set camera to be used.
       * @param camera {number} Provide `0` for back camera, and `1` for front camera.
       * @return {Promise<QRScannerStatus>}
       */
    function (camera) {
        return;
    };
    /**
     * Pauses the video preview on the current frame and pauses scanning.
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Pauses the video preview on the current frame and pauses scanning.
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.pausePreview = /**
       * Pauses the video preview on the current frame and pauses scanning.
       * @return {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Resumse the video preview and resumes scanning.
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Resumse the video preview and resumes scanning.
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.resumePreview = /**
       * Resumse the video preview and resumes scanning.
       * @return {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Returns permission status
     * @return {Promise<QRScannerStatus>}
     */
    /**
       * Returns permission status
       * @return {Promise<QRScannerStatus>}
       */
    QRScanner.prototype.getStatus = /**
       * Returns permission status
       * @return {Promise<QRScannerStatus>}
       */
    function () {
        return;
    };
    /**
     * Opens settings to edit app permissions.
     */
    /**
       * Opens settings to edit app permissions.
       */
    QRScanner.prototype.openSettings = /**
       * Opens settings to edit app permissions.
       */
    function () { };
    QRScanner.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "prepare", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'node',
            observable: true,
            clearFunction: 'cancelScan'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], QRScanner.prototype, "scan", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "hide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "enableLight", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "destroy", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "disableLight", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "useFrontCamera", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "useBackCamera", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "useCamera", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "pausePreview", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "resumePreview", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QRScanner.prototype, "getStatus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], QRScanner.prototype, "openSettings", null);
    /**
     * @name QR Scanner
     * @description
     * A fast, energy efficient, highly-configurable QR code scanner for Cordova apps.
     *
     * Requires Cordova plugin: `cordova-plugin-qrscanner`. For more info, please see the [QR Scanner plugin docs](https://github.com/bitpay/cordova-plugin-qrscanner).
     *
     * @usage
     * ```typescript
     * import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
     *
     *
     * constructor(private qrScanner: QRScanner) { }
     *
     * ...
     *
     * // Optionally request the permission early
     * this.qrScanner.prepare()
     *   .then((status: QRScannerStatus) => {
     *      if (status.authorized) {
     *        // camera permission was granted
     *
     *
     *        // start scanning
     *        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
     *          console.log('Scanned something', text);
     *
     *          this.qrScanner.hide(); // hide camera preview
     *          scanSub.unsubscribe(); // stop scanning
     *        });
     *
     *      } else if (status.denied) {
     *        // camera permission was permanently denied
     *        // you must use QRScanner.openSettings() method to guide the user to the settings page
     *        // then they can grant the permission from there
     *      } else {
     *        // permission was denied, but not permanently. You can ask for permission again at a later time.
     *      }
     *   })
     *   .catch((e: any) => console.log('Error is', e));
     *
     *
     * ```
     * @interfaces
     * QRScannerStatus
     */
    QRScanner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'QRScanner',
            plugin: 'cordova-plugin-qrscanner',
            pluginRef: 'QRScanner',
            repo: 'https://github.com/bitpay/cordova-plugin-qrscanner',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], QRScanner);
    return QRScanner;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=9.js.map