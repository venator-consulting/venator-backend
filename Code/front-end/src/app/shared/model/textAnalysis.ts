export class TextAnalysis {
    accountNumber: string | number;
    accountName: string;
    totlaCount: number;
}

export class TextAnalysisDetails {
    id: number;
    accountType: string;
    accountNumber: string;
    accountName: string;
    contraAccountNumber: string;
    contraAccountName: string;
    reference: string;
    textPosting: string;
    textHeader: string;
    textRelevant: Boolean;
    textRelevantComment: string;
}

export class TextAnalysisDetailsWord {
    word: string;
    totalBalance: number;
}