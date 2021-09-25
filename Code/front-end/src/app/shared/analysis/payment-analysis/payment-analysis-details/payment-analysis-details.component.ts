import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import {
  PaymentData,
  PaymentDetailsRecord,
} from 'src/app/shared/model/paymentAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';
import { PaymentAnalysisDetailsData } from 'src/app/shared/model/paymentAnalysis';
import * as FileSaver from 'file-saver';
import { CurrencyPipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ExportDataService } from 'src/app/shared/service/export-data.service';
import { TableColumn } from 'src/app/shared/model/tableColumn';

@Component({
  selector: 'app-payment-analysis-details',
  templateUrl: './payment-analysis-details.component.html',
  styleUrls: ['./payment-analysis-details.component.sass'],
})
export class PaymentAnalysisDetailsComponent implements OnInit {
  @Input('details') details: boolean = false;
  startDate: Date = new Date();
  endDate: Date = new Date();
  data: PaymentData[];
  blueData: PaymentDetailsRecord[] = new Array();
  redData: PaymentDetailsRecord[] = new Array();
  greenData: PaymentDetailsRecord[] = new Array();
  relevantData: PaymentAnalysisDetailsData[] = new Array();
  allRecordData: PaymentAnalysisDetailsData[] = new Array();
  basicOptions: any;
  basicData: any;
  blue: any[] = new Array();
  red: any[] = new Array();
  green: any[] = new Array();
  labels: any[] = new Array();
  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  accountName: string = '';
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  paymentOptions: { name: string; value: number; color: string }[];
  accountNumber: string;
  waiting: boolean = true;
  procedureName: string;
  displayData: number;
  cols: TableColumn[];
  frozenCols: TableColumn[];
  selected: PaymentAnalysisDetailsData[] = new Array();
  items: MenuItem[];
  home: MenuItem;
  detailsOptions: { name: string; value: number }[];
  detailsOption: number;

  // for pagination
  backCriteria: any;
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  filtersNo: number = 0;
  totalCount: any;
  displayedDataCount: any;
  // for pagination ends

  constructor(
    public _translateService: TranslateService,
    private _messageService: MessageService,
    private _analysisService: AnalysisService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _exportDataService: ExportDataService
  ) {}

  ngOnInit(): void {
    this._translateService.get('PaymentAnalysis').subscribe((elem) => {
      this.waiting = true;
      this.displayData = 1;
      this.detailsOption = 1;

      this.items = [
        // { label: 'Analysis' },
        {
          label: elem.label,
          routerLink: '/dashboard/analysis/payment',
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
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
      this.basicOptions = {
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              // debugger;
              let value = tooltipItem.value;
              let currencyPipe = new CurrencyPipe('de');
              value = currencyPipe.transform(value, 'EURO', '');

              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              return label + ': ' + value;
            },
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                minRotation: 40,
                maxRotation: 90,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                minRotation: 0,
                maxRotation: 0,
                callback: function (label, index, values) {
                  let currencyPipe = new CurrencyPipe('de');
                  label = currencyPipe.transform(label, 'EURO', '');
                  return label;
                },
              },
            },
          ],
        },
      };

      this.backCriteria = {
        limit: 25,
        offset: 0,
        orderBy: 'id',
        sortOrder: 1,
      };

      this.paymentOptions = [
        { name: elem.blue, value: 1, color: 'blue !important' },
        { name: elem.red, value: 2, color: 'red' },
        { name: elem.green, value: 3, color: 'green' },
      ];
      this.detailsOptions = [
        { name: elem.sysRelevant, value: 1 },
        { name: elem.userRelevant, value: 2 },
        { name: elem.allRelevant, value: 3 },
      ];

      this.frozenCols = [
        {
          header: '',
          field: 'paymentRelevant',
          width: '6',
          align: 'center',
        },
        {
          header: elem.comment,
          field: 'paymentRelevantComment',
          width: '35',
          align: 'left',
        },
      ];
      this.basicData = {
        labels: this.labels,
        datasets: new Array(),
      };

      this.basicData.datasets.push(
        {
          label: elem.blue,
          backgroundColor: `rgb(100,100,255)`,
          data: this.blue,
        },
        {
          label: elem.red,
          backgroundColor: `rgb(255,100,100)`,
          data: this.red,
        },
        {
          label: elem.green,
          backgroundColor: `rgb(100,255,100)`,
          data: this.green,
        }
      );
    });
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
        header: 'DataTableColumns.documentTypeNew',
        field: 'documentTypeNew',
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
        header: 'DataTableColumns.applicationDate',
        field: 'applicationDate',
        align: 'center',
      },
      // {
      //   header: 'DataTableColumns.ledgerId',
      //   field: 'ledgerId',
      //   align: 'center',
      // },
      // {
      //   header: 'DataTableColumns.executionDate',
      //   field: 'executionDate',
      //   align: 'center',
      // },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate',
        align: 'center',
      },
    ];

    this.selectedOrganisation = +localStorage.getItem('organisationId');

    this.selectedProcedure = +localStorage.getItem('currentProcedureId');

    this.procedureName = localStorage.getItem('currentProcedureName');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this.getData();
  } // end of ng on init

  getData() {
    this._analysisService
      .getPaymentAnalysisDetails(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.accountNumber
      )
      .subscribe(
        (res) => {
          this.data = res.data.data;
          this.startDate = res.dateRange[0].mindate;
          this.endDate = res.dateRange[0].maxdate;
          this.blueData = res.data.blue;
          this.redData = res.data.red;
          this.greenData = res.data.green;
          if (!this.accountName) {
            if (this.blueData.length > 0) {
              this.accountName = this.blueData[0].accountName;
            } else if (this.redData.length > 0) {
              this.accountName = this.redData[0].accountName;
            } else if (this.greenData.length > 0) {
              this.accountName = this.greenData[0].accountName;
            }
          }

          if (!(this.labels.length > 0)) {
            for (let i = 0; i < this.data.length; i++) {
              const element = this.data[i];
              this.labels.push(element.monthName + '-' + element.yearName);
              this.blue.push(Math.abs(element.blue.value));
              this.green.push(Math.abs(element.green.value));
              this.red.push(Math.abs(element.red.value));
            }
          }
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  selectRow(row: PaymentAnalysisDetailsData): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    if (row.paymentRelevant) {
      row.paymentRelevant = false;
      row.paymentRelevantComment = '';
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['paymentRelevant'] = false;
        this.selected[index]['paymentRelevantComment'] = '';
      }
    } else {
      row.paymentRelevant = true;
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['paymentRelevant'] = true;
      }
    }
  }

  commentChanged(row: PaymentAnalysisDetailsData): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    row.paymentRelevant = true;
    if (index == -1) {
      this.selected.push(row);
    } else {
      // update the old one
      this.selected[index]['paymentRelevant'] = true;
      this.selected[index]['paymentRelevantComment'] =
        row.paymentRelevantComment;
    }
  }

  saveRelevant() {
    console.log(this.selected);
    this._analysisService
      .setRelevantPaymentAnalysis(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.accountNumber,
        this.selected
      )
      .subscribe(
        (res) => {
          this.getData();
          this._messageService.add({
            severity: 'success',
            summary: 'SUCCESS',
            life: 10000,
            detail: 'records set as relevant successfully!',
          });
        },
        (er) => {}
      );
  }

  filterChange(query, colName): void {
    this.searching = true;
    if (!query) {
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

  goBack() {
    this._router.navigate(['/dashboard/analysis/payment/']);
  }

  async exportExcel(data) {
    let translatedData = [];
    for (let index = 0; index < data.length; index++) {
      let element = data[index];
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
        Sheets: { payment_analysis: worksheet },
        SheetNames: ['payment_analysis'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'payment_analysis');
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

  changeData(option: number): void {
    switch (option) {
      case 1:
        this.getData();
        break;
      case 2:
        this.getUserRelevant();
        break;
      case 3:
        // this.getAllByAccount();
        break;
      default:
        this.getData();
        break;
    }
  }

  getUserRelevant() {
    this.waiting = true;
    this._analysisService
      .getPaymentAnalysisDetailsRelevant(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.accountNumber
      )
      .subscribe(
        (res) => {
          this.relevantData = res;
          // this.tempData = res;
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
      .getPaymentAnalysisDetailsByAccount(
        this.selectedOrganisation,
        this.selectedProcedure,
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
    criteriaWithLang['procedureId'] = this.selectedProcedure;
    this._exportDataService
      .exportXLSX(
        'payment_analysis',
        this.selectedOrganisation,
        this.selectedProcedure,
        criteriaWithLang
      )
      .subscribe(
        (res) => {
          this.waiting = false;
          this.saveAsExcelFile(res, 'Payment_details');
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
