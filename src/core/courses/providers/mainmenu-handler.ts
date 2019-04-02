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
import { CoreCoursesProvider } from './courses';
import { CoreMainMenuHandler, CoreMainMenuHandlerData } from '@core/mainmenu/providers/delegate';
import { CoreCoursesDashboardProvider } from '../providers/dashboard';
import { CoreSiteHomeProvider } from '@core/sitehome/providers/sitehome';
import { AddonBlockTimelineProvider } from '@addon/block/timeline/providers/timeline';

/**
 * Handler to add Dashboard into main menu.
 */
@Injectable()
export class CoreDashboardMainMenuHandler implements CoreMainMenuHandler {
    name = 'CoreDashboard'; // Old name CoreCourses cannot be used because it would be all disabled by site.
    priority = 1100;

    constructor(private coursesProvider: CoreCoursesProvider, private dashboardProvider: CoreCoursesDashboardProvider,
        private siteHomeProvider: CoreSiteHomeProvider, private timelineProvider: AddonBlockTimelineProvider) { }

    /**
     * Check if the handler is enabled on a site level.
     *
     * @return {boolean | Promise<boolean>} Whether or not the handler is enabled on a site level.
     */
    isEnabled(): boolean | Promise<boolean> {
        return false;
        // Check if 3.6 dashboard is enabled.
        // return this.dashboardProvider.isAvailable().then((enabled) => {
        //     if (enabled) {
        //         return true;
        //     }

        //     // Check if my overview is enabled.
        //     return this.timelineProvider.isAvailable().then((enabled) => {
        //         if (enabled) {
        //             return true;
        //         }

        //         return this.siteHomeProvider.isAvailable().then((enabled) => {
        //             // Show in case siteHome is enabled.
        //             if (enabled) {
        //                 return true;
        //             }

        //             // My overview not enabled, check if my courses is enabled.
        //             return !this.coursesProvider.isMyCoursesDisabledInSite();
        //         });
        //     });
        // });
    }

    /**
     * Returns the data needed to render the handler.
     *
     * @return {CoreMainMenuHandlerData} Data needed to render the handler.
     */
    getDisplayData(): CoreMainMenuHandlerData {
        return {
            icon: 'compass',
            title: 'core.courses.courseoverview',
            page: 'CoreCoursesMyOverviewPage',
            class: 'core-courseoverview-handler'
        };
    }
}
