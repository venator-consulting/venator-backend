import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostingDataService } from '../../service/posting-data.service';
import { MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { DatePipe } from '@angular/common';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-susa',
  templateUrl: './susa.component.html',
  styleUrls: ['./susa.component.sass'],
  providers: [DatePipe]
})
export class SusaComponent implements OnInit {

  @ViewChild('dt') dt: ElementRef;
  
  organisationId: number;
  procedureId: number;
  fromDate: Date = new Date();
  toDate: Date = new Date();
  procedureName: string = "";
  cols: { header, field }[] = new Array();
  data: any[] = new Array();
  waiting: boolean = false;

  constructor(private _messageService: MessageService, private _postingDataService: PostingDataService,
    private _router: Router, private prcService: ProcedureService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.waiting = true;
    this.organisationId = +localStorage.getItem('organisationId');
    this.procedureId = +localStorage.getItem('currentProcedureId');

    this._postingDataService
      .getDefaultSusaDateRange(this.organisationId, this.procedureId)
      .subscribe(res => {
        this.fromDate = new Date(Date.parse(res[0].mindate));
        this.toDate = new Date(Date.parse(res[0].maxdate));
        let minYear = this.fromDate.getFullYear();
        debugger;
        if (isNaN(minYear)) {
          this.fromDate = this.toDate = new Date();
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

      });


    if (this.procedureId && +this.procedureId > 0) {
      this.prcService
        .getById(+this.procedureId)
        .subscribe(prc => {
          this.procedureName = prc && prc.length > 0 ? prc[0].name : "";
        }, er => { });
    }

    this.cols = [
      {
        header: 'Konto.',
        field: 'accountType'
      },
      {
        header: 'Susa.creditornumber',
        field: 'creditorNumber'
      },
      {
        header: 'Susa.creditorName',
        field: 'creditorName'
      },
      {
        header: 'Susa.startingBalance',
        field: 'famount'
      },
      {
        header: 'Susa.sumDebit',
        field: 'inamount'
      },
      {
        header: 'Susa.sumCredit',
        field: 'creditAmount'
      },
      {
        header: 'Susa.balance',
        field: 'debitAmount'
      },
      {
        header: 'Susa.endingBalance',
        field: 'outamount'
      },
    ];

  } // end of ng on init

  getData() {
    this.waiting = true;
    let fdate = this.datepipe.transform(this.fromDate, 'yyyy-MM-dd');
    let tdate = this.datepipe.transform(this.toDate, 'yyyy-MM-dd');
    this._postingDataService
      .getSusa(this.organisationId, this.procedureId, fdate, tdate)
      .subscribe(res => {
        this.data = res;
        this.waiting = false;
      }, er => {

      });
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
}
