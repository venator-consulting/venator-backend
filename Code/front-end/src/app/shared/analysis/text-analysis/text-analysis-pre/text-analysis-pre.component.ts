import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { TextAnalysis } from 'src/app/shared/model/textAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';

@Component({
  selector: 'app-text-analysis-pre',
  templateUrl: './text-analysis-pre.component.html',
  styleUrls: ['./text-analysis-pre.component.sass'],
  providers: [DatePipe],
})
export class TextAnalysisPreComponent implements OnInit {


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
  dateRanges: { label, value }[] = new Array();
  selectedRangeString: string = '';

  constructor(private _analysisService: AnalysisService,
    private _router: Router,
    private prcService: ProcedureService,
    private _route: ActivatedRoute,
    private datepipe: DatePipe,) { }

  ngOnInit(): void {

    this.items = [
      // { label: 'Analysis' },
      { label: 'Text Analysis', routerLink: '/dashboard/analysis/text' },
    ];

    this.home = {
      icon: 'pi pi-home',
      label: ' Data',
      routerLink: '/dashboard/shared/data',
    };

    this.waiting = true;

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

    this.colsWord = [
      {
        header: 'Key Word',
        field: 'word',
        align: 'left',
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
      .getTextAnalysisWordCalcDateRange(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        res.forEach(range => {
          this.dateRanges.push({
            label: this.datepipe.transform(range.fromDate, 'yyyy.MM.dd') + ' - ' + this.datepipe.transform(range.toDate, 'yyyy.MM.dd'),
            value: {
              fromDate: this.datepipe.transform(range.fromDate, 'yyyy.MM.dd'),
              toDate: this.datepipe.transform(range.toDate, 'yyyy.MM.dd')
            }
          });
        });
      }, er => this.waiting = false
      );

  } // end of ng on init

  dateChangedHandler(e) {
    this.getData(e.value.fromDate, e.value.toDate);
  }

  getData(fromDate, toDate) {
    this._analysisService
      .getTextAnalysisWordCalcData(
        this.selectedOrganisation,
        this.selectedProcedure,
        fromDate,
        toDate
      )
      .subscribe(
        (res) => {
          this.waiting = false;
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
        (er) => { this.waiting = false }
      );
  }

  goToDetailsWord(row) {
    this._router.navigate([
      '/dashboard/analysis/text/word/' +
      row.word,
    ]);
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
