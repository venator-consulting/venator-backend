import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from '../../service/analysis.service';
import { LiquidityService } from '../../service/liquidity.service';

@Component({
  selector: 'app-liquidity-analysis',
  templateUrl: './liquidity-analysis.component.html',
  styleUrls: ['./liquidity-analysis.component.sass']
})
export class LiquidityAnalysisComponent implements OnInit {

  basicOptions: any;
  basicData: any;
  accounts: any[] = new Array();
  labels: any[] = new Array();
  allAccountsDataBankBalances: any[] = new Array();
  allAccountsDataCreditLines: any[] = new Array();
  selectedDateData: any[] = new Array();
  selectedDate: string;
  items: MenuItem[];
  home: MenuItem;
  orgId: number;
  prcId: number;
  searching: boolean;
  bankBalancesTotal: number = 0;
  creditLinesTotal: number = 0;
  freeLiquidityTotal: number = 0;
  baseFromDate: Date;
  baseToDate: Date;
  maxRange: number;
  fromDate: Date;
  toDate: Date;
  rangeValues: number[];
  bankBalances: number[] = [];
  data: import("/home/ibra/Projects/venator/venator-backend/Code/front-end/src/app/shared/model/paymentAnalysis").PaymentData[];
  RedData: any[] = [];
  red: any[] = [];
  @ViewChild('chart') chart;

  constructor(
    public _translateService: TranslateService,
    private _liquidityService: LiquidityService,
    private _analysisService: AnalysisService,
    private _messageService: MessageService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    let baseFromDateTemp = this._route.snapshot.paramMap.get('baseFromDate');
    if (baseFromDateTemp?.trim()) this.baseFromDate = new Date(baseFromDateTemp);
    let baseToDateTemp = this._route.snapshot.paramMap.get('baseToDate');
    if (baseToDateTemp?.trim()) this.baseToDate = new Date(baseToDateTemp);
    let fromDateTemp = this._route.snapshot.paramMap.get('fromDate');
    if (fromDateTemp?.trim()) this.fromDate = new Date(fromDateTemp);
    let toDateTemp = this._route.snapshot.paramMap.get('toDate');
    if (toDateTemp?.trim()) this.toDate = new Date(toDateTemp);
    if (this.baseFromDate && this.baseToDate && this.fromDate && this.toDate) {
      this.maxRange = this.dayDiff(this.baseFromDate, this.baseToDate);
      this.rangeValues = [
        this.dayDiff(this.baseFromDate, this.fromDate),
        this.dayDiff(this.baseFromDate, this.toDate)
      ];
    }

    this._translateService.get('Liquidity').subscribe((elem) => {
      this.items = [
        { label: elem.liquidityAnalysis, routerLink: '/dashboard/liquidity/liquidityAnalysis' },
      ];
      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
    })



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

    this.getData();
    this.getPayments();
  } // end of ng on init

  dayDiff(d1: Date, d2: Date) {
    var diff = Math.abs(d1.getTime() - d2.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }

  getPayments() {
    this.searching = true;
    let start = this.fromDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    this._analysisService
      .getPaymentAnalysisForLiquidity(this.orgId, this.prcId, start, end)
      .subscribe(
        (res) => {
          this.data = res.data.res;
          for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            // this.labels.push(element.monthName + '-' + element.yearName);
            this.RedData.push(-1 * element.red.value);
          }

          // this.basicData = {
          //   labels: this.labels,
          //   datasets: new Array(),
          // };

          // this.basicData.datasets.push(

          //   {
          //     label: this.red,
          //     backgroundColor: `rgb(255,100,100)`,
          //     data: this.RedData,
          //   }
          // );
          // this.searching = false;
          if (this.chart) this.chart.reinit();
        },
        (er) => {
          this.searching = false;
        });
  }

  getData() {
    this.searching = true;
    // debugger;
    let start = this.fromDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    let baseBankBalance = 0;

    this._liquidityService.getFreeLiquidity(this.orgId, this.prcId, start, end, baseBankBalance).subscribe(
      (res) => {
        if (!this.baseFromDate) this.baseFromDate = new Date(res.fromDate);
        if (!this.baseToDate) this.baseToDate = new Date(res.toDate);
        if (!this.fromDate) this.fromDate = new Date(res.fromDate);
        if (!this.toDate) this.toDate = new Date(res.toDate);
        if (!this.rangeValues) this.rangeValues = [0, this.dayDiff(this.fromDate, this.toDate)];
        if (!this.maxRange) this.maxRange = this.dayDiff(this.fromDate, this.toDate);
        this.labels = res.bankBalances.labels;
        this.basicData = {
          labels: res.bankBalances.labels,
          datasets: [
            {
              type: 'line',
              label: 'Unpaid invoices',
              borderColor: '#42A5F5',
              borderWidth: 2,
              fill: false,
              data: this.RedData,
            },
            {
              type: 'line',
              label: 'Free Liquidity',
              fill: false,
              data: res.freeLiquidity,
              borderColor: '#E5A58B',
              borderWidth: 2,
            }
          ],
        };
        this.searching = false;
      },
      (er) => {
        this.searching = false;
      }
    );
  }
}
