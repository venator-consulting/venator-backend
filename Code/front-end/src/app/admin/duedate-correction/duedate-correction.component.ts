import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { DataFilterService } from 'src/app/shared/service/data-filter.service';
import { PostingService } from '../service/posting.service';

@Component({
  selector: 'app-duedate-correction',
  templateUrl: './duedate-correction.component.html',
  styleUrls: ['./duedate-correction.component.sass'],
  providers: [DatePipe]
})
export class DuedateCorrectionComponent implements OnInit {

  //#region init vars 
  //  columns of the table
  cols: TableColumn[];
  // the selected organization ID get it from local storage
  organisationId = localStorage.getItem('organisationId');
  // the selected procedure ID, get it from local storage 
  procedureId = localStorage.getItem('currentProcedureId');
  // numbers of filters in the header of the table
  filtersNo: number = 0;
  // for progress bar
  loading: boolean = false;
  selectLastPage: boolean = false;
  // main data
  postings: any[] = [];
  // page sizes options for dropdaown
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  limit: number = 25;
  pageNr: number = 1;
  // total pages numbers
  maxPageNr: number = 0;
  // numbers of records dosplayed for each, it may differ with page size it maybe smaller
  displayedDataCount = 0;
  criteria: any = {
    OrganisationId: this.organisationId,
    procedureId: this.procedureId,
    limit: this.limit,
    offset: 0,
    orderBy: 'id',
    sortOrder: 1,
  };
  // total caount of records
  totalCount: number = 0;
  // indeed not needed, it's an object contiaing the main data and count
  data: any;
  // a list of suggested words, we now retun an empty array
  completeWords: any[];
  // a temp value to keep the original value, if the user cancel the editing mode to reset it
  originalDueDateNew: any;
  //#endregion init vars

  constructor(private _dataFilterService: DataFilterService, private _messageService: MessageService,
    private datepipe: DatePipe, private _postingService: PostingService) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'DataTableColumns.accountNumber', field: 'accountNumber' },
      { header: 'DataTableColumns.accountName', field: 'accountName' },
      { header: 'DataTableColumns.recordNumber', field: 'recordNumber' },
      { header: 'DataTableColumns.dueDate', field: 'dueDate' },
      { header: 'DataTableColumns.dueDateNew', field: 'dueDateNew' },
    ];

    this.getData();
  }

  getData() {
    this.loading = true;
    let tempCriteria = { ...this.criteria };
    for (const key in tempCriteria) {
      // delete empty filters
      if (!tempCriteria[key] && key != 'offset') {
        delete tempCriteria[key];
      }
      // format date filters
      if (key.includes('Date'))
        tempCriteria[key] = this.datepipe.transform(tempCriteria[key], 'yyyy.MM.dd');
    }
    // we don't count offset nor limit and other pagination params
    this.filtersNo = Object.keys(tempCriteria).length - 6;
    this._dataFilterService.get(tempCriteria).subscribe(
      (data) => {
        this.data = data;
        this.postings = this.data.rows;
        this.totalCount = this.data.count;
        this.displayedDataCount =
          this.totalCount > this.limit ? this.limit : this.totalCount;
        this.maxPageNr = Math.ceil(this.totalCount / this.limit);
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  //#region filters and pagination
  sort(event: LazyLoadEvent) {
    // debugger;
    this.criteria.orderBy = event.sortField ? event.sortField : 'id';
    this.criteria.sortOrder = event.sortOrder;
    this.pageNr = 1;
    this.criteria.offset = 0;
    if (!this.loading) this.getData();
  }

  filterChange(value, field) {
    this.pageNr = 1;
    this.criteria.offset = 0;
    this.autoComplete(value);
    this.getData();
  }

  autoComplete(word: string) {
    this.completeWords = new Array();
  }

  submitFilter() {
    this.loading = true;
    this.getData();
  }

  clearFilter() {
    this.criteria = {
      OrganisationId: this.organisationId,
      procedureId: this.procedureId,
      limit: this.limit,
      offset: 0,
    };
    this.filtersNo = 0;
    this.pageNr = 1;
    this.getData();
  }

  nextPage() {
    ++this.pageNr;
    if (this.pageNr > this.maxPageNr) return;
    this.loading = true;
    if (!this.criteria.offset) {
      this.criteria.offset = 0;
    }
    this.criteria.offset += +this.limit;

    this.getData();
  }

  lastPage() {
    this.pageNr = this.maxPageNr;
    this.criteria.offset = (this.pageNr - 1) * +this.limit;
    this.loading = true;
    this.getData();
  }

  previousPage() {
    --this.pageNr;
    if (this.pageNr <= 0) return;
    this.loading = true;
    this.criteria.offset -= +this.limit;

    this.getData();
  }

  firstPage() {
    this.pageNr = 1;
    this.loading = true;
    this.criteria.offset = 0;

    this.getData();
  }

  pageNrChange(value) {
    this.loading = true;
    this.pageNr = (value && value.trim()) ? value : 1;
    this.criteria.offset = (this.pageNr - 1) * this.limit;
    this.getData();
  }

  limitChange(e) {
    this.limit = e.value;
    this.criteria.offset = 0;
    this.criteria.limit = this.limit;
    this.pageNr = 1;
    this.loading = true;
    this.getData();
  }
  //#endregion filters and pagination

  //#region update due date new
  editRow(row) {
    this.postings
      .filter((row) => row.isEditable)
      .map((r) => {
        r.isEditable = false;
        return r;
      });
    row.isEditable = true;
    this.originalDueDateNew = row.dueDateNew;
  }

  resetDueDate(row) {
    row.dueDateNew = null;
    this.save(row);
  }

  save(row) {
    this.loading = true;
    let { id, dueDateNew } = row;
    dueDateNew = this.datepipe.transform(row.dueDateNew, 'yyyy-MM-dd');
    this._postingService
      .updateDueDate(+this.organisationId, +this.procedureId, id, { dueDateNew })
      .subscribe(res => {
        this.loading = false;
        row.isEditable = false;
        this._messageService.add({ severity: 'success', detail: 'updated successfully' });
      }, er => this.loading = false);
  }

  cancel(row) {
    row.dueDateNew = this.originalDueDateNew;
    row.isEditable = false;
  }

  //#endregion update due date new

}
