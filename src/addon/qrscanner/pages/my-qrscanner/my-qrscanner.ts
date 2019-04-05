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
import { IonicPage, Searchbar, NavController, AlertController } from 'ionic-angular';
import { CoreUtilsProvider } from '@providers/utils/utils';
import { CoreSitesProvider } from '@providers/sites';
import { CoreEventsProvider } from '@providers/events';
import { CoreAppProvider } from '@providers/app';
import { CoreTabsComponent } from '@components/tabs/tabs';
import { AddonQRScannerProvider } from '../../providers/qrscanner';
import { TranslateService } from '@ngx-translate/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';



/**
 * Page that displays the list of calendar events.
 */
@IonicPage({ segment: 'addon-qrscanner' })
@Component({
    selector: 'page-addon-my-qrscanner',
    templateUrl: 'my-qrscanner.html',
})
export class AddonQRScannerPage implements OnDestroy {
    @ViewChild(CoreTabsComponent) tabsComponent: CoreTabsComponent;
    ionApp: any;
    ionicTabbar: any;

    protected qrscannerProvider: AddonQRScannerProvider;
    protected prefetchIconsInitialized = false;
    protected isDestroyed;
    protected updateSiteObserver;
    
    constructor(private utils: CoreUtilsProvider, private sitesProvider: CoreSitesProvider,
            private eventsProvider: CoreEventsProvider, private navCtrl: NavController, appProvider: CoreAppProvider, 
            qrscannerProvider: AddonQRScannerProvider,private translate: TranslateService,
            private qrScanner: QRScanner, public alertController: AlertController) {
        
        this.qrscannerProvider = qrscannerProvider;
        this.ionApp = <HTMLElement>document.getElementsByTagName("ion-app")[0],
        this.ionicTabbar = <HTMLElement>document.getElementsByClassName("show-tabbar")[0];
        setTimeout(() => {
          this.scanQR();
        },5000);
    }

    ionViewWillEnter(): void {
      this.uiDraw("47.8px", "none");
      this.scanQR();
    }
    uiDraw(height: string, display: string): void {
      this.ionApp.style.height = height;
      this.ionicTabbar.style.display = display;
    }
    exitQR(): void {  
      this.qrScanner.hide();
      this.uiDraw("", "");
      this.navCtrl.setRoot("CoreLoginInitPage");
    }
    scanQR(): void {
        this.qrScanner.prepare().then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted
           
           // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            scanSub.unsubscribe(); // stop scanning
            
            let obj = JSON.parse(text);
            if (obj.type == 'EVALUATE') {
              const alert =  this.alertController.create({
                message: obj.value,
                buttons: ['OK']
              });
              alert.present();
            } else {
              const alert =  this.alertController.create({
                message: 'Dữ liệu không hợp lê.',
                buttons: ['OK']
                });
              alert.present();
            }

            this.exitQR();
          });
            this.uiDraw("47.8px", "none");
            this.qrScanner.show();

         } else if (status.denied) {
           this.exitQR();
           const alert =  this.alertController.create({
              message: 'camera permission was permanently denied',
              buttons: ['OK']
            });
            alert.present();

           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           // permission was denied, but not permanently. You can ask for permission again at a later time.
           this.exitQR();
          const alert =  this.alertController.create({
                message: 'permission was denied, but not permanently. You can ask for permission again at a later time.',
                buttons: ['OK']
          });

          alert.present();
         }
      }).catch(
        (e: any) => {
          this.exitQR();
          console.log('Error is', e);
          const alert =  this.alertController.create({
              message: e,
              buttons: ['OK']
          });
          alert.present();
      });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    }
}
