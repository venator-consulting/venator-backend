import { Component, OnInit } from '@angular/core';
import { Procedures } from "../../shared/model/procedures";
import { RoleServiceService } from "../service/role-service.service";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProcedureService } from '../service/procedure.service';

@Component({
  selector: 'app-procedure-edit',
  templateUrl: './procedure-edit.component.html',
  styleUrls: ['./procedure-edit.component.sass']
})
export class ProcedureEditComponent implements OnInit {

  procedureModel: Procedures;
  role: string;


  constructor(private _router: Router, private _messageService: MessageService,
    private _roleServiceService: RoleServiceService, public _translateService: TranslateService,
    private _procedureService: ProcedureService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.procedureModel = new Procedures();
    this.procedureModel.id = +localStorage.getItem('currentProcedureId');
    this._procedureService.getOne(this.procedureModel.id)
      .subscribe(procedure => this.procedureModel = procedure);
  }

  submitHandler() {
    if (this.procedureModel.amount && this.procedureModel.credit &&
      this.procedureModel.text_account && this.procedureModel.text_word &&
      this.procedureModel.payment && this.procedureModel.due_date)
      this.procedureModel.status = "CALCULATED";
    else if (this.procedureModel.amount || this.procedureModel.credit ||
      this.procedureModel.text_account || this.procedureModel.text_word ||
      this.procedureModel.payment || this.procedureModel.due_date)
      this.procedureModel.status = "PARTIAL_CALCULATED";
    else if (!this.procedureModel.amount && !this.procedureModel.credit &&
      !this.procedureModel.text_account && !this.procedureModel.text_word &&
      !this.procedureModel.payment && !this.procedureModel.due_date)
      this.procedureModel.status = "IMPORTED";
    localStorage.setItem('currentProcedureStatus', this.procedureModel.status);
    localStorage.setItem('currentProcedureAmount', '' + this.procedureModel.amount);
    localStorage.setItem('currentProcedureCredit', '' + this.procedureModel.credit);
    localStorage.setItem('currentProcedurePayment', '' + this.procedureModel.payment);
    localStorage.setItem('currentProcedureText_word', '' + this.procedureModel.text_word);
    localStorage.setItem('currentProcedureText_account', '' + this.procedureModel.text_account);
    localStorage.setItem('currentProcedureDueDate', '' + this.procedureModel.due_date);
    localStorage.setItem('currentProcedureData', '' + this.procedureModel.data);
    localStorage.setItem('currentProcedureAnalysis', '' + this.procedureModel.analysis);
    this._procedureService.update(this.procedureModel)
      .subscribe(res => {
        // console.dir('done: ' + res);
        this._messageService.add({
          severity: 'success',
          summary: 'updated successfully!',
          detail: 'updated successfully'
        });
      }, err => {
      });
  }
  cancelHandle() {
    this._router.navigate(['/dashboard/shared/user/procedures']);
    localStorage.removeItem("currentProcedureId");
    localStorage.removeItem("currentProcedureName");
    localStorage.removeItem("currentProcedureData");
    localStorage.removeItem("currentProcedureAnalysis");

  }

}
