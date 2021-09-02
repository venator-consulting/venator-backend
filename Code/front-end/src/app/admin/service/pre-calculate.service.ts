import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreCalculateService {

  _thisURL = environment.baseUrl + 'admin/precalculate/';

  constructor(private _http: HttpClient) { }

  textAnalysisByWord(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'text-by-word/' + orgId +'/' + prcId);
  }


  textAnalysisByAccount(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'text-by-account/' + orgId +'/' + prcId);
  }

}
