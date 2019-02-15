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
import { IonicPage, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CoreAppProvider } from '@providers/app';
import { CoreConstants } from '@core/constants';
import { CoreConfigProvider } from '@providers/config';
import { CoreFileProvider } from '@providers/file';
import { CoreEventsProvider } from '@providers/events';
import { CoreLangProvider } from '@providers/lang';
import { CoreDomUtilsProvider } from '@providers/utils/dom';
import { CoreLocalNotificationsProvider } from '@providers/local-notifications';
import { CoreConfigConstants } from '../../../../configconstants';
import { CoreSitesProvider } from '@providers/sites';
import { Network } from '@ionic-native/network';

/**
 * Page that displays the general settings.
 */
@IonicPage({segment: 'core-settings-general'})
@Component({
    selector: 'page-core-settings-general',
    templateUrl: 'general.html',
})
export class CoreSettingsGeneralPage {

    protected onlineObserver;

    languages = {};
    languageCodes = [];
    selectedLanguage: string;
    baseLanguage: string;
    rteSupported: boolean;
    richTextEditor: boolean;
    debugDisplay: boolean;

    constructor(appProvider: CoreAppProvider, private configProvider: CoreConfigProvider, fileProvider: CoreFileProvider,
            private eventsProvider: CoreEventsProvider, private langProvider: CoreLangProvider,
            private domUtils: CoreDomUtilsProvider,
            localNotificationsProvider: CoreLocalNotificationsProvider, private sitesProvider: CoreSitesProvider,
            private alertCtrl: AlertController, private translate: TranslateService, private network: Network) {

        this.languages = CoreConfigConstants.languages;
        this.languageCodes = Object.keys(this.languages);
        langProvider.getCurrentLanguage().then((currentLanguage) => {
            this.baseLanguage = this.selectedLanguage = currentLanguage;
        });

        this.rteSupported = this.domUtils.isRichTextEditorSupported();
        if (this.rteSupported) {
            this.configProvider.get(CoreConstants.SETTINGS_RICH_TEXT_EDITOR, true).then((richTextEditorEnabled) => {
                this.richTextEditor = !!richTextEditorEnabled;
            });
        }

        this.configProvider.get(CoreConstants.SETTINGS_DEBUG_DISPLAY, false).then((debugDisplay) => {
            this.debugDisplay = !!debugDisplay;
        });
    }

    /**
     * Called when a new language is selected.
     */
    languageChanged(): void {

        this.changeUserLang(this.selectedLanguage).then((data) => {
            this.changeLocalLang(data);
        }).catch((error) => {
            this.onlineObserver = this.network.onConnect().subscribe(() => {
                this.languageChanged();
                this.onlineObserver.unsubscribe();
            });
        });
    }

    /**
     * Called when change User Lang success.
     */
    changeLocalLang(data: any): void {
        const alert = this.alertCtrl.create({
                message: this.translate.instant('core.settings.servenotreponse'),
                buttons: [this.translate.instant('core.ok')]
        });
        let obj: any = {
                message: '',
                result: false
        };
        obj = data;
        if (obj.result) {
            this.baseLanguage = this.selectedLanguage;
            this.langProvider.changeCurrentLanguage(this.selectedLanguage).finally(() => {
                this.eventsProvider.trigger(CoreEventsProvider.LANGUAGE_CHANGED);
            });
        } else {
            this.selectedLanguage = this.baseLanguage;
            alert.present();
        }
    }

    /**
     * Update language for user
     */
    changeUserLang(language: string, siteId?: string): Promise<any[]> {
        return this.sitesProvider.getSite(siteId).then((site) => {
            // The get_site_info WS call won't be cached.
            const preSets = {
                getFromCache: false,
                saveToCache: false
            },
                  data = {
                    lang: language
            };

            return site.read('core_language_update_lang_user', data, preSets);
        });
    }

    /**
     * Called when the rich text editor is enabled or disabled.
     */
    richTextEditorChanged(): void {
        this.configProvider.set(CoreConstants.SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
    }

    /**
     * Called when the debug display setting is enabled or disabled.
     */
    debugDisplayChanged(): void {
        this.configProvider.set(CoreConstants.SETTINGS_DEBUG_DISPLAY, this.debugDisplay ? 1 : 0);
        this.domUtils.setDebugDisplay(this.debugDisplay);
    }
}
