export class MailHistory {
    id: number;
    email: string;
    sender: string;
    subject: string;
    body: string;
    bodyHTML: string;
    creationTime: Date;
    messageDeliveryTime: Date;
    bcc: string;
    cc: string;
    numberOfAttachments: number;
    procedureId: number;
    createdAt: Date;
    updatedAt: Date;
    senderRelevant: boolean;
    senderComment: string;
    accountId: number;
    accountNumber: string;
    accountName: string;
    accountEmail: string;
    isEditable: boolean = false;
}

export class MailHistoryRes {
    count: number;
    rows: MailHistory[];
}

export class MailAnalysis {
    recordsCount: number;
    senderCount: number;
    word: number;
}

export class MailAnalysisBySender {
    email: string;
    sender: string;
    totlaCount: number;
}

export class Attachment {
    id: number;
    size: number;
    creationTime: Date;
    mimeTag: string;
    pstFilename: string;
    emailHistoryId: string;
    originalName: string;
}

export class creditorsMails {
    id: number;
    accountNumber: string;
    accountName: string;
    email: string;
}

export class MailsOptions {
    accountId: number;
    accountNumber: string;
    accountName: string;
    accountEmail: string;
}