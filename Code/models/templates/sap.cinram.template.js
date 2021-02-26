module.exports.glaccount = {
    client: 'Mdt', // mapping field
    GLAccountNo: 'Sachkonto', // mapping field
    GLAccountName: 'Kurztext',
 };

module.exports.creditor = {
    client: 'Mdt', // mapping field
    companyCode: 'BuKr', // mapping field
    creditorNumber: 'Kreditor', // mapping field
    creditorName: 'Name'
 };

 module.exports.debitor = {
    client: 'Mdt', // mapping field
    companyCode: 'BuKr', // mapping field
    debtorNumber: 'Debitor', // mapping field
    debtorName: 'Name'
 };

 module.exports.head = {
    client: 'Mdt', // mapping field
    companyCode: 'BuKr', // mapping field
    documentNumber: 'BELEGNR', // mapping field
    fiscalYear: 'Jahr',
    postingPeriod: 'Periode',
    documentType: 'Belegart',
    postingDate: 'Buch.dat.',
    documentDate: 'Bel.Datum',
    reference: 'Referenz',
    textHeader: 'Belegkopftext',
    transactionCurrency: 'Währg',
    exchangeRate: 'Kurs',
 };


 module.exports.posting = {
    client: 'Mdt',
    companyCode: 'BuKr',
    documentNumber: 'BELEGNR',
    fiscalYear: 'Jahr',
    postingPeriod: 'Periode',
    postingKey: 'BS',
    accountType: 'koart',
    GLAccountNumber: 'HAUPTBUCH',
    debitCredit: 'S/H',
    debitAmount: 'Betrag TW',
    creditAmount: 'Betrag (HW)',
    assignment: 'Zuordnung',
    creditorNumber: 'Kreditor',
    debtorNumber: 'Debitor',
    CostCenter1: 'Kostenst.',
    applicationDocument: 'Ausgl.bel.',
    applicationDate: 'Ausgleich'
 };