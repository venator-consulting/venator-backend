import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { LiquidityService } from '../../service/liquidity.service';
import { CurrencyPipe } from '@angular/common';
import { TableColumn } from '../../model/tableColumn';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-free-liquidity',
  templateUrl: './free-liquidity.component.html',
  styleUrls: ['./free-liquidity.component.sass'],
})
export class FreeLiquidityComponent implements OnInit {
  basicOptions: any;
  basicData: any;
  accounts: any[] = new Array();
  labels: any[] = new Array();
  allAccountsDataBankBalances: any[] = new Array();
  allAccountsDataCreditLines: any[] = new Array();
  selectedDateData: any[] = new Array();
  selectedDate: string;
  procedureName: string = '';
  items: MenuItem[];
  home: MenuItem;
  orgId: number;
  prcId: number;
  cols: TableColumn[] = new Array();
  selectedDateCols: TableColumn[] = new Array();
  criteria: any = {};
  tempData: any[];
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

  constructor(
    public _translateService: TranslateService,
    private _liquidityService: LiquidityService,
    private _messageService: MessageService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
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
        { label: elem.freeLiquidity, routerLink: '/dashboard/liquidity/freeLiquidity' },
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

    this.cols = [
      {
        header: 'Liquidity.accountNumber',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'Liquidity.accountName',
        field: 'accountName',
        align: 'left',
      },

    ];

    this.selectedDateCols = [
      {
        header: 'Liquidity.accountNumber',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'Liquidity.accountName',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'Liquidity.bankBalance',
        field: 'bankBalance',
        align: 'right',
      },
      {
        header: 'Liquidity.creditLine',
        field: 'creditLine',
        align: 'right',
      },
      {
        header: 'Liquidity.freeLiquidity',
        field: 'freeLiaquidity',
        align: 'right',
      },
    ];

    this.getData();
    // this.dateRangeChanges();
  } // end of ng on init

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

  getData() {
    this.searching = true;
    // debugger;
    let start = this.fromDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    let baseBankBalance = 0;
    // if(this.bankBalances.length > 0) {
    //   let startTemplateAsLabels = this.fromDate?.toLocaleDateString("de-DE", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //   });
    //   let baseBankBalanceIndex = this.labels.findIndex(label => label == startTemplateAsLabels);
    //   baseBankBalance = this.bankBalances[baseBankBalanceIndex];
    // }
    
    this._liquidityService.getFreeLiquidity(this.orgId, this.prcId, start, end, baseBankBalance).subscribe(
      (res) => {
        if (!this.baseFromDate) this.baseFromDate = new Date(res.fromDate);
        if (!this.baseToDate) this.baseToDate = new Date(res.toDate);
        if (!this.fromDate) this.fromDate = new Date(res.fromDate);
        if (!this.toDate) this.toDate = new Date(res.toDate);
        if (!this.rangeValues) this.rangeValues = [0, this.dayDiff(this.fromDate, this.toDate)];
        if (!this.maxRange) this.maxRange = this.dayDiff(this.fromDate, this.toDate);
        this.accounts = res.bankBalances.accounts;
        this.tempData = res.bankBalances.accounts;
        this.labels = res.bankBalances.labels;
        this.bankBalances = res.bankBalances.bankBalances;
        this.basicData = {
          labels: res.bankBalances.labels,
          datasets: [
            {
              type: 'line',
              label: 'Credit Line',
              borderColor: '#42A5F5',
              borderWidth: 2,
              fill: false,
              data: res.creditLines.creditLines,
            },
            {
              type: 'line',
              label: 'Free Liquidity',
              fill: false,
              data: res.freeLiquidity,
              borderColor: '#E5A58B',
              borderWidth: 2,
            },
            {
              type: 'bar',
              label: 'Bank Balance',
              backgroundColor: '#88FF88',
              borderColor: '#58dF58',
              data: this.bankBalances,
            },
          ],
        };
        this.searching = false;
        this.allAccountsDataBankBalances = res.bankBalances.data;
        this.allAccountsDataCreditLines = res.creditLines.accounts;
      },
      (er) => {
        this.searching = false;
      }
    );
  }

  // on clock on a bar in the chart
  selectBarData(e) {
    this.searching = true;
    this.selectedDateData = new Array();
    // console.log(e.element._index);
    // console.log(e.element._model.label);
    // this.selectedDate = e?.element?._model?.label;
    let index = e?.element?._index;
    this.selectedDate = this.labels[index];
    // debugger;
    for (const key in this.allAccountsDataBankBalances) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.allAccountsDataBankBalances,
          key
        )
      ) {
        const element = this.allAccountsDataBankBalances[key];
        const creditLine =
          this.allAccountsDataCreditLines[key] &&
            this.allAccountsDataCreditLines[key][index]
            ? this.allAccountsDataCreditLines[key][index]
            : 0;
        let accountNumber = parseInt(key);
        this.selectedDateData.push({
          accountNumber: isNaN(accountNumber) ? key : accountNumber,
          bankBalance: element[index] ? element[index] : 0,
          creditLine: creditLine,
          accountName: this.accounts.filter(
            (account) => account.accountNumber == key
          )[0]?.accountName,
        });
      }
    }
    // this.selectedDateData = [...this.selectedDateData];
    this.calculateTotals();
    this.searching = false;
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

  goToDetails(row: any) {
    this._router.navigate([
      '/dashboard/liquidity/freeLiquidity/details/' + row.accountNumber + '/' +
      this.baseFromDate.toISOString().split('T')[0] + '/' +
      this.baseToDate.toISOString().split('T')[0] + '/' +
      this.fromDate.toISOString().split('T')[0] + '/' +
      this.toDate.toISOString().split('T')[0],
    ]);
  }

  calculateTotals() {
    this.creditLinesTotal = 0;
    this.bankBalancesTotal = 0;
    this.freeLiquidityTotal = 0;
    for (let data of this.selectedDateData) {
      this.bankBalancesTotal += data.bankBalance;
      this.creditLinesTotal += data.creditLine;
      this.freeLiquidityTotal += data.bankBalance + data.creditLine;
    }
  }
}
