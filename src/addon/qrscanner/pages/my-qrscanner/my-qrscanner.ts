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
import { Component, ViewChild, OnDestroy } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { DataService } from '@providers/data.service';
import { CoreTabsComponent } from '@components/tabs/tabs';
import { AddonQRScannerProvider } from '../../providers/qrscanner';
import { QRScanner } from '@ionic-native/qr-scanner';

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

    protected qrProvider: AddonQRScannerProvider;
    protected prefetchIconsInitialized = false;
    protected isDestroyed;
    protected updateSiteObserver;
    
    constructor(private navCtrl: NavController, public alertController: AlertController,
                private data: DataService, private qrScanner: QRScanner) {}

    ionViewWillEnter(): void {
      this.scanQR();
    }
    exitPage(): void {
      this.navCtrl.setRoot('CoreLoginInitPage');
    }
    scanQR(): void {
      this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.dataHandle(text);
      });
    }
    dataHandle(data: any): void {
      try {
        const obj = JSON.parse(data);
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
      } catch (e) {
        console.log('Error is', e);
      }
    }
    checkDataHandle(obj: any): boolean {
      let result = false;
      const teamplateData = {type: '', value: ''};
      for (const el in obj) {
        result = teamplateData.hasOwnProperty(el);
      }

      return result;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    }
}
