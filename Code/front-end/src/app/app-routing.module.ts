import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ImportComponent } from "./admin/import/import.component";
import { UnauthComponent } from "./shared/unauth/unauth.component";
import { NotfoundComponent } from "./shared/notfound/notfound.component";
import { LoginComponent } from "./shared/login/login.component";
import { LayoutComponent } from './shared/layout/layout.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { OrganisationRegistrationComponent } from './admin/organisation-registration/organisation-registration.component';
import { SAPDataTableComponent } from './shared/sap-data-table/sap-data-table.component';
import { SusaComponent } from "./shared/sap-data-table/susa/susa.component";
import { ResetPasswordNewUserComponent } from './shared/reset-password-new-user/reset-password-new-user.component';
import { ProcedureRegistrationComponent } from './admin/procedure-registration/procedure-registration.component';
import { AmountAnalysisComponent } from "./shared/analysis/amount-analysis/amount-analysis.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { UserRegistrationComponent } from "./shared/user-registration/user-registration.component";
import { UserEditComponent } from "./shared/user-edit/user-edit.component";
import { ProcedureEditComponent } from "./admin/procedure-edit/procedure-edit.component";
import { UserDashboardComponent } from "./shared/user-dashboard/user-dashboard.component";
import { OrganisationUsersComponent } from "./shared/organisation-users/organisation-users.component";
import { DocumentTypeComponent } from "./admin/document-type/document-type.component";
import { AmountAnalysisDetailsComponent } from "./shared/analysis/amount-analysis/details/amount-analysis-details.component";
import { TextAnalysisComponent } from "./shared/analysis/text-analysis/text-analysis.component";
import { TextAnalysisDetailsComponent } from "./shared/analysis/text-analysis/text-analysis-details/text-analysis-details.component";
import { PaymentAnalysisComponent } from "./shared/analysis/payment-analysis/payment-analysis.component";
import { PaymentAnalysisDetailsComponent } from "./shared/analysis/payment-analysis/payment-analysis-details/payment-analysis-details.component";
import { DueDateComponent } from "./shared/analysis/payment-analysis/due-date/due-date.component";
import { DueDateDetailsComponent } from "./shared/analysis/payment-analysis/due-date-details/due-date-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
  //     { path: 'import', component: ImportComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  //   ]
  // },
  { path: 'admin/admin/add', component: AdminRegistrationComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/organisation/add', component: OrganisationRegistrationComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/organisation/edit/:id', component: OrganisationRegistrationComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/procedure/add', component: ProcedureRegistrationComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/procedure/edit', component: ProcedureEditComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/import', component: ImportComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'admin/document-type', component: DocumentTypeComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },

  { path: 'shared/user/add', component: UserRegistrationComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager'] } },
  { path: 'shared/user/edit', component: UserEditComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager'] } },
  { path: 'shared/user/procedures', component: UserDashboardComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager'] } },
  { path: 'shared/user/users', component: OrganisationUsersComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager'] } },
  { path: 'shared/data', component: SAPDataTableComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'shared/data/susa', component: SusaComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },

  { path: 'analysis/amount', component: AmountAnalysisComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'analysis/amount/:orgId/:prcId/:accountNumber/:baseBalance', component: AmountAnalysisDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'analysis/text', component: TextAnalysisComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'analysis/text/:orgId/:prcId/:accountNumber', component: TextAnalysisDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'analysis/payment', component: PaymentAnalysisComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'analysis/payment/:orgId/:prcId/:accountNumber', component: PaymentAnalysisDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'analysis/due-date', component: DueDateComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },
  { path: 'analysis/due-date/deails/:accountNumber', component: DueDateDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin', 'Manager', 'User'] } },

  { path: 'unauthorized', component: UnauthComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'reset/:token', component: ResetPasswordNewUserComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
