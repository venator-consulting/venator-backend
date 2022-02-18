import { Component, OnInit } from '@angular/core';
import { DataFilterService } from '../service/data-filter.service';
import { ExportDataService } from '../service/export-data.service';
import { dataTableColumns } from '../model/dataTableColumns';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
// import { AutocompleteService } from '../service/autocomplete.service';
import { Word } from '../model/word';
import { DictionaryService } from '../service/dictionary.service';
import { DatePipe } from '@angular/common';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-sap-data-table',
  templateUrl: './sap-data-table.component.html',
  styleUrls: ['./sap-data-table.component.sass'],
  providers: [DatePipe]
})
export class SAPDataTableComponent implements OnInit {
  constructor(
    private _messageService: MessageService,
    private _dataFilterService: DataFilterService,
    private _exportDataService: ExportDataService,
    private _router: Router,
    private _translateService: TranslateService,
    private _autocompleteService: DictionaryService,
    private datepipe: DatePipe,
  ) { }

  organisationId = localStorage.getItem('organisationId');
  procedureId = localStorage.getItem('currentProcedureId');
  procedureName: string = '';
  filtersNo: number = 0;
  loading: boolean = false;
  selectLastPage: boolean = false;
  data: any;
  postings: [] = [];
  cols: dataTableColumns[];
  originalCols: dataTableColumns[] = [];
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  displayedDataCount = 0;
  criteria: any = {
    OrganisationId: this.organisationId,
    procedureId: this.procedureId,
    limit: this.limit,
    offset: 0,
    orderBy: 'id',
    sortOrder: 1,
  };
  totalCount: number = 0;
  completeWords: Word[] = new Array();

  ngOnInit(): void {
    dataTableColumns
      .getDataTableColumns(this._translateService)
      .then((cols) => {
        this.originalCols = cols;
        let temp = localStorage.getItem('data-columns');
        this.cols = temp?.trim() ? JSON.parse(temp) : [...cols];
      });

    this._translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      dataTableColumns
        .getDataTableColumns(this._translateService)
        .then((cols) => {
          this.originalCols = cols;
          let temp = localStorage.getItem('data-columns');
          this.cols = temp?.trim() ? JSON.parse(temp) : [...cols];
        });
    });

    this.procedureName = localStorage.getItem('currentProcedureName');
  }

  async getData() {

    this.loading = true;
    let tempCriteria = { ...this.criteria };
    for (const key in tempCriteria) {
      if (!tempCriteria[key] && key != 'offset') {
        delete tempCriteria[key];
      }
      if (key.includes('Date'))
        tempCriteria[key] = this.datepipe.transform(tempCriteria[key], 'yyyy.MM.dd');
    }
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
    // if (word && word.length > 2) {
    //   this._autocompleteService
    //     .complete(word)
    //     .subscribe(res => {
    //       console.log(res);
    //       this.completeWords = res;
    //     });
    // } else {
    this.completeWords = new Array();
    // }
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

  exportXLSX() {
    this.loading = true;
    const lang = localStorage.getItem('lang');
    let criteriaWithLang = { ...this.criteria };
    // criteriaWithLang['lang'] = lang;
    criteriaWithLang['lang'] = lang ?? 'de';
    this._exportDataService
      .exportXLSX(
        'posting',
        this.organisationId,
        this.procedureId,
        criteriaWithLang
      )
      .subscribe((res) => {
        this.loading = false;
        this.saveAsExcelFile(res, 'data_table');
        // window.open(url.toString(), '_blank');
      },
        (err) => { this.loading = false; }
      );
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const d: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    // FileSaver.saveAs(file);
    FileSaver.saveAs(
      d,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  exportPDF() {
    this._exportDataService.exportPDF(this.postings).subscribe(
      (data) => {
        // console.log(data);
      },
      (err) => { },
      () => { }
    );
  }

  susa() {
    this._router.navigate(['/dashboard/shared/data/susa']);
  }

  columnChanged(event) {
    console.log(event);
    localStorage.setItem('data-columns', JSON.stringify(event.value));
  }

}
