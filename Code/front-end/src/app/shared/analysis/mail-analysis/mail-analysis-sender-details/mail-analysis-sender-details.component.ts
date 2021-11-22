import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Attachment, MailHistory } from 'src/app/shared/model/mailHistory';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { MailHistoryService } from 'src/app/shared/service/mail-history.service';
import * as FileSaver from 'file-saver';
import { ExportDataService } from 'src/app/shared/service/export-data.service';

@Component({
  selector: 'app-mail-analysis-sender-details',
  templateUrl: './mail-analysis-sender-details.component.html',
  styleUrls: ['./mail-analysis-sender-details.component.sass']
})
export class MailAnalysisSenderDetailsComponent implements OnInit {

  orgId: number;
  prcId: number;
  waiting: boolean = true;
  data: MailHistory[] = new Array();
  email: string;
  cols: TableColumn[];
  frozenCols: TableColumn[];
  tempData: any[];
  criteria: any = {};
  items: MenuItem[];
  home: MenuItem;
  filtersNo: number = 0;
  selected: MailHistory[] = new Array();

  body: string;
  displayDialog: boolean = false;
  displayAttachDialog: boolean = false;

  pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 }];
  backCriteria: any = {};
  filtersBackNo: number = 0;
  allRecordData: MailHistory[];
  totalCount: number;
  displayedDataCount: number;
  maxPageNr: number;
  limit: number = 25;
  pageNr: number = 1;
  detailsOptions: { name: string; value: number }[];
  detailsOption: number = 1;
  attachments: Attachment[] = new Array();

  constructor(private _mailService: MailHistoryService, private _router: Router,
    private _translateService: TranslateService, private _exportDataService: ExportDataService,
    private _route: ActivatedRoute, private _messageService: MessageService) { }

  ngOnInit(): void {
    this._translateService.get('MailAnalysis').subscribe((elem) => {
      this.items = [{
        label: elem.label,
        routerLink: '/dashboard/analysis/mail',
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Details',
        routerLink: this._router.url,
        routerLinkActiveOptions: { exact: true },
      },
    ];
    this.home = {
      icon: 'pi pi-home',
      label: elem.data,
      routerLink: '/dashboard/shared/data',
    };
    this.detailsOptions = [
      { name: elem.sysRelevants, value: 1 },
      { name: elem.marked, value: 2 },
      { name: elem.all, value: 3 },
    ];
  });

    this.orgId = this.orgId ? this.orgId : +localStorage.getItem('organisationId');
    this.prcId = this.prcId ? this.prcId : +localStorage.getItem('currentProcedureId');
    this.email = this._route.snapshot.paramMap.get('mail');



    this.frozenCols = [
      {
        header: '',
        field: 'senderRelevant',
        width: '6',
        align: 'center'
      },
      {
        header: 'MailAnalysis.comment',
        field: 'senderComment',
        width: '35',
        align: 'left'
      }
    ];

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
    this._mailService.getMailDetailsAnalysisSender(this.orgId, this.prcId, this.email)
      .subscribe(res => {
        this.data = res;
        this.waiting = false;
        this.tempData = res;
      }, er => this.waiting = false);
  }

  goBack() {
    this._router.navigate(['/dashboard/analysis/mail']);
  }


  async exportExcel() {

    let translatedData = [];
    for (let index = 0; index < this.data.length; index++) {
      let element = this.data[index];
      let translatedRecord = {};
      for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key) && key != 'id' && key != 'procedureId' && key != 'createdAt' && key != 'updatedAt') {
          let translatedKey = await this._translateService.get('MailAnalysis.' + key).toPromise();
          translatedRecord[translatedKey] = element[key];

          // formatting
          if (element[key] && (key == 'currency amount')) {
            try {
              let temp = Number.parseFloat(element[key].toString());
              if (!Number.isNaN(temp)) {
                translatedRecord[translatedKey] = temp.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
              }

            } catch (e) {
              // do nothing
            }
          } else if (element[key] &&
            (key == 'creationTime' || key == 'messageDeliveryTime')) {
            try {
              let temp = new Date(Date.parse(element[key].toString()));
              if (temp instanceof Date)
                translatedRecord[translatedKey] = temp.toLocaleDateString('de-DE', {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                });
            } catch (e) {

            }

          }
          // end of formatting

        }
      }
      translatedData.push(translatedRecord);
    }

    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(translatedData);
      const workbook = { Sheets: { 'mail_analysis': worksheet }, SheetNames: ['mail_analysis'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "mail_analysis");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const d: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    // FileSaver.saveAs(file);
    FileSaver.saveAs(d, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  clearFilter() {
    this.criteria = {};
    this.data = [...this.tempData];
    this.filtersNo = 0;
  }


  filterChange(query, colName): void {
    this.waiting = true;
    if (!query || !query?.toString()?.trim()) {
      delete this.criteria[colName];
      this.filtersNo--;
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
        this.filtersNo = 0;
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (key === 'creationTime' || key === 'messageDeliveryTime') {
              if (element) this.data = this.tempData.filter((value) => {
                let d = new Date(value[key]);
                d.setHours(0, 0, 0, 0);
                return d.getTime() == element.getTime();
              });
            } else {
              if (element.length < 3) {
                this.data = this.tempData.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
              } else {
                this.data = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
              }
            }
          }
        }
      }
    } else {
      this.filtersNo++;
      this.data = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (key === 'creationTime' || key === 'messageDeliveryTime') {
            if (element) this.data = this.tempData.filter((value) => {
              let d = new Date(value[key]);
              d.setHours(0, 0, 0, 0);
              return d.getTime() == element.getTime();
            });
          } else {
            if (element.length < 3) {
              this.data = this.data.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
            } else {
              this.data = this.data.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
            }
          }
        }
      } // end of for each criteria field
    }
    this.waiting = false;
  }


  hoverOnBody(event, data: string) {
    this.body = data;
    this.displayDialog = true;
    // this.overlayPanel.toggle(event);
  }


  attachDetailes(row: MailHistory) {
    this.waiting = true;
    this._mailService
      .getAttachments(this.orgId, this.prcId, row.id)
      .subscribe(res => {
        this.attachments = res;
        this.waiting = false;
        this.displayAttachDialog = true;
      }, er => this.waiting = false);
  }

  downloadAttach(attatch: Attachment) {
    this._mailService
      .downloadAttachment(+this.orgId, +this.prcId, +attatch.id)
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


  selectRow(row: MailHistory): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    if (row.senderRelevant) {
      row.senderRelevant = false;
      row.senderComment = '';
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['senderRelevant'] = false;
        this.selected[index]['senderComment'] = '';
      }
    } else {
      row.senderRelevant = true;
      if (index == -1) {
        this.selected.push(row);
      } else {
        // update the old one
        this.selected[index]['senderRelevant'] = true;
      }
    }
  }

  commentChanged(row: MailHistory): void {
    const index = this.selected.map((item) => item.id).indexOf(row.id);
    row.senderRelevant = true;
    if (index == -1) {
      this.selected.push(row);
    } else {
      // update the old one
      this.selected[index]['senderRelevant'] = true;
      this.selected[index]['senderComment'] = row.senderComment;
    }
  }

  saveRelevant() {
    console.log(this.selected);
    this._mailService
      .setRelevantMailAnalysis(this.orgId, this.prcId, this.email, this.selected)
      .subscribe(
        (res) => {
          this._messageService.add({
            severity: 'success',
            summary: 'SUCCESS',
            life: 10000,
            detail: 'records set as relevant successfully!',
          });
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  changeData(option: number): void {
    switch (option) {
      case 1:
        this.getData();
        break;
      case 2:
        this.getUserRelevant();
        break;
      case 3:
        // this.getAllBySender();
        break;
      default:
        this.getData();
        break;
    }
  }

  getUserRelevant() {
    this.waiting = true;
    this._mailService
      .getBySenderDetailsJustRelevant(this.orgId, this.prcId, this.email)
      .subscribe(
        (res) => {
          this.data = res;
          this.tempData = res;
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  getAllBySender() {
    this.waiting = true;
    for (const key in this.backCriteria) {
      if (!this.backCriteria[key] && key != 'offset') {
        delete this.backCriteria[key];
      }
    }
    this.filtersNo = Object.keys(this.backCriteria).length - 4;
    this._mailService
      .getBySenderDetailsAll(this.orgId, this.prcId, this.email, this.backCriteria)
      .subscribe(
        (res) => {
          this.allRecordData = res.rows;
          this.totalCount = res.count;
          this.displayedDataCount = this.allRecordData.length;
          this.maxPageNr = Math.ceil(this.totalCount / this.limit);
          this.waiting = false;
        },
        (er) => {
          this.waiting = false;
        }
      );
  }

  sort(event) {
    this.backCriteria.orderBy = event.sortField ? event.sortField : 'id';
    this.backCriteria.sortOrder = event.sortOrder;
    this.pageNr = 1;
    this.backCriteria.offset = 0;
    this.getAllBySender();
  }

  // export excel from back-end for all table
  exportXLSX() {
    this.waiting = true;
    const lang = localStorage.getItem('lang');
    let criteriaWithLang = { ...this.backCriteria };
    criteriaWithLang['lang'] = lang;
    criteriaWithLang['email'] = this.email;
    criteriaWithLang['procedureId'] = this.prcId;
    // debugger;
    this._exportDataService
      .exportMailXLSX('email_history', this.orgId, this.prcId, criteriaWithLang)
      .subscribe(
        (res) => {
          this.waiting = false;
          this.saveAsExcelFile(res, 'Text_details');
          // window.open(url.toString(), '_blank');
        },
        (err) => { this.waiting = false; }
      );
  }

  // for pagination starts

  filterChangeBack(query, colName): void {
    this.pageNr = 1;
    this.backCriteria.offset = 0;
    this.getAllBySender();
  }

  limitChange(e) {
    this.limit = e.value;
    this.backCriteria.offset = 0;
    this.backCriteria.limit = this.limit;
    this.pageNr = 1;
    this.getAllBySender();
  }

  firstPage() {
    this.pageNr = 1;
    this.backCriteria.offset = 0;
    this.getAllBySender();
  }

  nextPage() {
    ++this.pageNr;
    if (this.pageNr > this.maxPageNr) return;
    this.backCriteria.offset += +this.limit;

    this.getAllBySender();
  }

  lastPage() {
    this.pageNr = this.maxPageNr;
    this.backCriteria.offset = (this.pageNr - 1) * +this.limit;
    this.getAllBySender();
  }

  previousPage() {
    --this.pageNr;
    if (this.pageNr <= 0) return;
    this.backCriteria.offset -= +this.limit;
    this.getAllBySender();
  }

  pageNrChange(value) {
    this.pageNr = (value && value.trim()) ? value : 1;
    this.backCriteria.offset = (this.pageNr - 1) * this.limit;
    this.getAllBySender();
  }

  clearBackFilter() {
    this.backCriteria = {
      limit: this.limit,
      offset: 0,
    };
    this.pageNr = 1;
    this.getAllBySender();
  }


}
