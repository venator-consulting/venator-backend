import { Component, OnInit } from '@angular/core';
import { AmountAnalysis } from '../../model/amountAnalysis';
import { AnalysisService } from '../../service/analysis.service';
import { Procedures } from 'src/app/shared/model/procedures';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';

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


  constructor(private _analysisService: AnalysisService, private _router: Router) { }

  ngOnInit(): void {

    this.basicOptions = {
      responsive: true,
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
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'Creditor',
          gridLines: {
            drawOnChartArea: false
          },
          ticks: {
            min: 0,
          }
        }]
      }
    };



    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');

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
          this.basicData.datasets.push(new Bar(element.creditorName, `rgb(${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255},${Math.random() * 25500 % 255})`, element.totlaCount));
        }
      }, er => {

      });
  }// end of ng on init

  goToDetails(row:AmountAnalysis) {
    this._router.navigate(['/analysis/amount/' + this.selectedOrganisation + '/' + this.selectedProcedure + '/' + row.creditorNumber]);
  }


}
