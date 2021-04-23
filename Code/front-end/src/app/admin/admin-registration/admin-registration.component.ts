import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Roles } from "../../shared/model/roles";
import { Titles } from "../../shared/model/titles";
import { Users } from "../../shared/model/users";
import { AdminRegistrationService } from "../service/admin-registration.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.sass']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(private _router: Router, private _messageService: MessageService, private _adminRegistrationService: AdminRegistrationService) { }



  titles: Titles[] = Titles.getTitles();
 //roles: Roles[] = Roles.getRoles();
  roles = [{name:'Admin'}];


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
    this._adminRegistrationService.addUser(this.userModel)
      .subscribe(res => {
        console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'Registered successfully!',
          detail: 'Registered successfully'
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
    this._router.navigate(['/admin/dashboard/procedures']); 

  }
}
