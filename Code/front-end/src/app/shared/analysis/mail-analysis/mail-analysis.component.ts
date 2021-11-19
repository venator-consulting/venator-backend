import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Bar } from '../../model/bar';
import { MailAnalysis, MailAnalysisBySender, MailHistory } from '../../model/mailHistory';
import { TableColumn } from '../../model/tableColumn';
import { MailHistoryService } from '../../service/mail-history.service';

@Component({
  selector: 'app-mail-analysis',
  templateUrl: './mail-analysis.component.html',
  styleUrls: ['./mail-analysis.component.sass']
})
export class MailAnalysisComponent implements OnInit {

  orgId: number;
  prcId: number;
  waiting: boolean;
  data: MailAnalysis[] = new Array();
  tempdata: MailAnalysis[] = new Array();
  basicData: any;
  basicOptions: any;
  cols: TableColumn[];
  labels: any[];
  RecordsData: any[];
  wordSenderData: any[];
  criteria: any = {};

  bySender: boolean = false;

  // for Sender
  waitingSender: boolean;
  dataSender: MailAnalysisBySender[] = new Array();
  tempDataSender: MailAnalysisBySender[] = new Array();
  basicDataSender: any;
  basicOptionsSender: any;
  colsSender: TableColumn[];
  labelsSender: any[];
  RecordsDataSender: any[];
  wordSenderDataSender: any[];
  criteriaSender: any = {};

  items: MenuItem[];
  home: MenuItem;

  constructor(private _mailService: MailHistoryService, private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.bySender = this._route.snapshot.paramMap.get('by-word') ? false : true;
    this.items = [{ label: 'Email Analysis', routerLink: '/dashboard/analysis/mail' }];
    this.home = { icon: 'pi pi-home', label: ' Data', routerLink: '/dashboard/shared/data' };

    this.basicOptions = {
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

    this.basicOptionsSender = {
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

    this.cols = [
      {
        header: 'Key Word',
        field: 'word',
        align: 'left',
      },
      {
        header: "Senders' Count",
        field: 'senderCount',
        align: 'center',
      },
      {
        header: "Emails' Count",
        field: 'recordsCount',
        align: 'center',
      },
    ];

    this.colsSender = [
      {
        header: 'Sender Email',
        field: 'email',
        align: 'left',
      },
      {
        header: "Senders Name",
        field: 'sender',
        align: 'center',
      },
      {
        header: "Emails' Count",
        field: 'totlaCount',
        align: 'center',
      },
    ];

    this.getDateBySender();
    this.getDataByWord();
  }

  getDataByWord() {
    this._mailService.getMailAnalysisWrod(this.orgId, this.prcId)
      .subscribe(res => {
        this.data = res;
        this.waiting = false;
        this.labels = new Array();
        this.wordSenderData = new Array();
        this.RecordsData = new Array();
        this.data.forEach((word) => {
          let senderCount = parseInt(word.senderCount.toString(), 10);
          word.senderCount = isNaN(senderCount)
            ? word.senderCount
            : senderCount;
          this.labels.push(word.word);
          this.wordSenderData.push(word.senderCount);
          this.RecordsData.push(word.recordsCount);
        });

        this.tempdata = this.data;

        this.basicData = {
          labels: this.labels,
          datasets: [
            {
              type: 'bar',
              label: 'Count of Senders',
              backgroundColor: '#88FF88',
              borderColor: '#58dF58',
              borderWidth: 2,
              fill: true,
              data: this.wordSenderData,
            },
            {
              type: 'bar',
              label: 'Count of mails',
              backgroundColor: '#E5A58B',
              borderColor: '#E5A58B',
              borderWidth: 2,
              fill: true,
              data: this.RecordsData,
            },
          ],
        };
      }, er => this.waiting = false);
  }

  getDateBySender() {
    this._mailService
      .getMailAnalysisSender(this.orgId, this.prcId)
      .subscribe(res => {
        this.dataSender = res;
        this.tempDataSender = res;
        this.basicDataSender = {
          labels: ['Total Count'],
          datasets: new Array(),
        };
        for (let i = 0; i < this.dataSender.length; i++) {
          const element = this.dataSender[i];
          this.basicDataSender.datasets.push(
            new Bar(
              element.sender,
              `rgb(${(Math.random() * 25500) % 255}, ${(Math.random() * 25500) % 255
              },${(Math.random() * 25500) % 255})`,
              element.totlaCount
            )
          );
        }
        this.waitingSender = false;
      }, er => this.waitingSender = false);
  }

  filterChange(query, colName): void {
    this.waiting = true;
    // debugger;
    if (!query || !query?.toString()?.trim()) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempdata];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.data = this.tempdata.filter(
                (value) => value[key]?.toLowerCase() == element.toLowerCase()
              );
            } else {
              this.data = this.tempdata.filter((value) =>
                value[key]?.toLowerCase().includes(element.toLowerCase())
              );
            }
          }
        }
      }
    } else {
      this.data = [...this.tempdata];
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
      } // end of for each criteriaWord field
    }
    this.waiting = false;
  }

  filterChangeSender(query, colName): void {
    this.waitingSender = true;
    // debugger;
    if (!query || !query?.toString()?.trim()) {
      delete this.criteriaSender[colName];
      if (Object.keys(this.criteriaSender).length < 1) {
        this.dataSender = [...this.tempDataSender];
      } else {
        for (const key in this.criteriaSender) {
          if (Object.prototype.hasOwnProperty.call(this.criteriaSender, key)) {
            const element = this.criteriaSender[key];
            if (element.length < 3) {
              this.dataSender = this.tempDataSender.filter(
                (value) => value[key]?.toLowerCase() == element.toLowerCase()
              );
            } else {
              this.dataSender = this.tempDataSender.filter((value) =>
                value[key]?.toLowerCase().includes(element.toLowerCase())
              );
            }
          }
        }
      }
    } else {
      this.dataSender = [...this.tempDataSender];
      for (const key in this.criteriaSender) {
        if (Object.prototype.hasOwnProperty.call(this.criteriaSender, key)) {
          const element = this.criteriaSender[key];
          if (element.length < 3) {
            this.dataSender = this.dataSender.filter(
              (value) =>
                value[key]?.toString().toLowerCase() == element.toLowerCase()
            );
          } else {
            this.dataSender = this.dataSender.filter((value) =>
              value[key]
                ?.toString()
                .toLowerCase()
                .includes(element.toLowerCase())
            );
          }
        }
      } // end of for each criteriaSender field
    }
    this.waitingSender = false;
  }

  goToDetailsWord(row: MailAnalysis) {
    this._router.navigate(['/dashboard/analysis/mail/word/' + row.word]);
  }

  goToDetailsSender(row: MailAnalysisBySender) {
    this._router.navigate(['/dashboard/analysis/mail/sender/' + row.email]);
  }

}
