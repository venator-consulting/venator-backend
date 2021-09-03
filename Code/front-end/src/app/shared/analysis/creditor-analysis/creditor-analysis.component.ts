import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from '../../service/analysis.service';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '../../model/tableColumn';

@Component({
  selector: 'app-creditor-analysis',
  templateUrl: './creditor-analysis.component.html',
  styleUrls: ['./creditor-analysis.component.sass'],
})
export class CreditorAnalysisComponent implements OnInit {
  cols: TableColumn[];
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
    offset: 0,
    orderBy: 'accountNumber',
    sortOrder: 1,
  };
  pageLimitSizes = [{ value: 25, label: '25' }, { value: 50, label: '50' }, { value: 100, label: '100' }];
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  filtersNo: number = 0;
  totalCount: any;
  displayedDataCount: any;

  constructor(
    public _translateService: TranslateService,
    private _analysisService: AnalysisService,
    private _messageService: MessageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this._translateService.get('CreditorsAnalysis').subscribe((elem) => {
      this.items = [
        { label: elem.label, routerLink: '/dashboard/analysis/creditor' },
      ];
      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };

      this.cols = [
        {
          header: elem.accountNumber,
          field: 'accountNumber',
          align: 'left',
        },
        {
          header: elem.accountName,
          field: 'accountName',
          align: 'left',
        },
        {
          header: elem.count,
          field: 'totlaCount',
          align: 'center',
        },
        {
          header: elem.sum,
          field: 'totalBalance',
          align: 'right',
        },
      ];
    });

    // this.getData();
  } // end of ng o0n init

  filterChange(query, colName): void {
    this.getData();
  }

  goToDetails(row) {
    this._router.navigate([
      '/dashboard/analysis/creditor/deails/' + row.accountNumber,
    ]);
  }

  getData() {
    this.waiting = true;
    for (const key in this.criteria) {
      if (!this.criteria[key] && key != 'offset') {
        delete this.criteria[key];
      }
    }
    this.filtersNo = Object.keys(this.criteria).length - 4;
    this._analysisService
      .getCreditorAnalysis(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.criteria
      )
      .subscribe(
        (res) => {
          this.waiting = false;
          this.data = res.data;
          this.totalCount = res.count[0]['FOUND_ROWS()'];
          this.displayedDataCount =
            this.totalCount > this.limit ? this.limit : this.totalCount;
          this.maxPageNr = Math.ceil(this.totalCount / this.limit);
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  sort(event) {
    // debugger;
    this.criteria.orderBy = event.sortField? event.sortField : 'accountNumber';
    this.criteria.sortOrder = event.sortOrder;
    this.pageNr = 1;
    this.criteria.offset = 0;
    this.getData();
  }

  limitChange(e) {
    this.limit = e.value;
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
    this.pageNr = (value && value.trim()) ? value : 1;
    this.criteria.offset = (this.pageNr - 1) * this.limit;
    this.getData();
  }

  clearFilter() {
    this.criteria = {
      limit: this.limit,
      offset: 0,
    };
    this.pageNr = 1;
    this.getData();
  }
}
