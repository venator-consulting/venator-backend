import { Component, OnInit } from '@angular/core';
import {PostingDataService} from  '../service/posting-data.service';

@Component({
  selector: 'app-sap-data-table',
  templateUrl: './sap-data-table.component.html',
  styleUrls: ['./sap-data-table.component.sass']
})
export class SAPDataTableComponent implements OnInit {

  constructor(private _postingDataService: PostingDataService) {}

 
  companyCode = "D101"
  

  data : any;
  postings :[] = [];
  cols: any[];
  ngOnInit(): void {
    
    this._postingDataService
    .getDataTable(this.companyCode)
    .subscribe(
      (data) => { 
        this.data = data ;
        this.postings = this.data.results ; 

        },
      (error) => console.log(error),
      () => {  }
    );

    this.cols = [
      { field: "accountType", header: "accountType"},
      { field: "contraAccountType", header: "	contraAccountType"},
      { field: "accountNumber", header: "accountNumber"},
      { field: "accountName ", header: "accountName "},
      { field: "contraAccountNumber", header: "contraAccountNumber"},
      { field: "contraAccountName", header: "contraAccountName"},
      { field: "balance", header: "balance"},
      { field: "documentDate", header: "documentDate"},
      { field: "salesTaxKey", header: "salesTaxKey"},
      { field: "textPosting", header: "textPosting"},
      { field: "taxRate", header: "taxRate"},
      { field: "euTaxRate", header: "euTaxRate"},
      { field: "documentNumber", header: "documentNumber"},
      { field: "debitAmount", header: "debitAmount"},
      { field: "creditAmount", header: "creditAmount"},
      { field: "currencyIndicator", header: "currencyIndicator"},
      { field: "stackNumber", header: "stackNumber"},
      { field: "recordNumber", header: "recordNumber"},
      { field: "fiscalYear", header: "fiscalYear"},
      { field: "taxAmount", header: "taxAmount"},
      { field: "documentNumber2", header: "documentNumber2"},
      { field: "bookingAmount", header: "bookingAmount"},
      { field: "exchangeRate", header: "exchangeRate"},
      { field: "transactionCurrency", header: "transactionCurrency"},
      { field: "costCenter1", header: "costCenter1"},
      { field: "costCenter2", header: "costCenter2"},
      { field: "costQuantityField", header: "costQuantityField"},
      { field: "identifierBalanceCarryforward", header: "identifierBalanceCarryforward"},
      { field: "postingPeriod", header: "postingPeriod"},
      { field: "differentTaxationType", header: "differentTaxationType"},
      { field: "documentLink", header: "documentLink"},
      { field: "identificationNumber", header: "identificationNumber"},
      { field: "executionDate", header: "executionDate"},
      { field: "dueDate", header: "dueDate"},
      { field: "ledgerId", header: "ledgerId"},
      { field: "client", header: "client"},
      { field: "companyCode", header: "companyCode"},
      { field: "assignment", header: "assignment"},
      { field: "reference", header: "reference"},
      { field: "documentType", header: "documentType"},
      { field: "documentTypeNew", header: "documentTypeNew"},
      { field: "postingDate", header: "postingDate"},
      { field: "GLAccountNumber", header: "GLAccountNumber"},
      { field: "GLAccountName", header: "GLAccountName"},
      { field: "debtorNumber", header: "debtorNumber"},
      { field: "debtorName", header: "debtorName"},
      { field: "creditorNumber", header: "creditorNumber"},
      { field: "creditorName", header: "creditorName"},
      { field: "contraAccountGLAccountNo", header: "contraAccountGLAccountNo"},
      { field: "contraAccountGLAccountName", header: "contraAccountGLAccountName"},
      { field: "contraAccountDebtorNo", header: "contraAccountDebtorNo"},
      { field: "contraAccountDebtorName", header: "contraAccountDebtorName"},
      { field: "contraAccountCreditorNo", header: "contraAccountCreditorNo"},
      { field: "contraAccountCreditorName", header: "contraAccountCreditorName"},
      { field: "debitCredit", header: "debitCredit"},
      { field: "balanceTransactionCurrency", header: "balanceTransactionCurrency"},
      { field: "cashDiscount", header: "cashDiscount"},
      { field: "textHeader", header: "textHeader"},
      { field: "postingKey", header: "postingKey"},
      { field: "taxAmountDebit", header: "taxAmountDebit"},
      { field: "taxAmountCredit", header: "taxAmountCredit"},
      { field: "applicationDocument", header: "applicationDocument"},
      { field: "applicationDate", header: "applicationDate"},
      { field: "applicationDateNew", header: "applicationDateNew"},
      { field: "generalReversal", header: "generalReversal"},
      { field: "typeDocumentInformation1", header: "typeDocumentInformation1"},
      { field: "contentDocumentInformation1", header: "contentDocumentInformation1"},
      { field: "typeDocumentInformation2", header: "typeDocumentInformation2"},
      { field: "contentDocumentInformation2", header: "contentDocumentInformation2"},
      { field: "typeDocumentInformation3", header: "typeDocumentInformation3"},
      { field: "contentDocumentInformation3", header: "contentDocumentInformation3"},
      { field: "typeDocumentInformation4", header: "typeDocumentInformation4"},
      { field: "contentDocumentInformation4", header: "contentDocumentInformation4"},
      { field: "typeDocumentInformation5", header: "typeDocumentInformation5"},
      { field: "contentDocumentInformation5", header: "contentDocumentInformation5"},
      { field: "typeDocumentInformation6", header: "typeDocumentInformation6"},
      { field: "contentDocumentInformation6", header: "contentDocumentInformation6"},
      { field: "typeDocumentInformation7", header: "typeDocumentInformation7"},
      { field: "contentDocumentInformation7", header: "contentDocumentInformation7"},
      { field: "typeDocumentInformation8", header: "typeDocumentInformation8"},
      { field: "contentDocumentInformation8", header: "contentDocumentInformation8"},
    ]
  }

}
