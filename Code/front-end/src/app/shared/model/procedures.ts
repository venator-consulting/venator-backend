

export class Procedures {
    id: number;
    organisationId: number =  0;
    name: string ='';
    data:  boolean = false;
    analysis: boolean = false;
    dataSource: string ='';


    constructor(organisationId: number, name: string, data: boolean,analysis: boolean,dataSource: string) {
        this.organisationId = organisationId;
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