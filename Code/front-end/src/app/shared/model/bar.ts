export class Bar {
    label: string;
    backgroundColor: string;
    data: number[];

    constructor(label: string, backgroundColor: string, data: number) {
        this.label = label;
        this.backgroundColor = backgroundColor;
        this.data = new Array();
        this.data.push(data);
    }
}