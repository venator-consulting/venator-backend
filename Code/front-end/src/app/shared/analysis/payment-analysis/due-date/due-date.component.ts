import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.sass'],
})
export class DueDateComponent implements OnInit {
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  waiting: boolean;
  basicOptions: any;
  basicData: any;
  labels: any[] = new Array();
  docDateOptions: any;
  // docDateData: any;
  // docDateLabels: any[] = new Array();
  // docPositiveData: any[] = new Array();
  // docNegativeData: any[] = new Array();
  docData: any[] = new Array();
  docDataTable: any[] = new Array();
  // notPaidLabels: any[] = new Array();
  // notPaidData: any[] = new Array();
  // notPaidDataTable: any[] = new Array();
  // notPaidChartData: any;
  secondChartData: any;
  secondChartLabels: any[] = new Array();
  secondChartOptions: any;

  data: any[] = new Array();
  @ViewChild('chart') chart: any;
  // docCols: { header: string; field: string; }[];
  // notPaidCols: TableColumn[];
  delayCols: TableColumn[];
  detailsCols: TableColumn[];
  delayData: any;
  detailsData: any[] = new Array();
  items: MenuItem[];
  home: MenuItem;
  //for second chart
  maxDate: Date;
  // for second chart and slider
  minDate: Date;
  // for slider
  toDate: Date;
  // for second chart
  rangeDays: number;
  // for slider
  maxRange: number;
  // for slider
  rangeValues: number[];
  // for slider
  baseFromDate: Date;
  // for slider
  baseToDate: Date;
  secondChartDataRecords: any;

  selectedAccount: { accountNumber: string; accountName: string };
  maxDelay: number;

  constructor(
    public _translateService: TranslateService,
    private _messageService: MessageService,
    private _analysisService: AnalysisService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    let prcId = +localStorage.getItem('dueDatePrcId');
    if (prcId == this.selectedProcedure) {
      this.baseFromDate = new Date(localStorage.getItem('dueDateBaseMin'));
      this.baseToDate = new Date(localStorage.getItem('dueDateBaseMax'));
      this.minDate = new Date(localStorage.getItem('dueDateMinDate'));
      this.toDate = new Date(localStorage.getItem('dueDateToDate'));
    }


    this._translateService.get('DueDateAnalysis').subscribe((elem) => {
      this.items = [
        // { label: elem.paymentLabel, routerLink: '/dashboard/analysis/payment' },
        { label: elem.label, routerLink: '/dashboard/analysis/due-date' },
      ];

      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
    });

    this.getData();

    this.basicOptions = {
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
              stepSize: 50,
            },
          },
        ],
      },
    };
    this.detailsCols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber',
        align: 'left'
      },
      {
        header: 'DataTableColumns.accountName',
        field: 'accountName',
        align: 'left'
      },
      {
        header: 'DataTableColumns.accountType',
        field: 'accountType',
        align: 'center'
      },

      {
        header: 'DataTableColumns.documentType',
        field: 'documentType',
        align: 'center'
      },
      {
        header: 'DataTableColumns.documentTypeNew',
        field: 'documentTypeNewName',
        align: 'center'
      },
      {
        header: 'DataTableColumns.balance',
        field: 'balance',
        align: 'right'
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate',
        align: 'center'
      },
      {
        header: 'DataTableColumns.applicationDate',
        field: 'applicationDate',
        align: 'center'
      },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate',
        align: 'center'
      },
      {
        header: 'DueDateAnalysis.delay',
        field: 'delay',
        align: 'center'
      }
    ];

    // this.delayCols = [
    //   {
    //     header: 'DueDateAnalysis.accountNumber',
    //     field: 'accountNumber',
    //     align: 'left',
    //   },
    //   {
    //     header: 'DueDateAnalysis.accountName',
    //     field: 'accountName',
    //     align: 'left',
    //   },
    //   {
    //     header: 'DueDateAnalysis.positiveDelay',
    //     field: 'delayPos',
    //     align: 'center',
    //   },
    //   {
    //     header: 'DueDateAnalysis.negativeDelay',
    //     field: 'delayNeg',
    //     align: 'center',
    //   },
    //   {
    //     header: 'DueDateAnalysis.count',
    //     field: 'count',
    //     align: 'center',
    //   },
    // ];

    // this.notPaidCols = [
    //   {
    //     header: 'DueDateAnalysis.date',
    //     field: 'date',
    //     align: 'center',
    //   },
    //   {
    //     header: 'DueDateAnalysis.notPaid',
    //     field: 'notPaid',
    //     align: 'center',
    //   },
    // ];
  } // end of ng on init


  getData() {
    this.waiting = true;
    let start = this.minDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    let parmas = { maxDelay: this.maxDelay, accountNumber: this.selectedAccount?.accountNumber ?? null };
    this._analysisService
      .getDueDateAnalysis(this.selectedOrganisation, this.selectedProcedure, start, end, parmas)
      .subscribe(
        async (res) => {
          // debugger;
          if (!this.maxDelay) this.maxDelay = res.data.maxDelay;
          this.data = res.data.dueDateReference.data;
          this.labels = res.data.dueDateReference.labels;
          this.secondChartDataRecords = res.data.dueDateReference.recordsDelay;
          this.secondChartLabels = res.data.dueDateReference.secondChartLabels;
          if (!this.baseFromDate) this.baseFromDate = new Date(res.dateRange[0].mindate);
          if (!this.baseToDate) this.baseToDate = new Date(res.dateRange[0].maxappdate);
          if (!this.minDate) this.minDate = new Date(res.dateRange[0].mindate);
          if (!this.toDate) this.toDate = new Date(res.dateRange[0].maxappdate);
          if (!this.rangeValues) this.rangeValues = [0, this.dayDiff(this.minDate, this.toDate)];
          if (!this.maxRange) this.maxRange = this.dayDiff(this.baseFromDate, this.baseToDate);
          localStorage.setItem('dueDateBaseMin', this.baseFromDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDateBaseMax', this.baseToDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDateMinDate', this.minDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDateToDate', this.toDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDatePrcId', '' + this.selectedProcedure);
          this.maxDate = this.toDate;
          // let lastChartDateTemp = this.secondChartLabels[this.secondChartLabels.length - 1].split('.');
          // this.maxDate = new Date(lastChartDateTemp[2], lastChartDateTemp[1], lastChartDateTemp[0]);
          // this.maxDate.setMonth(this.maxDate.getMonth() +1);
          // let firstChartDateTemp = this.secondChartLabels[0].split('.');
          // this.minDate = new Date(firstChartDateTemp[2], firstChartDateTemp[1], firstChartDateTemp[0]);
          // this.minDate.setMonth(this.minDate.getMonth() +1);
          this.rangeDays = Math.ceil((this.maxDate.getTime() - this.minDate.getTime()) / (1000 * 60 * 60 * 24));
          this.rangeValues = [
            this.dayDiff(this.baseFromDate, this.minDate),
            this.dayDiff(this.baseFromDate, this.maxDate)
          ];
          this.waiting = false;
          this.basicData = {
            labels: this.labels,
            datasets: new Array(),
          };
          this.basicData.datasets.push({
            label: await this._translateService.get('DueDateAnalysis.firstChartLabel').toPromise(),
            borderColor: `rgb(100,100,255)`,
            data: this.data,
            fill: false,
          });
          this.secondChartOptions = {
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  debugger;
                  let value = tooltipItem.value;
                  let point = this.secondChartDataRecords[tooltipItem.index];
                  let label = point.label;
                  let accountNumber = point?.accountNumber;
                  let accountName = point?.accountName;
                  return label + ' :' + value +  '  - ' + accountNumber + '/' + accountName;
                },
              },
            },
            scales: {
              yAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                }
              }],
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                },
                ticks: {
                  minRotation: 40,
                  maxRotation: 90,
                  callback: (label, index, values) => {
                    // debugger;
                    // let temp = label * this.rangeDays / values.length;
                    let tempDate = new Date(this.minDate);
                    tempDate.setDate(tempDate.getDate() + label);
                    label = tempDate.toLocaleString("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    });
                    return label;
                  },
                },
              }]
            },
          };
          this.secondChartData = {
            labels: this.labels,
            datasets: [{
              label: await this._translateService.get('DueDateAnalysis.secondChartLabel').toPromise(),
              borderColor: `rgb(100,100,255)`,
              data: this.secondChartDataRecords,
              fill: false,
            }]
          };


          // this.chart.refresh();
          // this.chart.reinit();
          this.docDataTable = res.data.docDateReference;
          // this.notPaidDataTable = res.data.docDateReference;
          if (!this.delayData) {
            this.delayData = res.data.dueDateRefAccounts;

            this.delayData.forEach((account) => {
              // let accountNumber = parseInt(account.accountNumber, 10);
              // account.accountNumber = isNaN(accountNumber)
              //   ? account.accountNumber
              //   : accountNumber;
              account.accountName = account.accountName ?? 'No Name';
            });
          }

          if (this.selectedAccount && this.selectedAccount.accountNumber) {
            this._analysisService
              .getDueDateAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.selectedAccount.accountNumber, start, end, this.maxDelay)
              .subscribe(res => {
                this.waiting = false;
                this.detailsData = res.data.records;
              });
          }

          // this.docDataTable.forEach((element) => {
          //   this.docDateLabels.push(
          //     element.monthName + '-' + element.yearName
          //   );
          //   this.notPaidLabels.push(
          //     element.monthName + '-' + element.yearName
          //   );
          //   this.docPositiveData.push(element.positive);
          //   this.docNegativeData.push(element.negative);
          //   this.docData.push(+element.positive + +element.negative);
          //   this.notPaidData.push(+element.notPaid);
          // });

          // this.docDateData = {
          //   labels: this.docDateLabels,
          //   datasets: [
          //     {
          //       type: 'line',
          //       label: elem.average,
          //       borderColor: '#42A5F5',
          //       borderWidth: 2,
          //       fill: false,
          //       data: this.docData,
          //     },
          //     {
          //       type: 'bar',
          //       label: elem.positive,
          //       backgroundColor: '#F5B59B',
          //       data: this.docPositiveData,
          //       borderColor: '#E5A58B',
          //       borderWidth: 2,
          //     },
          //     {
          //       type: 'bar',
          //       label: elem.negative,
          //       backgroundColor: '#FFD795',
          //       borderColor: '#EFC785',
          //       data: this.docNegativeData,
          //     },
          //   ],
          // };

          // this.notPaidChartData = {
          //   labels: this.notPaidLabels,
          //   datasets: [
          //     {
          //       label: elem.notPaid,
          //       backgroundColor: '#42A5F5',
          //       data: this.notPaidData,
          //     },
          //   ],
          // };
        },
        (er) => {
          this.waiting = false;
        }
      );

  }


  handleSliderChange(e) {
    let start = e.values[0];
    let end = e.values[1];
    // calculate fromDate: start + baseFromDate
    let tempStart = new Date(this.baseFromDate);
    tempStart.setDate(tempStart.getDate() + start);
    this.minDate = new Date(tempStart);
    // calculate toDate: baseToDate - end
    let tempEnd = new Date(this.baseToDate);
    tempEnd.setDate(tempEnd.getDate() - (this.maxRange - +end));
    this.toDate = new Date(tempEnd);
  }

  dayDiff(d1: Date, d2: Date) {
    var diff = Math.abs(d1.getTime() - d2.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }

  backToPayment() {
    this._router.navigate(['/dashboard/analysis/payment/']);
  }

  goToDetails(row) {
    this._router.navigate([
      '/dashboard/analysis/due-date/deails/' + row.accountNumber,
    ]);
  }

  async exportExcel() {
    let translatedData = [];
    for (let index = 0; index < this.detailsData.length; index++) {
      let element = this.detailsData[index];
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
        Sheets: { due_date_analysis: worksheet },
        SheetNames: ['due_date_analysis'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'due_date_analysis');
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

}
