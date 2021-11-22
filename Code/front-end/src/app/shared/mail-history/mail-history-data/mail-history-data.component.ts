import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { dataTableColumns } from '../../model/dataTableColumns';
import { Attachment, MailHistory } from '../../model/mailHistory';
import { MailHistoryService } from '../../service/mail-history.service';
import * as FileSaver from 'file-saver';
import { ExportDataService } from '../../service/export-data.service';
import { Word } from '../../model/word';

@Component({
  selector: 'app-mail-history-data',
  templateUrl: './mail-history-data.component.html',
  styleUrls: ['./mail-history-data.component.sass'],
  providers: [DatePipe]
})
export class MailHistoryDataComponent implements OnInit {

  organisationId = +localStorage.getItem('organisationId');
  procedureId = +localStorage.getItem('currentProcedureId');
  data: MailHistory[] = new Array();
  tempData: MailHistory[] = new Array();
  waiting: boolean;
  cols: dataTableColumns[];

  filtersNo: number = 0;
  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  limit: number = 25;
  pageNr: number = 1;
  maxPageNr: number = 0;
  displayedDataCount = 0;
  criteria: any = {
    limit: this.limit,
    offset: 0,
    orderBy: 'id',
    sortOrder: 1,
  };
  totalCount: number = 0;
  completeWords: Word[] = new Array();

  attachments: Attachment[] = new Array();
  body: string;
  displayDialog: boolean = false;
  displayAttachDialog: boolean = false;

  constructor(private _mailHistoryService: MailHistoryService, private _messageService: MessageService,
    private datepipe: DatePipe, private _exportDataService: ExportDataService) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'MailAnalysis.email', field: 'email' },
      { header: 'MailAnalysis.sender', field: 'sender' },
      // { header: 'MailAnalysis.rcvEmail', field: 'rcvEmail' },
      { header: 'MailAnalysis.rcvName', field: 'rcvName' },
      { header: 'MailAnalysis.subject', field: 'subject' },
      { header: 'MailAnalysis.body', field: 'body' },
      { header: 'MailAnalysis.bcc', field: 'bcc' },
      { header: 'MailAnalysis.cc', field: 'cc' },
      { header: 'MailAnalysis.creationTime', field: 'creationTime' },
      { header: 'MailAnalysis.messageDeliveryTime', field: 'messageDeliveryTime' },
      { header: 'MailAnalysis.numberOfAttachments', field: 'numberOfAttachments' },
      { header: 'MailAnalysis.actions', field: 'actions' },
    ];


    this.getData();
  }

  getData() {
    this.waiting = true;
    let tempCriteria = { ...this.criteria };
    for (const key in tempCriteria) {
      if (!tempCriteria[key] && key != 'offset') {
        delete tempCriteria[key];
      }
      if (key.includes('Time'))
        tempCriteria[key] = this.datepipe.transform(tempCriteria[key], 'yyyy.MM.dd');
    }
    this.filtersNo = Object.keys(tempCriteria).length - 4;
    this._mailHistoryService
      .get(this.organisationId, this.procedureId, tempCriteria)
      .subscribe(res => {
        this.waiting = false;
        this.data = res.rows;
        this.totalCount = res.count;
        this.displayedDataCount = this.totalCount > this.limit ? this.limit : this.totalCount;
        this.maxPageNr = Math.ceil(this.totalCount / this.limit);
      }, er => this.waiting = false);
  }


  sort(event: LazyLoadEvent) {
    this.criteria.orderBy = event.sortField ? event.sortField : 'id';
    this.criteria.sortOrder = event.sortOrder;
    this.pageNr = 1;
    this.criteria.offset = 0;
    if (!this.waiting) this.getData();
  }

  filterChange(value, field) {
    this.pageNr = 1;
    this.criteria.offset = 0;
    this.completeWords = new Array();
    this.getData();
  }

  submitFilter() {
    this.waiting = true;
    this.getData();
  }

  clearFilter() {
    this.criteria = {
      limit: this.limit,
      offset: 0,
    };
    this.filtersNo = 0;
    this.pageNr = 1;
    this.getData();
  }

  nextPage() {
    ++this.pageNr;
    if (this.pageNr > this.maxPageNr) return;
    this.waiting = true;
    if (!this.criteria.offset) {
      this.criteria.offset = 0;
    }
    this.criteria.offset += +this.limit;

    this.getData();
  }

  lastPage() {
    this.pageNr = this.maxPageNr;
    this.criteria.offset = (this.pageNr - 1) * +this.limit;
    this.waiting = true;
    this.getData();
  }

  previousPage() {
    --this.pageNr;
    if (this.pageNr <= 0) return;
    this.waiting = true;
    this.criteria.offset -= +this.limit;

    this.getData();
  }

  firstPage() {
    this.pageNr = 1;
    this.waiting = true;
    this.criteria.offset = 0;
    this.getData();
  }

  pageNrChange(value) {
    this.waiting = true;
    this.pageNr = (value && value.trim()) ? value : 1;
    this.criteria.offset = (this.pageNr - 1) * this.limit;
    this.getData();
  }

  limitChange(e) {
    this.limit = e.value;
    this.criteria.offset = 0;
    this.criteria.limit = this.limit;
    this.pageNr = 1;
    this.waiting = true;
    this.getData();
  }

  exportXLSX() {
    this.waiting = true;
    const lang = localStorage.getItem('lang');
    let criteriaWithLang = { ...this.criteria };
    // criteriaWithLang['lang'] = lang;
    criteriaWithLang['lang'] = lang ?? 'de';
    this._exportDataService
      .exportMailXLSX(
        'email_history',
        this.organisationId,
        this.procedureId,
        criteriaWithLang
      )
      .subscribe((res) => {
        this.waiting = false;
        this.saveAsExcelFile(res, 'email_history');
        // window.open(url.toString(), '_blank');
      },
        (err) => { this.waiting = false; }
      );
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

  hoverOnBody(event, data: string) {
    this.body = data;
    this.displayDialog = true;
    // this.overlayPanel.toggle(event);
  }

  attachDetailes(row: MailHistory) {
    this.waiting = true;
    this._mailHistoryService
      .getAttachments(this.organisationId, this.procedureId, row.id)
      .subscribe(res => {
        this.attachments = res;
        this.waiting = false;
        this.displayAttachDialog = true;
      }, er => this.waiting = false);
  }

  downloadAttach(attatch: Attachment) {
    this._mailHistoryService
      .downloadAttachment(+this.organisationId, +this.procedureId, +attatch.id)
      .subscribe(res => {
        this.waiting = false;
        this.saveAttachment(res, attatch.originalName, attatch.mimeTag);
      });
  }

  saveAttachment(buffer: any, fileName: string, type: string): void {
    let EXCEL_TYPE = type ?? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const d: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(d, new Date().getTime() + '_' + fileName);
  }

}
