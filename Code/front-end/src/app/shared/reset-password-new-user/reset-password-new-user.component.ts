import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { MessageService } from 'primeng/api';
import { Router ,ActivatedRoute} from '@angular/router';

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
  constructor(private _messageService: MessageService, private _authService: AuthService, private _router: Router,  private _route: ActivatedRoute) { }
  debugger;
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
          this._messageService.add({
            severity: 'error',
            summary: 'ERROR!',
            detail: err.error.message
          });
        });
      
    } else {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR!',
        detail: "The passwords do not match"
      });
    }

  }
  cancelHandle() {
    this._router.navigate(['/dashboard']);
  }
}
