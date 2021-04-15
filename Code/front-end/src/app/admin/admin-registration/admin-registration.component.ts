import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Roles } from "../../model/roles";
import { Titles } from "../../model/titles";
import { Users } from "../../model/users";
import { AdminRegistrationService } from "../service/admin-registration.service"
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.sass']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(private _messageService: MessageService, private _adminRegistrationService: AdminRegistrationService) { }



  titles: Titles[] = Titles.getTitles();
  roles: Roles[] = Roles.getRoles();


  userModel: Users = {
    title: "",
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
    country: '',
  };



  ngOnInit(): void {
  }

  submitHandler() {
    debugger;
    this._adminRegistrationService.addUser(this.userModel)
      .subscribe(res => {
        console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'Registered successfully!',
          detail: 'Registered successfully'
        });
      }, err => {
        debugger;
        console.log('error: ' + err.error);
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: err.error
        });
      });
  }

}
