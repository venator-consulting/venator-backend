

export class Procedures {
    id: number;
    OrganisationId: number;
    name: string ='';
    data:  boolean = false;
    analysis: boolean = false;
    dataSource: string ='';
    amount: boolean = false;
    credit: boolean = false;
    text_word: boolean = false;
    text_account: boolean = false;
    payment: boolean = false;
    due_date: boolean = false;
    liquidity: boolean = false;
    status: string;
    docType: boolean = false;
    emailSender: boolean = false;
    emailWord: boolean = false;


    // constructor(organisationId: number, name: string, data: boolean,analysis: boolean,dataSource: string) {
    //     this.organisationId = organisationId;
    //     this.name = name;
    //     this.data = data;
    //     this.analysis = analysis;
    //     this.dataSource = dataSource;

    // }

    static setProcedure(procedureModel) {

        let result: Procedures = procedureModel
        return result
    }


}