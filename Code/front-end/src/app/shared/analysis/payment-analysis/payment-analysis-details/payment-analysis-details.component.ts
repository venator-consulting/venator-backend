import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PaymentData, PaymentDetailsRecord } from 'src/app/shared/model/paymentAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';

@Component({
  selector: 'app-payment-analysis-details',
  templateUrl: './payment-analysis-details.component.html',
  styleUrls: ['./payment-analysis-details.component.sass']
})
export class PaymentAnalysisDetailsComponent implements OnInit {

  startDate: Date = new Date();
  endDate: Date = new Date();
  data: PaymentData[];
  blueData: PaymentDetailsRecord[] = new Array();
  redData: PaymentDetailsRecord[] = new Array();
  greenData: PaymentDetailsRecord[] = new Array();
  basicOptions: any;
  basicData: any;
  blue: any[] = new Array();
  red: any[] = new Array();
  green: any[] = new Array();
  labels: any[] = new Array();
  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  paymentOptions: { name: string; value: number; color: string; }[];
  accountNumber: string;
  waiting: boolean = true;
  procedureName: string;
  displayData: number;
  cols: { header: string; field: string; }[];

  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router,
    private _route: ActivatedRoute, private prcService: ProcedureService) { }

  ngOnInit(): void {

    this.waiting = true;
    this.displayData = 1;

    this.paymentOptions = [
      { name: 'Blue', value: 1, color: 'blue !important' },
      { name: 'Red', value: 2, color: 'red' },
      { name: 'Green', value: 3, color: 'green' }
    ];

    this.cols = [
      { header: 'PaymentAnalysis.accountNumber', field: 'accountNumber' },
      { header: 'PaymentAnalysis.accountName', field: 'accountName' },
      { header: 'PaymentAnalysis.accountType', field: 'accountType' },
      { header: 'PaymentAnalysis.documentDate', field: 'documentDate' },
      { header: 'PaymentAnalysis.applicationDate', field: 'applicationDate' },
      { header: 'PaymentAnalysis.dueDate', field: 'dueDate' },
      { header: 'PaymentAnalysis.balance', field: 'balance' },
      { header: 'PaymentAnalysis.documentType', field: 'documentType' },
      { header: 'PaymentAnalysis.documentTypeNewName', field: 'documentTypeNewName' },
    ];

    this.basicData = {
      labels: this.labels,
      datasets: new Array()
    };

    this.basicData.datasets.push({
      label: 'Blue',
      backgroundColor: `rgb(100,100,255)`,
      data: this.blue
    },
      {
        label: 'Red',
        backgroundColor: `rgb(255,100,100)`,
        data: this.red
      },
      {
        label: 'Green',
        backgroundColor: `rgb(100,255,100)`,
        data: this.green
      });

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    if (!this.selectedOrganisation) {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR',
        life: 10000,
        detail: "there is no Ortganisation selected!"
      });
    }
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    if (!this.selectedProcedure) {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR',
        life: 10000,
        detail: "there is no Procedure selected!"
      });
    }
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');
    if (!this.accountNumber) {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR',
        life: 10000,
        detail: "there is no Account selected!"
      });
    }

    this._analysisService
      .getPaymentAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.data = res.data.data;
        this.startDate = res.dateRange[0].mindate;
        this.endDate = res.dateRange[0].maxdate;
        this.blueData = res.data.blue;
        this.redData = res.data.red;
        this.greenData = res.data.green;
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];

          this.labels.push(element.monthName + '-' + element.yearName);
          this.blue.push(Math.abs(element.blue.value));
          this.green.push(Math.abs(element.green.value));
          this.red.push(Math.abs(element.red.value));
        }
        this.waiting = false;
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

  } // end of ng on init

}
