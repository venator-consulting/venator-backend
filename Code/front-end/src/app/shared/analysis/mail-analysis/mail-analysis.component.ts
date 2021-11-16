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
  criteria: any = {};

  items: MenuItem[];
  home: MenuItem;

  constructor(private _mailService: MailHistoryService, private _router : Router) { }

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
        header: "Emails' Count",
        field: 'totalCount',
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
        this.RecordsData = new Array();
        this.data.forEach((word) => {
          let totalCount = parseInt(
            word.totalCount.toString(),
            10
          );
          word.totalCount = isNaN(totalCount)
            ? word.totalCount
            : totalCount;
          this.labels.push(word.word);
          this.RecordsData.push(word.totalCount);
        });

        this.tempdata = this.data;

        this.basicData = {
          labels: this.labels,
          datasets: [
            {
              type: 'bar',
              label: 'Count of records',
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
