import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from "../service/role-service.service";
import { UsersService } from "../service/users.service";
import { Procedures } from "../../shared/model/procedures";
import { Choices } from "../../shared/model/choices";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OrganisationService } from '../service/organisation.service';

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
     private _usersService: UsersService, private _orgService : OrganisationService) { }


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
        console.log('error: ' + err.error);
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: err.error
        });
      });
  }
  cancelHandle() {
    this._router.navigate(['/admin/dashboard/procedures']);

  }
}
