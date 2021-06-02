import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AmountAnalysis, AmountAnalysisDetails } from '../model/amountAnalysis';
import { TextAnalysis, TextAnalysisDetails } from '../model/textAnalysis';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  _thisURL = environment.baseUrl + 'analysis/';

  constructor(private _http: HttpClient) { }

  getAmountAnalysis(orgId: number, prcId: number, baseBalance: number): Observable<AmountAnalysis[]> {
    return this._http.get<AmountAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/amount/' + baseBalance);
  }

  getAmountAnalysisDetails(orgId: number, prcId: number, creditorNumber: string): Observable<AmountAnalysisDetails[]> {
    return this._http.get<AmountAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details/' + creditorNumber);
  }

  getTextAnalysis(orgId: number, prcId: number): Observable<TextAnalysis[]> {
    return this._http.get<TextAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/text');
  }

  getTextAnalysisDetails(orgId: number, prcId: number, creditorNumber: string): Observable<TextAnalysisDetails[]> {
    return this._http.get<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details/' + creditorNumber);
  }

}
