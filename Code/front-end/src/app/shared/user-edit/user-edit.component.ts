import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Titles } from "../model/titles";
import { Users } from "../model/users";
import { UserService } from "../service/user.service";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {

  titles: Titles[] = Titles.getTitles();
  roles = [{name:'Manager', value: 2}, {name:'User', value: 3}];
  

  userModel: Users;

  constructor(private _router: Router, private _messageService: MessageService, private _userService: UserService, public _translateService: TranslateService) { }

  ngOnInit(): void {
    this.userModel = new Users();
    this.userModel.id = +localStorage.getItem('selectedUser_userId');
    this.userModel.RoleId = +localStorage.getItem('selectedUser_roleId');
    this.userModel.username = localStorage.getItem('selectedUser_username');
    this.userModel.email = localStorage.getItem('selectedUser_email');
    this.userModel.title = localStorage.getItem('selectedUser_title');
    this.userModel.firstname = localStorage.getItem('selectedUser_firstname');
    this.userModel.lastname = localStorage.getItem('selectedUser_lastname');
    this.userModel.mobileNumber = localStorage.getItem('selectedUser_mobileNr');
    this.userModel.street = localStorage.getItem('selectedUser_street');
    this.userModel.housenumber = parseFloat(localStorage.getItem('selectedUser_houseNr'));
    this.userModel.postCode = localStorage.getItem('selectedUser_postcode');
    this.userModel.city = localStorage.getItem('selectedUser_city');
    this.userModel.country = localStorage.getItem('selectedUser_country');
  }

  submitHandler() {
    this._userService.editUser(this.userModel)
      .subscribe(res => {
        // console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'Updated successfully!',
          detail: 'Updated successfully'
        });
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
  }
  cancelHandle(){
    this._router.navigate(['/dashboard/shared/user/users']); 
    localStorage.removeItem("selectedUser_userId");
    localStorage.removeItem("selectedUser_roleId");
    localStorage.removeItem("selectedUser_username");
    localStorage.removeItem("selectedUser_email");
    localStorage.removeItem("selectedUser_title");
    localStorage.removeItem("selectedUser_firstname");
    localStorage.removeItem("selectedUser_lastname");
    localStorage.removeItem("selectedUser_mobileNr");
    localStorage.removeItem("selectedUser_street");
    localStorage.removeItem("selectedUser_houseNr");
    localStorage.removeItem("selectedUser_postcode");
    localStorage.removeItem("selectedUser_city");
    localStorage.removeItem("selectedUser_country");

  }
}
