import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AmountAnalysisDetails } from 'src/app/shared/model/amountAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { ProcedureService } from 'src/app/shared/service/procedure.service';

@Component({
  selector: 'app-details',
  templateUrl: './amount-analysis-details.html',
  styleUrls: ['./amount-analysis-details.sass']
})
export class AmountAnalysisDetailsComponent implements OnInit {

  orgId: number;
  prcId: number;
  accountNumber: string;
  data: AmountAnalysisDetails[] = new Array();
  waiting: boolean;
  cols: { header: string; field: string; }[];
  baseBalance: number;
  procedureName: any;

  constructor(private _router: Router, private _messageService: MessageService, private _route: ActivatedRoute, 
    private _analysisService: AnalysisService,  private prcService: ProcedureService) { }

  ngOnInit(): void {
    this.waiting = true;
    this.orgId = +this._route.snapshot.paramMap.get('orgId');
    this.prcId = +this._route.snapshot.paramMap.get('prcId');
    this.baseBalance = +this._route.snapshot.paramMap.get('baseBalance');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');


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

  }// end of ng on init


  goBack() {
    this._router.navigate(['/analysis/amount/']);
  }

}
