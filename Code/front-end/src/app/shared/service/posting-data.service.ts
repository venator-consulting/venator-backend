import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostingDataService {

  _thisURL = environment.baseUrl + 'shared';
  
  constructor(private _http: HttpClient) { }

  getDataTable(companyCode:string, offset:number, limit: number) {
    return this._http.get(this._thisURL + '/getPostingData/' + companyCode + '/' + offset + '/' + limit);
  }

  getDefaultSusaDateRange(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + `/susa/defaultDate/${orgId}/${prcId}`);
  }

  getSusa(orgId: number, prcId: number, fromDate: string, toDate: string, criteria: any) {
    let url = this._thisURL + `/susa/${orgId}/${prcId}`;
    if (fromDate && toDate) {
      url += `/${fromDate}/${toDate}`
    }
    return this._http.get<any>(url, { params: criteria });
  }

}
