import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
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

  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router) { }

  ngOnInit(): void {

    this.items = [
      // { label: 'Analysis' },
      { label: 'Payment Analysis', routerLink: '/analysis/payment' },
      { label: 'Due Date Analysis', routerLink: '/analysis/due-date' }
    ];

    this.home = { icon: 'pi pi-home', label: ' Data', routerLink: '/shared/data' };

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

    // this.docCols = [
    //   {
    //     header: 'date',
    //     field: 'date'
    //   },
    //   {
    //     header: 'positive',
    //     field: 'positive'
    //   },
    //   {
    //     header: 'negative',
    //     field: 'negative'
    //   },
    //   {
    //     header: 'average',
    //     field: 'average'
    //   },
    // ];

    this.delayCols = [
      {
        header: 'Account Number',
        field: 'accountNumber'
      },
      {
        header: 'Account Name',
        field: 'accountName'
      },
      {
        header: 'Positive Delay Total',
        field: 'delayPos'
      },
      {
        header: 'Negative Delay Total',
        field: 'delayNeg'
      },
      {
        header: 'count',
        field: 'count'
      }
    ];
    
    this.notPaidCols = [
      {
        header: 'date',
        field: 'date'
      },
      {
        header: 'notPaid',
        field: 'notPaid'
      }
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

      this.notPaidChartData = {
        labels: this.notPaidLabels,
        datasets: [{
            label: 'Not Paid',
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
    
  }

  backToPayment() {
    this._router.navigate(['/analysis/payment/']);
  }

  goToDetails(row) {
    this._router.navigate(['analysis/due-date/deails/' + row.accountNumber]);
  }

}
