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

  constructor(private _preCalcService: PreCalculateService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
  }

  textByWordStart() {
    this.waiting = true;
    this._preCalcService.textAnalysisByWord(this.orgId, this.prcId)
    .subscribe(res => {
      this.waiting = false;
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
      this._messageService.add({
        severity: 'success',
        summary: 'SUCCESS',
        life: 10000,
        detail: 'records updated successfully!',
      })
    }, er => this.waiting = false);
  }

}
