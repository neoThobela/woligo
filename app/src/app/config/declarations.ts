import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-needHelpDialogComponent
import { needHelpDialogComponent } from '../components/needHelpDialog.component';
//CORE_REFERENCE_IMPORT-dialogBoxComponent
import { dialogBoxComponent } from '../components/dialogBox.component';
//CORE_REFERENCE_IMPORT-shareformService
import { shareformService } from '../services/shareform/shareform.service';
//CORE_REFERENCE_IMPORT-dataService
import { dataService } from '../services/data/data.service';
//CORE_REFERENCE_IMPORT-employmentHoursComponent
import { employmentHoursComponent } from '../components/employmentHours.component';
//CORE_REFERENCE_IMPORT-fourIconsComponent
import { fourIconsComponent } from '../components/fourIcons.component';
//CORE_REFERENCE_IMPORT-governmentEmployeeComponent
import { governmentEmployeeComponent } from '../components/governmentEmployee.component';
//CORE_REFERENCE_IMPORT-noicotineComponent
import { noicotineComponent } from '../components/noicotine.component';
//CORE_REFERENCE_IMPORT-stateComponent
import { stateComponent } from '../components/state.component';
//CORE_REFERENCE_IMPORT-occupationComponent
import { occupationComponent } from '../components/occupation.component';
//CORE_REFERENCE_IMPORT-dateOfBirthComponent
import { dateOfBirthComponent } from '../components/dateOfBirth.component';
//CORE_REFERENCE_IMPORT-salaryComponent
import { salaryComponent } from '../components/salary.component';
//CORE_REFERENCE_IMPORT-genderComponent
import { genderComponent } from '../components/gender.component';
//CORE_REFERENCE_IMPORT-needCompComponent
import { needCompComponent } from '../components/needComp.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/register.component';
//CORE_REFERENCE_IMPORT-summaryComponent
import { summaryComponent } from '../components/summary.component';
//CORE_REFERENCE_IMPORT-summaryForDisabilityComponent
import { summaryForDisabilityComponent } from '../components/summaryForDisability.component';
//CORE_REFERENCE_IMPORT-toolbarComponent
import { toolbarComponent } from '../components/toolbar.component';
//CORE_REFERENCE_IMPORT-pageComponent
import { pageComponent } from '../components/page.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-needHelpDialogComponent
  needHelpDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogBoxComponent
  dialogBoxComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employmentHoursComponent
  employmentHoursComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-fourIconsComponent
  fourIconsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-governmentEmployeeComponent
  governmentEmployeeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-noicotineComponent
  noicotineComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stateComponent
  stateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-occupationComponent
  occupationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dateOfBirthComponent
  dateOfBirthComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-salaryComponent
  salaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-genderComponent
  genderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-needCompComponent
  needCompComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-summaryComponent
  summaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-summaryForDisabilityComponent
  summaryForDisabilityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-toolbarComponent
  toolbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-pageComponent
  pageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-shareformService
  shareformService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-dataService
  dataService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: homeComponent,
    children: [
      { path: 'summary_page', component: summaryForDisabilityComponent },
      { path: 'quotes', component: pageComponent },
      { path: 'summary', component: summaryComponent },
      { path: 'register', component: registerComponent },
      { path: 'need', component: needCompComponent },
      { path: 'gender', component: genderComponent },
      { path: 'salary', component: salaryComponent },
      { path: 'dob', component: dateOfBirthComponent },
      { path: 'nicotine', component: noicotineComponent },
      { path: 'occupation', component: occupationComponent },
      { path: 'state', component: stateComponent },
      { path: 'four', component: fourIconsComponent },
      { path: 'employee', component: governmentEmployeeComponent },
      { path: 'hours', component: employmentHoursComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
