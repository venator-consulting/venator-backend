

export class Users {

    title: string =  '';
    email: string ='';
    role:  string ='';
    firstname: string ='';
    lastname: string ='';
    username: string ='';
    mobileNr: number = null;
    contactPerson: string ='';
    street: string ='';
    houseNr: number = null;
    city: string ='';
    country: string ='';

    constructor(title: string, email: string, role: string,firstname: string,lastname: string,
                username: string,mobileNr: number,street: string,houseNr: number,city: string,
                country: string ) {
        this.title = title;
        this.email = email;
        this.role = role;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.mobileNr = mobileNr;
        this.street = street;
        this.houseNr = houseNr;
        this.city = city;
        this.country = country;

    }

    static setUser(userModel) {

        let result: Users = userModel
        return result
    }


}