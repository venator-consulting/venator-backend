import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  _thisURL = environment.baseUrl + 'admin';

  constructor(private _http: HttpClient) { }


  uploadFile(formdata) {
    return this._http.post<any>(this._thisURL + '/header', formdata);
  }

  importFile(formData) {
    return this._http.post<any>(this._thisURL + '/import', formData);
  }
  addProcedure(procedure) {
    console.log(procedure)
  }
}
