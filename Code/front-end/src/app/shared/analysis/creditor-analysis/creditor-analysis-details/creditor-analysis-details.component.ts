import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-creditor-analysis-details',
  templateUrl: './creditor-analysis-details.component.html',
  styleUrls: ['./creditor-analysis-details.component.sass']
})
export class CreditorAnalysisDetailsComponent implements OnInit {
  accountNumber: string;
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  accountName: string;
  totalAmount: number;
  totalText: number;
  totalPayment: number;
  displayDetails: number;
  chartData: any ; 
  totalAmountCount: any;
  totalPaymentCount: any;
  totalTextCount: any;
  items: MenuItem[];
  home: MenuItem;

  constructor(public _translateService: TranslateService, private _route: ActivatedRoute, private _analysisService: AnalysisService, private _messageService: MessageService, private _router: Router) { }

  ngOnInit(): void {
    this._translateService.get('CreditorsAnalysis').subscribe(elem => {
      this.items = [
        // { label: 'Analysis' },
        { label: elem.label, routerLink: '/analysis/creditor', routerLinkActiveOptions: { exact: true } },
        { label: 'Details', routerLink: this._router.url, routerLinkActiveOptions: { exact: true } }
      ];
      this.home = { icon: 'pi pi-home', label: elem.data, routerLink: '/shared/data' };
      this._analysisService
      .getCreditorAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.totalAmount = res.amount.length > 0 ? res.amount[0].totalBalance : 0;
        this.totalAmountCount = res.amount.length > 0 ? res.amount[0].totlaCount : 0;
        this.totalPayment = res.payment.length > 0 ? res.payment[0].totalBalance : 0;
        this.totalPaymentCount = res.payment.length > 0 ? res.payment[0].totlaCount : 0;
        this.totalText = res.text.length > 0 ? res.text[0].totalBalance : 0;
        this.totalTextCount = res.text.length > 0 ? res.text[0].totlaCount : 0;
        this.accountName = res.text.length > 0 ? res.text[0].accountName : res.amount.length > 0 ? res.amount[0].accountName : res.payment[0]?.accountName;
        this.chartData = {
          labels: [elem.amountLabel,elem.textLabel, elem.paymentLabel],
          datasets: [
              {
                  data: [this.totalAmount, this.totalText, this.totalPayment],
                  backgroundColor: [
                      "#95ca14",
                      "#587bc7",
                      "#fc6521"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]    
          };
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });
     })



    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');




  }

  setDetails(option: number) {
    this.displayDetails = option;
  }

}
