import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AmountAnalysis, AmountAnalysisDetails, AmountAnalysisDetailsChart } from '../model/amountAnalysis';
import { TextAnalysis, TextAnalysisDetails, TextAnalysisDetailsWord } from '../model/textAnalysis';
import { PaymentAnalysis, PaymentAnalysisDetails, PaymentAnalysisDetailsData } from '../model/paymentAnalysis';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  _thisURL = environment.baseUrl + 'analysis/';

  constructor(private _http: HttpClient) { }

  //#region Amount
  getAmountAnalysis(orgId: number, prcId: number, baseBalance: number): Observable<AmountAnalysis[]> {
    return this._http.get<AmountAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/amount-calc/' + baseBalance);
  }

  getAmountAnalysisDetails(orgId: number, prcId: number, accountNumber: string, baseBalance: number): Observable<AmountAnalysisDetails[]> {
    return this._http.get<AmountAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details/' + accountNumber + '/' + baseBalance);
  }

  getAmountAnalysisDetailsChart(orgId: number, prcId: number, accountNumber: string, baseBalance: number): Observable<AmountAnalysisDetailsChart[]> {
    return this._http.get<AmountAnalysisDetailsChart[]>(this._thisURL + orgId + '/' + prcId + '/amount/details-chart/' + accountNumber + '/' + baseBalance);
  }

  getAmountAnalysisDetailsRelevant(orgId: number, prcId: number, accountNumber: string): Observable<AmountAnalysisDetails[]> {
    return this._http.get<AmountAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details-relevant/' + accountNumber);
  }

  getAmountAnalysisDetailsByAccount(orgId: number, prcId: number, accountNumber: string, criteria: any): Observable<{ count: number, rows: AmountAnalysisDetails[] }> {
    return this._http.get<{ count: number, rows: AmountAnalysisDetails[] }>(this._thisURL + orgId + '/' + prcId + '/details/' + accountNumber, { params: criteria });
  }

  setRelevantAmountAnalysis(orgId: number, prcId: number, accountNumber: string, baseBalance: number, records: AmountAnalysisDetails[]): Observable<AmountAnalysisDetails[]> {
    return this._http.put<AmountAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/amount/details/' + accountNumber + '/' + baseBalance, records);
  }
  //#endregion Amount


  //#region Text
  getTextAnalysis(orgId: number, prcId: number): Observable<TextAnalysis[]> {
    return this._http.get<TextAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/text');
  }

  getTextAnalysisIndex(orgId: number, prcId: number): Observable<TextAnalysis[]> {
    return this._http.get<TextAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/text-index');
  }

  getTextAnalysisWord(orgId: number, prcId: number): Observable<any[]> {
    return this._http.get<any[]>(this._thisURL + orgId + '/' + prcId + '/text-word');
  }

  getTextAnalysisWordIndex(orgId: number, prcId: number): Observable<any[]> {
    return this._http.get<any[]>(this._thisURL + orgId + '/' + prcId + '/text-word-indexed');
  }

  getTextAnalysisWordCalcDateRange(orgId: number, prcId: number, step: string = 'MONTHLY'): Observable<any[]> {
    return this._http.get<any[]>(this._thisURL + orgId + '/' + prcId + '/text-word-calc/date-range/' + step);
  }

  getTextAnalysisWordCalcData(orgId: number, prcId: number, fromDate: string, toDate: string): Observable<any[]> {
    return this._http.get<any[]>(this._thisURL + orgId + '/' + prcId + '/text-word-calc/' + fromDate + '/' + toDate);
  }

  getTextAnalysisAccountCalcAll(orgId: number, prcId: number): Observable<any[]> {
    return this._http.get<any[]>(this._thisURL + orgId + '/' + prcId + '/text-account-calc');
  }

  getTextAnalysisWordCalcAll(orgId: number, prcId: number): Observable<any[]> {
    return this._http.get<any[]>(this._thisURL + orgId + '/' + prcId + '/text-word-calc');
  }

  getTextAnalysisDetails(orgId: number, prcId: number, accountNumber: string): Observable<TextAnalysisDetails[]> {
    return this._http.get<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber);
  }

  getTextAnalysisDetailsWords(orgId: number, prcId: number, accountNumber: string): Observable<TextAnalysisDetailsWord[]> {
    return this._http.get<TextAnalysisDetailsWord[]>(this._thisURL + orgId + '/' + prcId + '/text-word/account/' + accountNumber);
  }

  getTextAnalysisWordDetails(orgId: number, prcId: number, keyword: string): Observable<TextAnalysisDetails[]> {
    return this._http.get<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text-word/details/' + keyword);
  }

  getTextAnalysisDetailsRelevant(orgId: number, prcId: number, accountNumber: string): Observable<TextAnalysisDetails[]> {
    return this._http.get<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber + '/relevant');
  }

  getTextAnalysisDetailsByAccount(orgId: number, prcId: number, accountNumber: string, criteria: any): Observable<{ count: number, rows: TextAnalysisDetails[] }> {
    return this._http.get<{ count: number, rows: TextAnalysisDetails[] }>(this._thisURL + orgId + '/' + prcId + '/details/' + accountNumber, { params: criteria });
  }

  setRelevantTextAnalysis(orgId: number, prcId: number, accountNumber: string, records: TextAnalysisDetails[]): Observable<TextAnalysisDetails[]> {
    return this._http.put<TextAnalysisDetails[]>(this._thisURL + orgId + '/' + prcId + '/text/details/' + accountNumber, records);
  }
  //#endregion Text


  //#region Payment
  setRelevantPaymentAnalysis(orgId: number, prcId: number, accountNumber: string, records: PaymentAnalysisDetailsData[]): Observable<PaymentAnalysisDetailsData[]> {
    return this._http.put<PaymentAnalysisDetailsData[]>(this._thisURL + orgId + '/' + prcId + '/payment/details/' + accountNumber, records);
  }

  getPaymentAnalysis(orgId: number, prcId: number, fromDate: string, toDate: string): Observable<PaymentAnalysis> {
    return this._http.get<PaymentAnalysis>(this._thisURL + orgId + '/' + prcId + '/payment/' + fromDate + '/' + toDate);
  }


  getPaymentAnalysisDateFilter(orgId: number, prcId: number, toDate: string): Observable<PaymentAnalysis> {
    return this._http.get<PaymentAnalysis>(this._thisURL + orgId + '/' + prcId + '/payment/dateFilter/' + toDate);
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
  //#endregion Payment


  //#region Due date 
  getDueDateAnalysis(orgId: number, prcId: number, start: string, end: string, params: any): Observable<any> {
    return start?.trim() && end.trim() ? this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/duedate/' + start + '/' + end, { params }) :
      this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/duedate', { params });
  }

  getDueDateAnalysisDetails(orgId: number, prcId: number, accountNumber: string, start: string, end: string, maxDelay): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/duedate/details/' + accountNumber + '/' + start + '/' + end + '/' + maxDelay);
  }

  getDueDateTopDelayedAccounts(orgId: number, prcId: number, limit: number, offset: number) {
    return this._http.get<any>(`${this._thisURL}${orgId}/${prcId}/duedate/top-delayed?limit=${limit}&offset=${offset}`);
  }
  //#endregion Due date


  //#region  Creditor
  getCreditorAnalysis(orgId: number, prcId: number, criteria: any): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/credtor', { params: criteria });
  }

  getCreditorAnalysisDetails(orgId: number, prcId: number, accountNumber: string): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/credtor/details/' + accountNumber);
  }

  updateCreditorPriority(orgId: number, prcId: number, row: any): Observable<any> {
    return this._http.put<any>(this._thisURL + orgId + '/' + prcId + '/credtor', row);
  }

  getCreditorComment(orgId: number, prcId: number, accountNumber: string): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/credtor/details/comment/' + accountNumber);
  }

  updateCreditorComment(orgId: number, prcId: number, accountNumber: string, row: any): Observable<any> {
    return this._http.put<any>(this._thisURL + orgId + '/' + prcId + '/credtor/details/comment/' + accountNumber, row);
  }
  //#endregion Creditor

}
