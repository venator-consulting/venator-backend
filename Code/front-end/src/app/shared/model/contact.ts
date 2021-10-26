export class ContactInfo {
    id: number;
    email: string;
    phone: string;
    fax: string;
    postCode: string;
    houseNr: number;
    street: string;
    city: string;
    country: string;
}

export class SocialLink {
    id: number;
    name: string;
    icon: string;
    order: number;
    url: string;
    isEditable: boolean;
}