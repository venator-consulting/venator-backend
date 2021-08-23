import { Component, OnInit } from '@angular/core';
import { OpeningBalance } from '../../model/openingBalance';
import { LiquidityService } from '../../service/liquidity.service';
import { MessageService } from 'primeng/api';
import { TableColumn } from '../../model/tableColumn';

@Component({
  selector: 'app-opening-balance',
  templateUrl: './opening-balance.component.html',
  styleUrls: ['./opening-balance.component.sass'],
})
export class OpeningBalanceComponent implements OnInit {
  data: OpeningBalance[] = new Array();
  orgId: number;
  prcId: number;
  procedureName: string;
  cols: TableColumn[];
  originalOpeningBalance: number;
  originalOpeningBalanceDate: Date;
  // for filter
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  filtersNo: number = 0;

  constructor(
    private _liquidityService: LiquidityService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.cols = [
      {
        header: 'Liquidity.accountNumber',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'Liquidity.accountName',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'Liquidity.accountTypeNewName',
        field: 'accountTypeNewName',
        align: 'left',
      },
      {
        header: 'Liquidity.startingBalance',
        field: 'StartingBalance',
        width: '250',
        align: 'right',
      },
      {
        header: 'Liquidity.startingBalanceDate',
        field: 'StartingBalanceDate',
        align: 'center',
      },
    ];
    this.searching = true;
    this._liquidityService.getOpeningBalance(this.orgId, this.prcId).subscribe(
      (res) => {
        res.forEach((val) => {
          val.StartingBalanceDate = val.StartingBalanceDate
            ? new Date(val.StartingBalanceDate)
            : null;
          let accountNumber = parseInt(val.accountNumber?.toString(), 10);
          val.accountNumber = isNaN(accountNumber)
            ? val.accountNumber
            : accountNumber;
          let StartingBalance = parseFloat(val?.StartingBalance?.toString());
          val.StartingBalance = isNaN(StartingBalance)
            ? val.StartingBalance
            : StartingBalance;
        });
        this.data = res;
        this.tempData = res;
        this.searching = false;
      },
      (er) => {
        this.searching = false;
      }
    );
  } // end of ng on init

  editRow(row: OpeningBalance) {
    this.data
      .filter((row) => row.isEditable)
      .map((r) => {
        r.isEditable = false;
        return r;
      });
    row.isEditable = true;
    this.originalOpeningBalance = row.StartingBalance;
    this.originalOpeningBalanceDate = row.StartingBalanceDate;
  }

  resetStartingBalance(row: OpeningBalance) {
    row.StartingBalance = null;
    row.StartingBalanceDate = null;
    this.save(row);
  }

  save(row: OpeningBalance) {
    this.searching = true;
    this._liquidityService
      .updateOpeningBalance(this.orgId, this.prcId, row)
      .subscribe(
        (res) => {
          row.isEditable = false;
          let numOfRecords = res.length > 0 ? res[0] : 0;

          this._messageService.add({
            severity: 'success',
            summary: 'DONE!',
            detail: `opening balance is updated successfully in the targeted posting data, \n ${numOfRecords} updated.`,
          });
          this.searching = false;
        },
        (er) => {
          this.searching = false;
        }
      );
  }

  cancel(row: OpeningBalance) {
    row.StartingBalance = this.originalOpeningBalance;
    row.StartingBalanceDate = this.originalOpeningBalanceDate;
    row.isEditable = false;
  }

  filterChange(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query) {
      delete this.criteria[colName];
      this.filtersNo--;
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (key == 'StartingBalanceDate') {
              debugger;
              this.data = this.tempData.filter(
                (value) =>
                  value['StartingBalanceDate']?.getDate() ==
                    element.getDate() &&
                  value['StartingBalanceDate']?.getMonth() ==
                    element.getMonth() &&
                  value['StartingBalanceDate']?.getFullYear() ==
                    element.getFullYear()
              );
            } else {
              if (element.length < 3) {
                this.data = this.tempData.filter(
                  (value) => value[key]?.toLowerCase() == element.toLowerCase()
                );
              } else {
                this.data = this.tempData.filter((value) =>
                  value[key]?.toLowerCase().includes(element.toLowerCase())
                );
              }
            }
          }
        }
      }
    } else {
      this.filtersNo++;
      this.data = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (key == 'StartingBalanceDate') {
            debugger;
            this.data = this.tempData.filter(
              (value) =>
                value['StartingBalanceDate']?.getDate() == element.getDate() &&
                value['StartingBalanceDate']?.getMonth() ==
                  element.getMonth() &&
                value['StartingBalanceDate']?.getFullYear() ==
                  element.getFullYear()
            );
          } else {
            if (element.length < 3) {
              this.data = this.data.filter(
                (value) =>
                  value[key]?.toString().toLowerCase() == element.toLowerCase()
              );
            } else {
              this.data = this.data.filter((value) =>
                value[key]
                  ?.toString()
                  .toLowerCase()
                  .includes(element.toLowerCase())
              );
            }
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }

  clearFilter() {
    this.criteria = {};
    this.data = [...this.tempData];
    this.filtersNo = 0;
  }
}
