import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Bar } from '../../model/bar';
import { MailAnalysis, MailAnalysisBySender, MailHistory, MailsOptions } from '../../model/mailHistory';
import { TableColumn } from '../../model/tableColumn';
import { MailHistoryService } from '../../service/mail-history.service';
import { TranslateService } from '@ngx-translate/core';

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
  byWordSec: string = "";
  bySenderSec: string = "";

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

  mails: MailsOptions[];
  originalVal: MailHistory = new MailHistory();

  constructor(
    public _translateService: TranslateService,
    private _mailService: MailHistoryService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messageService: MessageService) { }

  ngOnInit(): void {
    this._translateService.get('MailAnalysis').subscribe((elem) => {
      this.items = [
        { label: elem.label, routerLink: '/dashboard/analysis/mail' },
      ];
      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
      this.bySenderSec = elem.bySender;
      this.byWordSec = elem.byWord
    });
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.bySender = this._route.snapshot.paramMap.get('by-word') ? false : true;

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
      { header: 'MailAnalysis.keyword', field: 'word', align: 'left', },
      { header: "MailAnalysis.senderCount", field: 'senderCount', align: 'center', },
      { header: "MailAnalysis.emailsCount", field: 'recordsCount', align: 'center', },
    ];

    this.colsSender = [
      { header: 'MailAnalysis.email', field: 'email', align: 'left', },
      { header: "MailAnalysis.sender", field: 'sender', align: 'center', },
      { header: "MailAnalysis.totlaCount", field: 'totlaCount', align: 'center', },
      { header: 'MailAnalysis.accountEmail', field: 'accountEmail', width: '300' },
    ];

    this.getDateBySender();
    this.getDataByWord();
    this.getCreditorsMails();
  }

  getCreditorsMails() {
    this._mailService.getCreditorsMails(this.orgId, this.prcId)
      .subscribe(res => {
        this.mails = res.map(rec => {
          return {
            accountId: rec.id,
            accountNumber: rec.accountNumber,
            accountName: rec.accountName,
            accountEmail: rec.email
          };
        });
      }, er => this.waiting = false);
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

  emailChangedHandler(e, row: MailHistory) {
    let id = e.value;
    let selected = this.mails.find(rec => rec.accountId == id);
    row.accountId = selected.accountId;
    row.accountEmail = selected.accountEmail;
    row.accountName = selected.accountName;
    row.accountNumber = selected.accountNumber;
  }


  editRow(row) {
    this.dataSender.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalVal = { ...row };
  }

  cancel(row) {
    row = { ...this.originalVal };
    row.isEditable = false;
    let i = this.dataSender.findIndex(rec => rec.email == row.email);
    this.dataSender[i] = {...row};
    this.dataSender = [...this.dataSender];
  }

  reset(row: MailHistory) {
    this.waiting = true;
    row.accountId = null;
    row.accountEmail = null;
    row.accountName = null;
    row.accountNumber = null;
    this._mailService
      .updateEmail(this.orgId, this.prcId, row)
      .subscribe(res => {
        row.isEditable = false;
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'DONE!', detail: `updated successfully` });
      }, er => {
        this.waiting = false;
      });
  }


  save(row, update = true) {
    this.waiting = true;
    this._mailService
      .updateEmail(this.orgId, this.prcId, row)
      .subscribe(res => {
        row.isEditable = false;
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'DONE!', detail: `updated successfully` });
      }, er => {
        this.waiting = false;
      });
  }

}
