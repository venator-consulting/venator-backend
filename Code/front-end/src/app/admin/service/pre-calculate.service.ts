import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreCalculateService {

  _thisURL = environment.baseUrl + 'admin/precalculate/';
  _linkTranURL = environment.baseUrl + 'admin/link-trans/';
  private subj = new BehaviorSubject([]);
  evs: EventSource;

  constructor(private _http: HttpClient) { }

  textAnalysisByWord(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'text-by-word/' + orgId + '/' + prcId);
  }


  textAnalysisByAccount(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'text-by-account/' + orgId + '/' + prcId);
  }


  amountAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'amount/' + orgId + '/' + prcId);
  }

  creditorAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'creditor/' + orgId + '/' + prcId);
  }

  paymentAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'payment/' + orgId + '/' + prcId);
  }

  dueDateAnalysis(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'due-date/' + orgId + '/' + prcId);
  }

  mailAnalysisBySender(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'mail-sender/' + orgId + '/' + prcId);
  }

  mailAnalysisByWord(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + 'mail-word/' + orgId + '/' + prcId);
  }

  returnAsObservable() {
    return this.subj.asObservable();
  }

  linkTransactions(orgId: number, prcId: number) {

    let subject = this.subj;
    if (typeof (EventSource) !== 'undefined') {
      // debugger;
      this.evs = new EventSource(this._linkTranURL + orgId + '/' + prcId);
      this.evs.onopen = function (e) {
        console.log('Opening connection.Ready State is ' + this.readyState);
      }
      this.evs.onmessage = function (e) {
        console.log('Message Received.Ready State is ' + this.readyState);
        subject.next(JSON.parse(e.data));
      }
      this.evs.addEventListener("progress", function (e) {
        console.log("Timestamp event Received.Ready State is " + this.readyState);
        subject.next(e["data"]);
      })
      this.evs.onerror = function (e) {
        console.log(e);
        if (this.readyState == 0) {
          console.log('Reconnecting…');
        }
      }

      // return this._http.get<any>(this._linkTranURL + orgId + '/' + prcId);
    }
    // return subject.asObservable();
  }

  stopSSE() {
    this.evs.close();
  }

}
