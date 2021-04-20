import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExportDataService {

  _thisURL = environment.baseUrl + 'shared';

  constructor(private _http: HttpClient) { }

  exportXLSX(data) {
    return this._http.get(this._thisURL + '/exportXLSX/' + data);

  }

  exportPDF(data) {
    return this._http.get(this._thisURL + '/exportPDF/' + data);

  }
}
