import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../service/analysis.service';
import { Bar } from '../../model/bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TextAnalysis } from '../../model/textAnalysis';
import { MenuItem, MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { TableColumn } from '../../model/tableColumn';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.sass'],
})
export class TextAnalysisComponent implements OnInit {
  byAccount: boolean = true;
  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  basicOptions: any;
  basicOptionsWords: any;
  basicData: any;
  basicDataWord: any;
  data: TextAnalysis[] = new Array();
  dataWord: { recordsCount: number; accountsCount: number; word: string }[] =
    new Array();
  colsWord: TableColumn[];
  cols: TableColumn[];
  waiting: boolean = false;
  procedureName: any;
  items: MenuItem[];
  home: MenuItem;

  // for filter
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  tempDataWord: { recordsCount: number; accountsCount: number; word: string }[];
  labelsWord: any[];
  wordAccountsData: any[];
  wordRecordsData: any[];
  criteriaWord: any = {};

  constructor(
    private _messageService: MessageService,
    private _analysisService: AnalysisService,
    private _router: Router,
    private prcService: ProcedureService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.items = [
      // { label: 'Analysis' },
      { label: 'Text Analysis', routerLink: '/analysis/text' },
    ];

    this.home = {
      icon: 'pi pi-home',
      label: ' Data',
      routerLink: '/shared/data',
    };

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

    this.basicOptionsWords = {
      responsive: true,
      legend: {
        display: true,
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

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.byAccount = this._route.snapshot.paramMap.get('by-word') ? false : true;
    this.cols = [
      {
        header: 'AmountAnalysis.accountNumber',
        field: 'accountNumber',
        align: 'center',
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
    ];

    this.colsWord = [
      {
        header: 'Key Word',
        field: 'word',
        align: 'center',
      },
      {
        header: "Accounts' Count",
        field: 'accountsCount',
        align: 'center',
      },
      {
        header: "Records' Count",
        field: 'recordsCount',
        align: 'center',
      },
    ];

    this._analysisService
      .getTextAnalysis(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(
        (res) => {
          this.data = res;
          this.tempData = res;
          this.data.forEach((account) => {
            let accountNumber = parseInt(account.accountNumber.toString(), 10);
            account.accountNumber = isNaN(accountNumber)
              ? account.accountNumber
              : accountNumber;
          });

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

          // get by words in background and after getting by accounts

          this._analysisService
            .getTextAnalysisWord(
              this.selectedOrganisation,
              this.selectedProcedure
            )
            .subscribe(
              (res) => {
                this.dataWord = res;
                this.tempDataWord = res;
                this.labelsWord = new Array();
                this.wordAccountsData = new Array();
                this.wordRecordsData = new Array();
                this.dataWord.forEach((word) => {
                  let accountsCount = parseInt(
                    word.accountsCount.toString(),
                    10
                  );
                  word.accountsCount = isNaN(accountsCount)
                    ? word.accountsCount
                    : accountsCount;
                  this.labelsWord.push(word.word);
                  this.wordAccountsData.push(word.accountsCount);
                  this.wordRecordsData.push(word.recordsCount);
                });

                this.basicDataWord = {
                  labels: this.labelsWord,
                  datasets: [
                    {
                      type: 'bar',
                      label: 'Count of Accounts',
                      backgroundColor: '#88FF88',
                      borderColor: '#58dF58',
                      borderWidth: 2,
                      fill: true,
                      data: this.wordAccountsData,
                    },
                    {
                      type: 'bar',
                      label: 'Count of records',
                      backgroundColor: '#E5A58B',
                      borderColor: '#E5A58B',
                      borderWidth: 2,
                      fill: true,
                      data: this.wordRecordsData,
                    },
                  ],
                };
              },
              (er) => {}
            );
        },
        (er) => {
          this._messageService.add({
            severity: 'error',
            summary: 'ERROR',
            life: 10000,
            detail: 'There is an error occured please try again',
          });
        }
      );
  } // end of ng on init

  goToDetails(row: TextAnalysis) {
    this._router.navigate([
      '/analysis/text/' +
        this.selectedOrganisation +
        '/' +
        this.selectedProcedure +
        '/' +
        row.accountNumber,
    ]);
  }

  goToDetailsWord(row) {
    this._router.navigate([
      '/analysis/text/word/' +
        row.word,
    ]);
  }

  filterChange(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query) {
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


  filterChangeWord(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query) {
      delete this.criteriaWord[colName];
      if (Object.keys(this.criteriaWord).length < 1) {
        this.dataWord = [...this.tempDataWord];
      } else {
        for (const key in this.criteriaWord) {
          if (Object.prototype.hasOwnProperty.call(this.criteriaWord, key)) {
            const element = this.criteriaWord[key];
            if (element.length < 3) {
              this.dataWord = this.tempDataWord.filter(
                (value) => value[key]?.toLowerCase() == element.toLowerCase()
              );
            } else {
              this.dataWord = this.tempDataWord.filter((value) =>
                value[key]?.toLowerCase().includes(element.toLowerCase())
              );
            }
          }
        }
      }
    } else {
      this.dataWord = [...this.tempDataWord];
      for (const key in this.criteriaWord) {
        if (Object.prototype.hasOwnProperty.call(this.criteriaWord, key)) {
          const element = this.criteriaWord[key];
          if (element.length < 3) {
            this.dataWord = this.dataWord.filter(
              (value) =>
                value[key]?.toString().toLowerCase() == element.toLowerCase()
            );
          } else {
            this.dataWord = this.dataWord.filter((value) =>
              value[key]
                ?.toString()
                .toLowerCase()
                .includes(element.toLowerCase())
            );
          }
        }
      } // end of for each criteriaWord field
    }
    this.searching = false;
  }

}
