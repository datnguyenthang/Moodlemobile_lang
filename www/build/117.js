webpackJsonp([117],{

/***/ 1858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonLandingMyLandingPageModule", function() { return AddonLandingMyLandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_landing__ = __webpack_require__(2000);
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








var AddonLandingMyLandingPageModule = /** @class */ (function () {
    function AddonLandingMyLandingPageModule() {
    }
    AddonLandingMyLandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__my_landing__["a" /* AddonLandingMyLandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_courses_components_components_module__["a" /* CoreCoursesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__my_landing__["a" /* AddonLandingMyLandingPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonLandingMyLandingPageModule);
    return AddonLandingMyLandingPageModule;
}());

//# sourceMappingURL=my-landing.module.js.map

/***/ }),

/***/ 2000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonLandingMyLandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tabs_tabs__ = __webpack_require__(138);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Page this show up about FE School.
 */
var AddonLandingMyLandingPage = /** @class */ (function () {
    function AddonLandingMyLandingPage(sitesProvider, navCtrl, appProvider) {
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.loadSiteName();
    }
    /**
     * Go to specific page.
     */
    AddonLandingMyLandingPage.prototype.openCataloguePage = function (pageAddress) {
        this.navCtrl.push(pageAddress);
    };
    /**
     * Go to search courses.
     */
    AddonLandingMyLandingPage.prototype.openSearch = function () {
        this.navCtrl.push('CoreCoursesSearchPage');
    };
    /**
     * Load the site name.
     */
    AddonLandingMyLandingPage.prototype.loadSiteName = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
    };
    /**
     * Page destroyed.
     */
    AddonLandingMyLandingPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonLandingMyLandingPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Searchbar */])
    ], AddonLandingMyLandingPage.prototype, "searchbar", void 0);
    AddonLandingMyLandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-landing-my-landing',template:/*ion-inline-start:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/landing/pages/my-landing/my-landing.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="siteName"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openSearch()" [attr.aria-p]="\'core.courses.searchcourses\' | translate">\n                <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="box" ion-fixed>\n        <div class="row">\n                <div class="col" id="s-o-s" (click)="openCataloguePage(\'AddonSchoolOfSalesMySchoolOfSalesPage\')">\n                    <div class="item">\n                        <img src="assets/img/landing/sales.svg">\n                        <p>{{ \'addon.landing.schoolofsale\' | translate }}</p>\n                    </div>\n                </div>\n                <div class="col" id="s-o-r" (click)="openCataloguePage(\'AddonSchoolOfRecoveryMySchoolOfRecoveryPage\')">\n                    <div class="item">\n                        <img src="assets/img/landing/recovery.svg">\n                        <p>{{ \'addon.landing.schoolofrecovery\' | translate }}</p>\n                    </div>\n                </div>\n        </div>\n        <div class="row">\n                <div class="col" id="f-a" (click)="openCataloguePage(\'AddonFeAcademyMyFeAcademyPage\')">\n                    <div class="item">\n                        <img src="assets/img/landing/fe-academy.svg">\n                        <p>{{ \'addon.landing.feacademy\' | translate }}</p>\n                    </div>\n                </div>\n                <div class="col" id="m-c" (click)="openCataloguePage(\'AddonMandatoryMyMandatoryPage\')">\n                    <div class="item">\n                        <img src="assets/img/landing/mandatory.svg">\n                        <p>{{ \'addon.landing.mandatorycourse\' | translate }}</p>\n                    </div>\n                </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/landing/pages/my-landing/my-landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* CoreAppProvider */]])
    ], AddonLandingMyLandingPage);
    return AddonLandingMyLandingPage;
}());

//# sourceMappingURL=my-landing.js.map

/***/ })

});
//# sourceMappingURL=117.js.map