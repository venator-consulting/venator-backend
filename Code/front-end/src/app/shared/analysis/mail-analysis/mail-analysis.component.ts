import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MailAnalysis } from '../../model/mailHistory';
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

  items: MenuItem[];
  home: MenuItem;

  constructor(private _mailService: MailHistoryService, private _router: Router) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');

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

    this.getData();
  }

  getData() {
    this._mailService.getMailAnalysis(this.orgId, this.prcId)
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

  goToDetails(row) {
    this._router.navigate([
      '/dashboard/analysis/mail/word/' +
      row.word,
    ]);
  }

}
