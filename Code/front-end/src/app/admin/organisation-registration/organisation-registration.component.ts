import { Component, OnInit } from '@angular/core';
import { Organisation } from "../../model/organisation"; 
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-organisation-registration',
  templateUrl: './organisation-registration.component.html',
  styleUrls: ['./organisation-registration.component.sass']
})
export class OrganisationRegistrationComponent implements OnInit {

  organisation: Organisation = {
    name:'',
    logo: null,
    email: '',
    street:'',
    houseNr:null,
    city:'',
    country:'',
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitHandler() {
    console.log(this.organisation)
  }
}
