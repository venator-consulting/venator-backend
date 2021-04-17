import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportComponent } from "./admin/import/import.component";
import { UnauthComponent } from "./shared/unauth/unauth.component";
import { NotfoundComponent } from "./shared/notfound/notfound.component";
import { LoginComponent } from "./shared/login/login.component";
import { LayoutComponent } from './shared/layout/layout.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { SAPDataTableComponent } from './shared/sap-data-table/sap-data-table.component';
import { ResetPasswordNewUserComponent } from './shared/reset-password-new-user/reset-password-new-user.component';
import { ProcedureRegistrationComponent } from './admin/procedure-registration/procedure-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
  //     { path: 'import', component: ImportComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  //   ]
  // },
  { path: 'admin/registration', component: AdminRegistrationComponent },
  { path: 'admin/procedure/add', component: ProcedureRegistrationComponent },
  { path: 'dashboard', component: LayoutComponent },
  { path: 'admin/import', component: ImportComponent },
  { path: 'data', component: SAPDataTableComponent },
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
