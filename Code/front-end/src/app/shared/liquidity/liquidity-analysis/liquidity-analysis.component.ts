import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from '../../service/analysis.service';
import { LiquidityService } from '../../service/liquidity.service';
import { PaymentData } from "../../model/paymentAnalysis";

@Component({
  selector: 'app-liquidity-analysis',
  templateUrl: './liquidity-analysis.component.html',
  styleUrls: ['./liquidity-analysis.component.sass']
})
export class LiquidityAnalysisComponent implements OnInit {

  @Input('details') details: boolean = false;

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
  // waiting for liquidity data
  searching: boolean;
  // waiting for red data
  searching2: boolean;
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
  data: PaymentData[];
  RedData: any[] = [];
  freeLiquidityData: any[] = [];
  red: any[] = [];
  @ViewChild('liquidityChart') liquidityChart;

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

  dateRangeChanges() {
    this.getData();
    this.getPayments()
  }

  handleSliderChange(e) {
    let start = e.values[0];
    let end = e.values[1];
    // calculate fromDate: start + baseFromDate
    let tempStart = new Date(this.baseFromDate);
    tempStart.setDate(tempStart.getDate() + start);
    this.fromDate = new Date(tempStart);
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

  getPayments() {
    this.searching2 = true;
    let start = this.fromDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    this._analysisService
      .getPaymentAnalysisForLiquidity(this.orgId, this.prcId, start, end)
      .subscribe(
        async (res) => {
          this.data = res.data.res;
          this.RedData = this.data.map(value => (-1 * +value.red.value));
          // debugger;
          // for (let i = 0; i < this.data.length; i++) {
          //   const element = this.data[i];
          //   // this.labels.push(element.monthName + '-' + element.yearName);
          //   this.RedData.push(-1 * element.red.value);
          // }
          debugger;
          if (this.liquidityChart && !this.searching) {
            this.basicData = {
              labels: this.labels,
              datasets: [
                {
                  type: 'line',
                  label: await this._translateService.get('PaymentAnalysis.red').toPromise(),
                  borderColor: '#E5A58B',
                  borderWidth: 2,
                  fill: false,
                  data: this.RedData,
                },
                {
                  type: 'line',
                  label: await this._translateService.get('Liquidity.freeLiquidity').toPromise(),
                  fill: false,
                  data: this.freeLiquidityData,
                  borderColor: '#85fa8B',
                  borderWidth: 2,
                }
              ],
            };
            // this.liquidityChart.reinit();
          }
          this.searching2 = false;
        },
        (er) => {
          this.searching2 = false;
        });
  }

  getData() {
    this.searching = true;
    // debugger;
    let start = this.fromDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    let baseBankBalance = 0;

    this._liquidityService.getFreeLiquidity(this.orgId, this.prcId, start, end, baseBankBalance).subscribe(
      async (res) => {
        if (!this.baseFromDate) this.baseFromDate = new Date(res.fromDate);
        if (!this.baseToDate) this.baseToDate = new Date(res.toDate);
        if (!this.fromDate) this.fromDate = new Date(res.fromDate);
        if (!this.toDate) this.toDate = new Date(res.toDate);
        if (!this.rangeValues) this.rangeValues = [0, this.dayDiff(this.fromDate, this.toDate)];
        if (!this.maxRange) this.maxRange = this.dayDiff(this.fromDate, this.toDate);
        this.labels = res.bankBalances.labels;
        this.freeLiquidityData = res.freeLiquidity;
        // this.getPayments();
        if (this.liquidityChart && !this.searching2) {
          this.basicData = {
            labels: this.labels,
            datasets: [
              {
                type: 'line',
                label: await this._translateService.get('PaymentAnalysis.red').toPromise(),
                borderColor: '#E5A58B',
                borderWidth: 2,
                fill: false,
                data: this.RedData,
              },
              {
                type: 'line',
                label: await this._translateService.get('Liquidity.freeLiquidity').toPromise(),
                fill: false,
                data: this.freeLiquidityData,
                borderColor: '#85fa8B',
                borderWidth: 2,
              }
            ],
          };
        }
        this.searching = false;
      },
      (er) => {
        this.searching = false;
      }
    );
  }
}
