

export class Organisation {
    id: number;
    name: string ='';
    logo:  File ;
    email: string = '';
    street: string ='';
    houseNr: number = null;
    city: string ='';
    country: string ='';


    // constructor(name: string, logo: File ,email: string, street: string , houseNr: number , city: string , country: string ) {
    //     this.name = name;
    //     this.logo = logo;
    //     this.email = email;
    //     this.street = street;
    //     this.houseNr = houseNr;
    //     this.city = city;
    //     this.country = country;

    // }

    static setOrganisation(organisation) {

        let result: Organisation = organisation
        return result
    }


}