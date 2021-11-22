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


  amountAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'amount/' + orgId +'/' + prcId);
  }

  creditorAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'creditor/' + orgId +'/' + prcId);
  }

  paymentAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'payment/' + orgId +'/' + prcId);
  }

  dueDateAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'due-date/' + orgId +'/' + prcId);
  }

  mailAnalysisBySender(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'mail-sender/' + orgId +'/' + prcId);
  }

  mailAnalysisByWord(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'mail-word/' + orgId +'/' + prcId);
  }

}
