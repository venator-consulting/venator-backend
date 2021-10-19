import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { LiquidityService } from 'src/app/shared/service/liquidity.service';
import { TranslateService } from '@ngx-translate/core';

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
  /// for slider
  baseFromDate: Date;
  baseToDate: Date;
  maxRange: number;
  fromDate: Date;
  toDate: Date;
  rangeValues: number[];

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
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');
    let baseFromDateTemp = this._route.snapshot.paramMap.get('baseFromDate');
    this.baseFromDate = new Date(baseFromDateTemp);
    let baseToDateTemp = this._route.snapshot.paramMap.get('baseToDate');
    this.baseToDate = new Date(baseToDateTemp);
    let fromDateTemp = this._route.snapshot.paramMap.get('fromDate');
    this.fromDate = new Date(fromDateTemp);
    let toDateTemp = this._route.snapshot.paramMap.get('toDate');
    this.toDate = new Date(toDateTemp);
    this.maxRange = this.dayDiff(this.baseFromDate, this.baseToDate);
    this.rangeValues = [
      this.dayDiff(this.baseFromDate, this.fromDate),
      this.dayDiff(this.baseFromDate, this.toDate)
    ];
    this._translateService.get('Liquidity').subscribe((elem) => {

      this.items = [
        {
          label: elem.freeLiquidity,
          routerLink: '/dashboard/liquidity/freeLiquidity/' +
            baseFromDateTemp + '/' + baseToDateTemp + '/' +
            fromDateTemp + '/' + toDateTemp,
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
    let start = this.fromDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    this._liquidityService
      .getFreeLiquidityDetails(this.orgId, this.prcId, this.accountNumber, start, end)
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
    if (!query || !query?.toString()?.trim()) {
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
