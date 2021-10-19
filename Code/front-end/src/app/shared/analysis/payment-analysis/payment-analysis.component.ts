import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalysisService } from '../../service/analysis.service';
import { Router } from '@angular/router';
import { PaymentAnalysis, PaymentData } from '../../model/paymentAnalysis';
import { MenuItem, MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { CurrencyPipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '../../model/tableColumn';
@Component({
  selector: 'app-payment-analysis',
  templateUrl: './payment-analysis.component.html',
  styleUrls: ['./payment-analysis.component.sass'],
})
export class PaymentAnalysisComponent implements OnInit {
  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  basicOptions: any;
  basicData: any;
  specificAccountData: any;
  data: PaymentData[];
  blueData: any[] = new Array();
  RedData: any[] = new Array();
  GreenData: any[] = new Array();
  specificAccountBlueData: any[] = new Array();
  specificAccountRedData: any[] = new Array();
  specificAccountGreenData: any[] = new Array();
  labels: any[] = new Array();
  ready: boolean = false;
  accounts: any[] = new Array();
  blueAccounts: any[] = new Array();
  top10Blue: any[] = new Array();
  greenAccounts: any[] = new Array();
  redAccounts: any[] = new Array();
  procedureName: string;
  top10Red: any[];
  top10Green: any[];
  top10: number;
  paymentOptions: { name: string; value: number; color: string }[];
  top10Cols: TableColumn[];
  accountsCols: TableColumn[];
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  selectedMaxAccountNumber: string;
  selectedMaxAccount: any;
  @ViewChild('chart') chart: any;
  @ViewChild('allChart') allChart: any;
  selectedMaxAccountName: string;
  items: MenuItem[];
  home: MenuItem;
  blue: string;
  red: string;
  green: string;
  waiting: boolean = true;
  fromDate: Date;
  toDate: Date;
  maxDate: Date;
  mindate: Date;
  rangeValues: number[];
  maxRange: any;

  constructor(
    public _translateService: TranslateService,
    private _messageService: MessageService,
    private _analysisService: AnalysisService,
    private _router: Router,
    private prcService: ProcedureService
  ) { }

  ngOnInit(): void {
    this.waiting = true;
    this._translateService.get('PaymentAnalysis').subscribe((elem) => {
      this.blue = elem.blue;
      this.red = elem.red;
      this.green = elem.green;

      this.items = [
        { label: elem.label, routerLink: '/dashboard/analysis/payment' },
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
                  // debugger;
                  let currencyPipe = new CurrencyPipe('de');
                  label = currencyPipe.transform(label, 'EURO', '');
                  return label;
                },
              },
            },
          ],
        },
      };

      this.top10 = 1;

      this.paymentOptions = [
        { name: this.blue, value: 1, color: 'rgb(100,100,255)' },
        { name: this.red, value: 2, color: 'rgb(255,100,100)' },
        { name: this.green, value: 3, color: 'rgb(100,255,100)' },
      ];

      this.top10Cols = [
        {
          header: 'PaymentAnalysis.accountNumber',
          field: 'accountNumber',
          align: 'left',
        },
        {
          header: 'PaymentAnalysis.accountName',
          field: 'accountName',
          align: 'left',
        },
        {
          header: 'PaymentAnalysis.sum',
          field: 'value',
          align: 'right',
        },
      ];

      this.accountsCols = [
        {
          header: 'PaymentAnalysis.accountNumber',
          field: 'accountNumber',
          align: 'left',
        },
        {
          header: 'PaymentAnalysis.accountName',
          field: 'accountName',
          align: 'left',
        },
        {
          header: 'PaymentAnalysis.blue',
          field: 'blue',
          align: 'right',
        },
        {
          header: 'PaymentAnalysis.red',
          field: 'red',
          align: 'right',
        },
        {
          header: 'PaymentAnalysis.green',
          field: 'green',
          align: 'right',
        },
      ];


    });

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.getData();
  } // end of init function

  dayDiff(d1: Date, d2: Date) {
    var diff = Math.abs(d1.getTime() - d2.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }

  getData() {
    this.waiting = true;
    this.labels = new Array();
    this.blueData = new Array();
    this.GreenData = new Array();
    this.RedData = new Array();
    let tmpFromDate = this.fromDate?.toISOString()?.split('T')[0];
    let tmpToDate = this.toDate?.toISOString()?.split('T')[0];
    this._analysisService
      .getPaymentAnalysis(this.selectedOrganisation, this.selectedProcedure, tmpFromDate, tmpToDate)
      .subscribe(
        (res) => {
          this.data = res.data.res;
          this.accounts = res.data.accounts;
          if (!this.fromDate) this.fromDate = new Date(res.dateRange[0].mindate);
          if (!this.toDate) this.toDate = new Date(res.dateRange[0].maxdate);
          if (!this.mindate) this.mindate = new Date(res.dateRange[0].mindate);
          if (!this.maxDate) this.maxDate = new Date(res.dateRange[0].maxdate);
          if (!this.rangeValues) this.rangeValues = [0, this.dayDiff(this.mindate, this.maxDate)];
          if (!this.maxRange) this.maxRange = this.dayDiff(this.mindate, this.maxDate);
          // debugger;
          for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            this.labels.push(element.monthName + '-' + element.yearName);
            this.blueData.push(-1 * element.blue.value);
            this.GreenData.push(element.green.value);
            this.RedData.push(-1 * element.red.value);
          }

          this.accounts.forEach((account) => {
            let accountNumber = parseInt(account.accountNumber, 10);
            account.accountNumber = isNaN(accountNumber)
              ? account.accountNumber
              : accountNumber;
            account.blue = -1 * account.blue;
            account.red = -1 * account.red;
            account.lastBlue = -1 * account.lastBlue;
            account.lastRed = -1 * account.lastRed;
            account.lastChartBlue = this.data[this.data.length - 1]?.blue?.accounts?.find(ac => ac.accountNumber == account.accountNumber)?.value?? 0;
            account.lastChartRed = this.data[this.data.length - 1]?.red?.accounts?.find(ac => ac.accountNumber == account.accountNumber)?.value?? 0;
            account.lastChartGreen = this.data[this.data.length - 1]?.green?.accounts?.find(ac => ac.accountNumber == account.accountNumber)?.value?? 0;
          });

          // get top 10
          this.accounts.sort((a, b) => Math.abs(b.blue) - Math.abs(a.blue));
          this.top10Blue = this.accounts.slice(0, 10);
          this.accounts.sort((a, b) => Math.abs(b.red) - Math.abs(a.red));
          this.top10Red = this.accounts.slice(0, 10);
          this.accounts.sort((a, b) => Math.abs(b.green) - Math.abs(a.green));
          this.top10Green = this.accounts.slice(0, 10);
          // debugger;

          this.basicData = {
            labels: this.labels,
            datasets: new Array(),
          };

          this.basicData.datasets.push(
            {
              label: this.blue,
              backgroundColor: `rgb(100,100,255)`,
              data: this.blueData,
            },
            {
              label: this.red,
              backgroundColor: `rgb(255,100,100)`,
              data: this.RedData,
            },
            {
              label: this.green,
              backgroundColor: `rgb(100,255,100)`,
              data: this.GreenData,
            }
          );

          this.specificAccountData = {
            labels: this.labels,
            datasets: new Array(),
          };

          this.specificAccountData.datasets.push(
            {
              label: this.blue,
              backgroundColor: `rgb(100,100,255)`,
              data: this.specificAccountBlueData,
            },
            {
              label: this.red,
              backgroundColor: `rgb(255,100,100)`,
              data: this.specificAccountRedData,
            },
            {
              label: this.green,
              backgroundColor: `rgb(100,255,100)`,
              data: this.specificAccountGreenData,
            }
          );

          this.ready = true;
          this.waiting = false;
          this.tempData = [...this.accounts];
          if (this.allChart) this.allChart.reinit();
        },
        (er) => {
          this.waiting = false;
        });
  }

  handleSliderChange(e) {
    let start = e.values[0];
    let end = e.values[1];
    // calculate fromDate: start + baseFromDate
    let tempStart = new Date(this.mindate);
    tempStart.setDate(tempStart.getDate() + start);
    this.fromDate = new Date(tempStart);
    // calculate toDate: baseToDate - end
    let tempEnd = new Date(this.maxDate);
    tempEnd.setDate(tempEnd.getDate() - (this.maxRange - +end));
    this.toDate = new Date(tempEnd);
  }

  goToDetails(row: any) {
    this._router.navigate([
      '/dashboard/analysis/payment/' +
      this.selectedOrganisation +
      '/' +
      this.selectedProcedure +
      '/' +
      row.accountNumber,
    ]);
  }

  goToDueDate() {
    this._router.navigate(['/dashboard/analysis/due-date']);
  }

  filterChange(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query || !query?.toString()?.trim()) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.accounts = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.accounts = this.tempData.filter(
                (value) => value[key]?.toLowerCase() == element.toLowerCase()
              );
            } else {
              this.accounts = this.tempData.filter((value) =>
                value[key]?.toLowerCase().includes(element.toLowerCase())
              );
            }
          }
        }
      }
    } else {
      this.accounts = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (element.length < 3) {
            this.accounts = this.accounts.filter(
              (value) =>
                value[key]?.toString().toLowerCase() == element.toLowerCase()
            );
          } else {
            this.accounts = this.accounts.filter((value) =>
              value[key]
                ?.toString()
                .toLowerCase()
                .includes(element.toLowerCase())
            );
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }

  onRowSelect(event): void {
    // debugger;
    // this.waiting = true;
    this.selectedMaxAccountNumber = event.data.accountNumber;
    this.selectedMaxAccountName = event.data.accountName;

    // for each month
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      // for each account
      if (element.blue.accounts) {
        let total = 0;
        element.blue.accounts.forEach((b) => {
          // if the account is selected account add the value to the total
          if (b.accountNumber == this.selectedMaxAccountNumber) {
            total += b.value;
          }
        }); // end of for each account
        this.specificAccountBlueData[i] = -1 * total;
      }
      if (element.red.accounts) {
        let total = 0;
        element.red.accounts.forEach((r) => {
          // if the account is selected account add the value to the total
          if (r.accountNumber == this.selectedMaxAccountNumber) {
            total += r.value;
          }
        }); // end of for each account
        this.specificAccountRedData[i] = -1 * total;
      }
      if (element.green.accounts) {
        let total = 0;
        element.green.accounts.forEach((g) => {
          // if the account is selected account add the value to the total
          if (g.accountNumber == this.selectedMaxAccountNumber) {
            total += g.value;
          }
        }); // end of for each account
        this.specificAccountGreenData[i] = total;
      }
    }
    this.chart.refresh();
    // this.waiting = false;
    // this.chart.reinit();
  }

  onRowUnselect(event) {
    this.selectedMaxAccountNumber = null;
  }
}
