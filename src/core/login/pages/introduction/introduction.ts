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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CoreAppProvider } from '@providers/app';
import { CoreEventsProvider } from '@providers/events';
import { CoreSitesProvider } from '@providers/sites';
import { CoreDomUtilsProvider } from '@providers/utils/dom';
import { CoreLoginHelperProvider } from '../../providers/helper';

/**
 * Page to enter the user introduction page.
 */
@IonicPage({ segment: 'core-login-introduction' })
@Component({
    selector: 'page-core-login-introduction',
    templateUrl: 'introduction.html',
})
export class CoreLoginIntroductionPage {
    siteUrl: string;
    siteChecked = false;
    siteName: string;
    logoUrl: string;
    authInstructions: string;
    canSignup: boolean;
    identityProviders: any[];
    pageLoaded = false;
    isBrowserSSO = false;

    protected siteConfig;
    protected eventThrown = false;
    protected viewLeft = false;
    protected siteId: string;
    protected urlToOpen: string;

    constructor(private navCtrl: NavController, navParams: NavParams, private appProvider: CoreAppProvider,
            private sitesProvider: CoreSitesProvider, private loginHelper: CoreLoginHelperProvider,
            private domUtils: CoreDomUtilsProvider, private translate: TranslateService,
            private eventsProvider: CoreEventsProvider) {

        this.siteUrl = navParams.get('siteUrl');
        this.siteConfig = navParams.get('siteConfig');
        this.urlToOpen = navParams.get('urlToOpen');
    }

    /**
     * goLoginPage  Login button clicked.
     */
    goLoginPage(): void {
        this.navCtrl.push('CoreLoginCredentialsPage', {siteUrl: this.siteUrl});

        return;
    }
}
