import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from '../../service/analysis.service';

@Component({
  selector: 'app-creditor-analysis',
  templateUrl: './creditor-analysis.component.html',
  styleUrls: ['./creditor-analysis.component.sass']
})
export class CreditorAnalysisComponent implements OnInit {
  cols: { header: string; field: string; }[];
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  waiting: any;
  data: any;
  accountNumber: string;
  items: MenuItem[];
  home: MenuItem;

  constructor(private _analysisService: AnalysisService, private _messageService: MessageService, private _router: Router) { }

  ngOnInit(): void {

    this.items = [
      // { label: 'Analysis' },
      { label: 'Creditor Analysis', routerLink: '/analysis/creditor' }
    ];

    this.home = { icon: 'pi pi-home', label: ' Data', routerLink: '/shared/data' };

    this.cols = [
      {
        header: 'Account Number',
        field: 'accountNumber'
      },
      {
        header: 'Account Name',
        field: 'accountName'
      },
      {
        header: 'Total Count',
        field: 'totlaCount'
      },
      {
        header: 'Total Balance',
        field: 'totalBalance'
      }
    ];

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.waiting = true;
    this._analysisService
      .getCreditorAnalysis(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        this.waiting = false;
        this.data = res;
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });



  }// end of ng o0n init




  goToDetails(row) {
    this._router.navigate(['/analysis/creditor/deails/' + row.accountNumber]);
  }

}
