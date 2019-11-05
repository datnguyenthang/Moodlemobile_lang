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

import { Injectable } from '@angular/core';
import { CoreLoggerProvider } from '@providers/logger';
import { CoreSitesProvider } from '@providers/sites';
import { CoreSite } from '@classes/site';
import { DomSanitizer } from '@angular/platform-browser';
import { CoreCourseHelperProvider } from '@core/course/providers/helper';
import { AlertController } from 'ionic-angular';
import { CoreTextUtilsProvider } from '@providers/utils/text';

@Injectable()
export class AddonLandingProvider {
    [x: string]: any;
    protected logger;

    constructor(logger: CoreLoggerProvider, private sitesProvider: CoreSitesProvider,
        private textUtils: CoreTextUtilsProvider,
        private sanitizer: DomSanitizer, private alertCtrl: AlertController,
        private courseHelper: CoreCourseHelperProvider) {
        this.logger = logger.getInstance('AddonLandingProvider');
    }

    /**
     * Check if Calendar is disabled in a certain site.
     *
     * @param {CoreSite} [site] Site. If not defined, use current site.
     * @return {boolean} Whether it's disabled.
     */
    isLandingDisabledInSite(site?: CoreSite): boolean {
        site = site || this.sitesProvider.getCurrentSite();

        return site.isFeatureDisabled('CoreMainMenuDelegate_AddonLanding');
    }

    /**
     * Check if Calendar is disabled in a certain site.
     *
     * @param  {string} [siteId] Site Id. If not defined, use current site.
     * @return {Promise<boolean>}     Promise resolved with true if disabled, rejected or resolved with false otherwise.
     */
    isDisabled(siteId?: string): Promise<boolean> {
        return this.sitesProvider.getSite(siteId).then((site) => {
            return this.isLandingDisabledInSite(site);
        });
    }

    getPopUpData(siteId?: string): Promise<any[]> {
        return this.sitesProvider.getSite(siteId).then((site) => {
            const data = {};

            const preSets = {
                getFromCache: false,
                saveToCache: false,
                emergencyCache: false,
            };

            return site.read('custom_popup_get_data', data, preSets);
        });
    }

    redirectPage(pageAddress: string): void {
        this.navCtrl.push(pageAddress);
    }


    initPopup(): void {
        this.getPopUpData().then((data) => {
            this.showPopup(data['content'], data['title'], data['oktext'], data['canceltext'],
                           data['option'], data['moduleid'], data['courseid'], data['modname']).then(() => {
                // Todo
            });
        });
    }

    // DAT-TC show pop up on landing page
    showPopup(message: string, title?: string, okText?: string, cancelText?: string, options?: any,
        moduleId?: number, courseId?: number, modname?: string): Promise<void> {
        return new Promise<void>((resolve, reject): void => {
            const hasHTMLTags = this.textUtils.hasHTMLTags(message);
            let promise;

            promise = Promise.resolve(message);
            promise.then((message) => {
                options = options || {};

                options.message = this.sanitizer.bypassSecurityTrustHtml(message);
                options.enableBackdropDismiss = true;
                options.title = title;
                if (!title) {
                    options.cssClass = 'core-nohead';
                }
                options.buttons = [];
                if (okText) {
                    options.buttons.push(
                        {
                            text: okText || this.translate.instant('core.ok'),
                            handler: (): void => {
                                this.courseHelper.navigateToModule(moduleId, this.sitesProvider.getCurrentSiteId(), courseId, undefined, modname);
                            }
                        });
                }
                if (cancelText) {
                    options.buttons.push(
                        {
                            text: cancelText || this.translate.instant('core.cancel'),
                            role: 'cancel',
                            handler: (): void => {
                                reject(this.createCanceledError());
                            }
                        });
                }

                const alert = this.alertCtrl.create(options);

                alert.present().then(() => {
                    /*
                    if (hasHTMLTags) {
                        // Treat all anchors so they don't override the app.
                        const alertMessageEl: HTMLElement = alert.pageRef().nativeElement.querySelector('.alert-message');
                        this.treatAnchors(alertMessageEl);
                    }
                    */
                });
            });
        });
    }
    createCanceledError(): any {
        return {coreCanceled: true};
    }

}
