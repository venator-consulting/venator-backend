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

  procedureModel: Procedures;


  constructor(private _router: Router, private _messageService: MessageService, private _roleServiceService : RoleServiceService, public _translateService: TranslateService) { }

  ngOnInit(): void {
    this.procedureModel = new Procedures();
    this.procedureModel.id = +localStorage.getItem('currentProcedureId');
    this.procedureModel.name = localStorage.getItem('currentProcedureName');
    this.procedureModel.data = (localStorage.getItem('currentProcedureData') === "true");
    this.procedureModel.analysis = (localStorage.getItem('currentProcedureAnalysis') === "true");

  }

  submitHandler(){
     this._roleServiceService.editProcedure(this.procedureModel)
      .subscribe(res => {
        // console.dir('done: ' + res);
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
    this._router.navigate(['/dashboard/shared/user/procedures']);
    localStorage.removeItem("currentProcedureId");
    localStorage.removeItem("currentProcedureName");
    localStorage.removeItem("currentProcedureData");
    localStorage.removeItem("currentProcedureAnalysis");

  }

}
