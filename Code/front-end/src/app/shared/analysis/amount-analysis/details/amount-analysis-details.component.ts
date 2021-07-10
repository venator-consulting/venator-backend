import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AmountAnalysisDetails } from 'src/app/shared/model/amountAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'amount-analysis-details',
  templateUrl: './amount-analysis-details.html',
  styleUrls: ['./amount-analysis-details.sass']
})
export class AmountAnalysisDetailsComponent implements OnInit {
  @Input('details') details: boolean = false;
  orgId: number;
  prcId: number;
  accountNumber: string;
  data: AmountAnalysisDetails[] = new Array();
  waiting: boolean;
  cols: { header: string; field: string; }[];
  frozenCols: { header: string; field: string; width: string}[];
  baseBalance: number;
  procedureName: any;
  tempData: any[];
  criteria: any = {};
  searching: boolean = false;
  selected: AmountAnalysisDetails[] = new Array();
  detailsOptions: { name: string; value: number; }[];
  detailsOption: number = 1;

  constructor(private _router: Router, private _messageService: MessageService, private _route: ActivatedRoute,
    private _analysisService: AnalysisService, private prcService: ProcedureService) { }

  ngOnInit(): void {
    this.waiting = true;
    this.orgId = +this._route.snapshot.paramMap.get('orgId');
    this.orgId = this.orgId? this.orgId : +localStorage.getItem('organisationId');
    this.prcId = +this._route.snapshot.paramMap.get('prcId');
    this.prcId = this.prcId ? this.prcId : +localStorage.getItem('currentProcedureId');
    this.baseBalance = +this._route.snapshot.paramMap.get('baseBalance');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.detailsOptions = [
      { name: 'Sys-Relevants', value: 1 },
      { name: 'User Relevant', value: 2 },
      { name: 'All', value: 3 }
    ];


    this.frozenCols = [
      {
        header: '',
        field: 'amountRelevant',
        width: '6'
      },
      {
        header: 'Comment',
        field: 'amountRelevantComment',
        width: '35'
      }
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
      }
    ];

    this._analysisService
      .getAmountAnalysisDetails(this.orgId, this.prcId, this.accountNumber, this.baseBalance)
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


    // if (this.prcId && +this.prcId > 0) {
    //   this.prcService
    //     .getById(+this.prcId)
    //     .subscribe(prc => {
    //       this.procedureName = prc && prc.length > 0 ? prc[0].name : "";
    //     }, er => { });
    // }

  }// end of ng on init


  goBack() {
    this._router.navigate(['/analysis/amount/']);
  }


  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { 'amount_analysis': worksheet }, SheetNames: ['amount_analysis'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "amount_analysis");
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


  selectRow(row: AmountAnalysisDetails): void {
    const index = this.selected.map(item => item.id).indexOf(row.id);
    if (row.amountRelevant) {
      row.amountRelevant = false;
      row.amountRelevantComment = '';
    } else {
      row.amountRelevant = true;
    }
    if (index == -1) {
      this.selected.push(row);
    }
  }

  commentChanged(row: AmountAnalysisDetails): void {
    const index = this.selected.map(item => item.id).indexOf(row.id);
    row.amountRelevant = true;
    if (index == -1) {
      this.selected.push(row);
    }
  }

  saveRelevant() {
    console.log(this.selected);
    this._analysisService
      .setRelevantAmountAnalysis(this.orgId, this.prcId, this.accountNumber, this.baseBalance, this.selected)
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
      .getAmountAnalysisDetails(this.orgId, this.prcId, this.accountNumber, this.baseBalance)
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
      .getAmountAnalysisDetailsRelevant(this.orgId, this.prcId, this.accountNumber)
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
      .getAmountAnalysisDetailsByAccount(this.orgId, this.prcId, this.accountNumber)
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
