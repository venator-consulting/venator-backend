
export class Roles {

    name: string = ""

    constructor(name: string) {
        this.name = name;
    }

    static getRoles(): Roles[] {
        let result: Roles[] = [];

        result.push(new Roles("Admin"));
        result.push(new Roles("Manager"));
        result.push(new Roles("User"));
        return result;
    }


}