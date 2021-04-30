import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from "../service/role-service.service";
import { UsersService } from "../service/users.service";
import { Procedures } from "../../shared/model/procedures";
import { Choices } from "../../shared/model/choices";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OrganisationService } from '../service/organisation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-procedure-registration',
  templateUrl: './procedure-registration.component.html',
  styleUrls: ['./procedure-registration.component.sass']
})
export class ProcedureRegistrationComponent implements OnInit {

  orgs: [] = [];
  dataSources: Choices[] = Choices.getDataSources();

  procedureModel: Procedures = new Procedures();

  constructor(private _router: Router, private _messageService: MessageService, private _roleServiceService: RoleServiceService,
     private _usersService: UsersService, private _orgService : OrganisationService, public _translateService: TranslateService) { }


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
    this._roleServiceService.addProcedure(this.procedureModel)
      .subscribe(res => {
        console.dir('done: ' + res);
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
  cancelHandle() {
    this._router.navigate(['/shared/user/procedures']);

  }
}
