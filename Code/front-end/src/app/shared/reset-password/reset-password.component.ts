import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  passwordObj = {
    selectedPassword : "",
    confirmedPassword: "",
  }
  pass :string;

  constructor(private _messageService: MessageService, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  submitHandle() {
    console.log(this.passwordObj)
    if (this.passwordObj.selectedPassword === this.passwordObj.confirmedPassword) {
        let password = this.passwordObj.selectedPassword
        this._authService
        .resetPassword(password)
        .subscribe(res => {
          if(res.message === "successfully"){
            this._router.navigate(['/']);
          } else {
            this._messageService.add({
              severity: 'error',
              summary: 'ERROR!',
              detail: "password could not be reset"
            });
          }
  
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
