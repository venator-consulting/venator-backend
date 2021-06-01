import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../service/analysis.service';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';
import { TextAnalysis } from "../../model/textAnalysis";

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.sass']
})
export class TextAnalysisComponent implements OnInit {

  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  basicOptions: any;
  basicData: any;
  data: TextAnalysis[] = new Array();

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
      .getTextAnalysis(this.selectedOrganisation, this.selectedProcedure)
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

  } // end of ng on init


  goToDetails(row:TextAnalysis) {
    this._router.navigate(['/analysis/text/' + this.selectedOrganisation + '/' + this.selectedProcedure + '/' + row.creditorNumber]);
  }


}
