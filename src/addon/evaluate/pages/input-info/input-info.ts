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
import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, Searchbar, NavController } from 'ionic-angular';
import { CoreCoursesProvider } from '@core/courses/providers/courses';
import { CoreDomUtilsProvider } from '@providers/utils/dom';
import { CoreUtilsProvider } from '@providers/utils/utils';
import { CoreSitesProvider } from '@providers/sites';
import { CoreEventsProvider } from '@providers/events';
import { CoreAppProvider } from '@providers/app';
import { AddonBlockTimelineProvider } from '@addon/block/timeline/providers/timeline';
import { CoreCourseHelperProvider } from '@core/course/providers/helper';
import { CoreCourseOptionsDelegate } from '@core/course/providers/options-delegate';
import * as moment from 'moment';
import { CoreTabsComponent } from '@components/tabs/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddonEvaluateProvider } from '../../providers/evaluate';
import { TranslateService } from '@ngx-translate/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


/**
 * Page that displays the list of calendar events.
 */
@IonicPage({ segment: 'addon-evaluate-input-info' })
@Component({
    selector: 'page-addon-evaluate-input-info',
    templateUrl: 'input-info.html',
})
export class AddonEvaluateInputInfoPage implements OnInit, OnDestroy {
    @ViewChild(CoreTabsComponent) tabsComponent: CoreTabsComponent;
    @ViewChild('searchbar') searchbar: Searchbar;
    credForm: FormGroup;
    pageLoaded = false;
    siteName: string;
    siteUrl: string;
    protected evaluateProvider: AddonEvaluateProvider;

    protected prefetchIconsInitialized = false;
    protected isDestroyed;
    protected updateSiteObserver;
    protected courseIds = '';
    
    constructor(private domUtils: CoreDomUtilsProvider,
            private coursesProvider: CoreCoursesProvider, private utils: CoreUtilsProvider,
            private myOverviewProvider: AddonBlockTimelineProvider, private sitesProvider: CoreSitesProvider,
            private courseHelper: CoreCourseHelperProvider, private courseOptionsDelegate: CoreCourseOptionsDelegate,
            private eventsProvider: CoreEventsProvider, private navCtrl: NavController, appProvider: CoreAppProvider, 
            evaluateProvider: AddonEvaluateProvider,fb: FormBuilder,private translate: TranslateService,
            private qrScanner: QRScanner) {
        
        this.evaluateProvider = evaluateProvider;
        this.loadSiteInfo();
        this.credForm = fb.group({
            coursecode: ['', Validators.required],
            fullname: [''],
            email: [''],
            cmnd: ['']
        });
        
    }

    /**
     * View loaded.
     */
    ionViewDidLoad(): void {
        this.pageLoaded = true;
    }

    checkcode(): void {
        
        const coursecode = this.credForm.value.coursecode;
        const fullname = this.credForm.value.fullname;
        const email = this.credForm.value.email;
        const cmnd = this.credForm.value.cmnd;
        
        const modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.evaluateProvider.checkCourseCode(null, coursecode).then((data) => {
            const status = Boolean(data['status']);
            if (status == true) {
                const detail = data['detail'];
                this.navCtrl.push('AddonEvaluateSubmitEvaluatePage',{coursecode,fullname,email,cmnd,detail});
            } else {
                this.domUtils.showErrorModal(this.translate.instant('addon.evaluate.messagecoursecodeinvalid'), true);
            }
            

        }).catch((error) => {
            this.domUtils.showErrorModal(error, true);
        }).finally (() => {
            modal.dismiss();
        });
        return;
    }
    
    scanQR(): void {

       
        this.qrScanner.prepare().then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted


           // start scanning
           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
             console.log('Scanned something', text);

             this.qrScanner.hide(); // hide camera preview
             scanSub.unsubscribe(); // stop scanning
           });

         } else if (status.denied) {
           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           // permission was denied, but not permanently. You can ask for permission again at a later time.
         }
      }).catch((e: any) => console.log('Error is', e));
      
    }
    /**
     * Load the site info.
     */
    protected loadSiteInfo(): void {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
        this.siteUrl = this.sitesProvider.getCurrentSite().getInfo().siteurl;
    }
    /**
     * Component being initialized.
     */
    ngOnInit(): void {}
    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    }
}
