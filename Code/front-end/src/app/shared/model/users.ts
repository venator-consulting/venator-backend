

export class Users {

    title: string =  '';
    organisationId: number = 0;
    email: string ='';
    role:  string ='';
    firstname: string ='';
    lastname: string ='';
    username: string ='';
    mobileNr: string ='';
    contactPerson: string ='';
    street: string ='';
    houseNr: number = null;
    city: string ='';
    postcode: string ='';
    country: string ='';

    constructor(title: string, organisationId: number, email: string, role: string,firstname: string,lastname: string,
                username: string,mobileNr: string,street: string,houseNr: number,city: string,
                postcode: string, country: string ) {
                    
        this.title = title;
        this.organisationId = organisationId;
        this.email = email;
        this.role = role;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.mobileNr = mobileNr;
        this.street = street;
        this.houseNr = houseNr;
        this.city = city;
        this.postcode = postcode;
        this.country = country;

    }

    static setUser(userModel) {

        let result: Users = userModel
        return result
    }


}