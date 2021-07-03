import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.sass']
})
export class DueDateComponent implements OnInit {
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  waiting: boolean;
  basicOptions: any;
  basicData: any;
  labels: any[] = new Array();
  docDateOptions: any;
  docDateData: any;
  docDateLabels: any[] = new Array();
  docPositiveData: any[] = new Array();
  docNegativeData: any[] = new Array();
  docData: any[] = new Array();
  docDataTable: any[];

  data: any[] = new Array();
  @ViewChild('chart') chart: any;
  docCols: { header: string; field: string; }[];

  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router) { }

  ngOnInit(): void {


    this.basicData = {
      labels: this.labels,
      datasets: new Array()
    };

    this.basicOptions = {
      scales: {
          xAxes: [{
                ticks: {
                  minRotation: 40,
                  maxRotation: 90,
                }
          }],
          yAxes: [{
            ticks: {
              minRotation: 0,
              maxRotation: 0,
              stepSize: 50
            }
      }],
      }
  };


    this.waiting = true;

    this.docCols = [
      {
        header: 'date',
        field: 'date'
      },
      {
        header: 'positive',
        field: 'positive'
      },
      {
        header: 'negative',
        field: 'negative'
      },
      {
        header: 'average',
        field: 'average'
      },
    ];

    
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this._analysisService
      .getDueDateAnalysis(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        // debugger;
        this.data = res.data.dueDateReference.data;
        this.labels = res.data.dueDateReference.labels;
        this.waiting = false;
        this.basicData = {
          labels: this.labels,
          datasets: new Array(),
        };
        this.basicData.datasets.push({
          label: 'Due Date',
          borderColor: `rgb(100,100,255)`,
          data: this.data,
          fill: false,
        });
        // this.chart.refresh();
        // this.chart.reinit();
        this.docDataTable = res.data.docDateReference;
        this.docDataTable.forEach(element => {
          this.docDateLabels.push(element.monthName + '-' + element.yearName);
          this.docPositiveData.push(element.positive);
          this.docNegativeData.push(element.negative);
          this.docData.push(+element.positive + +element.negative);
        });

        this.docDateData = {
          labels: this.docDateLabels,
          datasets: [{
              type: 'line',
              label: 'Average',
              borderColor: '#42A5F5',
              borderWidth: 2,
              fill: false,
              data: this.docData
          }, {
              type: 'bar',
              label: 'Positive',
              backgroundColor: '#F5B59B',
              data: this.docPositiveData,
              borderColor: '#E5A58B',
              borderWidth: 2
          }, {
              type: 'bar',
              label: 'Negative',
              backgroundColor: '#FFD795',
              borderColor: '#EFC785',
              data: this.docNegativeData
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
    
  }

}
