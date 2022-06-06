import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SseService } from 'src/app/shared/service/sse.service';

@Injectable({
  providedIn: 'root'
})
export class PreCalculateService {

  _thisBaseURL = environment.baseUrl + 'admin/';
  _thisURL = environment.baseUrl + 'admin/precalculate/';
  _linkTranURL = environment.baseUrl + 'admin/link-trans/';

  constructor(private _http: HttpClient, private sseService: SseService) { }

  textAnalysisByWord(orgId: number, prcId: number): Observable<any> {
    let url = this._thisURL + 'text-by-word/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
  }


  textAnalysisByAccount(orgId: number, prcId: number) {
    let url = this._thisURL + 'text-by-account/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
    // return this._http.get<any>(this._thisURL + 'text-by-account/' + orgId + '/' + prcId);
  }


  amountAnalysis(orgId: number, prcId: number) {
    let url = this._thisURL + 'amount/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
    // return this._http.get<any>(this._thisURL + 'amount/' + orgId + '/' + prcId);
  }

  creditorAnalysis(orgId: number, prcId: number) {
    let url = this._thisURL + 'creditor/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
    // return this._http.get<any>(this._thisURL + 'creditor/' + orgId + '/' + prcId);
  }

  paymentAnalysis(orgId: number, prcId: number) {
    let url = this._thisURL + 'payment/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
    // return this._http.get<any>(this._thisURL + 'payment/' + orgId + '/' + prcId);
  }

  dueDateAnalysis(orgId: number, prcId: number) {
    let url = this._thisURL + 'due-date/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
    // return this._http.get<any>(this._thisURL + 'due-date/' + orgId + '/' + prcId);
  }

  mailAttachmentAnalysis(orgId: number, prcId: number) {
    let url = this._thisBaseURL + 'pst/parse-attachments/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
  }

  mailAnalysisBySender(orgId: number, prcId: number) {
    let url = this._thisURL + 'mail-sender/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
    // return this._http.get<any>(this._thisURL + 'mail-sender/' + orgId + '/' + prcId);
  }

  mailAnalysisByWord(orgId: number, prcId: number) {
    let url = this._thisURL + 'mail-word/' + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
    // return this._http.get<any>(this._thisURL + 'mail-word/' + orgId + '/' + prcId);
  }

  linkTransactions(orgId: number, prcId: number) {
    const url = this._linkTranURL + orgId + '/' + prcId;
    return this.sseService.getSSE(url);
  }

}
