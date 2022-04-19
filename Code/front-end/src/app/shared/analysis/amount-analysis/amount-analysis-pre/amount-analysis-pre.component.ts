import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';
import { AmountAnalysis } from 'src/app/shared/model/amountAnalysis';
import { Bar } from 'src/app/shared/model/bar';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { AnalysisService } from 'src/app/shared/service/analysis.service';

@Component({
  selector: 'app-amount-analysis-pre',
  templateUrl: './amount-analysis-pre.component.html',
  styleUrls: ['./amount-analysis-pre.component.sass']
})
export class AmountAnalysisPreComponent implements OnInit {

  //#region  vars init
  // main data for the table
  data: AmountAnalysis[] = new Array();

  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  // for the filter
  baseBalance = 0;
  mode = 100;
  // chart configuration
  basicOptions: any;
  // chart data
  basicData: any;
  //  table columns
  cols: TableColumn[];
  // for spinner
  waiting: boolean = false;
  // for breadcrumb
  items: MenuItem[];
  home: MenuItem;

  // for filter
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  //#endregion vars init

  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _analysisService: AnalysisService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    // set base balance default value to 500
    this.baseBalance = +this._route.snapshot.paramMap.get('baseBalance') ?? 500;
    if (!this.baseBalance || isNaN(this.baseBalance)) this.baseBalance = 500;

    this.mode = +this._route.snapshot.paramMap.get('mode') ?? 100;
    if (!this.mode || isNaN(this.mode)) this.mode = 100;

    this._translateService.get('AmountAnalysis').subscribe((elem) => {
      this.items = [
        { label: elem.label, routerLink: '/dashboard/analysis/amount' },
      ];
      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
    });

    this.waiting = true;
    this.basicOptions = {
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'Count',
            ticks: {
              min: 0,
            },
          },
        ],
      },
    };

    this.cols = [
      {
        header: 'AmountAnalysis.accountNumber',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'AmountAnalysis.accountName',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'AmountAnalysis.NumberOfPostings',
        field: 'totlaCount',
        align: 'center',
      },
      {
        header: 'AmountAnalysis.totalBalance',
        field: 'totalBalance',
        align: 'right',
      },
    ];

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');

    this.getData();
  } // end of ng on init

  goToDetails(row: AmountAnalysis) {
    this._router.navigate([
      '/dashboard/analysis/amount/' +
      this.selectedOrganisation +
      '/' +
      this.selectedProcedure +
      '/' +
      row.accountNumber +
      '/' +
      this.baseBalance +
      '/' +
      this.mode,
    ]);
  }

  getData() {
    this.waiting = true;
    this._analysisService
      .getAmountAnalysis(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.baseBalance,
        this.mode
      )
      .subscribe(
        (res) => {
          this.data = res;
          this.data.forEach((account) => {
            // cast account number to number for table sorting
            let accountNumber = parseInt(account.accountNumber.toString(), 10);
            account.accountNumber = isNaN(accountNumber)
              ? account.accountNumber
              : accountNumber;
          });
          this.tempData = [...this.data];
          this.basicData = {
            labels: ['Total Count'],
            datasets: new Array(),
          };
          for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            this.basicData.datasets.push(
              new Bar(
                element.accountName,
                `rgb(${(Math.random() * 25500) % 255}, ${(Math.random() * 25500) % 255
                },${(Math.random() * 25500) % 255})`,
                element.totlaCount
              )
            );
          }
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  filterChange(query, colName): void {
    this.searching = true;
    if (!query || !query?.toString()?.trim()) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.data = this.tempData.filter(
                (value) => value[key]?.toLowerCase() == element.toLowerCase()
              );
            } else {
              this.data = this.tempData.filter((value) =>
                value[key]?.toLowerCase().includes(element.toLowerCase())
              );
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
            this.data = this.data.filter(
              (value) =>
                value[key]?.toString().toLowerCase() == element.toLowerCase()
            );
          } else {
            this.data = this.data.filter((value) =>
              value[key]
                ?.toString()
                .toLowerCase()
                .includes(element.toLowerCase())
            );
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }

}
