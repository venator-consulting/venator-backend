import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AmountAnalysisDetails, AmountAnalysisDetailsChart } from 'src/app/shared/model/amountAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import * as FileSaver from 'file-saver';
import { ExportDataService } from 'src/app/shared/service/export-data.service';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'amount-analysis-details',
  templateUrl: './amount-analysis-details.html',
  styleUrls: ['./amount-analysis-details.sass'],
})
export class AmountAnalysisDetailsComponent implements OnInit {
  //#region vars init
  // determine if it dependent page or a component in creditor detials
  @Input('details') details: boolean = false;
  // organization id, get from local storage
  orgId: number;
  // procedure id, get from local storage
  prcId: number;
  // account number, get from the route
  accountNumber: string;
  // system relevant data table
  data: AmountAnalysisDetails[] = new Array();
  // data for the chart
  balanceChartData: AmountAnalysisDetailsChart[] = new Array();
  // the object containing data and configuration for the chart
  chartData: { labels: any[]; datasets: { data: any[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };
  // all accounts records (relevant and non relevant)
  allRecordData: AmountAnalysisDetails[] = new Array();
  // for spinner
  waiting: boolean;
  // table columns
  cols: TableColumn[];
  // frozen columns
  frozenCols: TableColumn[];
  // base balance, will get it from the route
  baseBalance: number;
  // for front filtering, keep the original data in temp array
  tempData: any[];
  // for front filtering, contains all filters
  criteria: any = {};
  // for spinner for the filtering on table operations
  searching: boolean = false;
  // contains selected records before save changes
  selected: AmountAnalysisDetails[] = new Array();
  // tabs options (system relevant or user relevant or all)
  detailsOptions: { name: string; value: number }[];
  // keeping active tab index, the default is system relevant
  detailsOption: number = 1;
  // for breadcrumb
  items: MenuItem[];
  home: MenuItem;

  //#region for pagination and filtering of the table
  backCriteria: any;
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  filtersNo: number = 0;
  filtersDataNo: number = 0;
  totalCount: any;
  displayedDataCount: any;
  accountName: string;
  //#endregion for pagination ends
  // chart configuration
  basicOptions: any;
  //#endregion vars init

  constructor(private _router: Router, private _messageService: MessageService,
    private _route: ActivatedRoute, private _analysisService: AnalysisService,
    private _exportDataService: ExportDataService, private _translateService: TranslateService) { }

  ngOnInit(): void {

    this.baseBalance = +this._route.snapshot.paramMap.get('baseBalance');
    this._translateService.get('AmountAnalysis').subscribe((elem) => {
      this.items = [
        // {label: 'Analysis'},
        { label: elem.label, routerLink: '/dashboard/analysis/amount/' + this.baseBalance },
        {
          label: 'Details',
          routerLink: this._router.url,
          routerLinkActiveOptions: { exact: true },
        },
      ];
      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
    });

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
    this.backCriteria = {
      limit: 25,
      offset: 0,
      orderBy: 'id',
      sortOrder: 1,
    };

    this.detailsOptions = [
      { name: 'Sys-Relevants', value: 1 },
      { name: 'User Relevant', value: 2 },
      { name: 'All', value: 3 },
    ];

    this.frozenCols = [
      { header: '', field: 'amountRelevant', width: '6', align: 'center', },
      { header: 'Comment', field: 'amountRelevantComment', width: '35', align: 'left', },
    ];

    this.cols = [
      { header: 'DataTableColumns.accountNumber', field: 'accountNumber', align: 'center', },
      { header: 'DataTableColumns.accountName', field: 'accountName', align: 'left', },
      { header: 'DataTableColumns.accountType', field: 'accountType', align: 'center', },
      { header: 'DataTableColumns.documentType', field: 'documentType', align: 'center', },
      { header: 'DataTableColumns.balance', field: 'balance', align: 'right', },
      { header: 'DataTableColumns.contraAccountNumber', field: 'contraAccountNumber', align: 'center', },
      { header: 'DataTableColumns.contraAccountName', field: 'contraAccountName', align: 'center', },
      { header: 'DataTableColumns.documentNumber', field: 'documentNumber', align: 'center', },
      { header: 'DataTableColumns.documentDate', field: 'documentDate', align: 'center', },
      { header: 'DataTableColumns.recordNumber', field: 'recordNumber', align: 'center', },
      { header: 'DataTableColumns.ledgerId', field: 'ledgerId', align: 'center', },
      { header: 'DataTableColumns.executionDate', field: 'executionDate', align: 'center', },
      { header: 'DataTableColumns.dueDate', field: 'dueDate', align: 'center', },
      { header: 'DataTableColumns.textPosting', field: 'textPosting', align: 'left', },
      { header: 'DataTableColumns.textHeader', field: 'textHeader', align: 'left', },
      { header: 'DataTableColumns.reference', field: 'reference', align: 'left', },
      { header: 'DataTableColumns.assignment', field: 'assignment', align: 'left', },
    ];

    this._analysisService
      .getAmountAnalysisDetails(this.orgId, this.prcId, this.accountNumber, this.baseBalance)
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

    // this.basicOptions = {
    //   legend: {
    //     display: false
    //   },
    //   tooltips: {
    //     callbacks: {
    //       label: function (tooltipItem, data) {
    //         let value = tooltipItem.value;
    //         let currencyPipe = new CurrencyPipe('de');
    //         value = currencyPipe.transform(value, 'EURO', '');

    //         let label = data.datasets[tooltipItem.datasetIndex].label || '';
    //         return label + ': ' + value;
    //       },
    //     },
    //   },
    //   scales: {
    //     xAxes: [
    //       {
    //         ticks: {
    //           minRotation: 40,
    //           maxRotation: 90,
    //         },
    //       },
    //     ],
    //     yAxes: [
    //       {
    //         ticks: {
    //           minRotation: 0,
    //           maxRotation: 0,
    //           callback: function (label, index, values) {
    //             // debugger;
    //             let currencyPipe = new CurrencyPipe('de');
    //             label = currencyPipe.transform(label, 'EURO', '');
    //             return label;
    //           },
    //         },
    //       },
    //     ],
    //   },
    // };

    // if (this.details) this.getChartData();
  } // end of ng on init


  getChartData() {
    this._analysisService
      .getAmountAnalysisDetailsChart(this.orgId, this.prcId, this.accountNumber, this.baseBalance)
      .subscribe(res => {
        this.balanceChartData = res;
        this.chartData = {
          labels: this.balanceChartData.map(rec => rec.balance),
          datasets: [
            {
              data: this.balanceChartData.map(rec => +rec.totalBalance),
              backgroundColor: this.balanceChartData.map(rec => `rgb(${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255})`),
              hoverBackgroundColor: this.balanceChartData.map(rec => `rgb(${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255})`),
            },
          ],
        };
      });
  }


  goBack() {
    this._router.navigate(['/dashboard/analysis/amount/' + this.baseBalance]);
  }

  //#region export excel from front
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
            } catch (e) { }
          }
          // end of formatting
        }
      }
      translatedData.push(translatedRecord);
    }

    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(translatedData);
      const workbook = {
        Sheets: { amount_analysis: worksheet },
        SheetNames: ['amount_analysis'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'amount_analysis');
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
  //#endregion export excel from front

  //#region front filtering
  clearDataFilter() {
    this.criteria = {};
    this.filtersDataNo = 0;
    this.data = [...this.tempData];
  }

  filterChange(query, colName): void {
    this.searching = true;
    if (!query || !query?.toString()?.trim()) {
      this.filtersDataNo--;
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
        this.filtersDataNo = 0;
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (key === 'dueDate' || key === 'applicationDate' || key === 'documentDate' || key === 'executionDate') {
              if (element) this.data = this.tempData.filter((value) => {
                let d = new Date(value[key]);
                d.setHours(0, 0, 0, 0);
                return d.getTime() == element.getTime();
              });
            } else {
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
      }
    } else {
      this.filtersDataNo++;
      this.data = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (key === 'dueDate' || key === 'applicationDate' || key === 'documentDate' || key === 'executionDate') {
            if (element) this.data = this.tempData.filter((value) => {
              let d = new Date(value[key]);
              d.setHours(0, 0, 0, 0);
              return d.getTime() == element.getTime();
            });
          } else {
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
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }
  //#endregion front filtering


  selectRow(row: AmountAnalysisDetails): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    if (row.amountRelevant) {
      row.amountRelevant = false;
      row.amountRelevantComment = '';
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['amountRelevant'] = false;
        this.selected[index]['amountRelevantComment'] = '';
      }
    } else {
      row.amountRelevant = true;
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['amountRelevant'] = true;
      }
    }
  }

  commentChanged(row: AmountAnalysisDetails): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    row.amountRelevant = true;
    if (index == -1) {
      this.selected.push(row);
    } else {
      // update the old one
      this.selected[index]['amountRelevant'] = true;
      this.selected[index]['amountRelevantComment'] = row.amountRelevantComment;
    }
  }

  saveRelevant() {
    console.log(this.selected);
    this._analysisService
      .setRelevantAmountAnalysis(
        this.orgId,
        this.prcId,
        this.accountNumber,
        this.baseBalance,
        this.selected
      )
      .subscribe(
        (res) => {
          this._messageService.add({
            severity: 'success',
            summary: 'SUCCESS',
            life: 10000,
            detail: 'records updated successfully!',
          });
        },
        (er) => { }
      );
  }

  changeData(option: number): void {
    switch (option) {
      case 1:
        this.clearDataFilter();
        this.getSysRelevant();
        break;
      case 2:
        this.clearDataFilter();
        this.getUserRelevant();
        break;
      case 3:
        // this.clearDataFilter();
        // this.getAllByAccount();
        break;
      default:
        this.clearDataFilter();
        this.getSysRelevant();
        break;
    }
  }

  getSysRelevant() {
    this.waiting = true;
    this._analysisService
      .getAmountAnalysisDetails(
        this.orgId,
        this.prcId,
        this.accountNumber,
        this.baseBalance
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

  getUserRelevant() {
    this.waiting = true;
    this._analysisService
      .getAmountAnalysisDetailsRelevant(
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
      .getAmountAnalysisDetailsByAccount(
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

  // export excel from back-end for all table
  exportXLSX() {
    this.waiting = true;
    const lang = localStorage.getItem('lang');
    let criteriaWithLang = { ...this.backCriteria };
    criteriaWithLang['lang'] = lang;
    criteriaWithLang['accountNumber'] = this.accountNumber;
    criteriaWithLang['procedureId'] = this.prcId;
    this._exportDataService
      .exportXLSX('amount_analysis', this.orgId, this.prcId, criteriaWithLang)
      .subscribe(
        (res) => {
          this.waiting = false;
          this.saveAsExcelFile(res, 'Amount_details');
          // window.open(url.toString(), '_blank');
        },
        (error) => { this.waiting = false; }
      );
  }



  //#region pagination, sorting and filtering from the back
  sort(event) {
    this.backCriteria.orderBy = event.sortField ? event.sortField : 'id';
    this.backCriteria.sortOrder = event.sortOrder;
    this.pageNr = 1;
    this.backCriteria.offset = 0;
    this.getAllByAccount();
  }

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
      orderBy: 'id',
      sortOrder: 1,
    };
    this.filtersNo = 0;
    this.pageNr = 1;
    this.getAllByAccount();
  }
  //#endregion for pagination ends

}
