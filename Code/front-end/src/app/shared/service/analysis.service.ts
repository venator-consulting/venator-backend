import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AmountAnalysis, AmountAnalysisDetails } from '../model/amountAnalysis';
import { TextAnalysis, TextAnalysisDetails } from '../model/textAnalysis';
import { PaymentAnalysis, PaymentAnalysisDetails, PaymentAnalysisDetailsData } from '../model/paymentAnalysis';

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

  getAmountAnalysisDetailsRelevant(orgId: number, prcId: number, accountNumber: string): Observable<AmountAnalysisDetails[]> {
    return this._http.get<AmountAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details-relevant/' + accountNumber);
  }

  getTextAnalysis(orgId: number, prcId: number): Observable<TextAnalysis[]> {
    return this._http.get<TextAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/text');
  }

  getTextAnalysisDetails(orgId: number, prcId: number, accountNumber: string): Observable<TextAnalysisDetails[]> {
    return this._http.get<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber);
  }

  getTextAnalysisDetailsRelevant(orgId: number, prcId: number, accountNumber: string): Observable<TextAnalysisDetails[]> {
    return this._http.get<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber + '/relevant');
  }

  getTextAnalysisDetailsByAccount(orgId: number, prcId: number, accountNumber: string, criteria: any): Observable<{ count: number, rows: TextAnalysisDetails[] }> {
    return this._http.get<{ count: number, rows: TextAnalysisDetails[] }>(this._thisURL + orgId + '/' + prcId + '/details/' + accountNumber, { params: criteria });
  }

  getAmountAnalysisDetailsByAccount(orgId: number, prcId: number, accountNumber: string, criteria: any): Observable<{ count: number, rows: AmountAnalysisDetails[] }> {
    return this._http.get<{ count: number, rows: AmountAnalysisDetails[] }>(this._thisURL + orgId + '/' + prcId + '/details/' + accountNumber, { params: criteria });
  }

  setRelevantTextAnalysis(orgId: number, prcId: number, accountNumber: string, records: TextAnalysisDetails[]): Observable<TextAnalysisDetails[]> {
    return this._http.put<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber, records);
  }

  setRelevantAmountAnalysis(orgId: number, prcId: number, accountNumber: string, baseBalance: number, records: AmountAnalysisDetails[]): Observable<AmountAnalysisDetails[]> {
    return this._http.put<AmountAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details/' + accountNumber + '/' + baseBalance, records);
  }

  setRelevantPaymentAnalysis(orgId: number, prcId: number, accountNumber: string, records: PaymentAnalysisDetailsData[]): Observable<PaymentAnalysisDetailsData[]> {
    return this._http.put<PaymentAnalysisDetailsData[]>(this._thisURL + orgId + '/' + prcId + '/payment/details/' + accountNumber, records);
  }

  getPaymentAnalysis(orgId: number, prcId: number): Observable<PaymentAnalysis> {
    return this._http.get<PaymentAnalysis>(this._thisURL + orgId + '/' + prcId + '/payment');
  }

  getPaymentAnalysisDetails(orgId: number, prcId: number, accountNumber: String): Observable<PaymentAnalysisDetails> {
    return this._http.get<PaymentAnalysisDetails>(this._thisURL + orgId + '/' + prcId + '/payment/details/' + accountNumber);
  }

  /**
   * get the relevant user for this account based on paymentRelevant field ignore other conditions
   * because the user can set any record as relevant even if the record is not blue neither red...
   * @param orgId 
   * @param prcId 
   * @param accountNumber 
   * @returns 
   */
  getPaymentAnalysisDetailsRelevant(orgId: number, prcId: number, accountNumber: string): Observable<PaymentAnalysisDetailsData[]> {
    return this._http.get<PaymentAnalysisDetailsData[]>(this._thisURL + orgId + '/' + prcId + '/payment/details-relevant/' + accountNumber);
  }

  /**
   * Get All records for this account; you can use getAmountAnalysisDetailsByAccount
   * return the same data but the difference in the comment and relative field
   * @param orgId 
   * @param prcId 
   * @param accountNumber 
   * @returns 
   */
  getPaymentAnalysisDetailsByAccount(orgId: number, prcId: number, accountNumber: string, criteria: any): Observable<{ count: number, rows: PaymentAnalysisDetailsData[] }> {
    return this._http.get<{ count: number, rows: PaymentAnalysisDetailsData[] }>(this._thisURL + orgId + '/' + prcId + '/details/' + accountNumber, { params: criteria });
  }

  getDueDateAnalysis(orgId: number, prcId: number): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/duedate');
  }

  getDueDateAnalysisDetails(orgId: number, prcId: number, accountNumber: string): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/duedate/details/' + accountNumber);
  }


  getCreditorAnalysis(orgId: number, prcId: number, criteria: any): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/credtor', { params: criteria });
  }

  getCreditorAnalysisDetails(orgId: number, prcId: number, accountNumber: string): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/credtor/details/' + accountNumber);
  }

}
