import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from '../../service/analysis.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-creditor-analysis',
  templateUrl: './creditor-analysis.component.html',
  styleUrls: ['./creditor-analysis.component.sass']
})
export class CreditorAnalysisComponent implements OnInit {
  cols: { header: string; field: string; }[];
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  waiting: any;
  data: any;
  accountNumber: string;
  items: MenuItem[];
  home: MenuItem;
  criteria: any = {
    limit: 25,
    offset: 0
  };
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  filtersNo: number = 0;
  totalCount: any;
  displayedDataCount: any;

  constructor(public _translateService: TranslateService, private _analysisService: AnalysisService, private _messageService: MessageService, private _router: Router) { }

  ngOnInit(): void {

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    
    this._translateService.get('CreditorsAnalysis').subscribe(elem => {
      this.items = [
        { label: elem.label, routerLink: '/analysis/creditor' }
      ];
      this.home = { icon: 'pi pi-home', label: elem.data, routerLink: '/shared/data' };

      this.cols = [
        {
          header: elem.accountNumber,
          field: 'accountNumber'
        },
        {
          header: elem.accountName,
          field: 'accountName'
        },
        {
          header: elem.count,
          field: 'totlaCount'
        },
        {
          header: elem.sum,
          field: 'totalBalance'
        }
      ];
    })


    this.getData();

  }// end of ng o0n init


  filterChange(query, colName): void {
    this.getData();
  }

  goToDetails(row) {
    this._router.navigate(['/analysis/creditor/deails/' + row.accountNumber]);
  }

  getData() {
    this.waiting = true;
    this._analysisService
      .getCreditorAnalysis(this.selectedOrganisation, this.selectedProcedure, this.criteria)
      .subscribe(res => {
        this.waiting = false;
        this.data = res.data;
        this.totalCount = res.count[0]['FOUND_ROWS()'];
        this.displayedDataCount = this.totalCount > this.limit ? this.limit : this.totalCount;
        this.maxPageNr = Math.ceil(this.totalCount / this.limit);
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });
  }

  limitChange(e) {
    this.limit = e.value
    this.criteria.offset = 0;
    this.criteria.limit = this.limit;
    this.pageNr = 1;
    this.getData();
  }

  firstPage() {
    this.pageNr = 1;
    this.criteria.offset = 0;
    this.getData();
  }

  nextPage() {
    ++this.pageNr;
    if (this.pageNr > this.maxPageNr) return;
    this.criteria.offset += +this.limit;

    this.getData();
  }


  lastPage() {
    this.pageNr = this.maxPageNr;
    this.criteria.offset = (this.pageNr - 1) * +this.limit;
    this.getData();
  }

  previousPage() {
    --this.pageNr;
    if (this.pageNr <= 0) return;
    this.criteria.offset -= +this.limit;
    this.getData();
  }

  pageNrChange(value) {
    this.criteria.offset = (this.pageNr - 1) * this.limit;
    this.getData();
  }

  clearFilter() {
    this.criteria = {
      limit: this.limit,
      offset: 0
    };
    this.pageNr = 1;
    this.getData();
  }

}
