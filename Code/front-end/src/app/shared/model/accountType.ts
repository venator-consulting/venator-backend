export class AccountTypes {
    id: number;
    AccountTypeName: string;
}

export class PostingAccountTypes {
    id: number;
    procedureId: number;
    accountType: string;
    accountTypeNewId: number;
    accountTypeNewName: string;
    isEditable: boolean;
}
