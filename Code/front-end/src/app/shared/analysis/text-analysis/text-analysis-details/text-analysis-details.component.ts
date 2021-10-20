import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { TextAnalysisDetails } from 'src/app/shared/model/textAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';
import * as FileSaver from 'file-saver';
import { ExportDataService } from 'src/app/shared/service/export-data.service';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from 'src/app/shared/model/tableColumn';

@Component({
  selector: 'app-text-analysis-details',
  templateUrl: './text-analysis-details.component.html',
  styleUrls: ['./text-analysis-details.component.sass'],
})
export class TextAnalysisDetailsComponent implements OnInit {
  @Input('details') details: boolean = false;
  orgId: number;
  prcId: number;
  accountNumber: string;
  data: TextAnalysisDetails[] = new Array();
  allRecordData: TextAnalysisDetails[] = new Array();
  cols: TableColumn[];
  frozenCols: TableColumn[];
  waiting: boolean = false;
  procedureName: string;
  tempData: any[];
  criteria: any = {};
  searching: boolean = false;
  selected: TextAnalysisDetails[] = new Array();
  detailsOptions: { name: string; value: number }[];
  detailsOption: number = 1;
  items: MenuItem[];
  home: MenuItem;

  // for pagination
  backCriteria: any;
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  filtersNo: number = 0;
  totalCount: any;
  displayedDataCount: any;
  accountName: string;
  // for pagination ends

  constructor(
    private _router: Router,
    private _messageService: MessageService,
    private _route: ActivatedRoute,
    private _analysisService: AnalysisService,
    private _translateService: TranslateService,
    private _exportDataService: ExportDataService
  ) {}

  ngOnInit(): void {
    this.items = [
      // { label: 'Analysis' },
      {
        label: 'Text Analysis',
        routerLink: '/dashboard/analysis/text',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Details',
        routerLink: this._router.url,
        routerLinkActiveOptions: { exact: true },
      },
    ];

    this.home = {
      icon: 'pi pi-home',
      label: 'Data',
      routerLink: '/dashboard/shared/data',
    };
    this.waiting = true;
    this.orgId = +this._route.snapshot.paramMap.get('orgId');
    this.orgId = this.orgId
      ? this.orgId
      : +localStorage.getItem('organisationId');
    this.prcId = +this._route.snapshot.paramMap.get('prcId');
    this.prcId = this.prcId
      ? this.prcId
      : +localStorage.getItem('currentProcedureId');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.backCriteria = {
      limit: 25,
      offset: 0,
      orderBy: 'id',
      sortOrder: 1,
    };

    this.detailsOptions = [
      { name: 'Sys-Relevants', value: 1 },
      { name: 'Marked', value: 2 },
      { name: 'All', value: 3 },
    ];

    this.cols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'DataTableColumns.accountName',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'DataTableColumns.accountType',
        field: 'accountType',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentType',
        field: 'documentType',
        align: 'center',
      },
      {
        header: 'DataTableColumns.balance',
        field: 'balance',
        align: 'right',
      },
      {
        header: 'DataTableColumns.contraAccountNumber',
        field: 'contraAccountNumber',
        align: 'left',
      },
      {
        header: 'DataTableColumns.contraAccountName',
        field: 'contraAccountName',
        align: 'left',
      },
      {
        header: 'DataTableColumns.documentNumber',
        field: 'documentNumber',
        align: 'left',
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.recordNumber',
        field: 'recordNumber',
        align: 'left',
      },
      {
        header: 'DataTableColumns.ledgerId',
        field: 'ledgerId',
        align: 'left',
      },
      {
        header: 'DataTableColumns.executionDate',
        field: 'executionDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.reference',
        field: 'reference',
        align: 'left',
      },
      {
        header: 'DataTableColumns.textPosting',
        field: 'textPosting',
        align: 'left',
      },
      {
        header: 'DataTableColumns.textHeader',
        field: 'textHeader',
        align: 'left',
      },
      {
        header: 'DataTableColumns.assignment',
        field: 'assignment',
        align: 'left',
      },
    ];

    this.frozenCols = [
      {
        header: '',
        field: 'textRelevant',
        width: '6',
        align: 'center',
      },
      {
        header: 'Comment',
        field: 'textRelevantComment',
        width: '35',
        align: 'left',
      },
    ];

    this._analysisService
      .getTextAnalysisDetails(this.orgId, this.prcId, this.accountNumber)
      .subscribe(
        (res) => {
          this.data = res;
          if (this.data.length > 0) {
            this.accountName = this.data[0].accountName;
          }
          this.tempData = res;
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  goBack() {
    this._router.navigate(['/dashboard/analysis/text/']);
  }

  async exportExcel() {
    let translatedData = [];
    for (let index = 0; index < this.data.length; index++) {
      let element = this.data[index];
      let translatedRecord = {};
      for (const key in element) {
        if (
          Object.prototype.hasOwnProperty.call(element, key) &&
          key != 'id' &&
          key != 'procedureId'
        ) {
          let translatedKey = await this._translateService
            .get('DataTableColumns.' + key)
            .toPromise();
          translatedRecord[translatedKey] = element[key];

          // formatting
          if (
            element[key] &&
            (key == 'balance' ||
              key == 'debitAmount' ||
              key == 'creditAmount' ||
              key == 'taxAmount' ||
              key == 'taxAmountDebit' ||
              key == 'taxAmountCredit' ||
              key == 'StartingBalance')
          ) {
            try {
              let temp = Number.parseFloat(element[key].toString());
              if (!Number.isNaN(temp)) {
                translatedRecord[translatedKey] = temp.toLocaleString('de-DE', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });
              }
            } catch (e) {
              // do nothing
            }
          } else if (
            element[key] &&
            (key == 'documentDate' ||
              key == 'postingDate' ||
              key == 'dueDate' ||
              key == 'dueDateNew' ||
              key == 'executionDate' ||
              key == 'applicationDate' ||
              key == 'StartingBalanceDate')
          ) {
            try {
              let temp = new Date(Date.parse(element[key].toString()));
              if (temp instanceof Date)
                translatedRecord[translatedKey] = temp.toLocaleDateString(
                  'de-DE',
                  {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  }
                );
            } catch (e) {}
          }
          // end of formatting
        }
      }
      translatedData.push(translatedRecord);
    }

    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(translatedData);
      const workbook = {
        Sheets: { text_analysis: worksheet },
        SheetNames: ['text_analysis'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'text_analysis');
    });
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

  filterChange(query, colName): void {
    this.searching = true;
    if (!query || !query?.toString()?.trim()) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.data = this.tempData.filter(
                (value) => value[key]?.toLowerCase() == element.toLowerCase()
              );
            } else {
              this.data = this.tempData.filter((value) =>
                value[key]?.toLowerCase().includes(element.toLowerCase())
              );
            }
          }
        }
      }
    } else {
      this.data = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (element.length < 3) {
            this.data = this.data.filter(
              (value) => value[key]?.toLowerCase() == element.toLowerCase()
            );
          } else {
            this.data = this.data.filter((value) =>
              value[key]?.toLowerCase().includes(element.toLowerCase())
            );
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }

  selectRow(row: TextAnalysisDetails): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    if (row.textRelevant) {
      row.textRelevant = false;
      row.textRelevantComment = '';
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['textRelevant'] = false;
        this.selected[index]['textRelevantComment'] = '';
      }
    } else {
      row.textRelevant = true;
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['textRelevant'] = true;
      }
    }
  }

  commentChanged(row: TextAnalysisDetails): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    row.textRelevant = true;
    if (index == -1) {
      this.selected.push(row);
    } else {
      // update the old one
      this.selected[index]['textRelevant'] = true;
      this.selected[index]['textRelevantComment'] = row.textRelevantComment;
    }
  }

  saveRelevant() {
    console.log(this.selected);
    this._analysisService
      .setRelevantTextAnalysis(
        this.orgId,
        this.prcId,
        this.accountNumber,
        this.selected
      )
      .subscribe(
        (res) => {
          this._messageService.add({
            severity: 'success',
            summary: 'SUCCESS',
            life: 10000,
            detail: 'records set as relevant successfully!',
          });
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  changeData(option: number): void {
    switch (option) {
      case 1:
        this.getSysRelevant();
        break;
      case 2:
        this.getUserRelevant();
        break;
      case 3:
        // this.getAllByAccount();
        break;
      default:
        this.getSysRelevant();
        break;
    }
  }

  getSysRelevant() {
    this.waiting = true;
    this._analysisService
      .getTextAnalysisDetails(this.orgId, this.prcId, this.accountNumber)
      .subscribe(
        (res) => {
          this.data = res;
          this.tempData = res;
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  getUserRelevant() {
    this.waiting = true;
    this._analysisService
      .getTextAnalysisDetailsRelevant(
        this.orgId,
        this.prcId,
        this.accountNumber
      )
      .subscribe(
        (res) => {
          this.data = res;
          this.tempData = res;
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  getAllByAccount() {
    this.waiting = true;
    for (const key in this.backCriteria) {
      if (!this.backCriteria[key] && key != 'offset') {
        delete this.backCriteria[key];
      }
    }
    this.filtersNo = Object.keys(this.backCriteria).length - 4;
    this._analysisService
      .getTextAnalysisDetailsByAccount(
        this.orgId,
        this.prcId,
        this.accountNumber,
        this.backCriteria
      )
      .subscribe(
        (res) => {
          this.allRecordData = res.rows;
          this.totalCount = res.count;
          this.displayedDataCount = this.allRecordData.length;
          this.maxPageNr = Math.ceil(this.totalCount / this.limit);
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  sort(event) {
    this.backCriteria.orderBy = event.sortField? event.sortField : 'id';
    this.backCriteria.sortOrder = event.sortOrder;
    this.pageNr = 1;
    this.backCriteria.offset = 0;
    this.getAllByAccount();
  }

  // export excel from back-end for all table
  exportXLSX() {
    this.waiting = true;
    const lang = localStorage.getItem('lang');
    let criteriaWithLang = { ...this.backCriteria };
    criteriaWithLang['lang'] = lang;
    criteriaWithLang['accountNumber'] = this.accountNumber;
    criteriaWithLang['procedureId'] = this.prcId;
    // debugger;
    this._exportDataService
      .exportXLSX('text_analysis', this.orgId, this.prcId, criteriaWithLang)
      .subscribe(
        (res) => {
          this.waiting = false;
          this.saveAsExcelFile(res, 'Text_details');
          // window.open(url.toString(), '_blank');
        },
        (err) => {this.waiting = false;}
      );
  }

  // for pagination starts

  filterChangeBack(query, colName): void {
    this.pageNr = 1;
    this.backCriteria.offset = 0;
    this.getAllByAccount();
  }

  limitChange(e) {
    this.limit = e.value;
    this.backCriteria.offset = 0;
    this.backCriteria.limit = this.limit;
    this.pageNr = 1;
    this.getAllByAccount();
  }

  firstPage() {
    this.pageNr = 1;
    this.backCriteria.offset = 0;
    this.getAllByAccount();
  }

  nextPage() {
    ++this.pageNr;
    if (this.pageNr > this.maxPageNr) return;
    this.backCriteria.offset += +this.limit;

    this.getAllByAccount();
  }

  lastPage() {
    this.pageNr = this.maxPageNr;
    this.backCriteria.offset = (this.pageNr - 1) * +this.limit;
    this.getAllByAccount();
  }

  previousPage() {
    --this.pageNr;
    if (this.pageNr <= 0) return;
    this.backCriteria.offset -= +this.limit;
    this.getAllByAccount();
  }

  pageNrChange(value) {
    this.pageNr = (value && value.trim()) ? value : 1;
    this.backCriteria.offset = (this.pageNr - 1) * this.limit;
    this.getAllByAccount();
  }

  clearFilter() {
    this.backCriteria = {
      limit: this.limit,
      offset: 0,
    };
    this.pageNr = 1;
    this.getAllByAccount();
  }
  // for pagination ends
}
