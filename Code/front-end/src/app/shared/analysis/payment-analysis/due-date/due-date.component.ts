import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.sass'],
})
export class DueDateComponent implements OnInit {
  @Input('details') details: boolean = false;

  //#region Data members init
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  waiting: boolean;
  basicOptions: any;
  basicData: any;
  labels: any[] = new Array();
  docDateOptions: any;
  docData: any[] = new Array();
  docDataTable: any[] = new Array();

  data: any[] = new Array();
  @ViewChild('chart') chart: any;
  delayCols: TableColumn[];
  detailsCols: TableColumn[];
  delayData: any;
  detailsData: any[] = new Array();
  items: MenuItem[];
  home: MenuItem;
  // for slider
  minDate: Date;
  // for slider
  toDate: Date;
  // for slider
  maxRange: number;
  // for slider
  rangeValues: number[];
  // for slider
  baseFromDate: Date;
  // for slider
  baseToDate: Date;
  secondChartDataRecords: any;

  selectedAccount: { accountNumber: string; accountName: string } = { accountNumber: null, accountName: null };
  maxDelay: number;
  detailsDataTemp: any;
  criteria: any = {};
  filtersNo: number = 0;
  //#endregion Data members init

  constructor(
    public _translateService: TranslateService,
    private _analysisService: AnalysisService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    let prcId = +localStorage.getItem('dueDatePrcId');
    if (prcId == this.selectedProcedure) {
      this.baseFromDate = new Date(localStorage.getItem('dueDateBaseMin'));
      this.baseToDate = new Date(localStorage.getItem('dueDateBaseMax'));
      this.minDate = new Date(localStorage.getItem('dueDateMinDate'));
      this.toDate = new Date(localStorage.getItem('dueDateToDate'));
    }


    this._translateService.get('DueDateAnalysis').subscribe((elem) => {
      this.items = [
        { label: elem.label, routerLink: '/dashboard/analysis/due-date' },
      ];

      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
    });

    this.getData();

    this.basicOptions = {
      scales: {
        xAxes: [
          {
            ticks: {
              minRotation: 40,
              maxRotation: 90,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              minRotation: 0,
              maxRotation: 0,
              stepSize: 50,
            },
          },
        ],
      },
    };
    this.detailsCols = [
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

  } // end of ng on init


  getData() {
    this.waiting = true;
    let start = this.minDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    if (this.details) this.selectedAccount['accountNumber'] = this._route.snapshot.paramMap.get('accountNumber');
    let parmas = { maxDelay: this.maxDelay, accountNumber: this.selectedAccount?.accountNumber ?? null };
    this._analysisService
      .getDueDateAnalysis(this.selectedOrganisation, this.selectedProcedure, start, end, parmas)
      .subscribe(
        async (res) => {
          if (!this.maxDelay) this.maxDelay = res.data.maxDelay;
          this.data = res.data.dueDateReference.data;
          this.labels = res.data.dueDateReference.labels;
          if (!this.baseFromDate) this.baseFromDate = new Date(res.dateRange[0].mindate);
          if (!this.baseToDate) this.baseToDate = new Date(res.dateRange[0].maxappdate);
          if (!this.minDate) this.minDate = new Date(res.dateRange[0].mindate);
          if (!this.toDate) this.toDate = new Date(res.dateRange[0].maxappdate);
          if (!this.rangeValues) this.rangeValues = [0, this.dayDiff(this.minDate, this.toDate)];
          if (!this.maxRange) this.maxRange = this.dayDiff(this.baseFromDate, this.baseToDate);
          localStorage.setItem('dueDateBaseMin', this.baseFromDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDateBaseMax', this.baseToDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDateMinDate', this.minDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDateToDate', this.toDate?.toISOString().split('T')[0]);
          localStorage.setItem('dueDatePrcId', '' + this.selectedProcedure);
          this.rangeValues = [
            this.dayDiff(this.baseFromDate, this.minDate),
            this.dayDiff(this.baseFromDate, this.toDate)
          ];
          this.waiting = false;
          this.basicData = {
            labels: this.labels,
            datasets: new Array(),
          };
          this.basicData.datasets.push({
            label: await this._translateService.get('DueDateAnalysis.firstChartLabel').toPromise(),
            borderColor: `rgb(100,100,255)`,
            data: this.data,
            fill: false,
          });
          this.docDataTable = res.data.docDateReference;
          if (!this.delayData) {
            this.delayData = res.data.dueDateRefAccounts;

            this.delayData.forEach((account) => {
              account.accountName = account.accountName ?? 'No Name';
            });
          }

          if (this.selectedAccount && this.selectedAccount.accountNumber) {
            this._analysisService
              .getDueDateAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.selectedAccount.accountNumber, start, end, this.maxDelay)
              .subscribe(res => {
                this.waiting = false;
                this.detailsData = res.data.records;
                this.detailsDataTemp = res.data.records;
              });
          }
        },
        (er) => {
          this.waiting = false;
        }
      );

  }


  handleSliderChange(e) {
    let start = e.values[0];
    let end = e.values[1];
    // calculate fromDate: start + baseFromDate
    let tempStart = new Date(this.baseFromDate);
    tempStart.setDate(tempStart.getDate() + start);
    this.minDate = new Date(tempStart);
    // calculate toDate: baseToDate - end
    let tempEnd = new Date(this.baseToDate);
    tempEnd.setDate(tempEnd.getDate() - (this.maxRange - +end));
    this.toDate = new Date(tempEnd);
  }

  dayDiff(d1: Date, d2: Date) {
    var diff = Math.abs(d1.getTime() - d2.getTime());
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }

  backToPayment() {
    this._router.navigate(['/dashboard/analysis/payment/']);
  }

  goToDetails(row) {
    this._router.navigate([
      '/dashboard/analysis/due-date/deails/' + row.accountNumber,
    ]);
  }

  async exportExcel() {
    let translatedData = [];
    for (let index = 0; index < this.detailsData.length; index++) {
      let element = this.detailsData[index];
      let translatedRecord = {};
      for (const key in element) {
        if (
          Object.prototype.hasOwnProperty.call(element, key) &&
          key != 'id' &&
          key != 'procedureId'
        ) {
          let translatedKey = await this._translateService
            .get('DataTableColumns.' + key)
            .toPromise();
          translatedRecord[translatedKey] = element[key];

          // formatting
          if (
            element[key] &&
            (key == 'balance' ||
              key == 'debitAmount' ||
              key == 'creditAmount' ||
              key == 'taxAmount' ||
              key == 'taxAmountDebit' ||
              key == 'taxAmountCredit' ||
              key == 'StartingBalance')
          ) {
            try {
              let temp = Number.parseFloat(element[key].toString());
              if (!Number.isNaN(temp)) {
                translatedRecord[translatedKey] = temp.toLocaleString('de-DE', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });
              }
            } catch (e) {
              // do nothing
            }
          } else if (
            element[key] &&
            (key == 'documentDate' ||
              key == 'postingDate' ||
              key == 'dueDate' ||
              key == 'dueDateNew' ||
              key == 'executionDate' ||
              key == 'applicationDate' ||
              key == 'StartingBalanceDate')
          ) {
            try {
              let temp = new Date(Date.parse(element[key].toString()));
              if (temp instanceof Date)
                translatedRecord[translatedKey] = temp.toLocaleDateString(
                  'de-DE',
                  {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  }
                );
            } catch (e) { }
          }
          // end of formatting
        }
      }
      translatedData.push(translatedRecord);
    }

    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(translatedData);
      const workbook = {
        Sheets: { due_date_analysis: worksheet },
        SheetNames: ['due_date_analysis'],
      };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'due_date_analysis');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const d: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    // FileSaver.saveAs(file);
    FileSaver.saveAs(
      d,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  clearFilter() {
    this.criteria = {};
    this.detailsData = [...this.detailsDataTemp];
    this.filtersNo = 0;
  }

  filterChange(query, colName): void {
    this.waiting = true;
    if (!query || !query?.toString()?.trim()) {
      this.filtersNo--;
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.detailsData = [...this.detailsDataTemp];
        this.filtersNo = 0;
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (key === 'dueDate' || key === 'applicationDate' || key === 'documentDate') {
              if (element) this.detailsData = this.detailsDataTemp.filter((value) => {
                let d = new Date(value[key]);
                d.setHours(0, 0, 0, 0);
                return d.getTime() == element.getTime();
              });
            } else {
              if (element && element.length < 3) {
                this.detailsData = this.detailsDataTemp.filter(
                  (value) => value[key]?.toString()?.toLowerCase() == element?.toLowerCase()
                );
              } else {
                this.detailsData = this.detailsDataTemp.filter((value) =>
                  value[key]?.toString()?.toLowerCase().includes(element?.toLowerCase())
                );
              }
            }
          }
        }
      }
    } else {
      this.filtersNo++;
      this.detailsData = [...this.detailsDataTemp];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (key === 'dueDate' || key === 'applicationDate' || key === 'documentDate') {
            if (element) this.detailsData = this.detailsDataTemp.filter((value) => {
              let d = new Date(value[key]);
              d.setHours(0, 0, 0, 0);
              return d.getTime() == element.getTime();
            });
          } else {
            if (element && element.length < 3) {
              this.detailsData = this.detailsData.filter(
                (value) => value[key]?.toString()?.toLowerCase() == element?.toLowerCase()
              );
            } else {
              this.detailsData = this.detailsData.filter((value) =>
                value[key]?.toString()?.toLowerCase().includes(element?.toLowerCase())
              );
            }
          }
        }
      } // end of for each criteria field
    }
    this.waiting = false;
  }

}
