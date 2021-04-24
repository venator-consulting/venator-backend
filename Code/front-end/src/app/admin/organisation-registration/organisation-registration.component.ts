import { Component, OnInit } from '@angular/core';
import { Organisation } from "../../shared/model/organisation"; 
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OrganisationService } from '../service/organisation.service';


@Component({
  selector: 'app-organisation-registration',
  templateUrl: './organisation-registration.component.html',
  styleUrls: ['./organisation-registration.component.sass']
})
export class OrganisationRegistrationComponent implements OnInit {

  organisation: Organisation = new Organisation();

  constructor(private _router: Router, private _messageService: MessageService, private _orgService: OrganisationService) { }

  ngOnInit(): void {
  }

  UploadHandler(event) {
    const selectedFiles: FileList = event.files;
    debugger;
    this.organisation.logo = selectedFiles[0];
  }

  submitHandler() {
    console.log(this.organisation);
    const formData: FormData = new FormData();
    formData.append('logo', this.organisation.logo);
    formData.append('data', JSON.stringify({
      name: this.organisation.name,
      email: this.organisation.email,
      street: this.organisation.street,
      houseNr: this.organisation.houseNr,
      city: this.organisation.city,
      country: this.organisation.country
    }));
  
    this._orgService
      .insert(formData)
      .subscribe(res => {
        console.dir('done: ' + res);

        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS!',
          detail: 'Organisation inserted successfully!'
        });
      }, err => {
        console.log('error: ' + err);
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: 'There is an error occured, please try again!'
        });
      });
  
  }



  cancelHandle(){
    this._router.navigate(['/admin/dashboard/procedures']); 

  }

}
