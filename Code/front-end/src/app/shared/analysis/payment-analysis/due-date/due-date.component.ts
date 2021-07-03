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
  data: any[] = new Array();
  @ViewChild('chart') chart: any;

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
    
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this._analysisService
      .getDueDateAnalysis(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        // debugger;
        this.data = res.data.data;
        this.labels = res.data.labels;
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
        this.chart.reinit()
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
