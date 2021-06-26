import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AmountAnalysis, AmountAnalysisDetails } from '../model/amountAnalysis';
import { TextAnalysis, TextAnalysisDetails } from '../model/textAnalysis';
import { PaymentAnalysis } from '../model/paymentAnalysis';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  _thisURL = environment.baseUrl + 'analysis/';

  constructor(private _http: HttpClient) { }

  getAmountAnalysis(orgId: number, prcId: number, baseBalance: number): Observable<AmountAnalysis[]> {
    return this._http.get<AmountAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/amount/' + baseBalance);
  }

  getAmountAnalysisDetails(orgId: number, prcId: number, accountNumber: string, baseBalance: number): Observable<AmountAnalysisDetails[]> {
    return this._http.get<AmountAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details/' + accountNumber + '/' + baseBalance);
  }

  getTextAnalysis(orgId: number, prcId: number): Observable<TextAnalysis[]> {
    return this._http.get<TextAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/text');
  }

  getTextAnalysisDetails(orgId: number, prcId: number, accountNumber: string): Observable<TextAnalysisDetails[]> {
    return this._http.get<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber);
  }

  setRelevantTextAnalysis(orgId: number, prcId: number, accountNumber: string, records: TextAnalysisDetails[]): Observable<TextAnalysisDetails[]> {
    return this._http.put<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber, records);
  }

  getPaymentAnalysis(orgId: number, prcId: number): Observable<PaymentAnalysis> {
    return this._http.get<PaymentAnalysis>(this._thisURL + orgId + '/' + prcId + '/payment');
  }

}
