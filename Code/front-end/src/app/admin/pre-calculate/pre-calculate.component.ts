import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PreCalculateService } from '../service/pre-calculate.service';

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

  constructor(private _preCalcService: PreCalculateService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.disableAmount = (localStorage.getItem('currentProcedureAmount') === 'true');
    this.disableCredit = (localStorage.getItem('currentProcedureCredit') === 'true');
    this.disabletextWord = (localStorage.getItem('currentProcedureText_word') === 'true');
    this.disableText_account = (localStorage.getItem('currentProcedureText_account') === 'true');
    this.disablePayment = (localStorage.getItem('currentProcedurePayment') === 'true');
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
      })
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
      })
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
      })
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
      })
    }, er => this.waiting = false);
  }


}
