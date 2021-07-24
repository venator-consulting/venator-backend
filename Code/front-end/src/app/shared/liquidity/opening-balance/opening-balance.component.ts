import { Component, OnInit } from '@angular/core';
import { OpeningBalance } from '../../model/openingBalance';
import { LiquidityService } from "../../service/liquidity.service";
import { MessageService } from 'primeng/api';
import { TableColumn } from '../../model/tableColumn';

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
  cols: TableColumn[];
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
        field: 'accountNumber',
        align: 'left'
      },
      {
        header: 'Account Name',
        field: 'accountName',
        align: 'left'
      },
      {
        header: 'accountTypeNewName',
        field: 'accountTypeNewName',
        align: 'left'
      },
      {
        header: 'StartingBalance',
        field: 'StartingBalance',
        width: '250',
        align: 'left'
      },
      {
        header: 'StartingBalanceDate',
        field: 'StartingBalanceDate',
        align: 'left'
      }
    ];

    this._liquidityService
      .getOpeningBalance(this.orgId, this.prcId)
      .subscribe(res => {
        res.forEach(val => {
          val.StartingBalanceDate = new Date(val.StartingBalanceDate);
        })
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
