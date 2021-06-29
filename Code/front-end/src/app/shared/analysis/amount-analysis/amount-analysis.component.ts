import { Component, OnInit } from '@angular/core';
import { AmountAnalysis } from '../../model/amountAnalysis';
import { AnalysisService } from '../../service/analysis.service';
import { Procedures } from 'src/app/shared/model/procedures';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';
import { ProcedureService } from '../../service/procedure.service';

@Component({
  selector: 'app-amount-analysis',
  templateUrl: './amount-analysis.component.html',
  styleUrls: ['./amount-analysis.component.sass']
})
export class AmountAnalysisComponent implements OnInit {

  data: AmountAnalysis[] = new Array();
  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  baseBalance = 500;
  basicOptions: any;
  basicData: any;
  cols: { header: string; field: string; }[];
  waiting: boolean = false;
  procedureName: string = "";


  constructor(private _messageService: MessageService, private _analysisService: AnalysisService,
    private _router: Router, private prcService: ProcedureService) { }

  ngOnInit(): void {
    this.waiting = true;
    this.basicOptions = {
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'Count',
          ticks: {
            min: 0,
          }
        },
        ]
      }
    };

    this.cols = [
      {
        header: 'AmountAnalysis.accountNumber',
        field: 'accountNumber'
      },
      {
        header: 'AmountAnalysis.accountName',
        field: 'accountName'
      },
      {
        header: 'AmountAnalysis.NumberOfPostings',
        field: 'totlaCount'
      },
      {
        header: 'AmountAnalysis.totalBalance',
        field: 'totalBalance'
      }
    ];

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.getData();

    // if (this.selectedProcedure && +this.selectedProcedure > 0) {
    //   this.prcService
    //     .getById(+this.selectedProcedure)
    //     .subscribe(prc => {
    //       this.procedureName = prc && prc.length > 0 ? prc[0].name : "";
    //     }, er => { });
    // }

  }// end of ng on init

  goToDetails(row: AmountAnalysis) {
    this._router.navigate(['/analysis/amount/' + this.selectedOrganisation + '/' + this.selectedProcedure + '/' + row.accountNumber + '/' + this.baseBalance]);
  }

  getData() {
    this._analysisService
      .getAmountAnalysis(this.selectedOrganisation, this.selectedProcedure, this.baseBalance)
      .subscribe(res => {
        this.data = res;
        this.basicData = {
          labels: ['Total Count'],
          datasets: new Array()
        };
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];
          this.basicData.datasets.push(new Bar(element.accountName, `rgb(${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255},${Math.random() * 25500 % 255})`, element.totlaCount));
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
  }


}
