import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostingDataService {

  _thisURL = environment.baseUrl + 'shared';
  constructor(private _http: HttpClient) { }

  getDataTable(companyCode:string, offset:number) {
    return this._http.get(this._thisURL + '/getPostingData/' + companyCode + '/' + offset);
  }

  getLastDataTable(companyCode:string) {
    return this._http.get(this._thisURL + '/getLastPostingData/' + companyCode );
  }

  getLastDataPrevious(companyCode:string, strtId, endId) {
    return this._http.get(this._thisURL + '/getLastDataPrevious/' + companyCode + '/' + strtId + '/' + endId);
  }

  getLastDataNext(companyCode:string, strtId, endId) {
    return this._http.get(this._thisURL + '/getLastDataNext/' + companyCode + '/' + strtId + '/' + endId);
  }
}
