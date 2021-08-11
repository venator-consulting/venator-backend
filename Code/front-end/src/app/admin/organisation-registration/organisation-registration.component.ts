import { Component, OnInit } from '@angular/core';
import { Organisation } from "../../shared/model/organisation";
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from '../service/organisation.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-organisation-registration',
  templateUrl: './organisation-registration.component.html',
  styleUrls: ['./organisation-registration.component.sass']
})
export class OrganisationRegistrationComponent implements OnInit {

  organisation: Organisation = new Organisation();
  id: number;
  imageSrc: string | ArrayBuffer;
  fromFront: boolean = false;

  constructor(private _router: Router, private _messageService: MessageService,
    private _orgService: OrganisationService, public _translateService: TranslateService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this._route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this._orgService
        .getOne(this.id)
        .subscribe(res => {
          if (res.length > 0) {
            this.organisation = res[0];
            this.fromFront = this.organisation.logo? false : true;
          }
        }, err => {
          this._translateService.get("ErrorHandler").subscribe(elem => {
            let errorMsg = "";

            if (err.status === 400) {
              errorMsg = elem.badRequest_400
            }
            else if (err.status === 401) {
              errorMsg = elem.unauthorized_401
            }
            else if (err.status === 403) {
              errorMsg = elem.forbidden_403
            }
            else if (err.status === 404) {
              errorMsg = elem.NotFound_404
            }
            else if (err.status === 500) {
              errorMsg = elem.internalServerError_500
            }
            this._messageService.add({
              severity: 'error',
              summary: 'ERROR',
              life: 10000,
              detail: errorMsg
            });
          });
        });
    }

  } // end of ngInit

  UploadHandler(event) {
    const selectedFiles: FileList = event.files;
    this.organisation.logo = selectedFiles[0];
    this.fromFront = true;
    if (selectedFiles && selectedFiles[0]) {
      const file = selectedFiles[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
  }
  }

  submitHandler() {

    const formData: FormData = new FormData();
    formData.append('logo', this.organisation.logo);
    formData.append('data', JSON.stringify(this.organisation));

    // if organisation has an id value, then the action is update
    if (this.organisation && this.organisation.id > 0) {
      this._orgService
        .update(formData, this.organisation.id)
        .subscribe(res => {
          this._messageService.add({
            severity: 'success',
            summary: 'SUCCESS!',
            detail: 'Organisation updated successfully!'
          });
        }, err => {
          this._translateService.get("ErrorHandler").subscribe(elem => {
            let errorMsg = "";

            if (err.status === 400) {
              errorMsg = elem.badRequest_400
            }
            else if (err.status === 401) {
              errorMsg = elem.unauthorized_401
            }
            else if (err.status === 403) {
              errorMsg = elem.forbidden_403
            }
            else if (err.status === 404) {
              errorMsg = elem.NotFound_404
            }
            else if (err.status === 500) {
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
    } else {
      this._orgService
        .insert(formData)
        .subscribe(res => {
          this.organisation = res;
          this.fromFront = false;
          this._messageService.add({
            severity: 'success',
            summary: 'SUCCESS!',
            detail: 'Organisation inserted successfully!'
          });
        }, err => {
          this._translateService.get("ErrorHandler").subscribe(elem => {
            let errorMsg = "";

            if (err.status === 400) {
              errorMsg = elem.badRequest_400
            }
            else if (err.status === 401) {
              errorMsg = elem.unauthorized_401
            }
            else if (err.status === 403) {
              errorMsg = elem.forbidden_403
            }
            else if (err.status === 404) {
              errorMsg = elem.NotFound_404
            }
            else if (err.status === 500) {
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

    } // end of if-else has an id
  } // end of submit handler function



  cancelHandle() {
    this._router.navigate(['/dashboard/admin/dashboard']);
  }

}
