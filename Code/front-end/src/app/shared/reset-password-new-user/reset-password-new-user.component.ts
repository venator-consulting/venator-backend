import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { MessageService } from 'primeng/api';
import { Router ,ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password-new-user',
  templateUrl: './reset-password-new-user.component.html',
  styleUrls: ['./reset-password-new-user.component.sass']
})
export class ResetPasswordNewUserComponent implements OnInit {

  passwordObj = {
    selectedPassword : "",
    confirmedPassword: "",
  }
  pass :string;
  token:any ; 
  constructor(private _messageService: MessageService, private _authService: AuthService, private _router: Router,  private _route: ActivatedRoute, public _translateService: TranslateService) { }
  ngOnInit(): void {
    debugger;
    this.token = this._route.snapshot.paramMap.get('token');
    console.log(this.token)
    debugger;
  }

  submitHandle() {
    console.log(this.passwordObj)
    if (this.passwordObj.selectedPassword === this.passwordObj.confirmedPassword) {
        let password = this.passwordObj.selectedPassword
        this._authService
        .resetPassword({password: password, token: this.token})
        .subscribe(res => {
          // if(res.message === "successfully"){
            this._router.navigate(['/']);
          // } else {
          //   this._messageService.add({
          //     severity: 'error',
          //     summary: 'ERROR!',
          //     detail: "password could not be reset"
          //   });
          // }
  
        }, err => {
          this._translateService.get("ErrorHandler").subscribe(elem => {
            let errorMsg = "" ; 
  
            if(err.status=== 400){
              errorMsg = elem.badRequest_400
            }
            else if (err.status=== 401) {
              errorMsg = elem.unauthorized_401
            }
            else if (err.status=== 403) {
              errorMsg = elem.forbidden_403
            }
            else if (err.status=== 404) {
              errorMsg = elem.NotFound_404
            }
            else if (err.status=== 500) {
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
    this._router.navigate(['/shared/user/procedures']);
  }
}
