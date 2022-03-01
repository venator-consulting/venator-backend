import { TranslateService } from "@ngx-translate/core";


export class dataTableColumns {

  field?: string;
  header?: string;
  align?: string;
  width?: number;

  constructor(field: string, header: string, align: string = 'center', width: number = 150) {
    this.field = field;
    this.header = header;
    this.align = align;
    this.width = width;
  }

  static async getDataTableColumns(translateService: TranslateService): Promise<dataTableColumns[]> {
    let result: dataTableColumns[] = [];
    result.push(new dataTableColumns("client", await translateService.get("DataTableColumns.client").toPromise()));
    result.push(new dataTableColumns("companyCode", await translateService.get("DataTableColumns.companyCode").toPromise()));
    result.push(new dataTableColumns("documentNumber", await translateService.get("DataTableColumns.documentNumber").toPromise()));
    result.push(new dataTableColumns("documentDate", await translateService.get("DataTableColumns.documentDate").toPromise()));
    result.push(new dataTableColumns("accountType", await translateService.get("DataTableColumns.accountType").toPromise()));
    result.push(new dataTableColumns("contraAccountType", await translateService.get("DataTableColumns.contraAccountType").toPromise()));
    result.push(new dataTableColumns("accountNumber", await translateService.get("DataTableColumns.accountNumber").toPromise()));
    result.push(new dataTableColumns("accountName", await translateService.get("DataTableColumns.accountName").toPromise(), 'left'));
    result.push(new dataTableColumns("contraAccountNumber", await translateService.get("DataTableColumns.contraAccountNumber").toPromise()));
    result.push(new dataTableColumns("contraAccountName", await translateService.get("DataTableColumns.contraAccountName").toPromise(), 'left'));
    result.push(new dataTableColumns("balance", await translateService.get("DataTableColumns.balance").toPromise(), 'right'));
    result.push(new dataTableColumns("debitAmount", await translateService.get("DataTableColumns.debitAmount").toPromise(), 'right'));
    result.push(new dataTableColumns("creditAmount", await translateService.get("DataTableColumns.creditAmount").toPromise(), 'right'));
    result.push(new dataTableColumns("stackNumber", await translateService.get("DataTableColumns.stackNumber").toPromise()));
    result.push(new dataTableColumns("recordNumber", await translateService.get("DataTableColumns.recordNumber").toPromise()));
    result.push(new dataTableColumns("fiscalYear", await translateService.get("DataTableColumns.fiscalYear").toPromise()));
    result.push(new dataTableColumns("taxAmount", await translateService.get("DataTableColumns.taxAmount").toPromise(), 'right'));
    //result.push(new dataTableColumns("identificationNumber", await translateService.get("DataTableColumns.identificationNumber").toPromise()));
    result.push(new dataTableColumns("executionDate", await translateService.get("DataTableColumns.executionDate").toPromise()));
    result.push(new dataTableColumns("dueDate", await translateService.get("DataTableColumns.dueDate").toPromise()));
    result.push(new dataTableColumns("dueDateNew", await translateService.get("DataTableColumns.dueDateNew").toPromise()));
    result.push(new dataTableColumns("ledgerId", await translateService.get("DataTableColumns.ledgerId").toPromise()));
    result.push(new dataTableColumns("assignment", await translateService.get("DataTableColumns.assignment").toPromise()));
    result.push(new dataTableColumns("reference", await translateService.get("DataTableColumns.reference").toPromise()));
    result.push(new dataTableColumns("documentType", await translateService.get("DataTableColumns.documentType").toPromise()));
    // result.push(new dataTableColumns("documentTypeNew", await translateService.get("DataTableColumns.documentTypeNew").toPromise()));
    result.push(new dataTableColumns("postingDate", await translateService.get("DataTableColumns.postingDate").toPromise()));
    result.push(new dataTableColumns("GLAccountNumber", await translateService.get("DataTableColumns.GLAccountNumber").toPromise()));
    result.push(new dataTableColumns("GLAccountName", await translateService.get("DataTableColumns.GLAccountName").toPromise(), 'left'));
    result.push(new dataTableColumns("debtorNumber", await translateService.get("DataTableColumns.debtorNumber").toPromise()));
    result.push(new dataTableColumns("debtorName", await translateService.get("DataTableColumns.debtorName").toPromise(), 'left'));
    result.push(new dataTableColumns("creditorNumber", await translateService.get("DataTableColumns.creditorNumber").toPromise()));
    result.push(new dataTableColumns("creditorName", await translateService.get("DataTableColumns.creditorName").toPromise(), 'left'));
    result.push(new dataTableColumns("contraAccountGLAccountNo", await translateService.get("DataTableColumns.contraAccountGLAccountNo").toPromise()));
    result.push(new dataTableColumns("contraAccountGLAccountName", await translateService.get("DataTableColumns.contraAccountGLAccountName").toPromise(), 'left'));
    result.push(new dataTableColumns("contraAccountDebtorNo", await translateService.get("DataTableColumns.contraAccountDebtorNo").toPromise()));
    result.push(new dataTableColumns("contraAccountDebtorName", await translateService.get("DataTableColumns.contraAccountDebtorName").toPromise(), 'left'));
    result.push(new dataTableColumns("contraAccountCreditorNo", await translateService.get("DataTableColumns.contraAccountCreditorNo").toPromise()));
    result.push(new dataTableColumns("contraAccountCreditorName", await translateService.get("DataTableColumns.contraAccountCreditorName").toPromise(), 'left'));
    result.push(new dataTableColumns("debitCredit", await translateService.get("DataTableColumns.debitCredit").toPromise()));
    result.push(new dataTableColumns("balanceTransactionCurrency", await translateService.get("DataTableColumns.balanceTransactionCurrency").toPromise()));
    result.push(new dataTableColumns("documentNumber2", await translateService.get("DataTableColumns.documentNumber2").toPromise()));
    //  result.push(new dataTableColumns("bookingAmount", await translateService.get("DataTableColumns.bookingAmount").toPromise()));
    result.push(new dataTableColumns("exchangeRate", await translateService.get("DataTableColumns.exchangeRate").toPromise()));
    result.push(new dataTableColumns("transactionCurrency", await translateService.get("DataTableColumns.transactionCurrency").toPromise()));
    result.push(new dataTableColumns("costCenter1", await translateService.get("DataTableColumns.costCenter1").toPromise()));
    result.push(new dataTableColumns("costCenter2", await translateService.get("DataTableColumns.costCenter2").toPromise()));
    result.push(new dataTableColumns("salesTaxKey", await translateService.get("DataTableColumns.salesTaxKey").toPromise()));
    result.push(new dataTableColumns("textPosting", await translateService.get("DataTableColumns.textPosting").toPromise()));
    result.push(new dataTableColumns("taxRate", await translateService.get("DataTableColumns.taxRate").toPromise()));
    result.push(new dataTableColumns("euTaxRate", await translateService.get("DataTableColumns.euTaxRate").toPromise()));
    // result.push(new dataTableColumns("costQuantityField", await translateService.get("DataTableColumns.costQuantityField").toPromise()));
    result.push(new dataTableColumns("identifierBalanceCarryforward", await translateService.get("DataTableColumns.identifierBalanceCarryforward").toPromise()));
    result.push(new dataTableColumns("postingPeriod", await translateService.get("DataTableColumns.postingPeriod").toPromise()));
    //  result.push(new dataTableColumns("differentTaxationType", await translateService.get("DataTableColumns.differentTaxationType").toPromise()));
    result.push(new dataTableColumns("documentLink", await translateService.get("DataTableColumns.documentLink").toPromise()));
    result.push(new dataTableColumns("cashDiscount", await translateService.get("DataTableColumns.cashDiscount").toPromise()));
    result.push(new dataTableColumns("textHeader", await translateService.get("DataTableColumns.textHeader").toPromise()));
    result.push(new dataTableColumns("postingKey", await translateService.get("DataTableColumns.postingKey").toPromise()));
    result.push(new dataTableColumns("taxAmountDebit", await translateService.get("DataTableColumns.taxAmountDebit").toPromise(), 'right'));
    result.push(new dataTableColumns("taxAmountCredit", await translateService.get("DataTableColumns.taxAmountCredit").toPromise(), 'right'));
    result.push(new dataTableColumns("applicationDocument", await translateService.get("DataTableColumns.applicationDocument").toPromise()));
    result.push(new dataTableColumns("applicationDocumentNew", await translateService.get("DataTableColumns.applicationDocumentNew").toPromise()));
    result.push(new dataTableColumns("applicationDate", await translateService.get("DataTableColumns.applicationDate").toPromise()));
    result.push(new dataTableColumns("applicationDateNew", await translateService.get("DataTableColumns.applicationDateNew").toPromise()));
    result.push(new dataTableColumns("generalReversal", await translateService.get("DataTableColumns.generalReversal").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation1", await translateService.get("DataTableColumns.typeDocumentInformation1").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation1", await translateService.get("DataTableColumns.contentDocumentInformation1").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation2", await translateService.get("DataTableColumns.typeDocumentInformation2").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation2", await translateService.get("DataTableColumns.contentDocumentInformation2").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation3", await translateService.get("DataTableColumns.typeDocumentInformation3").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation3", await translateService.get("DataTableColumns.contentDocumentInformation3").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation4", await translateService.get("DataTableColumns.typeDocumentInformation4").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation4", await translateService.get("DataTableColumns.contentDocumentInformation4").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation5", await translateService.get("DataTableColumns.typeDocumentInformation5").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation5", await translateService.get("DataTableColumns.contentDocumentInformation5").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation6", await translateService.get("DataTableColumns.typeDocumentInformation6").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation6", await translateService.get("DataTableColumns.contentDocumentInformation6").toPromise()));
    return result;

  }
}