import { Component, OnInit } from '@angular/core';
import { PostingDataService } from '../service/posting-data.service';
import { DataFilterService } from '../service/data-filter.service';
import { ExportDataService } from '../service/export-data.service';
import { dataTableColumns } from "../model/dataTableColumns";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sap-data-table',
  templateUrl: './sap-data-table.component.html',
  styleUrls: ['./sap-data-table.component.sass']
})
export class SAPDataTableComponent implements OnInit {

  constructor(private _messageService: MessageService, private _postingDataService: PostingDataService,
    private _dataFilterService: DataFilterService, private _exportDataService: ExportDataService) { }

  filterClearShow: boolean = false;
  loading: boolean = false;
  selectLastPage: boolean = false;
  OrganisationId: number = 9;
  data: any;
  postings: [] = [];
  cols: dataTableColumns[] = dataTableColumns.getDataTableColumns();
  pageLimitSizes = [{ value: "2" },{ value: "5" },{ value: "25" }, { value: "50" }, { value: "100" },]
  limit: number = 2;
  pageNr: number = 1;
  maxPageNr: number = 0;
  criteria: any = {
    OrganisationId: this.OrganisationId,
    limit: this.limit,
    offset: 0
  };
  totalCount: number = 0;


ngOnInit(): void {
  this.getData()
}

getData() {
  this._dataFilterService
    .get(this.criteria)
    .subscribe(
      data => {
        this.data = data;
        this.postings = this.data.rows;
        this.totalCount = this.data.count;
        this.maxPageNr = Math.ceil(this.totalCount / this.limit);
        this.loading = false
        console.log(this.data.count);
      },
      error => console.log(error),
    );
}

filterChange(value, field) {
  if (value) {
    this.criteria[field] = value;
  } else {
    delete this.criteria[field];
  }
  this.pageNr = 1;
  this.criteria.offset = 0;
  this.loading = true;
  this.getData();
}

submitFilter() {
  this.loading = true;
  this.getData();
}

clearFilter() {
  this.criteria = {
    OrganisationId: this.OrganisationId,
    limit: this.limit,
    offset: 0
  };
  this.pageNr = 1;
  this.loading = true;
  this.getData();
}


nextPage() {
  ++this.pageNr;
  if (this.pageNr >= this.maxPageNr) return;
  this.loading = true;
  this.criteria.offset += this.limit;
  
  this.getData();
}


lastPage() {
  this.pageNr = this.maxPageNr;
  this.criteria.offset = (this.pageNr - 1) * this.limit;
  this.loading = true;
  this.getData();
}

previousPage() {
  --this.pageNr;
  if (this.pageNr <= 0) return;
  this.loading = true;
  this.criteria.offset -= this.limit;
  
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
  this.criteria.offset = (this.pageNr - 1) * this.limit;
  this.loading = true;
  this.getData();
}

limitChange(e) {
  this.limit = e.value
  this.criteria.offset = 0;
  this.criteria.limit = this.limit;
  this.pageNr = 1;
  this.loading = true;
  this.getData();
}

exportXLSX() {
  this._exportDataService
    .exportXLSX(this.postings)
    .subscribe(
      (data) => {

        console.log(data)
      },
      (error) => console.log(error),
      () => { }
    );
}
exportPDF() {
  this._exportDataService
    .exportPDF(this.postings)
    .subscribe(
      (data) => {

        console.log(data)
      },
      (error) => console.log(error),
      () => { }
    );
}

}
