import { Component, OnInit } from '@angular/core';
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
  data: PaymentData[];
  blueData: any[] = new Array();
  RedData: any[] = new Array();
  GreenData: any[] = new Array();
  labels: any[] = new Array();
  ready: boolean = false;
  accounts: any[] = new Array();
  blueAccounts: any[] = new Array();
  top10: any[] = new Array();
  greenAccounts: any[] = new Array();
  redAccounts: any[] = new Array();
  startDate: Date = new Date();
  endDate: Date = new Date();
  procedureName: string;


  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router,
    private prcService: ProcedureService) { }

  ngOnInit(): void {

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


    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');

    this._analysisService
      .getPaymentAnalysis(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        this.data = res.data;
        this.startDate = res.dateRange[0].mindate;
        this.endDate = res.dateRange[0].maxdate;

        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];

          this.labels.push(element.monthName + '-' + element.yearName);
          this.blueData.push(Math.abs(element.blue.value));
          this.GreenData.push(Math.abs(element.green.value));
          this.RedData.push(Math.abs(element.red.value));
          this.blueAccounts.push(...element.blue.accounts);
          this.greenAccounts.push(...element.green.accounts);
          this.redAccounts.push(...element.red.accounts);
        }

        this.blueAccounts.forEach(value => {
          const i = this.accounts.findIndex(x => x.accountNumber == value.accountNumber);
          if (i >= 0) {
            this.accounts[i].blue += value.value;
          } else {
            this.accounts.push({
              accountNumber: value.accountNumber,
              accountName: value.accountName,
              blue: value.value
            });
          }
        });

        this.redAccounts.forEach(value => {
          const i = this.accounts.findIndex(x => x.accountNumber == value.accountNumber);
          if (i >= 0) {
            this.accounts[i].red += value.value;
          } else {
            this.accounts.push({
              accountNumber: value.accountNumber,
              accountName: value.accountName,
              red: value.value
            });
          }
        });

        this.greenAccounts.forEach(value => {
          const i = this.accounts.findIndex(x => x.accountNumber == value.accountNumber);
          if (i >= 0) {
            this.accounts[i].green += value.value;
          } else {
            this.accounts.push({
              accountNumber: value.accountNumber,
              accountName: value.accountName,
              green: value.value
            });
          }
        });

        // get top 10
        this.accounts.sort((a, b) => Math.abs(b.blue) - Math.abs(a.blue));
        this.top10 = this.accounts.slice(0, 9);
        debugger;
        this.ready = true;
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });

      if (this.selectedProcedure && +this.selectedProcedure > 0) {
        this.prcService
          .getById(+this.selectedProcedure)
          .subscribe(prc => {
            this.procedureName = prc && prc.length > 0 ? prc[0].name : "";
          }, er => { });
        }
  } // end of init function


  // goToDetails(row:PaymentAnalysis) {
  //   this._router.navigate(['/analysis/payment/' + this.selectedOrganisation + '/' + this.selectedProcedure + '/' + row.creditorNumber]);
  // }

}
