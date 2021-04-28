import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Titles } from "../model/titles";
import { Users } from "../model/users";
import { UserService } from "../service/user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {

  titles: Titles[] = Titles.getTitles();
  roles = [{name:'Manager'}, {name:'User'}];
  userModel: Users = {
    title: "",
    organisationId: 0,
    email: '',
    role: '',
    firstname: '',
    lastname: '',
    username: '',
    mobileNr: null,
    contactPerson: '',
    street: '',
    houseNr: null,
    city: '',
    postcode: null,
    country: '',
 };

  constructor(private _router: Router, private _messageService: MessageService, private _userService: UserService) { }

  ngOnInit(): void {
  }

  submitHandler() {
    this._userService.editUser(this.userModel)
      .subscribe(res => {
        console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'Updated successfully!',
          detail: 'Updated successfully'
        });
      }, err => {
        console.log('error: ' + err.error);
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: err.error
        });
      });
  }
  cancelHandle(){
    this._router.navigate(['/shared/user/users']); 

  }
}
