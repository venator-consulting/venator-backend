import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { CurrencyPipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from 'src/app/shared/model/tableColumn';

@Component({
  selector: 'app-due-date-details',
  templateUrl: './due-date-details.component.html',
  styleUrls: ['./due-date-details.component.sass'],
})
/**
 * @deprecated there is no details for due date now
 * this will be deleted in future
 */
export class DueDateDetailsComponent implements OnInit {

  @Input('details') details: boolean = false;

  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  accountNumber: string;
  accountName: string;
  waiting: boolean;
  basicOptions: any;
  basicData: any;
  labels: any[] = new Array();
  docDateLabels: any[] = new Array();
  docDataTable: any[] = new Array();
  filteredDataTable: any[] = new Array();
  data: any[] = new Array();
  docPositiveData: any[] = new Array();
  docNegativeData: any[] = new Array();
  docData: any[] = new Array();
  docDateData: any = {};
  delayCols: TableColumn[];
  items: MenuItem[];
  home: MenuItem;
  selectedDate: string;

  constructor(public _translateService: TranslateService, private _messageService: MessageService, private _analysisService: AnalysisService,
    private _router: Router, private _route: ActivatedRoute) { }


  ngOnInit(): void {

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');
    this.waiting = true;

    this._translateService.get('DueDateAnalysis').subscribe(elem => {
      this.items = [
        // { label: 'Analysis' },
        { label: elem.paymentLabel, routerLink: '/dashboard/analysis/payment', routerLinkActiveOptions: { exact: true } },
        { label: elem.label, routerLink: '/dashboard/analysis/due-date', routerLinkActiveOptions: { exact: true } },
        { label: 'Details', routerLink: this._router.url, routerLinkActiveOptions: { exact: true } }
      ];

      this.home = { icon: 'pi pi-home', label: elem.data, routerLink: '/dashboard/shared/data' };
      this._analysisService
        .getDueDateAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber, null, null, null)
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

          this.data.forEach(record => {
            let appDate = new Date(record.applicationDate);
            let dueDate = new Date(record.dueDate);
            if (appDate && dueDate && appDate instanceof Date && dueDate instanceof Date)
              record.delay = Math.ceil((appDate?.getTime() - dueDate?.getTime()) / (1000 * 3600 * 24));
          })

        }, er => {
          this.waiting = false;
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

    this.delayCols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber',
        align: 'left'
      },
      {
        header: 'DataTableColumns.accountName',
        field: 'accountName',
        align: 'left'
      },
      {
        header: 'DataTableColumns.accountType',
        field: 'accountType',
        align: 'center'
      },

      {
        header: 'DataTableColumns.documentType',
        field: 'documentType',
        align: 'center'
      },
      {
        header: 'DataTableColumns.documentTypeNew',
        field: 'documentTypeNewName',
        align: 'center'
      },
      {
        header: 'DataTableColumns.balance',
        field: 'balance',
        align: 'right'
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate',
        align: 'center'
      },
      {
        header: 'DataTableColumns.applicationDate',
        field: 'applicationDate',
        align: 'center'
      },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate',
        align: 'center'
      },
      {
        header: 'DueDateAnalysis.delay',
        field: 'delay',
        align: 'center'
      }
    ];



  }


  backToPayment() {
    this._router.navigate(['/dashboard/analysis/due-date']);
  }

  selectBarData(e) {
    debugger;
    let index = e?.element?._index;
    this.selectedDate = this.docDateLabels[index];
    let startTemp = this.selectedDate.split('-');
    let startDate = new Date(parseInt(startTemp[1]), parseInt(startTemp[0]) - 1, 1);
    let endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
    this.filteredDataTable = this.data.filter(row => (new Date(row.documentDate)).getTime() >= startDate.getTime() &&
    (new Date(row.documentDate)).getTime() <= endDate.getTime());
  }

}
