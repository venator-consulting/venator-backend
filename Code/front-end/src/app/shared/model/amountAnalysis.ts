export class AmountAnalysis {
    accountNumber: string | number;
    accountName: string;
    totlaCount: number;
    totalBalance: number;
}

export class AmountAnalysisDetails {
    id: number;
    balance: number;
    accountType: string;
    documentType: string;
    documentTypeNewName: string;
    accountNumber: string;
    accountName: string;
    contraAccountNumber: string;
    contraAccountName: string;
    amountRelevant: boolean;
    amountRelevantComment: string;
}