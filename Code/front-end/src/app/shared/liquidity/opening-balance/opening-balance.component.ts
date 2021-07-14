import { Component, OnInit } from '@angular/core';
import { OpeningBalance } from '../../model/openingBalance';
import { LiquidityService } from "../../service/liquidity.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-opening-balance',
  templateUrl: './opening-balance.component.html',
  styleUrls: ['./opening-balance.component.sass']
})
export class OpeningBalanceComponent implements OnInit {

  data: OpeningBalance[] = new Array();
  orgId: number;
  prcId: number;
  procedureName: string;
  cols: { header: string; field: string }[];
  originalOpeningBalance: number;
  originalOpeningBalanceDate: Date;


  constructor(private _liquidityService: LiquidityService, private _messageService: MessageService) { }

  ngOnInit(): void {

    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.cols = [
      {
        header: 'Account Number',
        field: 'accountNumber'
      },
      {
        header: 'Account Name',
        field: 'accountName'
      },
      {
        header: 'accountTypeNewName',
        field: 'accountTypeNewName'
      },
      {
        header: 'StartingBalance',
        field: 'StartingBalance'
      },
      {
        header: 'StartingBalanceDate',
        field: 'StartingBalanceDate'
      }
    ];

    this._liquidityService
      .getOpeningBalance(this.orgId, this.prcId)
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


  editRow(row: OpeningBalance) {
    this.data.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalOpeningBalance = row.StartingBalance;
    this.originalOpeningBalanceDate = row.StartingBalanceDate;
  }

  save(row: OpeningBalance) {
    this._liquidityService
    .updateOpeningBalance(this.orgId, this.prcId, row)
    .subscribe(res => {
      row.isEditable = false;
      let numOfRecords = res.length > 0 ? res[0] : 0;

      this._messageService.add({
        severity: 'success',
        summary: 'DONE!',
        detail: `opening balance is updated successfully in the targeted posting data, \n ${numOfRecords} updated.`
      });
    }, er => {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR!',
        detail: er.error.error
      });
    });
  }

  cancel(row: OpeningBalance) {
    row.StartingBalance = this.originalOpeningBalance;
    row.StartingBalanceDate = this.originalOpeningBalanceDate;
    row.isEditable = false;
  }

}
