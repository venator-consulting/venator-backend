import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { PaymentData, PaymentDetailsRecord } from 'src/app/shared/model/paymentAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';
import { PaymentAnalysisDetailsData } from 'src/app/shared/model/paymentAnalysis';
import * as FileSaver from 'file-saver';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-payment-analysis-details',
  templateUrl: './payment-analysis-details.component.html',
  styleUrls: ['./payment-analysis-details.component.sass']
})
export class PaymentAnalysisDetailsComponent implements OnInit {
  @Input('details') details: boolean = false;
  startDate: Date = new Date();
  endDate: Date = new Date();
  data: PaymentData[];
  blueData: PaymentDetailsRecord[] = new Array();
  redData: PaymentDetailsRecord[] = new Array();
  greenData: PaymentDetailsRecord[] = new Array();
  basicOptions: any;
  basicData: any;
  blue: any[] = new Array();
  red: any[] = new Array();
  green: any[] = new Array();
  labels: any[] = new Array();
  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  paymentOptions: { name: string; value: number; color: string; }[];
  accountNumber: string;
  waiting: boolean = true;
  procedureName: string;
  displayData: number;
  cols: { header: string; field: string; }[];
  frozenCols: { header: string; field: string; width: string }[];
  selected: PaymentAnalysisDetailsData[] = new Array();
  items: MenuItem[];
  home: MenuItem;


  constructor(private _messageService: MessageService, private _analysisService: AnalysisService, private _router: Router,
    private _route: ActivatedRoute, private prcService: ProcedureService) { }

  ngOnInit(): void {

    this.waiting = true;
    this.displayData = 1;
    this.items = [
      // { label: 'Analysis' },
      { label: 'Payment Analysis', routerLink: '/analysis/payment', routerLinkActiveOptions: { exact: true } },
      { label: 'Details', routerLink: this._router.url, routerLinkActiveOptions: { exact: true } }
    ];
    
    this.home = { icon: 'pi pi-home', label: 'Data', routerLink: '/shared/data' };

    this.basicOptions = {
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            // debugger;
            let value = tooltipItem.value;
            let currencyPipe = new CurrencyPipe('de');
            value = currencyPipe.transform(value, 'EURO', '');

            let label = data.datasets[tooltipItem.datasetIndex].label || '';
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
            callback: function (label, index, values) {
              // debugger;
              let currencyPipe = new CurrencyPipe('de');
              label = currencyPipe.transform(label, 'EURO', '');
              return label;
            }
          }
        }],
      }
    };


    this.paymentOptions = [
      { name: 'Blue', value: 1, color: 'blue !important' },
      { name: 'Red', value: 2, color: 'red' },
      { name: 'Green', value: 3, color: 'green' }
    ];

    this.cols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber'
      },
      {
        header: 'DataTableColumns.accountName',
        field: 'accountName'
      },
      {
        header: 'DataTableColumns.accountType',
        field: 'accountType'
      },
      {
        header: 'DataTableColumns.documentType',
        field: 'documentType'
      },
      {
        header: 'DataTableColumns.balance',
        field: 'balance'
      },
      {
        header: 'DataTableColumns.contraAccountNumber',
        field: 'contraAccountNumber'
      },
      {
        header: 'DataTableColumns.contraAccountName',
        field: 'contraAccountName'
      },
      {
        header: 'DataTableColumns.documentTypeNew',
        field: 'documentTypeNew'
      },
      {
        header: 'DataTableColumns.documentNumber',
        field: 'documentNumber'
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate'
      },
      {
        header: 'DataTableColumns.recordNumber',
        field: 'recordNumber'
      },
      {
        header: 'DataTableColumns.ledgerId',
        field: 'ledgerId'
      },
      {
        header: 'DataTableColumns.executionDate',
        field: 'executionDate'
      },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate'
      }
    ];
    this.frozenCols = [
      {
        header: '',
        field: 'paymentRelevant',
        width: '6'
      },
      {
        header: 'Comment',
        field: 'paymentRelevantComment',
        width: '35'
      }
    ];
    this.basicData = {
      labels: this.labels,
      datasets: new Array()
    };

    this.basicData.datasets.push({
      label: 'Blue',
      backgroundColor: `rgb(100,100,255)`,
      data: this.blue
    },
      {
        label: 'Red',
        backgroundColor: `rgb(255,100,100)`,
        data: this.red
      },
      {
        label: 'Green',
        backgroundColor: `rgb(100,255,100)`,
        data: this.green
      });

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    if (!this.selectedOrganisation) {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR',
        life: 10000,
        detail: "there is no Ortganisation selected!"
      });
    }
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    if (!this.selectedProcedure) {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR',
        life: 10000,
        detail: "there is no Procedure selected!"
      });
    }
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');
    if (!this.accountNumber) {
      this._messageService.add({
        severity: 'error',
        summary: 'ERROR',
        life: 10000,
        detail: "there is no Account selected!"
      });
    }

    this._analysisService
      .getPaymentAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.data = res.data.data;
        this.startDate = res.dateRange[0].mindate;
        this.endDate = res.dateRange[0].maxdate;
        this.blueData = res.data.blue;
        this.redData = res.data.red;
        this.greenData = res.data.green;
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];

          this.labels.push(element.monthName + '-' + element.yearName);
          this.blue.push(Math.abs(element.blue.value));
          this.green.push(Math.abs(element.green.value));
          this.red.push(Math.abs(element.red.value));
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

  selectRow(row: PaymentAnalysisDetailsData): void {
    const index = this.selected.map(item => item.id).indexOf(row.id);
    if (row.paymentRelevant) {
      row.paymentRelevant = false;
      row.paymentRelevantComment = '';
    } else {
      row.paymentRelevant = true;
    }
    if (index == -1) {
      this.selected.push(row);
    }
  }

  commentChanged(row: PaymentAnalysisDetailsData): void {
    const index = this.selected.map(item => item.id).indexOf(row.id);
    row.paymentRelevant = true;
    if (index == -1) {
      this.selected.push(row);
    }
  }

  saveRelevant() {
    console.log(this.selected);
    this._analysisService
      .setRelevantPaymentAnalysis(this.selectedOrganisation, this.selectedProcedure, this.accountNumber, this.selected)
      .subscribe(res => {
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: "records set as relevant successfully!"
        });
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });
  }

  filterChange(query, colName): void {
    this.searching = true;
    if (!query) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.data = this.tempData.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
            } else {
              this.data = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
            }
          }
        }
      }
    } else {
      this.data = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (element.length < 3) {
            this.data = this.data.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
          } else {
            this.data = this.data.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }

  goBack() {
    this._router.navigate(['/analysis/payment/']);
  }


  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { 'payment_analysis': worksheet }, SheetNames: ['payment_analysis'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "payment_analysis");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const d: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    // FileSaver.saveAs(file);
    FileSaver.saveAs(d, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
