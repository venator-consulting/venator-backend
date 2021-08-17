import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { LiquidityService } from 'src/app/shared/service/liquidity.service';

@Component({
  selector: 'app-free-liquidity-details',
  templateUrl: './free-liquidity-details.component.html',
  styleUrls: ['./free-liquidity-details.component.sass'],
})
export class FreeLiquidityDetailsComponent implements OnInit {
  accountNumber: string;
  accountName: string;
  orgId: number;
  prcId: number;
  procedureName: string;
  basicOptions: any;
  basicData: any;
  labels: any[] = new Array();
  items: MenuItem[];
  home: MenuItem;
  selectedDateData: any[];
  selectedDate: string;
  cols: TableColumn[];
  tempData: any;
  searching: boolean = true;
  criteria: any = {};
  creditLinesTotal: number;
  bankBalancesTotal: number;
  freeLiquidityTotal: number;

  constructor(
    private _liquidityService: LiquidityService,
    private _messageService: MessageService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this.items = [
      {
        label: 'Free Liquidity',
        routerLink: '/dashboard/liquidity/freeLiquidity',
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

    this.getData();

    this.cols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber',
        align: 'center',
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
        align: 'center',
      },
      {
        header: 'DataTableColumns.contraAccountName',
        field: 'contraAccountName',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentTypeNew',
        field: 'documentTypeNew',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentNumber',
        field: 'documentNumber',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.recordNumber',
        field: 'recordNumber',
        align: 'center',
      },
      {
        header: 'DataTableColumns.ledgerId',
        field: 'ledgerId',
        align: 'center',
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
    ];
  } // end of ng on init

  getData() {
    this.searching = true;
    this._liquidityService
      .getFreeLiquidityDetails(this.orgId, this.prcId, this.accountNumber)
      .subscribe(
        (res) => {
          this.accountName = res.bankBalances.accountName;
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
                data: res.creditLines,
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
        },
        (er) => {
          this.searching = false;
        }
      );
  } // end of ng on init

  // on clock on a bar in the chart
  selectBarData(e) {
    this.searching = true;
    this.selectedDateData = new Array();
    let index = e?.element?._index;
    this.selectedDate = this.labels[index];
    let tempDate =
      this.selectedDate.slice(this.selectedDate.length - 4) +
      '-' +
      this.selectedDate.slice(3, 5) +
      '-' +
      this.selectedDate.slice(0, 2);
    // debugger;
    this._liquidityService
      .getFreeLiquidityDetailsRecords(
        this.orgId,
        this.prcId,
        this.accountNumber,
        tempDate
      )
      .subscribe(
        (res) => {
          this.selectedDateData = res;
          this.tempData = res;
          this.searching = false;
        },
        (er) => {
          this.searching = false;
        }
      );
    // this.calculateTotals();
  }

  // calculateTotals() {
  //   this.creditLinesTotal = 0;
  //   this.bankBalancesTotal = 0;
  //   this.freeLiquidityTotal = 0;
  //   for(let data of this.selectedDateData) {
  //     this.bankBalancesTotal += data.bankBalance;
  //     this.creditLinesTotal += data.creditLine;
  //     this.freeLiquidityTotal += data.bankBalance + data.creditLine;
  // }
  // }

  filterChange(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.selectedDateData = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.selectedDateData = this.tempData.filter(
                (value) => value[key]?.toLowerCase() == element.toLowerCase()
              );
            } else {
              this.selectedDateData = this.tempData.filter((value) =>
                value[key]?.toLowerCase().includes(element.toLowerCase())
              );
            }
          }
        }
      }
    } else {
      this.selectedDateData = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (element.length < 3) {
            this.selectedDateData = this.selectedDateData.filter(
              (value) =>
                value[key]?.toString().toLowerCase() == element.toLowerCase()
            );
          } else {
            this.selectedDateData = this.selectedDateData.filter((value) =>
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
}
