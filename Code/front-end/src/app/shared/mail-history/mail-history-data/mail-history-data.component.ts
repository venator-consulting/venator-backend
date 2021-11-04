import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { dataTableColumns } from '../../model/dataTableColumns';
import { MailHistory } from '../../model/mailHistory';
import { MailHistoryService } from '../../service/mail-history.service';

@Component({
  selector: 'app-mail-history-data',
  templateUrl: './mail-history-data.component.html',
  styleUrls: ['./mail-history-data.component.sass']
})
export class MailHistoryDataComponent implements OnInit {

  organisationId = +localStorage.getItem('organisationId');
  procedureId = +localStorage.getItem('currentProcedureId');
  data: MailHistory[] = new Array();
  tempData: MailHistory[] = new Array();
  waiting: boolean;
  cols: dataTableColumns[];

  criteria: any = {};
  filtersNo: number = 0;

  constructor(private _mailHistoryService: MailHistoryService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'email', field: 'email' },
      { header: 'sender', field: 'sender' },
      { header: 'subject', field: 'subject' },
      { header: 'body', field: 'body' },
      { header: 'bcc', field: 'bcc' },
      { header: 'cc', field: 'cc' },
      { header: 'creationTime', field: 'creationTime' },
      { header: 'messageDeliveryTime', field: 'messageDeliveryTime' },
      { header: 'numberOfAttachments', field: 'numberOfAttachments' },
    ];

    this.getData();
  }

  getData() {
    this._mailHistoryService
      .get(this.organisationId, this.procedureId)
      .subscribe(res => {
        this.waiting = false;
        this.data = res;
      }, er => this.waiting = false);
  }


  clearFilter() {
    this.criteria = {};
    this.data = [...this.tempData];
    this.filtersNo = 0;
  }

  filterChange(query, colName): void {
    this.waiting = true;
    for (const key in this.criteria) {
      if (!this.criteria[key]) {
        delete this.criteria[key];
      }
    }
    this.filtersNo = Object.keys(this.criteria).length;
    if (!query || !query?.toString()?.trim()) {
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element && element.length < 3) {
              this.data = this.tempData.filter(
                (value) => value[key]?.toString().toLowerCase() == element.toLowerCase()
              );
            } else {
              this.data = this.tempData.filter((value) =>
                value[key]?.toString().toLowerCase().includes(element.toLowerCase())
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
    this.waiting = false;
  }

}
