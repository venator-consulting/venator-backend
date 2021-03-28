import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportComponent } from "./admin/import/import.component";
import { UnauthComponent } from "./shared/unauth/unauth.component";
import { NotfoundComponent } from "./shared/notfound/notfound.component";
import { LoginComponent } from "./shared/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
  //     { path: 'import', component: ImportComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  //   ]
  // },
  { path: 'admin/import', component: ImportComponent },
  { path: 'unauthorized', component: UnauthComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
