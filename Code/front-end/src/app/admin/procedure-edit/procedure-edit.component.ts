import { Component, OnInit } from '@angular/core';
import { Procedures } from "../../shared/model/procedures";
import { RoleServiceService } from "../service/role-service.service";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure-edit',
  templateUrl: './procedure-edit.component.html',
  styleUrls: ['./procedure-edit.component.sass']
})
export class ProcedureEditComponent implements OnInit {


  currentProcedureId = parseInt(localStorage.getItem('currentProcedureId'));
  currentProcedureName = localStorage.getItem('currentProcedureName');
  currentProcedureData :boolean = (localStorage.getItem('currentProcedureData') === "true");
  currentProcedureAnalysis :boolean = (localStorage.getItem('currentProcedureAnalysis') === "true");

  procedureModel: Procedures = {
    id: this.currentProcedureId,
    organisationId: 0,
    name: this.currentProcedureName,
    data: this.currentProcedureData,
    analysis: this.currentProcedureAnalysis,
    dataSource: '',

  };
  constructor(private _router: Router, private _messageService: MessageService, private _roleServiceService : RoleServiceService) { }

  ngOnInit(): void {

  }

  submitHandler(){
     this._roleServiceService.editProcedure(this.procedureModel)
      .subscribe(res => {
        console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'updated successfully!',
          detail: 'updated successfully'
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
    this._router.navigate(['/shared/user/procedures']); 

  }

}
