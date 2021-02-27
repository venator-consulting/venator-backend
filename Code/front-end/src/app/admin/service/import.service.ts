import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  _thisURL = environment.baseUrl + 'admin/csv-header';

  constructor(private _http: HttpClient) { }


  uploadPosting(formdata) {
    return this._http.post<any>(this._thisURL, formdata);
  }

}
