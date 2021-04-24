import { Choices } from "./choices";

export class FileToImport {

    OrganisationId: number;
    procedureId: number;
    template: any = {};
    defaultTemplate: any = {};
    fileType: Choices;
    fileClass: Choices;
    local: Choices;
    accountType: Choices;
    size: Number;
    orginalName: string;
    nameOnServer: string;
    file: File;
    index: number;
    uploaded: boolean;
    imported: boolean;
    fileHeader: any = {};
}

