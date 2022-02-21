import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { dataTableColumns } from '../model/dataTableColumns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;

  constructor(private _messageService: MessageService, private _authService: AuthService, private _router: Router, public _translateService: TranslateService) {
    _translateService.addLangs(['de', 'en']);
    _translateService.setDefaultLang('de');
    const browserLang = _translateService.getBrowserLang();
    _translateService.use(browserLang.match(/de|en/) ? browserLang : 'de');
    localStorage.setItem('lang', browserLang);
  }

  ngOnInit(): void {
    this._translateService.get('LOGIN.welcomeMsg').subscribe(elem => {
      // console.log(elem)
    });
  }

  login() {
    const data = {
      username: this.username,
      password: this.password
    };
    this._authService
      .login(data)
      .subscribe(res => {

        if (res && res.user.userinfo) {
          const userInfo = res.user.userinfo;
          const fullName = userInfo.firstname + ' ' + userInfo.lastname;
          const role = userInfo.Role;
          const username = userInfo.username;
          const OrganisationId = userInfo.OrganisationId

          localStorage.setItem('username', username);
          localStorage.setItem('role', role);
          localStorage.setItem('full_name', fullName);
          localStorage.setItem('organisationId', OrganisationId);
          localStorage.setItem('token', res.token);
          if (res.preferences && res.preferences.dataTableColumns) {
            localStorage.setItem('data-columns', res.preferences.dataTableColumns);
          } else /*No user preferneces yet so get the default*/ {
            // no need for default values because we take care about it in the data table component
            // and th default value as null is better in performence
            // dataTableColumns
            //   .getDataTableColumns(this._translateService)
            //   .then((cols) => {
            //     localStorage.setItem('data-columns', JSON.stringify(cols));
            //   });
          }
        }

        if (localStorage.getItem('role') === "Admin") {
          this._router.navigate(['/dashboard/admin/dashboard']);
        } else {
          this._router.navigate(['/dashboard/shared/user/procedures']);
        }

      }, err => {
        // this._translateService.get("ErrorHandler").subscribe(elem => {
        //   let errorMsg = "" ; 

        //   if(err.status=== 400){
        //     errorMsg = elem.badRequest_400
        //   }
        //   else if (err.status=== 401) {
        //     errorMsg = elem.unauthorized_401
        //   }
        //   else if (err.status=== 403) {
        //     errorMsg = elem.forbidden_403
        //   }
        //   else if (err.status=== 404) {
        //     errorMsg = elem.NotFound_404
        //   }
        //   else if (err.status=== 500) {
        //     errorMsg = elem.internalServerError_500
        //   }
        //   this._messageService.add({
        //     severity: 'error',
        //     summary: 'ERROR',
        //     life: 10000,
        //     detail: errorMsg
        //   });
        // })

      });

  }

  logout() {
    localStorage.clear();
  }

}
