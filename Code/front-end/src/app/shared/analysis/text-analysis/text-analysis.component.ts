import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../service/analysis.service';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';
import { TextAnalysis } from "../../model/textAnalysis";
import { MessageService } from 'primeng/api';

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
  cols: { header: string; field: string; }[];
  waiting: boolean = false;

  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router) { }

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
        }
        ]
      }
    };

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');

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
      }
    ];


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

  } // end of ng on init


  goToDetails(row: TextAnalysis) {
    this._router.navigate(['/analysis/text/' + this.selectedOrganisation + '/' + this.selectedProcedure + '/' + row.accountNumber]);
  }


}
