

export class Procedures {
    id: number;
    userId: number =  0;
    name: string ='';
    data:  boolean = false;
    analysis: boolean = false;
    dataSource: string ='';


    constructor(userId: number, name: string, data: boolean,analysis: boolean,dataSource: string) {
        this.userId = userId;
        this.name = name;
        this.data = data;
        this.analysis = analysis;
        this.dataSource = dataSource;

    }

    static setProcedure(procedureModel) {

        let result: Procedures = procedureModel
        return result
    }


}