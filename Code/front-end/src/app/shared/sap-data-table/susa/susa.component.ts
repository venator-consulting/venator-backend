import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostingDataService } from '../../service/posting-data.service';
import { MenuItem, MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { DatePipe } from '@angular/common';
import * as FileSaver from 'file-saver';
import { Word } from '../../model/word';
import { TableColumn } from '../../model/tableColumn';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-susa',
  templateUrl: './susa.component.html',
  styleUrls: ['./susa.component.sass'],
  providers: [DatePipe],
})
export class SusaComponent implements OnInit {
  organisationId: number = +localStorage.getItem('organisationId');
  procedureId: number = +localStorage.getItem('currentProcedureId');
  fromDate: Date = new Date();
  toDate: Date = new Date();
  procedureName: string = '';
  cols: TableColumn[] = new Array();
  data: any[] = new Array();
  waiting: boolean = false;
  criteria: any = {};
  completeWords: Word[] = new Array();
  filtersNo: number = 0;
  items: MenuItem[];
  home: MenuItem;
  tempData: any;

  constructor(
    private _messageService: MessageService,
    private _postingDataService: PostingDataService,
    private _router: Router,
    private prcService: ProcedureService,
    private datepipe: DatePipe,
    private _translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.waiting = true;
    this.items = [
      {
        label: 'SUSA',
        routerLink: '/dashboard/shared/data/susa',
        routerLinkActiveOptions: { exact: true },
      },
    ];

    this.home = {
      icon: 'pi pi-home',
      label: ' Data',
      routerLink: '/dashboard/shared/data',
      routerLinkActiveOptions: { exact: true },
    };

    this.organisationId = +localStorage.getItem('organisationId');
    this.procedureId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this._postingDataService
      .getDefaultSusaDateRange(this.organisationId, this.procedureId)
      .subscribe(
        (res) => {
          this.fromDate = new Date(Date.parse(res[0].mindate));
          this.toDate = new Date(Date.parse(res[0].maxdate));
          let minYear = this.fromDate.getFullYear();
          // debugger;
          if (isNaN(minYear)) {
            this.fromDate = this.toDate = new Date();
            this.waiting = false;
            this._messageService.add({
              severity: 'error',
              summary: 'ERROR',
              life: 10000,
              detail: 'There is no dates in this procedure',
            });
          } else {
            this.getData();
          }
        },
        (er) => {
          this._messageService.add({
            severity: 'error',
            summary: 'ERROR',
            life: 10000,
            detail: 'There is an error occured please try again',
          });
        }
      );

    this.cols = [
      {
        header: 'Susa.accountType',
        field: 'accountType',
        align: 'left',
      },
      {
        header: 'Susa.accountnumber',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'Susa.accountName',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'Susa.startingBalance',
        field: 'famount',
        align: 'right',
      },
      {
        header: 'Susa.sumDebit',
        field: 'debitAmount',
        align: 'right',
      },
      {
        header: 'Susa.sumCredit',
        field: 'creditAmount',
        align: 'right',
      },
      {
        header: 'Susa.balance',
        field: 'inamount',
        align: 'right',
      },
      {
        header: 'Susa.endingBalance',
        field: 'outamount',
        align: 'right',
      },
    ];
  } // end of ng on init

  getData() {
    this.waiting = true;
    for (const key in this.criteria) {
      if (!this.criteria[key]) {
        delete this.criteria[key];
      }
    }
    let fdate = this.datepipe.transform(this.fromDate, 'yyyy-MM-dd');
    let tdate = this.datepipe.transform(this.toDate, 'yyyy-MM-dd');
    this._postingDataService
      .getSusa(
        this.organisationId,
        this.procedureId,
        fdate,
        tdate,
        this.criteria
      )
      .subscribe(
        (res) => {
          if (res && res.length) {
            res.forEach((element) => {
              element.accountNumber = Number.parseInt(element.accountNumber, 10)
                ? Number.parseInt(element.accountNumber, 10)
                : element.accountNumber;
              element.famount = Number.parseFloat(element.famount)
                ? Number.parseFloat(element.famount)
                : 0;
              element.debitAmount = Number.parseFloat(element.debitAmount)
                ? Number.parseFloat(element.debitAmount)
                : 0;
              element.creditAmount = Number.parseFloat(element.creditAmount)
                ? Number.parseFloat(element.creditAmount)
                : 0;
              element.inamount = Number.parseFloat(element.inamount)
                ? Number.parseFloat(element.inamount)
                : 0;
              element.outamount = element.famount + element.inamount;
            });
          }
          this.data = res;
          this.tempData = res;
          this.waiting = false;
        },
        (er) => {
          this._messageService.add({
            severity: 'error',
            summary: 'ERROR',
            life: 10000,
            detail: 'There is an error occured please try again',
          });
        }
      );
  }

  sort(event) {
    // debugger;
    this.criteria.orderBy = event.sortField;
    this.criteria.sortOrder = event.sortOrder;
    // this.pageNr = 1;
    this.criteria.offset = 0;
    if (!this.waiting) this.getData();
  }

  goBack() {
    this._router.navigate(['/dashboard/shared/data']);
  }

  async exportExcel() {
    let translatedData = [];
    for (let index = 0; index < this.data.length; index++) {
      let element = this.data[index];
      let translatedRecord = {};
      debugger;
      for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key)) {
          let translatedKey = await this._translateService
            .get('Susa.' + key)
            .toPromise();
          translatedRecord[translatedKey] = element[key];

          // formatting
          if (
            element[key] &&
            (key == 'famount' ||
              key == 'debitAmount' ||
              key == 'creditAmount' ||
              key == 'inamount' ||
              key == 'outamount')
          ) {
            try {
              let temp = Number.parseFloat(element[key].toString());
              if (!Number.isNaN(temp)) {
                translatedRecord[translatedKey] = temp.toLocaleString('de-DE', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });
              }
            } catch (e) {
              // do nothing
            }
          }
          // end of formatting
        }
      }
      translatedData.push(translatedRecord);
    }

    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(translatedData);
      const workbook = {
        Sheets: { Susa: worksheet },
        SheetNames: ['Susa'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'Susa');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const d: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      d,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  clearFilter() {
    this.criteria = {};
    this.data = [...this.tempData];
    this.filtersNo = 0;
  }

  filterChange(query, colName): void {
    this.waiting = true;
    debugger;
    if (!query) {
      this.filtersNo ? this.filtersNo-- : (this.filtersNo = 0);
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.data = this.tempData.filter(
                (value) => value[key]?.toString().toLowerCase() == element.toLowerCase()
              );
            } else {
              this.data = this.tempData.filter((value) =>
                value[key]?.toString().toLowerCase().includes(element.toLowerCase())
              );
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
      } // end of for each criteria field
    }
    this.waiting = false;
  }
}
