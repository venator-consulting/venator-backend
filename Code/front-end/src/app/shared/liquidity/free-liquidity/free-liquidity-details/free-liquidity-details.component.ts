import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { LiquidityService } from 'src/app/shared/service/liquidity.service';

@Component({
  selector: 'app-free-liquidity-details',
  templateUrl: './free-liquidity-details.component.html',
  styleUrls: ['./free-liquidity-details.component.sass']
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


  constructor(private _liquidityService: LiquidityService, private _messageService: MessageService,
    private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {


    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this.items = [
      { label: 'Free Liquidity', routerLink: '/liquidity/freeLiquidity', routerLinkActiveOptions: { exact: true } },
      { label: 'Details', routerLink: this._router.url, routerLinkActiveOptions: { exact: true } }
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

    this.getData();

  } // end of ng on init


  getData() {

    this._liquidityService.getFreeLiquidityDetails(this.orgId, this.prcId, this.accountNumber)
      .subscribe(res => {
        this.accountName = res.bankBalances.accountName;
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


      }, er => {

      });

  } // end of ng on init



}
