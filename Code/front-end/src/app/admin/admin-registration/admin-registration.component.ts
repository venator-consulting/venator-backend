import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Roles } from "../../shared/model/roles";
import { Titles } from "../../shared/model/titles";
import { Users } from "../../shared/model/users";
import { AdminRegistrationService } from "../service/admin-registration.service";
import { Router } from '@angular/router';
import { OrganisationService } from '../service/organisation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.sass']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(private _router: Router, private _messageService: MessageService, public _translateService: TranslateService,
      private _adminRegistrationService: AdminRegistrationService, private _orgService : OrganisationService) { }


  orgs: [] = [];
  titles: Titles[] = Titles.getTitles();
  //roles: Roles[] = Roles.getRoles();
  roles = [{name:'Admin', value: 1}];


  userModel: Users = {
    title: "",
    OrganisationId: 0,
    email: '',
    RoleId: 1,
    role: '',
    firstname: '',
    lastname: '',
    username: '',
    mobileNr: null,
    contactPerson: '',
    street: '',
    houseNr: null,
    city: '',
    postCode: null,
    country: '',
  };



  ngOnInit(): void {
    this._orgService.get()
    .subscribe(
      (data) => {
        this.orgs = data;
      },
      (error) => console.log(error)
    );
  }

  submitHandler() {
    this._adminRegistrationService.addUser(this.userModel)
      .subscribe(res => {
        // console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'Registered successfully!',
          detail: 'Registered successfully'
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
    this._router.navigate(['/admin/dashboard/procedures']); 

  }
}
