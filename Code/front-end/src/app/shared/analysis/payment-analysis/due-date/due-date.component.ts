//#region imports
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import * as FileSaver from 'file-saver';
//#endregion imports

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.sass'],
})
export class DueDateComponent implements OnInit {
  @Input('details') details: boolean = false;

  //#region Data members init
  /**
   * @deprecated we now display procedure name in navbar
   */
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  // for progress
  waiting: boolean;
  //#region First chart 
  /**
   * @deprecated this chart deleted in this release
   */
  basicOptions: any;
  /**
   * @deprecated this chart deleted in this release
   */
  basicData: any;
  /**
  * @deprecated this chart deleted in this release
  */
  data: any[] = new Array();
  // @ViewChild('chart') chart: any;
  //#endregion First chart 

  // for beadcrumb
  items: MenuItem[];
  // for beadcrumb
  home: MenuItem;

  //#region base filters
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
  // for account filter
  delayData: any;
  // for account filter
  selectedAccount: { accountNumber: string; accountName: string } = { accountNumber: null, accountName: null };
  // for max delay filter
  maxDelay: number;
  //#endregion base filters

  //#region details table for a selected account
  detailsCols: TableColumn[];
  // a temp data for the filters in the selected account table in the bottom
  detailsDataTemp: any;
  criteria: any = {};
  filtersNo: number = 0;
  detailsData: any[] = new Array();
  //#endregion details table for a selected account

  //#region scatter chart
  secondChartDataRecords: any;
  secondChartData: any;
  /**
  * @deprecated we use this.labels instead
  */
  secondChartLabels: any[] = new Array();
  labels: any[] = new Array();
  secondChartOptions: any;
  //#endregion scatter chart

  //#region Top delayed table
  topDelayCols: TableColumn[];
  topDelayData: any[] = [];
  topDelayLimit: number = 25;
  topDelayOffset: number = 0;
  topDelayPageLimitSizes = [{ value: 25, label: '25' }, { value: 50, label: '50' }, { value: 100, label: '100' }];
  topDelayPageNr: number = 1;
  topDelayMaxPageNr: number = 0;
  topDelayDisplayedDataCount: number = 0;
  topDelayTotalCount: number = 0;
  topDelayWaiting: boolean = true;
  //#endregion Top delayed table
  //#endregion Data members init

  constructor(public _translateService: TranslateService, private _analysisService: AnalysisService,
    private _router: Router, private _route: ActivatedRoute) { }

  //#region init component
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
      { header: 'DataTableColumns.accountNumber', field: 'accountNumber', align: 'left' },
      { header: 'DataTableColumns.accountName', field: 'accountName', align: 'left' },
      { header: 'DataTableColumns.accountType', field: 'accountType', align: 'center' },
      { header: 'DataTableColumns.documentType', field: 'documentType', align: 'center' },
      { header: 'DataTableColumns.documentTypeNew', field: 'documentTypeNewName', align: 'center' },
      { header: 'DataTableColumns.balance', field: 'balance', align: 'right' },
      { header: 'DataTableColumns.documentDate', field: 'documentDate', align: 'center' },
      { header: 'DataTableColumns.applicationDate', field: 'applicationDate', align: 'center' },
      { header: 'DataTableColumns.dueDate', field: 'dueDate', align: 'center' },
      { header: 'DueDateAnalysis.delay', field: 'delay', align: 'center' }
    ];

    this.topDelayCols = [
      { header: 'DataTableColumns.accountNumber', field: 'accountNumber', align: 'left' },
      { header: 'DataTableColumns.accountName', field: 'accountName', align: 'left' },
      { header: 'DueDateAnalysis.invoicesCount', field: 'totalCount', align: 'center' },
      { header: 'DueDateAnalysis.maxDelay', field: 'totalDelay', align: 'center' }
    ]

    this.getTopDelayedAccounts();

  } // end of ng on init
  //#endregion init

  //#region Top delay table
  getTopDelayedAccounts() {
    this.topDelayWaiting = true;
    this._analysisService
      .getDueDateTopDelayedAccounts(this.selectedOrganisation, this.selectedProcedure, this.topDelayLimit, this.topDelayOffset)
      .subscribe(res => {
        this.topDelayTotalCount = res.count[0]['FOUND_ROWS()'];
        this.topDelayData = res.data;
        this.topDelayDisplayedDataCount =
          this.topDelayTotalCount > this.topDelayLimit ? this.topDelayLimit : this.topDelayTotalCount;
        this.topDelayMaxPageNr = Math.ceil(this.topDelayTotalCount / this.topDelayLimit);
        this.topDelayWaiting = false;
      }, er => this.topDelayWaiting = false);
  }

  topDelayedLimitChange(e) {
    this.topDelayLimit = e.value;
    this.topDelayOffset = 0;
    this.topDelayPageNr = 1;
    this.getTopDelayedAccounts();
  }

  topDelayedfirstPage() {
    this.topDelayPageNr = 1;
    this.topDelayOffset = 0;
    this.getTopDelayedAccounts();
  }

  topDelayednextPage() {
    ++this.topDelayPageNr;
    if (this.topDelayPageNr > this.topDelayMaxPageNr) return;
    this.topDelayOffset += +this.topDelayLimit;
    this.getTopDelayedAccounts();
  }

  topDelayedlastPage() {
    this.topDelayPageNr = this.topDelayMaxPageNr;
    this.topDelayOffset = (this.topDelayPageNr - 1) * +this.topDelayLimit;
    this.getTopDelayedAccounts();
  }

  topDelayedpreviousPage() {
    --this.topDelayPageNr;
    if (this.topDelayPageNr <= 0) return;
    this.topDelayOffset -= +this.topDelayLimit;
    this.getTopDelayedAccounts();
  }

  topDelayedpageNrChange(value) {
    this.topDelayPageNr = (value && value.trim()) ? value : 1;
    this.topDelayOffset = (this.topDelayPageNr - 1) * this.topDelayLimit;
    this.getTopDelayedAccounts();
  }

  onTopDelayRowClicked(row) {
    this.selectedAccount = { ...row };
    let drtopdownLabelCollection = document.getElementsByClassName('p-dropdown-label');
    let dropdownLabel = drtopdownLabelCollection.item(0);
    dropdownLabel.innerHTML = row.accountNumber + '-' + row.accountName;
    this.waiting = true;
    let start = this.minDate?.toISOString().split('T')[0];
    let end = this.toDate?.toISOString().split('T')[0];
    this.getDetailsData(start, end);
    this.getData();
  }
  //#endregion Top delay table


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
          this.secondChartDataRecords = res.data.dueDateReference.recordsDelay;
          // this.secondChartLabels = res.data.dueDateReference.secondChartLabels;
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
          if (!this.delayData) {
            this.delayData = res.data.dueDateRefAccounts;

            this.delayData.forEach((account) => {
              account.accountName = account.accountName ?? 'No Name';
            });
          }

          if (this.selectedAccount && this.selectedAccount.accountNumber) {
            this.getDetailsData(start, end);
          }

          this.secondChartOptions = {
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  let value = tooltipItem.value;
                  let point = this.secondChartDataRecords[tooltipItem.index];
                  let label = point.label;
                  let accountNumber = point?.accountNumber;
                  let accountName = point?.accountName;
                  return label + ' :' + value + '  - ' + accountNumber + '/' + accountName;
                },
              },
            },
            scales: {
              yAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                }
              }],
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                },
                ticks: {
                  minRotation: 40,
                  maxRotation: 90,
                  callback: (label, index, values) => {
                    // let temp = label * this.rangeDays / values.length;
                    let tempDate = new Date(this.minDate);
                    tempDate.setDate(tempDate.getDate() + label);
                    label = tempDate.toLocaleString("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    });
                    return label;
                  },
                },
              }]
            },
          };
          this.secondChartData = {
            labels: this.labels,
            datasets: [{
              label: await this._translateService.get('DueDateAnalysis.secondChartLabel').toPromise(),
              borderColor: `rgb(100,100,255)`,
              data: this.secondChartDataRecords,
              fill: false,
            }]
          };
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

  /**
   * @deprecated there is no details in this release
   * @param row 
   */
  goToDetails(row) {
    this._router.navigate([
      '/dashboard/analysis/due-date/deails/' + row.accountNumber,
    ]);
  }

  //#region Details table 
  getDetailsData(start, end) {
    this._analysisService
      .getDueDateAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.selectedAccount.accountNumber, start, end, this.maxDelay)
      .subscribe(res => {
        this.waiting = false;
        this.detailsData = res.data.records;
        this.detailsDataTemp = res.data.records;
      });
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
  //#endregion Details table

  //#region PDF Report
  getRelevant() {
    return this._analysisService
      .getDueDateAnalysisDetails(this.selectedOrganisation, this.selectedProcedure,
        this.selectedAccount.accountNumber, null, null, this.maxDelay);
  }

  getColumns() {
    return this.detailsCols;
  }
  //#endregion PDF Report

}
