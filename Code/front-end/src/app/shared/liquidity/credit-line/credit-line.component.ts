import { Component, OnInit } from '@angular/core';
import { LiquidityService } from '../../service/liquidity.service';
import { CreditLine } from '../../model/creditLine';
import { TableColumn } from '../../model/tableColumn';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-credit-line',
  templateUrl: './credit-line.component.html',
  styleUrls: ['./credit-line.component.sass'],
  providers: [DatePipe],
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
  // for filter
  searching: boolean = true;
  criteria: any = {};
  tempData: any[];
  filtersNo: number = 0;

  constructor(
    private _liquidityService: LiquidityService,
    private _messageService: MessageService,
    private datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    // debugger;
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.cols = [
      {
        header: 'Liquidity.accountNumber',
        field: 'accountNumber',
        align: 'left'
      },
      {
        header: 'Liquidity.accountName',
        field: 'accountName',
        align: 'left'
      },
      {
        header: 'Liquidity.creditLine',
        field: 'creditLine',
        // width: '250',
        align: 'right',
      },
      {
        header: 'Liquidity.creditLineFromDate',
        field: 'creditLineFromDate',
        align: 'center'
      },
      {
        header: 'Liquidity.creditLineToDate',
        field: 'creditLineToDate',
        align: 'center'
      },
    ];
    this.searching = true;
    this._liquidityService.getCreditLine(this.orgId, this.prcId).subscribe(
      (res) => {
        res.forEach((val) => {
          val.creditLineFromDate = val.creditLineFromDate
            ? new Date(val.creditLineFromDate)
            : null;
          val.creditLineToDate = val.creditLineToDate
            ? new Date(val.creditLineToDate)
            : null;
          let accountNumber = parseInt(val.accountNumber?.toString(), 10);
          val.accountNumber = isNaN(accountNumber)
            ? val.accountNumber
            : accountNumber;
          let creditLine = parseFloat(val?.creditLine?.toString());
          val.creditLine = isNaN(creditLine)
            ? val.creditLine
            : creditLine;
        });
        this.data = res;
        this.tempData = res;
        // debugger;
        this.searching = false;
      },
      (er) => {
        this.searching = false;
      }
    );
  } // end of ng on init

  editRow(row: CreditLine) {
    this.data
      .filter((row) => row.isEditable)
      .map((r) => {
        r.isEditable = false;
        return r;
      });
    row.isEditable = true;
    this.originalCreditLine = row.creditLine;
    this.originalCreditLineFromDate = row.creditLineFromDate;
    this.originalCreditLineToDate = row.creditLineToDate;
  }

  save(row: CreditLine) {
    this.searching = true;
    // debugger;
    let tempRow: any = {...row};
    tempRow.creditLineFromDate = this.datepipe.transform(row.creditLineFromDate, 'yyyy-MM-dd');
    tempRow.creditLineToDate = this.datepipe.transform(row.creditLineToDate, 'yyyy-MM-dd');
    this._liquidityService
      .updateCreditLine(this.orgId, this.prcId, tempRow)
      .subscribe(
        (res) => {
          row.isEditable = false;
          let numOfRecords = res.length > 0 ? res[0] : 0;

          this._messageService.add({
            severity: 'success',
            summary: 'DONE!',
            detail: `Credit line is updated successfully in the targeted posting data, \n ${numOfRecords} updated.`,
          });
          this.searching = false;
        },
        (er) => {
          this.searching = false;
        }
      );
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

  deleteRow(row: CreditLine) {
    this.searching = true;
    this._liquidityService
      .deleteCreditLine(this.orgId, this.prcId, row)
      .subscribe(
        (res) => {
          this.data = this.data.filter((val) => val.id != row.id);
          this._messageService.add({
            severity: 'success',
            summary: 'DONE!',
            detail: `Credit line is deleted successfully`,
          });
        },
        (er) => {
          this.searching = false;
        }
      );
  }

  hideDialog() {
    this.newDialog = false;
    this.newRecord = new CreditLine();
  }

  saveCreditLie() {
    this.searching = true;
    this._liquidityService
      .updateCreditLine(this.orgId, this.prcId, this.newRecord)
      .subscribe(
        (res) => {
          this.data.push(this.newRecord);
          this.data = [...this.data];
          this.newDialog = false;
          this.searching = false;
          this._messageService.add({
            severity: 'success',
            summary: 'DONE!',
            detail: `Credit line is inserted successfully in the targeted posting data`,
          });
        },
        (er) => {
          this.searching = false;
        }
      );
  }

  clearFilter() {
    this.criteria = {};
    this.data = [...this.tempData];
    this.filtersNo = 0;
  }

  filterChange(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query || !query?.toString()?.trim()) {
      this.filtersNo--;
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (key == 'creditLineFromDate' || key == 'creditLineToDate') {
              // debugger;
              this.data = this.tempData.filter(
                (value) =>
                  value[key]?.getDate() == element.getDate() &&
                  value[key]?.getMonth() == element.getMonth() &&
                  value[key]?.getFullYear() == element.getFullYear()
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
          if (key == 'creditLineFromDate' || key == 'creditLineToDate') {
            // debugger;
            this.data = this.tempData.filter(
              (value) =>
                value[key]?.getDate() == element.getDate() &&
                value[key]?.getMonth() == element.getMonth() &&
                value[key]?.getFullYear() == element.getFullYear()
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
}
