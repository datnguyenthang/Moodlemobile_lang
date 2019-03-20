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

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
/**
 * This component is meant to display a course for a list of courses with progress.
 *
 * Example usage:
 *
 * <core-courses-course-list-slide [category]="category">
 * </core-courses-course-list-slide>
 */
@Component({
    selector: 'core-courses-course-list-group',
    animations: [
        trigger('openCloseGroup', [
            state('open', style({
                'min-height': '177px'
            })),
            state('closed', style({
                height: '82px'
            })),
            transition('open => closed', [
                animate('0.2s')
            ]),
            transition('closed => open', [
                animate('0.2s')
            ]),
        ]),
        trigger('openCloseCourse', [
            state('open', style({
                
                display: 'block'
            })),
            state('closed', style({
                
                display: 'none'
            })),
            transition('open => closed', [
                animate('0.1s')
            ]),
            transition('closed => open', [
                animate('0.1s')
            ]),
        ])
    ],
    templateUrl: 'core-courses-course-list-group.html'
    
})
export class CoreCoursesCourseListGroupComponent implements OnInit, OnDestroy {
    @Input() categories: any; // The category to render.
    protected isDestroyed = false;
    protected courseStatusObserver;
    protected siteUpdatedObserver;
    protected deviceHeight;
    protected deviceHeight1 = 0;
    protected classString = { forward : 'ion ion-ios-arrow-forward', arrow_down : 'ion ion-ios-arrow-down'};
   
    icon_class_string: string;

    constructor(platform: Platform){
        platform.ready().then((readySource) => {
          this.deviceHeight = platform.height();
        })
        this.icon_class_string = this.classString.forward;
    }
    /**
     * Show content of element selected
     */
    showContent(index: number): void{
      this.categories.forEach( (el, i) => {
        if (index !== i) {
          el.icon_class_string = this.classString.forward;
          el.selected = false;  
        }
      });
      this.categories[index].selected = !this.categories[index].selected;
      //this.icon_class_string = this.categories[index].selected ? this.classString.arrow_down : this.classString.forward;
      if ( this.categories[index].selected ){
        this.categories[index].icon_class_string = this.classString.arrow_down;  
      } else {
        this.categories[index].icon_class_string = this.classString.forward;
      }
        
    }
    /**
     * Component being initialized.
     */
    ngOnInit(): void {}
    /**
     * Component destroyed.
     */
    ngOnDestroy(): void {
        this.isDestroyed = true;

        this.siteUpdatedObserver && this.siteUpdatedObserver.off();
        this.courseStatusObserver && this.courseStatusObserver.off();
    }
}
