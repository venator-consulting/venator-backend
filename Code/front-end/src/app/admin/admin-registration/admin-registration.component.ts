import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Roles } from "../../model/roles";
import { Titles } from "../../model/titles";

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.sass']
})
export class AdminRegistrationComponent implements OnInit {

  constructor(private _messageService: MessageService) { }

  title :any ;
  titles: Titles[] = Titles.getTitles();
  roles: Roles[] = Roles.getRoles();
  role : any ;
  firstname: string; 
  lastname: string; 
  username: string; 
  email: string; 
  mobileNr : number; 
  contactPerson: string; 
  street: string; 
  houseNr: string; 
  city: string; 
  country: string; 

/*   selectedRole = this.role.name ;
 */




  titleErroMsg : string = ' Please enter the title ' ;
  firstnameErroMsg : string = ' Please enter the firstname ';
  lastnameErroMsg : string = ' Please enter the lastname ';
  emailErroMsg : string = ' Please enter the email ';
  usernameErroMsg : string = ' Please enter the username ';
  mobileNrErroMsg : string = ' Please enter the mobilenumber ';
  contactPersonErroMsg : string = ' Please enter the contact person ';
  streetErroMsg : string = ' Please enter the street ';
  houseNrErroMsg : string = ' Please enter the housenumber ';
  cityErroMsg : string = ' Please enter the city ';
  countryErroMsg : string = ' Please enter the country ';


  ngOnInit(): void {
  }
  submitHandler() {
    const data = {
      title : this.title?.name,
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      role: this.role?.name,
      email: this.email,
      mobileNr : this.mobileNr,
      contactPerson: this.contactPerson,
      street: this.street,
      houseNr: this.houseNr,
      city: this.city,
      country: this.country,
    }

    if(!data.title) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.titleErroMsg
      });
    }
    if(!data.firstname) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.firstnameErroMsg
      });
    }
    if(!data.lastname) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.lastnameErroMsg
      });
    }
    if(!data.username) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.usernameErroMsg
      });
    }
    if(!data.mobileNr) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.mobileNrErroMsg
      });
    }
    if(!data.email) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.emailErroMsg
      });
    } else if(data.email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let emailTestBool =  re.test(String(data.email).toLowerCase());
      if(!emailTestBool) {
        this._messageService.add({
          severity: 'error',
          summary: 'Error!',
          detail: 'invalid email ! '
        });
      }
    }
    if(!data.contactPerson) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.contactPersonErroMsg
      });
    }
    if(!data.street) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.streetErroMsg
      });
    }
    if(!data.houseNr) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.houseNrErroMsg
      });
    }
    if(!data.city) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.cityErroMsg
      });
    }
    if(!data.country) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error!',
        detail: this.countryErroMsg
      });
    }
    console.log(data)
  }
}
