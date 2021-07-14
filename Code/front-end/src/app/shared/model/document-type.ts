export class DocumentTypes {
    id: number;
    documentTypeName: string;
}

export class PostingDocTypes {
    id: number;
    procedureId: number;
    documentType: string;
    documentTypeNewId: number;
    documentTypeNewName: string;
    isEditable: boolean;
}



