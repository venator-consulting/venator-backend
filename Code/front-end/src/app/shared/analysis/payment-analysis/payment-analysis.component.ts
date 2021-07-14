import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalysisService } from '../../service/analysis.service';
import { Router } from '@angular/router';
import { PaymentAnalysis, PaymentData } from '../../model/paymentAnalysis';
import { MenuItem, MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { CurrencyPipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-payment-analysis',
  templateUrl: './payment-analysis.component.html',
  styleUrls: ['./payment-analysis.component.sass']
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
  startDate: Date = new Date();
  endDate: Date = new Date();
  procedureName: string;
  top10Red: any[];
  top10Green: any[];
  top10: number;
  paymentOptions: { name: string; value: number; color: string }[];
  top10Cols: { header: string; field: string; }[];
  accountsCols: { header: string; field: string; }[];
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  selectedMaxAccountNumber: string;
  selectedMaxAccount: any;
  @ViewChild('chart') chart: any;
  selectedMaxAccountName: string;
  items: MenuItem[];
  home: MenuItem;
  blue: string ;
  red: string ;
  green: string ;


  constructor(public _translateService: TranslateService, private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router,
    private prcService: ProcedureService) { 

    }

  ngOnInit(): void {

    this._translateService.get('PaymentAnalysis').subscribe( elem => {
      this.blue = elem.blue;
      this.red = elem.red ; 
      this.green = elem.green;

      this.items = [
        { label: elem.label, routerLink: '/analysis/payment' }
      ];
  
      this.home = { icon: 'pi pi-home',  label: elem.data, routerLink: '/shared/data' };

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
                debugger;
                let currencyPipe = new CurrencyPipe('de');
                label = currencyPipe.transform(label, 'EURO', '');
                return label;
              }
            }
          }],
        }
      };
  
      this.top10 = 1;
  
      this.paymentOptions = [
        { name: this.blue, value: 1, color: 'rgb(100,100,255)' },
        { name: this.red, value: 2, color: 'rgb(255,100,100)' },
        { name: this.green, value: 3, color: 'rgb(100,255,100)' }
      ];
  
      this.top10Cols = [
        {
          header: 'PaymentAnalysis.accountNumber',
          field: 'accountNumber'
        },
        {
          header: 'PaymentAnalysis.accountName',
          field: 'accountName'
        },
        {
          header: 'PaymentAnalysis.sum',
          field: 'value'
        },
      ];
  
      this.accountsCols = [
        {
          header: 'PaymentAnalysis.accountNumber',
          field: 'accountNumber'
        },
        {
          header: 'PaymentAnalysis.accountName',
          field: 'accountName'
        },
        {
          header: 'PaymentAnalysis.blue',
          field: 'blue'
        },
        {
          header: 'PaymentAnalysis.red',
          field: 'red'
        },
        {
          header: 'PaymentAnalysis.green',
          field: 'green'
        },
      ];
  
      this.basicData = {
        labels: this.labels,
        datasets: new Array()
      };
  
      this.basicData.datasets.push({
        label: this.blue ,
        backgroundColor: `rgb(100,100,255)`,
        data: this.blueData
      },
        {
          label: this.red,
          backgroundColor: `rgb(255,100,100)`,
          data: this.RedData
        },
        {
          label: this.green,
          backgroundColor: `rgb(100,255,100)`,
          data: this.GreenData
        });
  
      this.specificAccountData = {
        labels: this.labels,
        datasets: new Array()
      };
  
      this.specificAccountData.datasets.push({
        label: this.blue,
        backgroundColor: `rgb(100,100,255)`,
        data: this.specificAccountBlueData
      },
        {
          label: this.red,
          backgroundColor: `rgb(255,100,100)`,
          data: this.specificAccountRedData
        },
        {
          label: this.green,
          backgroundColor: `rgb(100,255,100)`,
          data: this.specificAccountGreenData
        });
    })



    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this._analysisService
      .getPaymentAnalysis(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        this.data = res.data.res;
        this.accounts = res.data.accounts;
        this.startDate = res.dateRange[0].mindate;
        this.endDate = res.dateRange[0].maxdate;

        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];

          this.labels.push(element.monthName + '-' + element.yearName);
          this.blueData.push(Math.abs(element.blue.value));
          this.GreenData.push(Math.abs(element.green.value));
          this.RedData.push(Math.abs(element.red.value));
        }

        // get top 10
        this.accounts.sort((a, b) => Math.abs(b.blue) - Math.abs(a.blue));
        this.top10Blue = this.accounts.slice(0, 10);
        this.accounts.sort((a, b) => Math.abs(b.red) - Math.abs(a.red));
        this.top10Red = this.accounts.slice(0, 10);
        this.accounts.sort((a, b) => Math.abs(b.green) - Math.abs(a.green));
        this.top10Green = this.accounts.slice(0, 10);
        // debugger;
        this.ready = true;
        this.tempData = [...this.accounts];
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });

    // if (this.selectedProcedure && +this.selectedProcedure > 0) {
    //   this.prcService
    //     .getById(+this.selectedProcedure)
    //     .subscribe(prc => {
    //       this.procedureName = prc && prc.length > 0 ? prc[0].name : "";
    //     }, er => { });
    // }
  } // end of init function


  goToDetails(row: any) {
    this._router.navigate(['/analysis/payment/' + this.selectedOrganisation + '/' + this.selectedProcedure + '/' + row.accountNumber]);
  }

  goToDueDate() {
    this._router.navigate(['/analysis/due-date']);
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

  onRowSelect(event): void {
    // debugger;

    this.selectedMaxAccountNumber = event.data.accountNumber;
    this.selectedMaxAccountName = event.data.accountName;

    // for each month
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      // for each account
      if (element.blue.accounts) {
        let total = 0;
        element.blue.accounts.forEach(b => {
          // if the account is selected account add the value to the total
          if (b.accountNumber == this.selectedMaxAccountNumber) {
            total += b.value;
          }
        }); // end of for each account
        this.specificAccountBlueData[i] = Math.abs(total);
      }
      if (element.red.accounts) {
        let total = 0;
        element.red.accounts.forEach(r => {
          // if the account is selected account add the value to the total
          if (r.accountNumber == this.selectedMaxAccountNumber) {
            total += r.value;
          }
        }); // end of for each account
        this.specificAccountRedData[i] = Math.abs(total);
      }
      if (element.green.accounts) {
        let total = 0;
        element.green.accounts.forEach(g => {
          // if the account is selected account add the value to the total
          if (g.accountNumber == this.selectedMaxAccountNumber) {
            total += g.value;
          }
        }); // end of for each account
        this.specificAccountGreenData[i] = Math.abs(total);
      }
    }
    this.chart.refresh();
    // this.chart.reinit();
  }

  onRowUnselect(event) {
    this.selectedMaxAccountNumber = null;

  }

}
