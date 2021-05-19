import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";


export class dataTableColumns {

  field?: string;
  header?: string;

  constructor(field: string, header: string) {
    this.field = field;
    this.header = header;
  }

  //   constructor(field: string, header: string, translateService: any) {
  //     this.field  = field;
  //     this.header = header;
  // }

  static async getDataTableColumns(translateService: TranslateService): Promise<dataTableColumns[]> {
    let result: dataTableColumns[] = [];
    // await translateService.use(lang).toPromise();
    result.push(new dataTableColumns("client", await translateService.get("Admin_Import.client").toPromise()));
    result.push(new dataTableColumns("companyCode", await translateService.get("Admin_Import.companyCode").toPromise()));
    result.push(new dataTableColumns("documentNumber", await translateService.get("Admin_Import.documentNumber").toPromise()));
    result.push(new dataTableColumns("documentDate", await translateService.get("Admin_Import.documentDate").toPromise()));
    result.push(new dataTableColumns("accountType", await translateService.get("Admin_Import.accountType").toPromise()));
    result.push(new dataTableColumns("contraAccountType", await translateService.get("Admin_Import.contraAccountType").toPromise()));
    result.push(new dataTableColumns("accountNumber", await translateService.get("Admin_Import.accountNumber").toPromise()));
    result.push(new dataTableColumns("accountName", await translateService.get("Admin_Import.accountName").toPromise()));
    result.push(new dataTableColumns("contraAccountNumber", await translateService.get("Admin_Import.contraAccountNumber").toPromise()));
    result.push(new dataTableColumns("contraAccountName", await translateService.get("Admin_Import.contraAccountName").toPromise()));
    result.push(new dataTableColumns("balance", await translateService.get("Admin_Import.balance").toPromise()));
    result.push(new dataTableColumns("debitAmount", await translateService.get("Admin_Import.debitAmount").toPromise()));
    result.push(new dataTableColumns("creditAmount", await translateService.get("Admin_Import.creditAmount").toPromise()));
    result.push(new dataTableColumns("stackNumber", await translateService.get("Admin_Import.stackNumber").toPromise()));
    result.push(new dataTableColumns("recordNumber", await translateService.get("Admin_Import.recordNumber").toPromise()));
    result.push(new dataTableColumns("fiscalYear", await translateService.get("Admin_Import.fiscalYear").toPromise()));
    result.push(new dataTableColumns("taxAmount", await translateService.get("Admin_Import.taxAmount").toPromise()));
    //result.push(new dataTableColumns("identificationNumber", await translateService.get("Admin_Import.identificationNumber").toPromise()));
    result.push(new dataTableColumns("executionDate", await translateService.get("Admin_Import.executionDate").toPromise()));
    result.push(new dataTableColumns("dueDate", await translateService.get("Admin_Import.dueDate").toPromise()));
    result.push(new dataTableColumns("ledgerId", await translateService.get("Admin_Import.ledgerId").toPromise()));
    result.push(new dataTableColumns("assignment", await translateService.get("Admin_Import.assignment").toPromise()));
    result.push(new dataTableColumns("reference", await translateService.get("Admin_Import.reference").toPromise()));
    result.push(new dataTableColumns("documentType", await translateService.get("Admin_Import.documentType").toPromise()));
   // result.push(new dataTableColumns("documentTypeNew", await translateService.get("Admin_Import.documentTypeNew").toPromise()));
    result.push(new dataTableColumns("postingDate", await translateService.get("Admin_Import.postingDate").toPromise()));
    result.push(new dataTableColumns("GLAccountNumber", await translateService.get("Admin_Import.GLAccountNumber").toPromise()));
    result.push(new dataTableColumns("GLAccountName", await translateService.get("Admin_Import.GLAccountName").toPromise()));
    result.push(new dataTableColumns("debtorNumber", await translateService.get("Admin_Import.debtorNumber").toPromise()));
    result.push(new dataTableColumns("debtorName", await translateService.get("Admin_Import.debtorName").toPromise()));
    result.push(new dataTableColumns("creditorNumber", await translateService.get("Admin_Import.creditorNumber").toPromise()));
    result.push(new dataTableColumns("creditorName", await translateService.get("Admin_Import.creditorName").toPromise()));
    result.push(new dataTableColumns("contraAccountGLAccountNo", await translateService.get("Admin_Import.contraAccountGLAccountNo").toPromise()));
    result.push(new dataTableColumns("contraAccountGLAccountName", await translateService.get("Admin_Import.contraAccountGLAccountName").toPromise()));
    result.push(new dataTableColumns("contraAccountDebtorNo", await translateService.get("Admin_Import.contraAccountDebtorNo").toPromise()));
    result.push(new dataTableColumns("contraAccountDebtorName", await translateService.get("Admin_Import.contraAccountDebtorName").toPromise()));
    result.push(new dataTableColumns("contraAccountCreditorNo", await translateService.get("Admin_Import.contraAccountCreditorNo").toPromise()));
    result.push(new dataTableColumns("contraAccountCreditorName", await translateService.get("Admin_Import.contraAccountCreditorName").toPromise()));
    result.push(new dataTableColumns("debitCredit", await translateService.get("Admin_Import.debitCredit").toPromise()));
    result.push(new dataTableColumns("balanceTransactionCurrency", await translateService.get("Admin_Import.balanceTransactionCurrency").toPromise()));
    result.push(new dataTableColumns("documentNumber2", await translateService.get("Admin_Import.documentNumber2").toPromise()));
  //  result.push(new dataTableColumns("bookingAmount", await translateService.get("Admin_Import.bookingAmount").toPromise()));
    result.push(new dataTableColumns("exchangeRate", await translateService.get("Admin_Import.exchangeRate").toPromise()));
    result.push(new dataTableColumns("transactionCurrency", await translateService.get("Admin_Import.transactionCurrency").toPromise()));
    result.push(new dataTableColumns("costCenter1", await translateService.get("Admin_Import.costCenter1").toPromise()));
    result.push(new dataTableColumns("costCenter2", await translateService.get("Admin_Import.costCenter2").toPromise()));
    result.push(new dataTableColumns("salesTaxKey", await translateService.get("Admin_Import.salesTaxKey").toPromise()));
    result.push(new dataTableColumns("textPosting", await translateService.get("Admin_Import.textPosting").toPromise()));
    result.push(new dataTableColumns("taxRate", await translateService.get("Admin_Import.taxRate").toPromise()));
    result.push(new dataTableColumns("euTaxRate", await translateService.get("Admin_Import.euTaxRate").toPromise()));
   // result.push(new dataTableColumns("costQuantityField", await translateService.get("Admin_Import.costQuantityField").toPromise()));
    result.push(new dataTableColumns("identifierBalanceCarryforward", await translateService.get("Admin_Import.identifierBalanceCarryforward").toPromise()));
    result.push(new dataTableColumns("postingPeriod", await translateService.get("Admin_Import.postingPeriod").toPromise()));
  //  result.push(new dataTableColumns("differentTaxationType", await translateService.get("Admin_Import.differentTaxationType").toPromise()));
    result.push(new dataTableColumns("documentLink", await translateService.get("Admin_Import.documentLink").toPromise()));
    result.push(new dataTableColumns("cashDiscount", await translateService.get("Admin_Import.cashDiscount").toPromise()));
    result.push(new dataTableColumns("textHeader", await translateService.get("Admin_Import.textHeader").toPromise()));
    result.push(new dataTableColumns("postingKey", await translateService.get("Admin_Import.postingKey").toPromise()));
    result.push(new dataTableColumns("taxAmountDebit", await translateService.get("Admin_Import.taxAmountDebit").toPromise()));
    result.push(new dataTableColumns("taxAmountCredit", await translateService.get("Admin_Import.taxAmountCredit").toPromise()));
    result.push(new dataTableColumns("applicationDocument", await translateService.get("Admin_Import.applicationDocument").toPromise()));
    result.push(new dataTableColumns("applicationDate", await translateService.get("Admin_Import.applicationDate").toPromise()));
   // result.push(new dataTableColumns("applicationDateNew", await translateService.get("Admin_Import.applicationDateNew").toPromise()));
    result.push(new dataTableColumns("generalReversal", await translateService.get("Admin_Import.generalReversal").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation1", await translateService.get("Admin_Import.typeDocumentInformation1").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation1", await translateService.get("Admin_Import.contentDocumentInformation1").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation2", await translateService.get("Admin_Import.typeDocumentInformation2").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation2", await translateService.get("Admin_Import.contentDocumentInformation2").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation3", await translateService.get("Admin_Import.typeDocumentInformation3").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation3", await translateService.get("Admin_Import.contentDocumentInformation3").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation4", await translateService.get("Admin_Import.typeDocumentInformation4").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation4", await translateService.get("Admin_Import.contentDocumentInformation4").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation5", await translateService.get("Admin_Import.typeDocumentInformation5").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation5", await translateService.get("Admin_Import.contentDocumentInformation5").toPromise()));
    result.push(new dataTableColumns("typeDocumentInformation6", await translateService.get("Admin_Import.typeDocumentInformation6").toPromise()));
    result.push(new dataTableColumns("contentDocumentInformation6", await translateService.get("Admin_Import.contentDocumentInformation6").toPromise()));
    return result;
    // result.push(new dataTableColumns("client", "Mandant"));
    // result.push(new dataTableColumns("companyCode", "Buchungskreis"));
    // result.push(new dataTableColumns("documentNumber", "Belegnummer"));
    // result.push(new dataTableColumns("documentDate", "Belegdatum"));
    // result.push(new dataTableColumns("accountType","Kontotyp"));
    // result.push(new dataTableColumns("contraAccountType", "Gegenkontotyp"));
    // result.push(new dataTableColumns("accountNumber", "Kontonummer"));
    // result.push(new dataTableColumns("accountName", "Kontobezeichnung"));
    // result.push(new dataTableColumns("contraAccountNumber", "Kontonummer Gegenkonto"));
    // result.push(new dataTableColumns("contraAccountName", "Bezeichnung Gegenkonto"));
    // result.push(new dataTableColumns("balance", "Saldo EUR"));
    // result.push(new dataTableColumns("debitCredit", "Soll / Haben"));
    // result.push(new dataTableColumns("debitAmount", "Umsatz Soll EUR"));
    // result.push(new dataTableColumns("creditAmount", "Umsatz Haben EUR"));
    // result.push(new dataTableColumns("stackNumber", "Stapelnummer"));
    // result.push(new dataTableColumns("recordNumber", "Buchungssatznummer"));
    // result.push(new dataTableColumns("fiscalYear", "Geschäftsjahr"));
    // result.push(new dataTableColumns("identificationNumber", "identificationNumber"));
    // result.push(new dataTableColumns( "executionDate",  "Leistungsdatum"));
    // result.push(new dataTableColumns("dueDate", "Faelligkeitsdatum"));
    // result.push(new dataTableColumns("assignment", "Zuordnung"));
    // result.push(new dataTableColumns("reference", "Referenz"));
    // result.push(new dataTableColumns("documentType", "Belegart"));
    // result.push(new dataTableColumns("documentTypeNew", "Belegart angepasst"));
    // result.push(new dataTableColumns("postingDate", "Buchungsdatum"));
    // result.push(new dataTableColumns("GLAccountNumber", "Hauptbuchkonto"));
    // result.push(new dataTableColumns("GLAccountName", "Bezeichnung Hauptbuchkonto"));
    // result.push(new dataTableColumns("debtorNumber", "Debitorenkonto"));
    // result.push(new dataTableColumns("debtorName", "Bezeichnung Debitorenkonto"));
    // result.push(new dataTableColumns("creditorNumber", "Kreditorenkonto"));
    // result.push(new dataTableColumns("creditorName", "Bezeichnung Kreditorenkonto"));
    // result.push(new dataTableColumns("contraAccountGLAccountNo", "Sachkonto Gegenkonto"));
    // result.push(new dataTableColumns("contraAccountGLAccountName", "Bezeichnung Gegenkonto Sachkonto"));
    // result.push(new dataTableColumns("contraAccountDebtorNo", "Debitorenkonto Gegenkonto"));
    // result.push(new dataTableColumns("contraAccountDebtorName", "Bezeichnung Gegenkonto Debitor"));
    // result.push(new dataTableColumns("contraAccountCreditorNo", "Kreditorenkonto Gegenkonto"));
    // result.push(new dataTableColumns("contraAccountCreditorName", "Bezeichnung Gegenkonto Kreditor"));
    // result.push(new dataTableColumns("balanceTransactionCurrency","Saldo Belegwährung"));
    // result.push(new dataTableColumns("debitAmountTransactionCurrency", "Umsatz Soll Belegwährung"));
    // result.push(new dataTableColumns("creditAmountTransactionCurrency", "Umsatz Haben Belegwährung"));
    // result.push(new dataTableColumns("transactionCurrency", "Belegwährung"));
    // result.push(new dataTableColumns("documentNumber2", "Belegfeld 2"));
    // result.push(new dataTableColumns("bookingAmount", "bookingAmount"));
    // result.push(new dataTableColumns("exchangeRate", "Umrechnungskurs"));
    // result.push(new dataTableColumns("cashDiscount", "Skonto EUR"));


    // result.push(new dataTableColumns("costCenter1", "Kostenstelle 1"));
    // result.push(new dataTableColumns("costCenter2", "Kostenstelle 2"));
    // result.push(new dataTableColumns("salesTaxKey", "Umsatzsteuerschlüssel"));
    // result.push(new dataTableColumns("textPosting", "Buchungstext"));
    // result.push(new dataTableColumns("textHeader", "Belegkopftext"));
    // result.push(new dataTableColumns("postingKey", "Buchungsschlüssel"));
    // result.push(new dataTableColumns("taxRate", "Steuersatz"));
    // result.push(new dataTableColumns("euTaxRate", "EU Steuersatz"));
    // result.push(new dataTableColumns("taxAmount", "Steuerbetrag"));
    // result.push(new dataTableColumns("taxAmountDebit", "Steuerbetrag Soll"));
    // result.push(new dataTableColumns("taxAmountCredit", "Steuerbetrag Haben"));
    // result.push(new dataTableColumns("costQuantityField", "costQuantityField"));
    // result.push(new dataTableColumns("identifierBalanceCarryforward", "Kennung EB-Buchung"));
    // result.push(new dataTableColumns("postingPeriod", "Buchungsperiode"));
    // result.push(new dataTableColumns("differentTaxationType", "differentTaxationType"));

    // result.push(new dataTableColumns("applicationDocument", "Ausgleichsbeleg"));
    // result.push(new dataTableColumns("applicationDate", "Datum des Ausgleichs"));
    // result.push(new dataTableColumns("applicationDateNew", "Ausgleichsdatum angepasst"));
    // result.push(new dataTableColumns("ledgerId", "ID des Rechnungslegungsbereichs"));
    // result.push(new dataTableColumns("documentLink", "Beleglink"));

    // result.push(new dataTableColumns("generalReversal", "Generalumkehr (GU)"));
    // result.push(new dataTableColumns("typeDocumentInformation1", "Art der Beleginformation 1"));
    // result.push(new dataTableColumns("contentDocumentInformation1", "Inhalt der Beleginformation 1"));
    // result.push(new dataTableColumns("typeDocumentInformation2", "Art der Beleginformation 2"));
    // result.push(new dataTableColumns("contentDocumentInformation2", "Inhalt der Beleginformation 2"));
    // result.push(new dataTableColumns("typeDocumentInformation3", "Art der Beleginformation 3"));
    // result.push(new dataTableColumns("contentDocumentInformation3", "Inhalt der Beleginformation 3"));
    // result.push(new dataTableColumns("typeDocumentInformation4", "Art der Beleginformation 4"));
    // result.push(new dataTableColumns("contentDocumentInformation4", "Inhalt der Beleginformation 4"));
    // result.push(new dataTableColumns("typeDocumentInformation5", "Art der Beleginformation 5"));
    // result.push(new dataTableColumns("contentDocumentInformation5", "Inhalt der Beleginformation 5"));
    // result.push(new dataTableColumns("typeDocumentInformation6", "Art der Beleginformation 6"));
    // result.push(new dataTableColumns("contentDocumentInformation6", "Inhalt der Beleginformation 6"));
    // result.push(new dataTableColumns("typeDocumentInformation6", "Art der Beleginformation 7"));
    // result.push(new dataTableColumns("contentDocumentInformation6", "Inhalt der Beleginformation 7"));
    // result.push(new dataTableColumns("typeDocumentInformation6", "Art der Beleginformation 8"));
    // result.push(new dataTableColumns("contentDocumentInformation6", "Inhalt der Beleginformation 8"));
    // return result;
  }
}