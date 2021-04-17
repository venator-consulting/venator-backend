import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadCrumbComponent } from './shared/bread-crumb/bread-crumb.component';
import { MenubarModule } from 'primeng/menubar';
import { ImportComponent } from './admin/import/import.component';
import { StepsModule } from 'primeng/steps';
import { UnauthComponent } from './shared/unauth/unauth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { LoginComponent } from './shared/login/login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import {PasswordModule} from 'primeng/password';
import {MenuModule} from 'primeng/menu';
import { LayoutComponent } from './shared/layout/layout.component'
import {MegaMenuModule} from 'primeng/megamenu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ListboxModule} from 'primeng/listbox';
import {TreeModule} from 'primeng/tree';
import {DividerModule} from 'primeng/divider';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { SAPDataTableComponent } from './shared/sap-data-table/sap-data-table.component';
import {TooltipModule} from 'primeng/tooltip';
import { ResetPasswordNewUserComponent } from './shared/reset-password-new-user/reset-password-new-user.component';
import { ProcedureRegistrationComponent } from './admin/procedure-registration/procedure-registration.component';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BreadCrumbComponent,
    ImportComponent,
    UnauthComponent,
    NotfoundComponent,
    LoginComponent,
    AdminRegistrationComponent,
    ResetPasswordComponent,
    LayoutComponent,
    SAPDataTableComponent,
    ResetPasswordNewUserComponent,
    ProcedureRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    DividerModule,
    StepsModule,
    CheckboxModule,
    ToastModule,
    MenubarModule,
    TableModule,
    FileUploadModule,
    CalendarModule,
    MultiSelectModule,
    TooltipModule,
    TreeModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    HttpClientModule,
    SidebarModule,
    ListboxModule,
    PanelMenuModule,
    MenuModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    DialogModule,
    ContextMenuModule,
    AccordionModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    MegaMenuModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
