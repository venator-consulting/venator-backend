import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { MailHistory } from 'src/app/shared/model/mailHistory';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { MailHistoryService } from 'src/app/shared/service/mail-history.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-mail-analysis-details',
  templateUrl: './mail-analysis-details.component.html',
  styleUrls: ['./mail-analysis-details.component.sass']
})
export class MailAnalysisDetailsComponent implements OnInit {

  orgId: number;
  prcId: number;
  waiting: boolean = true;
  data: MailHistory[] = new Array();
  keyword: string;
  cols: TableColumn[];
  frozenCols: TableColumn[];
  tempData: any[];
  criteria: any = {};
  items: MenuItem[];
  home: MenuItem;
  filtersNo: number = 0;


  constructor(private _mailService: MailHistoryService, private _router: Router,
    private _translateService: TranslateService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Email Analysis',
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
      label: 'Data',
      routerLink: '/dashboard/shared/data',
    };

    this.orgId = this.orgId ? this.orgId : +localStorage.getItem('organisationId');
    this.prcId = this.prcId ? this.prcId : +localStorage.getItem('currentProcedureId');
    this.keyword = this._route.snapshot.paramMap.get('key');

    this.frozenCols = [
      // {
      //   header: '',
      //   field: 'textRelevant',
      //   width: '6',
      //   align: 'center'
      // },
      // {
      //   header: 'Comment',
      //   field: 'textRelevantComment',
      //   width: '35',
      //   align: 'left'
      // }
    ];

    this.cols = [
      { header: 'email', field: 'email' },
      { header: 'sender', field: 'sender' },
      { header: 'subject', field: 'subject' },
      { header: 'body', field: 'body' },
      { header: 'bodyHTML', field: 'bodyHTML' },
      { header: 'bcc', field: 'bcc' },
      { header: 'cc', field: 'cc' },
      { header: 'creationTime', field: 'creationTime' },
      { header: 'messageDeliveryTime', field: 'messageDeliveryTime' },
      { header: 'numberOfAttachments', field: 'numberOfAttachments' },
    ];

    this.getData();
  }

  getData() {
    this._mailService.getMailDetailsAnalysis(this.orgId, this.prcId, this.keyword)
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
      const workbook = { Sheets: { 'text_analysis': worksheet }, SheetNames: ['text_analysis'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "text_analysis");
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

}
