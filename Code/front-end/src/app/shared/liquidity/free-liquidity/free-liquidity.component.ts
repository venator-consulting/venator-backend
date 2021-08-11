import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LiquidityService } from '../../service/liquidity.service';
import { CurrencyPipe } from '@angular/common';
import { TableColumn } from '../../model/tableColumn';

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

  constructor(
    private _liquidityService: LiquidityService,
    private _messageService: MessageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.items = [
      { label: 'Free Liquidity', routerLink: '/dashboard/liquidity/freeLiquidity' },
    ];

    this.home = {
      icon: 'pi pi-home',
      label: ' Data',
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

    this.cols = [
      {
        header: 'Account Number',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'Account Name',
        field: 'accountName',
        align: 'left',
      },
      // {
      //   header: 'Count',
      //   field: 'count',
      //   align: 'center',
      // },
    ];

    this.selectedDateCols = [
      {
        header: 'Account Number',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'Account Name',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'Bank Balance',
        field: 'bankBalance',
        align: 'right',
      },
      {
        header: 'Credit Line',
        field: 'creditLine',
        align: 'right',
      },
      {
        header: 'Free Liquidity',
        field: 'freeLiaquidity',
        align: 'right'
      }
    ];

    this.getData();
  } // end of ng on init

  getData() {
    this.searching = true;
    this._liquidityService.getFreeLiquidity(this.orgId, this.prcId).subscribe(
      (res) => {
        this.accounts = res.bankBalances.accounts;
        this.tempData = res.bankBalances.accounts;
        this.labels = res.bankBalances.labels;
        this.basicData = {
          labels: res.bankBalances.labels,
          datasets: [
            {
              type: 'line',
              label: 'Credit Lines',
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
              label: 'Bank Balances',
              backgroundColor: '#88FF88',
              borderColor: '#58dF58',
              data: res.bankBalances.bankBalances,
            },
          ],
        };
        this.searching = false;
        this.allAccountsDataBankBalances = res.bankBalances.data;
        this.allAccountsDataCreditLines = res.creditLines.accounts;
      },
      (er) => {}
    );
  }

  // on clock on a bar in the chart
  selectBarData(e) {
    this.selectedDateData = new Array();
    // console.log(e.element._index);
    // console.log(e.element._model.label);
    // this.selectedDate = e?.element?._model?.label;
    let index = e?.element?._index;
    this.selectedDate = this.labels[index];
    // debugger;
    for (const key in this.allAccountsDataBankBalances) {
      if (Object.prototype.hasOwnProperty.call(this.allAccountsDataBankBalances, key)) {
        const element = this.allAccountsDataBankBalances[key];
        const creditLine = (this.allAccountsDataCreditLines[key] && this.allAccountsDataCreditLines[key][index]) ? this.allAccountsDataCreditLines[key][index] : 0;
        let accountNumber = parseInt(key);
        this.selectedDateData.push({
          accountNumber: isNaN(accountNumber)? key: accountNumber,
          bankBalance: element[index]? element[index] : 0,
          creditLine: creditLine,
          accountName: this.accounts.filter(account => account.accountNumber == key)[0]?.accountName
        });
      }
    }
    // this.selectedDateData = [...this.selectedDateData];
    this.calculateTotals();
  }

  filterChange(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query) {
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
      '/dashboard/liquidity/freeLiquidity/details/' + row.accountNumber,
    ]);
  }

  calculateTotals() {
    this.creditLinesTotal = 0;
    this.bankBalancesTotal = 0;
    this.freeLiquidityTotal = 0;
    for(let data of this.selectedDateData) {
      this.bankBalancesTotal += data.bankBalance;
      this.creditLinesTotal += data.creditLine;
      this.freeLiquidityTotal += data.bankBalance + data.creditLine;
  }
  }


}
