import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptchaModule } from 'primeng/captcha';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { ImportComponent } from './admin/import/import.component';
import { StepsModule } from 'primeng/steps';
import { UnauthComponent } from './shared/unauth/unauth.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { LoginComponent } from './shared/login/login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { PasswordModule } from 'primeng/password';
import { MenuModule } from 'primeng/menu';
import { LayoutComponent } from './shared/layout/layout.component'
import { MegaMenuModule } from 'primeng/megamenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { TreeModule } from 'primeng/tree';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { SAPDataTableComponent } from './shared/sap-data-table/sap-data-table.component';
import { TooltipModule } from 'primeng/tooltip';
import { ResetPasswordNewUserComponent } from './shared/reset-password-new-user/reset-password-new-user.component';
import { ProcedureRegistrationComponent } from './admin/procedure-registration/procedure-registration.component';
import { CheckboxModule } from 'primeng/checkbox';
import { AmountAnalysisComponent } from './shared/analysis/amount-analysis/amount-analysis.component';
import { ChartModule } from 'primeng/chart';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OrganisationRegistrationComponent } from './admin/organisation-registration/organisation-registration.component';
import { UserRegistrationComponent } from './shared/user-registration/user-registration.component';
import { UserEditComponent } from './shared/user-edit/user-edit.component';
import { UserDashboardComponent } from './shared/user-dashboard/user-dashboard.component';
import { OrganisationUsersComponent } from './shared/organisation-users/organisation-users.component';
import { ProcedureEditComponent } from './admin/procedure-edit/procedure-edit.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { AuthGuard } from './auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { DocumentTypeComponent } from './admin/document-type/document-type.component';
import { AmountAnalysisDetailsComponent } from './shared/analysis/amount-analysis/details/amount-analysis-details.component';
import { TextAnalysisComponent } from './shared/analysis/text-analysis/text-analysis.component';
import { TextAnalysisDetailsComponent } from './shared/analysis/text-analysis/text-analysis-details/text-analysis-details.component';
registerLocaleData(localeDe, 'de');
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SusaComponent } from './shared/sap-data-table/susa/susa.component';
import { PaymentAnalysisComponent } from './shared/analysis/payment-analysis/payment-analysis.component';
import { HighlightPipe } from './shared/pipes/highlight.pipe';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaymentAnalysisDetailsComponent } from './shared/analysis/payment-analysis/payment-analysis-details/payment-analysis-details.component';
import { DueDateComponent } from './shared/analysis/payment-analysis/due-date/due-date.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { SliderModule } from 'primeng/slider';

import { BnNgIdleService } from 'bn-ng-idle';
import { DueDateDetailsComponent } from './shared/analysis/payment-analysis/due-date-details/due-date-details.component';
import { CreditorAnalysisComponent } from './shared/analysis/creditor-analysis/creditor-analysis.component';
import { CreditorAnalysisDetailsComponent } from './shared/analysis/creditor-analysis/creditor-analysis-details/creditor-analysis-details.component';
import { AccountTypeComponent } from './admin/account-type/account-type.component';
import { OpeningBalanceComponent } from './shared/liquidity/opening-balance/opening-balance.component';
import { CreditLineComponent } from './shared/liquidity/credit-line/credit-line.component';
import { FreeLiquidityComponent } from './shared/liquidity/free-liquidity/free-liquidity.component';
import { FreeLiquidityDetailsComponent } from './shared/liquidity/free-liquidity/free-liquidity-details/free-liquidity-details.component';
import { TextAnalysisWordDetailsComponent } from './shared/analysis/text-analysis/text-analysis-word-details/text-analysis-word-details.component';
import { TextAnalysisIndexedComponent } from './shared/analysis/text-analysis/text-analysis-indexed/text-analysis-indexed.component';
import { TextAnalysisPreComponent } from './shared/analysis/text-analysis/text-analysis-pre/text-analysis-pre.component';
import { PreCalculateComponent } from './admin/pre-calculate/pre-calculate.component';
import { AmountAnalysisPreComponent } from './shared/analysis/amount-analysis/amount-analysis-pre/amount-analysis-pre.component';
import { CreditorAnalysisCalcComponent } from './shared/analysis/creditor-analysis/creditor-analysis-calc/creditor-analysis-calc.component';
import { PaymentDetailsMonthComponent } from './shared/analysis/payment-analysis/payment-details-month/payment-details-month.component';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { OurServicesComponent } from './website/our-services/our-services.component';
import { ContactComponent } from './website/contact/contact.component';
import { WhatWeDoComponent } from './website/what-we-do/what-we-do.component';
import { WNavBarComponent } from './website/w-nav-bar/w-nav-bar.component';
import { WFooterComponent } from './website/w-footer/w-footer.component';
import { SliderComponent } from './website/slider/slider.component';
import { SliderManagementComponent } from './admin/website/slider/slider-management.component';
import { ContactManagementComponent } from './admin/website/contact-management/contact-management.component';
import { AboutManagementComponent } from './admin/website/about-management/about-management.component';
import { ServicesManagementComponent } from './admin/website/services-management/services-management.component';
import { ImportPstComponent } from './admin/import-pst/import-pst.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ImportComponent,
    UnauthComponent,
    NotfoundComponent,
    LoginComponent,
    AdminRegistrationComponent,
    ResetPasswordComponent,
    LayoutComponent,
    SAPDataTableComponent,
    ResetPasswordNewUserComponent,
    ProcedureRegistrationComponent,
    AmountAnalysisComponent,
    OrganisationRegistrationComponent,
    UserRegistrationComponent,
    UserEditComponent,
    UserDashboardComponent,
    OrganisationUsersComponent,
    ProcedureEditComponent,
    AdminDashboardComponent,
    DocumentTypeComponent,
    AmountAnalysisDetailsComponent,
    TextAnalysisComponent,
    TextAnalysisDetailsComponent,
    SusaComponent,
    PaymentAnalysisComponent,
    HighlightPipe,
    PaymentAnalysisDetailsComponent,
    DueDateComponent,
    DueDateDetailsComponent,
    CreditorAnalysisComponent,
    CreditorAnalysisDetailsComponent,
    AccountTypeComponent,
    OpeningBalanceComponent,
    CreditLineComponent,
    FreeLiquidityComponent,
    FreeLiquidityDetailsComponent,
    TextAnalysisWordDetailsComponent,
    TextAnalysisIndexedComponent,
    TextAnalysisPreComponent,
    PreCalculateComponent,
    AmountAnalysisPreComponent,
    CreditorAnalysisCalcComponent,
    PaymentDetailsMonthComponent,
    HomeComponent,
    AboutComponent,
    OurServicesComponent,
    ContactComponent,
    WhatWeDoComponent,
    WNavBarComponent,
    WFooterComponent,
    SliderComponent,
    SliderManagementComponent,
    ContactManagementComponent,
    AboutManagementComponent,
    ServicesManagementComponent,
    ImportPstComponent
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
    ChartModule,
    CheckboxModule,
    ToastModule,
    MenubarModule,
    TableModule,
    FileUploadModule,
    CalendarModule,
    MultiSelectModule,
    TooltipModule,
    TreeModule,
    SelectButtonModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SidebarModule,
    ListboxModule,
    PanelMenuModule,
    MenuModule,
    ButtonModule,
    CardModule,
    ProgressSpinnerModule,
    DialogModule,
    DynamicDialogModule,
    ContextMenuModule,
    AccordionModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    MegaMenuModule,
    AutoCompleteModule,
    InputNumberModule,
    BreadcrumbModule,
    ConfirmDialogModule,
    SliderModule,
    CaptchaModule
  ],
  providers: [MessageService, ConfirmationService, AuthGuard, {
    provide: LOCALE_ID,
    useValue: 'de'
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    BnNgIdleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
