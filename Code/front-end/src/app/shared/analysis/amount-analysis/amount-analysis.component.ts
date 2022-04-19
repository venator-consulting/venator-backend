import { Component, OnInit } from '@angular/core';
import { AmountAnalysis } from '../../model/amountAnalysis';
import { AnalysisService } from '../../service/analysis.service';
import { MessageService } from 'primeng/api';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TableColumn } from '../../model/tableColumn';
import { TranslateService } from '@ngx-translate/core';

/**
 * @deprecated we now use AmountAnalysisPreComponent
 */
@Component({
  selector: 'app-amount-analysis',
  templateUrl: './amount-analysis.component.html',
  styleUrls: ['./amount-analysis.component.sass'],
})
export class AmountAnalysisComponent implements OnInit {
  data: AmountAnalysis[] = new Array();
  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  baseBalance = 500;
  basicOptions: any;
  basicData: any;
  cols: TableColumn[];
  waiting: boolean = false;
  procedureName: string = '';
  items: MenuItem[];
  home: MenuItem;

  // for filter
  searching: boolean;
  criteria: any = {};
  tempData: any[];

  constructor(
    public _translateService: TranslateService,
    private _messageService: MessageService,
    private _analysisService: AnalysisService,
    private _router: Router
  ) {}

  ngOnInit(): void {
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
    this.procedureName = localStorage.getItem('currentProcedureName');

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
        this.baseBalance,
    ]);
  }

  getData() {
    this.waiting = true;
    this._analysisService
      .getAmountAnalysis(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.baseBalance, 100
      )
      .subscribe(
        (res) => {
          this.data = res;
          this.data.forEach((account) => {
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
                `rgb(${(Math.random() * 25500) % 255}, ${
                  (Math.random() * 25500) % 255
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
