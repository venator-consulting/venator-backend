export class AccountTypes {
    id: number;
    accountTypeName: string;
}

export class PostingAccTypes {
    id: number;
    procedureId: number;
    accountType: string;
    accountTypeNewId: number;
    accountTypeNewName: string;
    isEditable: boolean;
}
