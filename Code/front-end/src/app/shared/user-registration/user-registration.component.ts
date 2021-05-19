import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Titles } from "../model/titles";
import { Users } from "../model/users";
import { UserService } from "../service/user.service";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.sass']
})
export class UserRegistrationComponent implements OnInit {

  titles: Titles[] = Titles.getTitles();
  roles = [{ name: 'Manager', value: 2 }, { name: 'User', value: 3 }];
  userModel: Users;

  constructor(private _router: Router, private _messageService: MessageService, private _userService: UserService, public _translateService: TranslateService) { }

  ngOnInit(): void {
    this.userModel = new Users();
    this.userModel.OrganisationId = +localStorage.getItem('organisationId');
  }
  submitHandler() {
    this._userService.addUser(this.userModel)
      .subscribe(res => {
        // console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'Registered successfully!',
          detail: 'Registered successfully'
        });
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
  }
  cancelHandle() {
    this._router.navigate(['/shared/user/users']);

  }
}
