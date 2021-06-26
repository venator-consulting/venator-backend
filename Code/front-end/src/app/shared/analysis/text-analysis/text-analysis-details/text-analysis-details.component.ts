import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TextAnalysisDetails } from 'src/app/shared/model/textAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-text-analysis-details',
  templateUrl: './text-analysis-details.component.html',
  styleUrls: ['./text-analysis-details.component.sass']
})
export class TextAnalysisDetailsComponent implements OnInit {

  orgId: number;
  prcId: number;
  accountNumber: string;
  data: TextAnalysisDetails[] = new Array();
  cols: { header: string; field: string; }[];
  frozenCols: { header: string; field: string; }[];
  waiting: boolean = false;
  procedureName: string;
  tempData: any[];
  criteria: any = {};
  searching: boolean = false;
  selected: TextAnalysisDetails[] = new Array();
  detailsOptions: { name: string; value: number; }[];
  detailsOption: number = 1;

  constructor(private _router: Router, private _messageService: MessageService, private _route: ActivatedRoute,
    private _analysisService: AnalysisService, private prcService: ProcedureService) { }

  ngOnInit(): void {
    this.waiting = true;
    this.orgId = +this._route.snapshot.paramMap.get('orgId');
    this.prcId = +this._route.snapshot.paramMap.get('prcId');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this.detailsOptions = [
      { name: 'Sys-Relevants', value: 1 },
      { name: 'User Relevant', value: 2 },
      { name: 'All', value: 3 }
    ];

    this.cols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber'
      },
      {
        header: 'DataTableColumns.accountName',
        field: 'accountName'
      },
      {
        header: 'DataTableColumns.accountType',
        field: 'accountType'
      },
      {
        header: 'DataTableColumns.documentType',
        field: 'documentType'
      },
      {
        header: 'DataTableColumns.balance',
        field: 'balance'
      },
      {
        header: 'DataTableColumns.contraAccountNumber',
        field: 'contraAccountNumber'
      },
      {
        header: 'DataTableColumns.contraAccountName',
        field: 'contraAccountName'
      },
      {
        header: 'DataTableColumns.documentTypeNew',
        field: 'documentTypeNew'
      },
      {
        header: 'DataTableColumns.documentNumber',
        field: 'documentNumber'
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate'
      },
      {
        header: 'DataTableColumns.recordNumber',
        field: 'recordNumber'
      },
      {
        header: 'DataTableColumns.ledgerId',
        field: 'ledgerId'
      },
      {
        header: 'DataTableColumns.executionDate',
        field: 'executionDate'
      },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate'
      },
      {
        header: 'DataTableColumns.reference',
        field: 'reference'
      },
      {
        header: 'DataTableColumns.textPosting',
        field: 'textPosting'
      },
      {
        header: 'DataTableColumns.textHeader',
        field: 'textHeader'
      }
    ];

    this.frozenCols = [
      {
        header: 'Comment',
        field: 'textRelevantComment'
      }
    ];

    this._analysisService
      .getTextAnalysisDetails(this.orgId, this.prcId, this.accountNumber)
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


    if (this.prcId && +this.prcId > 0) {
      this.prcService
        .getById(+this.prcId)
        .subscribe(prc => {
          this.procedureName = prc && prc.length > 0 ? prc[0].name : "";
        }, er => { });
    }
  }

  goBack() {
    this._router.navigate(['/analysis/text/']);
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
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
    this.searching = true;
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
    this.searching = false;
  }

  selectRow(row: TextAnalysisDetails): void {
    const index = this.selected.map(item => item.id).indexOf(row.id);
    if (row.textRelevant) {
      row.textRelevant = false;
      row.textRelevantComment = '';
    } else {
      row.textRelevant = true;
    }
    if (index == -1) {
      this.selected.push(row);
    }
  }

  commentChanged(row: TextAnalysisDetails): void {
    const index = this.selected.map(item => item.id).indexOf(row.id);
    row.textRelevant = true;
    if (index == -1) {
      this.selected.push(row);
    }
  }

  saveRelevant() {
    console.log(this.selected);
    this._analysisService
      .setRelevantTextAnalysis(this.orgId, this.prcId, this.accountNumber, this.selected)
      .subscribe(res => {
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: "records set as relevant successfully!"
        });
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });
  }

  changeData(option: number): void {
    switch (option) {
      case 1:
        this.getSysRelevant();
        break;
      case 2:
        this.getUserRelevant();
        break;
      case 3:
        this.getAllByAccount();
        break;
      default:
        this.getSysRelevant();
        break;
    }
  }

  getSysRelevant() {
    this.waiting = true;
    this._analysisService
      .getTextAnalysisDetails(this.orgId, this.prcId, this.accountNumber)
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
  }

  getUserRelevant() {
    this.waiting = true;
    this._analysisService
      .getTextAnalysisDetailsRelevant(this.orgId, this.prcId, this.accountNumber)
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
  }


  getAllByAccount() {
    this.waiting = true;
    this._analysisService
      .getAnalysisDetailsByAccount(this.orgId, this.prcId, this.accountNumber)
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
  }


}
