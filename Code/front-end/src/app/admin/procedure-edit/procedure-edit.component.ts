import { Component, OnInit } from '@angular/core';
import { Procedures } from "../../shared/model/procedures";
import { RoleServiceService } from "../service/role-service.service";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
    OrganisationId: 0,
    name: this.currentProcedureName,
    data: this.currentProcedureData,
    analysis: this.currentProcedureAnalysis,
    dataSource: '',

  };
  constructor(private _router: Router, private _messageService: MessageService, private _roleServiceService : RoleServiceService, public _translateService: TranslateService) { }

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
    this._router.navigate(['/shared/user/procedures']);
    localStorage.removeItem("currentProcedureId");
    localStorage.removeItem("currentProcedureName");
    localStorage.removeItem("currentProcedureData");
    localStorage.removeItem("currentProcedureAnalysis");

  }

}
