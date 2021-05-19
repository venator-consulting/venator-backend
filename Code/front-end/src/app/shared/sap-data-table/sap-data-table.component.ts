import { Component, OnInit } from '@angular/core';
import { PostingDataService } from '../service/posting-data.service';
import { DataFilterService } from '../service/data-filter.service';
import { ExportDataService } from '../service/export-data.service';
import { dataTableColumns } from "../model/dataTableColumns";
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-sap-data-table',
  templateUrl: './sap-data-table.component.html',
  styleUrls: ['./sap-data-table.component.sass']
})
export class SAPDataTableComponent implements OnInit {

  constructor(private _messageService: MessageService, private _postingDataService: PostingDataService,
    private _dataFilterService: DataFilterService, private _exportDataService: ExportDataService, private _router: Router,
    private _translateService: TranslateService) { }


  organisationId = localStorage.getItem('organisationId')
  procedureId = localStorage.getItem('currentProcedureId')
  filtersNo: number = 0;
  loading: boolean = false;
  selectLastPage: boolean = false;
  data: any;
  postings: [] = [];
  cols: dataTableColumns[];
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 },]
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  displayedDataCount = 0;
  criteria: any = {
    OrganisationId: this.organisationId,
    procedureId: this.procedureId,
    limit: this.limit,
    offset: 0
  };
  totalCount: number = 0;


  ngOnInit(): void {

    // this._translateService.setDefaultLang('de');
    // this._translateService.
    dataTableColumns.getDataTableColumns(this._translateService).then(cols => {
      debugger;
      this.cols = cols;
      this.getData();
    });


    this._translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      dataTableColumns.getDataTableColumns(this._translateService).then(cols => {
        debugger;
        this.cols = cols;
        // this.getData();
      });
    });

  }

  async getData() {
    this._dataFilterService
      .get(this.criteria)
      .subscribe(
        data => {
          this.data = data;
          this.postings = this.data.rows;
          this.totalCount = this.data.count;
          this.displayedDataCount = this.totalCount > this.limit ? this.limit : this.totalCount;
          this.maxPageNr = Math.ceil(this.totalCount / this.limit);
          this.loading = false;

        },
        error => {
          this.loading = false;
        },
      );
  }

  filterChange(value, field) {
    if (value) {
      this.criteria[field] = value;
      ++this.filtersNo;
    } else {
      delete this.criteria[field];
      --this.filtersNo;
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
      OrganisationId: this.organisationId,
      procedureId: this.procedureId,
      limit: this.limit,
      offset: 0
    };
    this.pageNr = 1;
    this.getData();
  }


  nextPage() {
    ++this.pageNr;
    if (this.pageNr > this.maxPageNr) return;
    this.loading = true;
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
      .exportXLSX('posting', this.organisationId, this.procedureId)
      .subscribe(
        url => {
          // console.log(url);
          window.open(url.toString(), "_blank");
        },
        (error) => console.log(error),
      );
  }
  exportPDF() {
    this._exportDataService
      .exportPDF(this.postings)
      .subscribe(
        (data) => {

          // console.log(data);
        },
        (error) => console.log(error),
        () => { }
      );
  }

}
