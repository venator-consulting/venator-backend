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
}