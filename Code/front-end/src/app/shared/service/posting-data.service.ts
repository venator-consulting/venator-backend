import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostingDataService {

  _thisURL = environment.baseUrl + 'shared';
  constructor(private _http: HttpClient) { }

  getDataTable(companyCode) {
    return this._http.get(this._thisURL + '/getPostingData/' + companyCode);
  }

}
