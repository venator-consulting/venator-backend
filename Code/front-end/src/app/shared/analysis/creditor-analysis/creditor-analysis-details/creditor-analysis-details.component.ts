import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';

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

  constructor(private _route: ActivatedRoute, private _analysisService: AnalysisService, private _messageService: MessageService, private _router: Router) { }

  ngOnInit(): void {


    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this._analysisService
      .getCreditorAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.totalAmount = res.amount.length > 0 ? res.amount[0].totalBalance : 0;
        this.totalPayment = res.payment.length > 0 ? res.payment[0].totalBalance : 0;
        this.totalText = res.text.length > 0 ? res.text[0].totalBalance : 0;
        this.accountName = res.text.length > 0 ? res.text[0].accountName : res.amount.length > 0 ? res.amount[0].accountName : res.payment[0]?.accountNumber;
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });


  }

  setDetails(option: number) {
    this.displayDetails =option;
  }

}
