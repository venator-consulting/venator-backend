import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostingDataService } from '../../service/posting-data.service';
import { MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-susa',
  templateUrl: './susa.component.html',
  styleUrls: ['./susa.component.sass'],
  providers: [DatePipe]
})
export class SusaComponent implements OnInit {

  organisationId: number;
  procedureId: number;
  fromDate: Date = new Date();
  toDate: Date = new Date();
  procedureName: string = "";
  cols: { header, field }[] = new Array();
  data: any[] = new Array();

  constructor(private _messageService: MessageService, private _postingDataService: PostingDataService,
    private _router: Router, private prcService: ProcedureService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.organisationId = +localStorage.getItem('organisationId');
    this.procedureId = +localStorage.getItem('currentProcedureId');

    this._postingDataService
      .getDefaultSusaDateRange(this.organisationId, this.procedureId)
      .subscribe(res => {
        this.fromDate = new Date(Date.parse(res[0].mindate));
        this.toDate = new Date(Date.parse(res[0].maxdate));
        let minYear = this.fromDate.getFullYear();
        debugger;
        if(isNaN(minYear)) {
          this.fromDate = this.toDate = new Date() ;
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
        header: 'KontoNr.',
        field: 'creditorNumber'
      },
      {
        header: 'KontoName',
        field: 'creditorName'
      },
      {
        header: 'Anfangssaldo',
        field: 'famount'
      },
      {
        header: 'Summe Soll',
        field: 'inamount'
      },
      {
        header: 'Summe Haben',
        field: 'creditAmount'
      },
      {
        header: 'Saldo',
        field: 'debitAmount'
      },
      {
        header: 'Endsaldo',
        field: 'outamount'
      },
    ];

  } // end of ng on init

  getData() {
    let fdate = this.datepipe.transform(this.fromDate, 'yyyy-MM-dd');
    let tdate = this.datepipe.transform(this.toDate, 'yyyy-MM-dd');
    this._postingDataService
      .getSusa(this.organisationId, this.procedureId, fdate, tdate)
      .subscribe(res => {
        this.data = res;
      }, er => {

      });
  }

  goBack() {
    this._router.navigate(['/shared/data']);
  }

}
