import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostingDataService } from '../../service/posting-data.service';
import { MenuItem, MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { DatePipe } from '@angular/common';
import * as FileSaver from 'file-saver';
import { Word } from '../../model/word';
import { TableColumn } from '../../model/tableColumn';

@Component({
  selector: 'app-susa',
  templateUrl: './susa.component.html',
  styleUrls: ['./susa.component.sass'],
  providers: [DatePipe]
})
export class SusaComponent implements OnInit {

  organisationId: number = +localStorage.getItem('organisationId');
  procedureId: number = +localStorage.getItem('currentProcedureId');
  fromDate: Date = new Date();
  toDate: Date = new Date();
  procedureName: string = "";
  cols: TableColumn[] = new Array();
  data: any[] = new Array();
  waiting: boolean = false;
  criteria: any = {};
  completeWords: Word[] = new Array();
  filtersNo: number = 0;
  searching: boolean = false;
  items: MenuItem[];
  home: MenuItem;

  constructor(private _messageService: MessageService, private _postingDataService: PostingDataService,
    private _router: Router, private prcService: ProcedureService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.waiting = true;
    this.items = [
      { label: 'SUSA', routerLink: '/shared/data/susa', routerLinkActiveOptions: { exact: true } }
    ];

    this.home = { icon: 'pi pi-home', label: ' Data', routerLink: '/shared/data', routerLinkActiveOptions: { exact: true } };

    this.organisationId = +localStorage.getItem('organisationId');
    this.procedureId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this._postingDataService
      .getDefaultSusaDateRange(this.organisationId, this.procedureId)
      .subscribe(res => {
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
            detail: "There is no dates in this procedure"
          });
        } else {
          this.getData();
        }
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });


    this.cols = [
      {
        header: 'Susa.accountType',
        field: 'accountType',
        align: 'left'
      },
      {
        header: 'Susa.accountnumber',
        field: 'accountNumber',
        align: 'left'
      },
      {
        header: 'Susa.accountName',
        field: 'accountName',
        align: 'left'
      },
      {
        header: 'Susa.startingBalance',
        field: 'famount',
        align: 'right'
      },
      {
        header: 'Susa.sumDebit',
        field: 'debitAmount',
        align: 'right'
      },
      {
        header: 'Susa.sumCredit',
        field: 'creditAmount',
        align: 'right'
      },
      {
        header: 'Susa.balance',
        field: 'inamount',
        align: 'right'
      },
      {
        header: 'Susa.endingBalance',
        field: 'outamount',
        align: 'right'
      },
    ];

  } // end of ng on init

  getData() {
    this.waiting = true;
    this.searching = true;
    for (const key in this.criteria) {
      if (!this.criteria[key]) {
        delete this.criteria[key];
      }
     }
    let fdate = this.datepipe.transform(this.fromDate, 'yyyy-MM-dd');
    let tdate = this.datepipe.transform(this.toDate, 'yyyy-MM-dd');
    this._postingDataService
      .getSusa(this.organisationId, this.procedureId, fdate, tdate, this.criteria)
      .subscribe(res => {
        this.data = res;
        this.waiting = false;
        this.searching = false;
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });
  }

  sort(event) {
    // debugger;
    this.criteria.orderBy = event.sortField;
    this.criteria.sortOrder = event.sortOrder;
    // this.pageNr = 1;
    this.criteria.offset = 0;
    if (!this.waiting)
      this.getData();
  }

  goBack() {
    this._router.navigate(['/shared/data']);
  }


  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { 'susa': worksheet }, SheetNames: ['susa'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "SuSa");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    // const name = fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION;
    // const file = new File([buffer], name, {type: EXCEL_TYPE});
    const d: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    // FileSaver.saveAs(file);
    FileSaver.saveAs(d, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  clearFilter() {
    this.criteria = {};
    this.getData();
  }

  filterChange(value, field) {
    if (value) {
      this.criteria[field] = value;
      ++this.filtersNo;
    } else {
      delete this.criteria[field];
      --this.filtersNo;
    }
    this.waiting = true;
    // this.autoComplete(value);
    this.getData();
  }

  // autoComplete(word: string) {
    // if (word && word.length > 2) {
    //   this._autocompleteService
    //     .complete(word)
    //     .subscribe(res => {
    //       console.log(res);
    //       this.completeWords = res;
    //     });
    // } else {
      // this.completeWords = new Array();
    // }
  // }

}
