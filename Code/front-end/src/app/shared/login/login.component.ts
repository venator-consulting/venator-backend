import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;

  constructor(private _messageService: MessageService, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
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

          localStorage.setItem('username', username);
          localStorage.setItem('role', role);
          localStorage.setItem('full_name', fullName);
          localStorage.setItem('token', res.token);
        }

        this._router.navigate(['/admin/import']);

      }, err => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: err.error.error
        });
      });

  }

  logout() {
    localStorage.clear();
  }

}
