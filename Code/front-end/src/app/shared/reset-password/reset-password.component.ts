import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  passwordObj = {
    selectedPassword: "",
    confirmedPassword: "",
  }
  pass: string;

  constructor(private _messageService: MessageService, private _authService: AuthService, private _router: Router, public _translateService: TranslateService) { }

  ngOnInit(): void {
  }

  submitHandle() {
    // console.log(this.passwordObj)
    if (this.passwordObj.selectedPassword === this.passwordObj.confirmedPassword) {
      let password = this.passwordObj.selectedPassword
      this._authService
        .changePassword({ password: password })
        .subscribe(res => {
            this._router.navigate(['/']);
        }, err => {
          this._translateService.get("ErrorHandler").subscribe(elem => {
            let errorMsg = "";

            if (err.status === 400) {
              errorMsg = elem.badRequest_400
            }
            else if (err.status === 401) {
              errorMsg = elem.unauthorized_401
            }
            else if (err.status === 403) {
              errorMsg = elem.forbidden_403
            }
            else if (err.status === 404) {
              errorMsg = elem.NotFound_404
            }
            else if (err.status === 500) {
              errorMsg = elem.internalServerError_500
            }
            this._messageService.add({
              severity: 'error',
              summary: 'ERROR',
              life: 10000,
              detail: errorMsg
            });
          })
        });

    } else {
      this._translateService.get("ErrorHandler").subscribe(elem => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: elem.passwordsMatch
        });
      })

    }

  }
  cancelHandle() {
    this._router.navigate(['/dashboard/shared/user/procedures']);
  }
}
