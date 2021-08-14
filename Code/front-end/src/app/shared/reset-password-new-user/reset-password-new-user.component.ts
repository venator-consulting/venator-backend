import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password-new-user',
  templateUrl: './reset-password-new-user.component.html',
  styleUrls: ['./reset-password-new-user.component.sass'],
})
export class ResetPasswordNewUserComponent implements OnInit {
  passwordObj = {
    selectedPassword: '',
    confirmedPassword: '',
  };
  pass: string;
  token: any;
  constructor(
    private _messageService: MessageService,
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
    public _translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this._translateService.setDefaultLang('de');
    this.token = this._route.snapshot.paramMap.get('token');
    // console.log(this.token)
  }

  submitHandle() {
    console.log(this.passwordObj);
    if (
      this.passwordObj.selectedPassword === this.passwordObj.confirmedPassword
    ) {
      let password = this.passwordObj.selectedPassword;
      this._authService
        .resetPassword({ password: password, token: this.token })
        .subscribe(
          (res) => {
            this._router.navigate(['/']);
          },
          (err) => {}
        );
    } else {
      this._translateService.get('ErrorHandler').subscribe((elem) => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: elem.passwordsMatch,
        });
      });
    }
  }
  // cancelHandle() {
  //   this._router.navigate(['/dashboard/shared/user/procedures']);
  // }
}
