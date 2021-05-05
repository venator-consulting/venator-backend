import { Component, OnInit } from '@angular/core';
import { Organisation } from "../../shared/model/organisation"; 
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OrganisationService } from '../service/organisation.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-organisation-registration',
  templateUrl: './organisation-registration.component.html',
  styleUrls: ['./organisation-registration.component.sass']
})
export class OrganisationRegistrationComponent implements OnInit {

  organisation: Organisation = new Organisation();

  constructor(private _router: Router, private _messageService: MessageService, private _orgService: OrganisationService, public _translateService: TranslateService) { }

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
      postcode:this.organisation.postcode,
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
        this._translateService.get("ErrorHandler").subscribe(elem => {
          let errorMsg = "" ; 

          if(err.status=== 400){
            errorMsg = elem.badRequest_400
          }
          else if (err.status=== 401) {
            errorMsg = elem.unauthorized_401
          }
          else if (err.status=== 403) {
            errorMsg = elem.forbidden_403
          }
          else if (err.status=== 404) {
            errorMsg = elem.NotFound_404
          }
          else if (err.status=== 500) {
            errorMsg = elem.internalServerError_500
          }
          this._messageService.add({
            severity: 'error',
            summary: 'ERROR',
            life: 10000,
            detail: errorMsg
          });
        })
      });
  
  }



  cancelHandle(){
    this._router.navigate(['/admin/dashboard']); 

  }

}
