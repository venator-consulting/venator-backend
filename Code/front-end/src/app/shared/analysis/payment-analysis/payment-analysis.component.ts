import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalysisService } from '../../service/analysis.service';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';
import { PaymentAnalysis, PaymentData } from '../../model/paymentAnalysis';
import { MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';

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


  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router,
    private prcService: ProcedureService) { }

  ngOnInit(): void {

    this.top10 = 1;

    this.paymentOptions = [
      { name: 'Blue', value: 1, color: 'blue !important' },
      { name: 'Red', value: 2, color: 'red' },
      { name: 'Green', value: 3, color: 'green' }
    ];

    this.top10Cols = [
      {
        header: 'AmountAnalysis.accountNumber',
        field: 'accountNumber'
      },
      {
        header: 'AmountAnalysis.accountName',
        field: 'accountName'
      },
      {
        header: 'AmountAnalysis.Value',
        field: 'value'
      },
    ];

    this.accountsCols = [
      {
        header: 'AmountAnalysis.accountNumber',
        field: 'accountNumber'
      },
      {
        header: 'AmountAnalysis.accountName',
        field: 'accountName'
      },
      {
        header: 'AmountAnalysis.blue',
        field: 'blue'
      },
      {
        header: 'AmountAnalysis.red',
        field: 'red'
      },
      {
        header: 'AmountAnalysis.green',
        field: 'green'
      },
    ];


    this.basicData = {
      labels: this.labels,
      datasets: new Array()
    };

    this.basicData.datasets.push({
      label: 'Blue',
      backgroundColor: `rgb(100,100,255)`,
      data: this.blueData
    },
      {
        label: 'Red',
        backgroundColor: `rgb(255,100,100)`,
        data: this.RedData
      },
      {
        label: 'Green',
        backgroundColor: `rgb(100,255,100)`,
        data: this.GreenData
      });

    this.specificAccountData = {
      labels: this.labels,
      datasets: new Array()
    };

    this.specificAccountData.datasets.push({
      label: 'Blue',
      backgroundColor: `rgb(100,100,255)`,
      data: this.specificAccountBlueData
    },
      {
        label: 'Red',
        backgroundColor: `rgb(255,100,100)`,
        data: this.specificAccountRedData
      },
      {
        label: 'Green',
        backgroundColor: `rgb(100,255,100)`,
        data: this.specificAccountGreenData
      });

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

        // this.blueAccounts.forEach(value => {
        //   const i = this.accounts.findIndex(x => x.accountNumber == value.accountNumber);
        //   if (i >= 0) {
        //     this.accounts[i].blue += value.value;
        //   } else {
        //     this.accounts.push({
        //       accountNumber: value.accountNumber,
        //       accountName: value.accountName,
        //       blue: value.value
        //     });
        //   }
        // });
        // debugger;
        // this.redAccounts.forEach(value => {
        //   const i = this.accounts.findIndex(x => x.accountNumber == value.accountNumber);
        //   if (i >= 0) {
        //     if (this.accounts[i].red) {
        //       this.accounts[i].red += value.value;  
        //     } else {
        //       this.accounts[i].red = value.value;
        //     }
            
        //   } else {
        //     this.accounts.push({
        //       accountNumber: value.accountNumber,
        //       accountName: value.accountName,
        //       red: value.value
        //     });
        //   }
        // });

        // this.greenAccounts.forEach(value => {
        //   const i = this.accounts.findIndex(x => x.accountNumber == value.accountNumber);
        //   if (i >= 0) {
        //     if (this.accounts[i].green) {
        //       this.accounts[i].green += value.value;  
        //     } else {
        //       this.accounts[i].green = value.value;
        //     }
        //   } else {
        //     this.accounts.push({
        //       accountNumber: value.accountNumber,
        //       accountName: value.accountName,
        //       green: value.value
        //     });
        //   }
        // });

        // get top 10
        this.accounts.sort((a, b) => Math.abs(b.blue) - Math.abs(a.blue));
        this.top10Blue = this.accounts.slice(0, 10);
        this.accounts.sort((a, b) => Math.abs(b.red) - Math.abs(a.red));
        this.top10Red = this.accounts.slice(0, 10);
        this.accounts.sort((a, b) => Math.abs(b.green) - Math.abs(a.green));
        this.top10Green = this.accounts.slice(0, 10);
        debugger;
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

  goToDueDate (){
    this._router.navigate(['/analysis/due-date']);
  }


  filterChange(query, colName): void {
    this.searching = true;
    debugger;
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
    debugger;

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
  }

  onRowUnselect(event) {
    this.selectedMaxAccountNumber = null;

  }

}
