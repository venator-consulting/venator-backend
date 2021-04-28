import {  TranslateService } from '@ngx-translate/core';

export class Choices {
    name: string = 'Select Template';
    value: number = 1;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }


    static getTemplates(): Choices[] {
        let result: Choices[] = [];

        result.push(new Choices("SAP W-mobel", 1));
        result.push(new Choices("SAP Cinram", 2));
        return result;
    }

    static getFileType() : Choices[] {
        let result: Choices[] = [];

        result.push(new Choices("Excel", 1));
        result.push(new Choices("Csv", 2));
        return result;
    }

    static getFileClass() : Choices[] {
        let result: Choices[] = [];

        result.push(new Choices("Accounts", 1));
        result.push(new Choices("Posting", 2));
        result.push(new Choices("Helper", 3));
        return result;
    }

    static getLocalization() : Choices[] {
        let result: Choices[] = [];

        result.push(new Choices("en_US", 1));
        result.push(new Choices("de_DE", 2));
        return result;
    }

    static getAccountTypes() : Choices[] {
        let result: Choices[] = [];

        result.push(new Choices("Kreditor", 1));
        result.push(new Choices("Debtor", 2));
        result.push(new Choices("GLA Account", 3));
        result.push(new Choices("Other", 4));
        return result;
    }
    static getDataSources() : Choices[] {
        let result: Choices[] = [];

        result.push(new Choices("SAP", 1));
        result.push(new Choices("Datev", 2));
        result.push(new Choices("Lexware", 3));
        return result;
    }
}
