import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-due-date-details',
  templateUrl: './due-date-details.component.html',
  styleUrls: ['./due-date-details.component.sass'],
  providers: [DatePipe]
})
export class DueDateDetailsComponent implements OnInit {

  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  accountNumber: string;
  waiting: boolean;
  basicOptions: any;
  basicData: any;
  labels: any[] = new Array();
  docDateLabels: any[] = new Array();
  docDataTable: any[] = new Array();
  data: any[] = new Array();
  docPositiveData: any[] = new Array();
  docNegativeData: any[] = new Array();
  docData: any[] = new Array();
  docDateData: any = {};
  delayCols: { header: string; field: string; }[];


  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, 
    private datepipe: DatePipe, private _router: Router, private _route: ActivatedRoute) { }


  ngOnInit(): void {

    this.waiting = true;

    this.basicData = {
      labels: this.labels,
      datasets: new Array()
    };

    this.basicOptions = {
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            debugger;
            let value = tooltipItem.value;
            let currencyPipe = new CurrencyPipe('de');
            value = currencyPipe.transform(value, 'EURO', '');
            
            let label = data.datasets[tooltipItem.datasetIndex].label || '';
            // label = label + ': ' + tooltipItem.value.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            // label = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(label);
                return label + ': ' + value;
          }
        }
      },
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
        header: 'Account type',
        field: 'accountType'
      },
      {
        header: 'document Type',
        field: 'documentType'
      },
      {
        header: 'document Type New Name',
        field: 'documentTypeNewName'
      },
      {
        header: 'balance',
        field: 'balance'
      },
      {
        header: 'document Date',
        field: 'documentDate'
      },
      {
        header: 'application Date',
        field: 'applicationDate'
      },
      {
        header: 'due Date',
        field: 'dueDate'
      }
    ];

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this._analysisService
      .getDueDateAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {

        this.waiting = false;
        this.docDataTable = res.data.docDateReference;
        this.data = res.data.records;

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
          detail: "there is no Account selected!"
        });
      });



  }


  backToPayment() {
    this._router.navigate(['analysis/due-date']);
  }

}
