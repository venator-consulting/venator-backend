import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';
import { LiquidityService } from '../../service/liquidity.service';

@Component({
  selector: 'app-free-liquidity',
  templateUrl: './free-liquidity.component.html',
  styleUrls: ['./free-liquidity.component.sass']
})
export class FreeLiquidityComponent implements OnInit {

  basicOptions: any;
  basicData: any;
  labels: any[] = new Array();
  procedureName: string = "";
  items: MenuItem[];
  home: MenuItem;
  orgId: number;
  prcId: number;

  constructor(private _liquidityService: LiquidityService) { }

  ngOnInit(): void {


    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    
    this.items = [
      { label: 'Free Liquidity', routerLink: '/liquidity/freeLiquidity' }
    ];

    this.home = { icon: 'pi pi-home', label: ' Data', routerLink: '/shared/data' };
    this.basicOptions = {
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
            stepSize: 50
          }
        }],
      }
    };

    this.getData();
    


  } // end of ng on init

  getData() {
    this._liquidityService.getFreeLiquidity(this.orgId, this.prcId)
      .subscribe(res => {
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
            backgroundColor: '#F5B59B',
            data: res.freeLiquidity,
            borderColor: '#E5A58B',
            borderWidth: 2
          }, {
            type: 'bar',
            label: 'Bank Balances',
            backgroundColor: '#FFD795',
            borderColor: '#EFC785',
            data: res.bankBalances.bankBalances
          }]
        };
      }, er => {

      });

  }

}
