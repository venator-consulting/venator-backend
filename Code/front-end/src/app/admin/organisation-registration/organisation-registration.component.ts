import { Component, OnInit } from '@angular/core';
import { Organisation } from "../../shared/model/organisation"; 
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


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

  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }

  submitHandler() {
    console.log(this.organisation)
  }
  cancelHandle(){
    this._router.navigate(['/admin/dashboard/procedures']); 

  }
}
