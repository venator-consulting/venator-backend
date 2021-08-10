import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { TextAnalysisDetails } from 'src/app/shared/model/textAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import * as FileSaver from 'file-saver';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-text-analysis-word-details',
  templateUrl: './text-analysis-word-details.component.html',
  styleUrls: ['./text-analysis-word-details.component.sass'],
})
export class TextAnalysisWordDetailsComponent implements OnInit {
  @Input('details') details: boolean = false;
  orgId: number;
  prcId: number;
  keyword: string;
  data: TextAnalysisDetails[] = new Array();
  cols: TableColumn[];
  frozenCols: TableColumn[];
  waiting: boolean = false;
  procedureName: string;
  tempData: any[];
  criteria: any = {};
  searching: boolean = false;
  items: MenuItem[];
  home: MenuItem;

  constructor(
    private _messageService: MessageService,
    private _analysisService: AnalysisService,
    private _router: Router,
    private _translateService: TranslateService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.items = [
      // { label: 'Analysis' },
      {
        label: 'Text Analysis',
        routerLink: '/analysis/text/true',
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
      routerLink: '/shared/data',
    };
    this.waiting = true;
    this.orgId = this.orgId
      ? this.orgId
      : +localStorage.getItem('organisationId');
    this.prcId = this.prcId
      ? this.prcId
      : +localStorage.getItem('currentProcedureId');
    this.keyword = this._route.snapshot.paramMap.get('key');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.frozenCols = [
      {
        header: '',
        field: 'textRelevant',
        width: '6',
        align: 'center'
      },
      {
        header: 'Comment',
        field: 'textRelevantComment',
        width: '35',
        align: 'left'
      }
    ];


    this.cols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber',
        align: 'center',
      },
      {
        header: 'DataTableColumns.accountName',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'DataTableColumns.accountType',
        field: 'accountType',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentType',
        field: 'documentType',
        align: 'center',
      },
      {
        header: 'DataTableColumns.balance',
        field: 'balance',
        align: 'right',
      },
      {
        header: 'DataTableColumns.contraAccountNumber',
        field: 'contraAccountNumber',
        align: 'center',
      },
      {
        header: 'DataTableColumns.contraAccountName',
        field: 'contraAccountName',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentTypeNew',
        field: 'documentTypeNew',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentNumber',
        field: 'documentNumber',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.recordNumber',
        field: 'recordNumber',
        align: 'center',
      },
      {
        header: 'DataTableColumns.ledgerId',
        field: 'ledgerId',
        align: 'center',
      },
      {
        header: 'DataTableColumns.executionDate',
        field: 'executionDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.reference',
        field: 'reference',
        align: 'left',
      },
      {
        header: 'DataTableColumns.textPosting',
        field: 'textPosting',
        align: 'left',
      },
      {
        header: 'DataTableColumns.textHeader',
        field: 'textHeader',
        align: 'left',
      },
    ];


    this._analysisService
      .getTextAnalysisWordDetails(this.orgId, this.prcId, this.keyword)
      .subscribe(res => {
        this.data = res;
        this.tempData = res;
        this.waiting = false;
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });


  } // end of ng on init

  goBack() {
    this._router.navigate(['/analysis/text/true']);
  }


  async exportExcel() {

    let translatedData = [];
    for (let index = 0; index < this.data.length; index++) {
      let element = this.data[index];
      let translatedRecord = {};
      for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key) && key != 'id' && key != 'procedureId') {
          let translatedKey = await this._translateService.get('DataTableColumns.' + key).toPromise();
          translatedRecord[translatedKey] = element[key];

          // formatting
          if (element[key] &&
            (key == 'balance' || key == 'debitAmount' || key == 'creditAmount' || key == 'taxAmount' ||
              key == 'taxAmountDebit' || key == 'taxAmountCredit' || key == 'StartingBalance')) {
            try {
              let temp = Number.parseFloat(element[key].toString());
              if (!Number.isNaN(temp)) {
                translatedRecord[translatedKey] = temp.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
              }

            } catch (e) {
              // do nothing
            }
          } else if (element[key] &&
            (key == 'documentDate' || key == 'postingDate' || key == 'dueDate' || key == 'dueDateNew' ||
              key == 'executionDate' || key == 'applicationDate' || key == 'StartingBalanceDate')) {
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


  filterChange(query, colName): void {
    this.waiting = true;
    debugger;
    if (!query) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.data = this.tempData.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
            } else {
              this.data = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
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
            this.data = this.data.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
          } else {
            this.data = this.data.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
          }
        }
      } // end of for each criteria field
    }
    this.waiting = false;
  }


} // end of class
