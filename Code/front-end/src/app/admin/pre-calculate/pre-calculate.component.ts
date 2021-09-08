import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProcedureService } from '../service/procedure.service';
import { PreCalculateService } from '../service/pre-calculate.service';
import { Procedures } from 'src/app/shared/model/procedures';

@Component({
  selector: 'app-pre-calculate',
  templateUrl: './pre-calculate.component.html',
  styleUrls: ['./pre-calculate.component.sass']
})
export class PreCalculateComponent implements OnInit {
  orgId: number;
  prcId: number;
  procedureName: string;
  waiting: boolean;
  disableAmount: boolean;
  disableCredit: boolean;
  disabletextWord: boolean;
  disableText_account: boolean;
  disablePayment: boolean;
  disableDueDate: boolean;

  constructor(private _preCalcService: PreCalculateService, private _messageService: MessageService,
    private _procedureService: ProcedureService) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.disableAmount = (localStorage.getItem('currentProcedureAmount') === 'true');
    this.disableCredit = (localStorage.getItem('currentProcedureCredit') === 'true');
    this.disabletextWord = (localStorage.getItem('currentProcedureText_word') === 'true');
    this.disableText_account = (localStorage.getItem('currentProcedureText_account') === 'true');
    this.disablePayment = (localStorage.getItem('currentProcedurePayment') === 'true');
    this.disableDueDate = (localStorage.getItem('currentProcedureDueDate') === 'true');
  }

  updateProcedureStatus() {
    if (this.disableAmount && this.disableCredit && this.disableDueDate &&
      this.disablePayment && this.disableText_account && this.disabletextWord) {
      this._procedureService.patch({ id: this.prcId, status: 'CALCULATED' })
        .subscribe(res => localStorage.setItem('currentProcedureStatus', 'CALCULATED'));
    }
  }

  textByWordStart() {
    this.waiting = true;
    this._preCalcService.textAnalysisByWord(this.orgId, this.prcId)
      .subscribe(res => {
        this.waiting = false;
        localStorage.setItem('currentProcedureText_word', 'true');
        this.disabletextWord = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: 'records updated successfully!',
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  textByAccountStart() {
    this.waiting = true;
    this._preCalcService.textAnalysisByAccount(this.orgId, this.prcId)
      .subscribe(res => {
        this.waiting = false;
        localStorage.setItem('currentProcedureText_account', 'true');
        this.disableText_account = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: 'records updated successfully!',
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }


  amountStart() {
    this.waiting = true;
    this._preCalcService.amountAnalysis(this.orgId, this.prcId)
      .subscribe(res => {
        this.waiting = false;
        localStorage.setItem('currentProcedureAmount', 'true');
        this.disableAmount = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: 'records updated successfully!',
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  creditorStart() {
    this.waiting = true;
    this._preCalcService.creditorAnalysis(this.orgId, this.prcId)
      .subscribe(res => {
        this.waiting = false;
        localStorage.setItem('currentProcedureCredit', 'true');
        this.disableCredit = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: 'records updated successfully!',
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  paymentStart() {
    this.waiting = true;
    this._preCalcService.paymentAnalysis(this.orgId, this.prcId)
      .subscribe(res => {
        this.waiting = false;
        localStorage.setItem('currentProcedurePayment', 'true');
        this.disablePayment = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: 'records updated successfully!',
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  dueDateStart() {
    this.waiting = true;
    this._preCalcService.dueDateAnalysis(this.orgId, this.prcId)
      .subscribe(res => {
        this.waiting = false;
        localStorage.setItem('currentProcedureDueDate', 'true');
        this.disableDueDate = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: 'records updated successfully!',
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }


}
