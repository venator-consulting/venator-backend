
export class Titles {

    name: string = ""

    constructor(name: string) {
        this.name = name;
    }

    static getTitles(): Titles[] {
        let result: Titles[] = [];

        result.push(new Titles("Frau"));
        result.push(new Titles("Herr"));
        return result;
    }


}