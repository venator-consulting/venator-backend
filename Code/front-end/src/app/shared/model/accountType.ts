export class AccountTypes {
    id: number;
    AccountTypeName: string;
}

export class PostingAccountTypes {
    id: number;
    accountNumber: number | string;
    accountName: string;
    procedureId: number;
    accountType: string;
    accountTypeNewId: number;
    accountTypeNewName: string;
    isEditable: boolean;
}
