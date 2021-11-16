import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailAnalysis, MailHistory } from '../model/mailHistory';

@Injectable({
  providedIn: 'root'
})
export class MailHistoryService {

  _thisURL = environment.baseUrl + 'mail-history/'

  constructor(private _http: HttpClient) { }

  get(orgId: number, prcId: number): Observable<MailHistory[]> {
    return this._http.get<MailHistory[]>(this._thisURL + orgId + '/' + prcId);
  }

  getMailAnalysis(orgId: number, prcId: number): Observable<MailAnalysis[]> {
    return this._http.get<MailAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis');
  }
//word

getMailDetailsAnalysis(orgId: number, prcId: number, word: string): Observable<MailHistory[]> {
  return this._http.get<MailHistory[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis/' + word);
}

}
