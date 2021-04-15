  
  export class dataTableColumns {

    field?:  string;
    header?: string;

    constructor(field: string, header: string) {
        this.field  = field;
        this.header = header;

    }
    static getDataTableColumns(): dataTableColumns[] {
        let result: dataTableColumns[] = [];

        result.push(new dataTableColumns("accountType","AccountType"));
        result.push(new dataTableColumns("contraAccountType", "contraAccountType"));
        result.push(new dataTableColumns("accountNumber", "accountNumber"));
        result.push(new dataTableColumns("accountName", "accountName"));
        result.push(new dataTableColumns("contraAccountNumber", "contraAccountNumber"));
        result.push(new dataTableColumns("contraAccountName", "contraAccountName"));
        result.push(new dataTableColumns("balance", "balance"));
        result.push(new dataTableColumns("documentDate", "documentDate"));
        result.push(new dataTableColumns("salesTaxKey", "salesTaxKey"));
        result.push(new dataTableColumns("textPosting", "textPosting"));
        result.push(new dataTableColumns("taxRate", "taxRate"));
        result.push(new dataTableColumns("euTaxRate", "euTaxRate"));
        result.push(new dataTableColumns("documentNumber", "documentNumber"));
        result.push(new dataTableColumns("debitAmount", "debitAmount"));
        result.push(new dataTableColumns("creditAmount", "creditAmount"));
        result.push(new dataTableColumns("stackNumber", "stackNumber"));
        result.push(new dataTableColumns("recordNumber", "recordNumber"));
        result.push(new dataTableColumns("fiscalYear", "fiscalYear"));
        result.push(new dataTableColumns("taxAmount", "taxAmount"));
        result.push(new dataTableColumns("documentNumber2", "documentNumber2"));
        result.push(new dataTableColumns("bookingAmount", "bookingAmount"));
        result.push(new dataTableColumns("exchangeRate", "exchangeRate"));
        result.push(new dataTableColumns("transactionCurrency", "transactionCurrency"));
        result.push(new dataTableColumns("costCenter1", "costCenter1"));
        result.push(new dataTableColumns("costCenter2", "costCenter2"));
        result.push(new dataTableColumns("costQuantityField", "costQuantityField"));
        result.push(new dataTableColumns("identifierBalanceCarryforward", "identifierBalanceCarryforward"));
        result.push(new dataTableColumns("postingPeriod", "postingPeriod"));
        result.push(new dataTableColumns("differentTaxationType", "differentTaxationType"));
        result.push(new dataTableColumns("documentLink", "documentLink"));
        result.push(new dataTableColumns("identificationNumber", "identificationNumber"));
        result.push(new dataTableColumns( "executionDate",  "executionDate"));
        result.push(new dataTableColumns("dueDate", "dueDate"));
        result.push(new dataTableColumns("ledgerId", "ledgerId"));
        result.push(new dataTableColumns("client", "client"));
        result.push(new dataTableColumns("companyCode", "companyCode"));
        result.push(new dataTableColumns("assignment", "assignment"));
        result.push(new dataTableColumns("reference", "reference"));
        result.push(new dataTableColumns("documentType", "documentType"));
        result.push(new dataTableColumns("documentTypeNew", "documentTypeNew"));
        result.push(new dataTableColumns("postingDate", "postingDate"));
        result.push(new dataTableColumns("GLAccountNumber", "GLAccountNumber"));
        result.push(new dataTableColumns("GLAccountName", "GLAccountName"));
        result.push(new dataTableColumns("debtorNumber", "debtorNumber"));
        result.push(new dataTableColumns("debtorName", "debtorName"));
        result.push(new dataTableColumns("creditorNumber", "creditorNumber"));
        result.push(new dataTableColumns("creditorName", "creditorName"));
        result.push(new dataTableColumns("contraAccountGLAccountNo", "contraAccountGLAccountNo"));
        result.push(new dataTableColumns("contraAccountGLAccountName", "contraAccountGLAccountName"));
        result.push(new dataTableColumns("contraAccountDebtorNo", "contraAccountDebtorNo"));
        result.push(new dataTableColumns("contraAccountDebtorName", "contraAccountDebtorName"));
        result.push(new dataTableColumns("contraAccountCreditorNo", "contraAccountCreditorNo"));
        result.push(new dataTableColumns("contraAccountCreditorName", "contraAccountCreditorName"));
        result.push(new dataTableColumns("debitCredit", "debitCredit"));
        result.push(new dataTableColumns("balanceTransactionCurrency","balanceTransactionCurrency"));
        result.push(new dataTableColumns("cashDiscount", "cashDiscount"));
        result.push(new dataTableColumns("textHeader", "textHeader"));
        result.push(new dataTableColumns("postingKey", "postingKey"));
        result.push(new dataTableColumns("taxAmountDebit", "taxAmountDebit"));
        result.push(new dataTableColumns("taxAmountCredit", "taxAmountCredit"));
        result.push(new dataTableColumns("applicationDocument", "applicationDocument"));
        result.push(new dataTableColumns("applicationDate", "applicationDate"));
        result.push(new dataTableColumns("applicationDateNew", "applicationDateNew"));
        result.push(new dataTableColumns("generalReversal", "generalReversal"));
        result.push(new dataTableColumns("typeDocumentInformation1", "typeDocumentInformation1"));
        result.push(new dataTableColumns("contentDocumentInformation1", "contentDocumentInformation1"));
        result.push(new dataTableColumns("typeDocumentInformation2", "typeDocumentInformation2"));
        result.push(new dataTableColumns("contentDocumentInformation2", "contentDocumentInformation2"));
        result.push(new dataTableColumns("typeDocumentInformation3", "typeDocumentInformation3"));
        result.push(new dataTableColumns("contentDocumentInformation3", "contentDocumentInformation3"));
        result.push(new dataTableColumns("typeDocumentInformation4", "typeDocumentInformation4"));
        result.push(new dataTableColumns("contentDocumentInformation4", "contentDocumentInformation4"));
        result.push(new dataTableColumns("typeDocumentInformation5", "typeDocumentInformation5"));
        result.push(new dataTableColumns("contentDocumentInformation5", "contentDocumentInformation5"));
        result.push(new dataTableColumns("typeDocumentInformation6", "typeDocumentInformation6"));
        result.push(new dataTableColumns("contentDocumentInformation6", "contentDocumentInformation6"));

        return result;
    }
  }