import { Injectable, Injector, NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AlarmesComponent } from './component/alarmes/alarmes.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterpipePipe } from './filterpipe.pipe';
import { AdminComponent } from './component/admin/admin.component';
import {  AuthInterceptor } from './interceptors/app-http.interceptor';
import { MapComponent } from './component/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ChartjsComponent } from './component/chartjs/chartjs.component';
import { GoogleMap } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlarmePipe } from './alarme.pipe';
import { AlarmTicketManagementComponent } from './pages/alarm-ticket-management/alarm-ticket-management.component';
import { AlarmTicketSwoFormComponent } from './component/alarm-ticket-swo-form/alarm-ticket-swo-form.component';
import { TicketManagementSteperComponent } from './component/ticket-management-steper/ticket-management-steper.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DATE_HELPER_SERVICE_FACTORY, NZ_DATE_CONFIG, NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import fr from '@angular/common/locales/fr';
import {  NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DateFormatPipe } from './shared/date-formater.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AlarmTicketListComponent } from './component/alarm-ticket-list/alarm-ticket-list.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { SiteManagementComponent } from './pages/site-management/site-management.component';
import { SiteListComponent } from './component/site-list/site-list.component';
import { SiteFormComponent } from './component/site-form/site-form.component';
import { TicketTaskListComponent } from './component/ticket-task-list/ticket-task-list.component';
import { TicketTaskFormComponent } from './component/ticket-task-form/ticket-task-form.component';
import { TicketTaskManagementComponent } from './pages/ticket-task-management/ticket-task-management.component';
import { NgxLoadingModule } from 'ngx-loading';
import { SiteDetailsComponent } from './component/site-details/site-details.component';
import { AlarmTicketPmPmaFormComponent } from './component/alarm-ticket-pm-pma-form/alarm-ticket-pm-pma-form.component';
import { RoundPipe } from './shared/round.pipe';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { TicketImageManagerComponent } from './component/ticket-image-manager/ticket-image-manager.component';
import { TicketStateTransformPipe } from './shared/ticket-state-transform';
import { PriorityPipe } from './shared/priority.pipe';
import { DataReadComponent } from './pages/data-read/data-read.component';
import { LastDataDetailComponent } from './component/last-data-detail/last-data-detail.component';
import { PreJobSafetyChecklistComponent } from './pages/pre-job-safety-checklist/pre-job-safety-checklist.component';
import { GrapheComponent } from './graphe/graphe.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';



registerLocaleData(en);
registerLocaleData(fr);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    RoundPipe,
    AppComponent,
    AlarmesComponent,
    MenuComponent,
    FilterpipePipe,
    AdminComponent,
    MapComponent,
    DashboardComponent,
    ChartjsComponent,
    AlarmePipe,
    AlarmTicketManagementComponent,
    AlarmTicketSwoFormComponent,
    TicketManagementSteperComponent,
    DateFormatPipe,
    TicketStateTransformPipe,
    PriorityPipe,
    AlarmTicketListComponent,
    UserManagementComponent,
    SiteManagementComponent,
    SiteListComponent,
    SiteFormComponent,
    TicketTaskListComponent,
    TicketTaskFormComponent,
    TicketTaskManagementComponent,
    SiteDetailsComponent,
    AlarmTicketPmPmaFormComponent,
    TicketImageManagerComponent,
    DataReadComponent,
    LastDataDetailComponent,
    PreJobSafetyChecklistComponent,
    GrapheComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    GoogleMapsModule,
    GoogleMap,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzAutocompleteModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTableModule,
    NzDropDownModule,
    NzAvatarModule,
    NzMessageModule,
    NzCardModule,
    NzTabsModule,
    NzModalModule,
    NzSwitchModule,
    NgxLoadingModule.forRoot({}),
    NzPopconfirmModule

    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_I18N, useValue: en },
    { provide: NZ_I18N, useValue: en_US }
     
  ],
  bootstrap: [AppComponent]
})

@Injectable({
  providedIn: 'root',
  useFactory: DATE_HELPER_SERVICE_FACTORY,
  deps: [Injector, [new Optional(), NZ_DATE_CONFIG], DatePipe]
})
export class AppModule { }
