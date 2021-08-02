import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LiquidityService } from '../../service/liquidity.service';
import { CurrencyPipe } from '@angular/common';
import { TableColumn } from '../../model/tableColumn';

@Component({
  selector: 'app-free-liquidity',
  templateUrl: './free-liquidity.component.html',
  styleUrls: ['./free-liquidity.component.sass']
})
export class FreeLiquidityComponent implements OnInit {

  basicOptions: any;
  basicData: any;
  accounts: any[] = new Array();
  labels: any[] = new Array();
  procedureName: string = "";
  items: MenuItem[];
  home: MenuItem;
  orgId: number;
  prcId: number;
  cols: TableColumn[] = new Array();
  criteria: any = {};
  tempData: any[];
  searching: boolean;

  constructor(private _liquidityService: LiquidityService, private _messageService: MessageService,
    private _router: Router) { }

  ngOnInit(): void {


    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');


    this.items = [
      { label: 'Free Liquidity', routerLink: '/liquidity/freeLiquidity' }
    ];

    this.home = { icon: 'pi pi-home', label: ' Data', routerLink: '/shared/data' };
    this.basicOptions = {
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            let value = tooltipItem.value;
            let currencyPipe = new CurrencyPipe('de');
            value = currencyPipe.transform(value, 'EURO', '');

            let label = data.datasets[tooltipItem.datasetIndex].label || '';
            return label + ': ' + value;
          }
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            minRotation: 40,
            maxRotation: 90,
          }
        }],
        yAxes: [{
          ticks: {
            minRotation: 0,
            maxRotation: 0,
            callback: function (label, index, values) {
              // debugger;
              let currencyPipe = new CurrencyPipe('de');
              label = currencyPipe.transform(label, 'EURO', '');
              return label;
            }
          }
        }],
      }
    };

    this.cols = [
      {
        header: 'Account Number',
        field: 'accountNumber',
        align: "left"
      },
      {
        header: 'Account Name',
        field: 'accountName',
        align: "left"

      },
      {
        header: 'Count',
        field: 'count',
        align: "center"

      }
    ];


    this.getData();
    


  } // end of ng on init

  getData() {
    this.searching = true;
    this._liquidityService.getFreeLiquidity(this.orgId, this.prcId)
      .subscribe(res => {
        this.accounts = res.bankBalances.accounts;
        this.tempData = res.bankBalances.accounts;
        this.basicData = {
          labels: res.bankBalances.labels,
          datasets: [{
            type: 'line',
            label: 'Credit Lines',
            borderColor: '#42A5F5',
            borderWidth: 2,
            fill: false,
            data: res.creditLines
          }, {
            type: 'line',
            label: 'Free Liquidity',
            fill: false,
            data: res.freeLiquidity,
            borderColor: '#E5A58B',
            borderWidth: 2
          }, {
            type: 'bar',
            label: 'Bank Balances',
            backgroundColor: '#88FF88',
            borderColor: '#58dF58',
            data: res.bankBalances.bankBalances
          }]
        };
        this.searching = false;
      }, er => {

      });

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
              this.accounts = this.tempData.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
            } else {
              this.accounts = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
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
            this.accounts = this.accounts.filter(value => value[key]?.toString().toLowerCase() == element.toLowerCase());
          } else {
            this.accounts = this.accounts.filter(value => value[key]?.toString().toLowerCase().includes(element.toLowerCase()));
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }


  goToDetails(row: any) {
    this._router.navigate(['liquidity/freeLiquidity/details/' + row.accountNumber]);
  }


}
