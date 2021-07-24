import { Component, OnInit } from '@angular/core';
import { LiquidityService } from '../../service/liquidity.service';
import { CreditLine } from '../../model/creditLine';
import { TableColumn } from '../../model/tableColumn';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-credit-line',
  templateUrl: './credit-line.component.html',
  styleUrls: ['./credit-line.component.sass']
})
export class CreditLineComponent implements OnInit {
  procedureName: string;
  prcId: number;
  orgId: number;
  data: CreditLine[];
  cols: TableColumn[];
  originalCreditLine: number;
  originalCreditLineFromDate: Date;
  originalCreditLineToDate: Date;
  newDialog: boolean;
  newRecord: CreditLine;

  constructor(private _liquidityService: LiquidityService, private _messageService: MessageService) { }

  ngOnInit(): void {

    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.cols = [
      {
        header: 'accountNumber',
        field: 'accountNumber'
      },
      {
        header: 'accountName',
        field: 'accountName'
      },
      {
        header: 'creditLine',
        field: 'creditLine',
        width: '200',
        align: 'right'
      },
      {
        header: 'creditLineFromDate',
        field: 'creditLineFromDate'
      },
      {
        header: 'creditLineToDate',
        field: 'creditLineToDate'
      }
    ];

    this._liquidityService
      .getCreditLine(this.orgId, this.prcId)
      .subscribe(res => {

        this.data = res;
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: er.error.error
        });
      });

  } // end of ng on init


  editRow(row: CreditLine) {
    this.data.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalCreditLine = row.creditLine;
    this.originalCreditLineFromDate = row.creditLineFromDate;
    this.originalCreditLineToDate = row.creditLineToDate;
  }

  save(row: CreditLine) {
    this._liquidityService
      .updateCreditLine(this.orgId, this.prcId, row)
      .subscribe(res => {
        row.isEditable = false;
        let numOfRecords = res.length > 0 ? res[0] : 0;

        this._messageService.add({
          severity: 'success',
          summary: 'DONE!',
          detail: `Credit line is updated successfully in the targeted posting data, \n ${numOfRecords} updated.`
        });
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: er.error.error
        });
      });
  }

  cancel(row: CreditLine) {
    row.creditLineFromDate = this.originalCreditLineFromDate;
    row.creditLineToDate = this.originalCreditLineToDate;
    row.creditLine = this.originalCreditLine;
    row.isEditable = false;
  }

  addRow(row: CreditLine) {
    this.newRecord = new CreditLine();
    this.newRecord.accountName = row.accountName;
    this.newRecord.accountNumber = row.accountNumber;
    this.newDialog = true;
  }

  hideDialog() {
    this.newDialog = false;
    this.newRecord = new CreditLine();
  }

  saveCreditLie() {
    this._liquidityService
    .updateCreditLine(this.orgId, this.prcId, this.newRecord)
    .subscribe(res => {

      this.data.push(this.newRecord);
      this.data = [...this.data];
      this.newDialog = false;

      this._messageService.add({
        severity: 'success',
        summary: 'DONE!',
        detail: `Credit line is inserted successfully in the targeted posting data`
      });
    }, er => {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR!',
        detail: er.error.error
      });
    });
  }


}
