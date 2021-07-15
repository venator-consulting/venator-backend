import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { TranslateService } from '@ngx-translate/core';

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
  docDataTable: any[] = new Array();
  notPaidLabels: any[] = new Array();
  notPaidData: any[] = new Array();
  // notPaidDataTable: any[] = new Array();
  notPaidChartData: any;

  data: any[] = new Array();
  @ViewChild('chart') chart: any;
  // docCols: { header: string; field: string; }[];
  notPaidCols: { header: string; field: string; }[];
  delayCols: { header: string; field: string; }[];
  delayData: any;
  items: MenuItem[];
  home: MenuItem;

  constructor(public _translateService: TranslateService, private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router) { }

  ngOnInit(): void {


    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    

    this._translateService.get('DueDateAnalysis').subscribe(elem => {
      this.items = [
      
        { label: elem.paymentLabel, routerLink: '/analysis/payment' },
        { label: elem.label, routerLink: '/analysis/due-date' }
      ];

      this.home = { icon: 'pi pi-home', label: elem.data, routerLink: '/shared/data' };

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
          label: elem.firstChartLabel,
          borderColor: `rgb(100,100,255)`,
          data: this.data,
          fill: false,
        });
        // this.chart.refresh();
        // this.chart.reinit();
        this.docDataTable = res.data.docDateReference;
        // this.notPaidDataTable = res.data.docDateReference;
        this.delayData = res.data.dueDateRefAccounts;
        this.docDataTable.forEach(element => {
          this.docDateLabels.push(element.monthName + '-' + element.yearName);
          this.notPaidLabels.push(element.monthName + '-' + element.yearName);
          this.docPositiveData.push(element.positive);
          this.docNegativeData.push(element.negative);
          this.docData.push(+element.positive + +element.negative);
          this.notPaidData.push(+element.notPaid);
        });

        this.docDateData = {
          labels: this.docDateLabels,
          datasets: [{
              type: 'line',
              label: elem.average,
              borderColor: '#42A5F5',
              borderWidth: 2,
              fill: false,
              data: this.docData
          }, {
              type: 'bar',
              label: elem.positive,
              backgroundColor: '#F5B59B',
              data: this.docPositiveData,
              borderColor: '#E5A58B',
              borderWidth: 2
          }, {
              type: 'bar',
              label: elem.negative,
              backgroundColor: '#FFD795',
              borderColor: '#EFC785',
              data: this.docNegativeData
          }]
      };

      this.notPaidChartData = {
        labels: this.notPaidLabels,
        datasets: [{
            label: elem.notPaid,
            backgroundColor: '#42A5F5',
            data: this.notPaidData
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


    this.delayCols = [
      {
        header: 'DueDateAnalysis.accountNumber',
        field: 'accountNumber'
      },
      {
        header: 'DueDateAnalysis.accountName',
        field: 'accountName'
      },
      {
        header: 'DueDateAnalysis.positiveDelay',
        field: 'delayPos'
      },
      {
        header: 'DueDateAnalysis.negativeDelay',
        field: 'delayNeg'
      },
      {
        header: 'DueDateAnalysis.count',
        field: 'count'
      }
    ];
    
    this.notPaidCols = [
      {
        header: 'DueDateAnalysis.date',
        field: 'date'
      },
      {
        header: 'DueDateAnalysis.notPaid',
        field: 'notPaid'
      }
    ];

  }

  backToPayment() {
    this._router.navigate(['/analysis/payment/']);
  }

  goToDetails(row) {
    this._router.navigate(['analysis/due-date/deails/' + row.accountNumber]);
  }

}
