export class TemplateTypes {
    name: string = 'Select Template';
    value: number = 1;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }


    static getTemplates(): TemplateTypes[] {
        let result: TemplateTypes[] = [];

        result.push(new TemplateTypes("SAP W-mobel", 1));
        result.push(new TemplateTypes("SAP Cinram", 2));
        return result;
    }

}
