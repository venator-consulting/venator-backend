import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from '../../service/analysis.service';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '../../model/tableColumn';

@Component({
  selector: 'app-creditor-analysis',
  templateUrl: './creditor-analysis.component.html',
  styleUrls: ['./creditor-analysis.component.sass'],
})
export class CreditorAnalysisComponent implements OnInit {
  //#region init vars
  cols: TableColumn[];
  selectedProcedure: number;
  selectedOrganisation: number;
  waiting: any;
  data: any;
  accountNumber: string;

  // for breadcrumb
  items: MenuItem[];
  home: MenuItem;

  originalVal: any;

  //#region Filters
  priorities: any;
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
  displayPriority: string[];
  //#endregion filters
  //#endregion init vars

  constructor(
    public _translateService: TranslateService,
    private _analysisService: AnalysisService,
    private _messageService: MessageService,
    private _router: Router,
    private _confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');

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
        { header: elem.accountNumber, field: 'accountNumber', align: 'left', },
        { header: elem.accountName, field: 'accountName', align: 'left', },
        { header: elem.count, field: 'totlaCount', align: 'center', },
        { header: elem.sum, field: 'totalBalance', align: 'right', },
        { header: elem.priority, field: 'priority', align: 'center', },
      ];
    });

    // to display priority translated in the table when editable is disabled
    this.displayPriority = ['', 'high', 'medium', 'low'];
    this.priorities = [
      { label: '', value: null },
      { label: 'high', value: 1 },
      { label: 'medium', value: 2 },
      { label: 'low', value: 3 },
    ];

  } // end of ng o0n init

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

  //#region update priority
  editRow(row) {
    this.data.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalVal = row.priority;
  }

  cancel(row) {
    row.priority = this.originalVal;
    row.isEditable = false;
  }

  priorityChangedHandler(e, row) {
    row.priority = e.value;
  }


  async reset(row) {
    this._confirmationService.confirm({
      message: await this._translateService.get('confirm_messages.body_delete').toPromise(),
      header: await this._translateService.get('confirm_messages.delete').toPromise(),
      icon: 'pi pi-info-circle',
      acceptLabel: await this._translateService.get('confirm_messages.yes').toPromise(),
      rejectLabel: await this._translateService.get('confirm_messages.cancel').toPromise(),
      accept: () => {
        row.priority = null;
        this.updatePriority(row);
      },
      reject: async (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({
              severity: 'info',
              summary: await this._translateService.get('general_messages.canceled').toPromise(),
              // detail: 'Action cancelled'
            });
            break;
          case ConfirmEventType.CANCEL:
            this._messageService.add({
              severity: 'info',
              summary: await this._translateService.get('general_messages.canceled').toPromise(),
              // detail: 'Action cancelled' 
            });
            break;
        }
      }
    });
  }

  updatePriority(row) {
    this.waiting = true;
    this._analysisService
      .updateCreditorPriority(this.selectedOrganisation, this.selectedProcedure, row)
      .subscribe(res => {
        row.isEditable = false;
        this._messageService.add({
          severity: 'success',
          detail: 'Updated Successfully!'
        });
        this.waiting = false;
      }, er => this.waiting = false);
  }
  //#endregion update priority



  //#region pagination and filter
  filterChange(query, colName): void {
    this.pageNr = 1;
    this.criteria.offset = 0;
    this.getData();
  }

  sort(event) {
    // debugger;
    this.criteria.orderBy = event.sortField ? event.sortField : 'accountNumber';
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
  //#endregion pagination and filter


}
