import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attachment, creditorsMails, MailAnalysis, MailAnalysisBySender, MailHistory, MailHistoryRes } from '../model/mailHistory';

@Injectable({
  providedIn: 'root'
})
export class MailHistoryService {

  _thisURL = environment.baseUrl + 'mail-history/'

  constructor(private _http: HttpClient) { }

  get(orgId: number, prcId: number, criteria: any): Observable<MailHistoryRes> {
    return this._http.get<MailHistoryRes>(this._thisURL + orgId + '/' + prcId, { params: criteria });
  }

  getCreditorsMails(orgId: number, prcId: number): Observable<creditorsMails[]> {
    return this._http.get<creditorsMails[]>(this._thisURL + orgId + '/' + prcId + '/creditors-mails');
  }


  updateEmail(orgId: number, prcId: number, row: MailHistory): Observable<MailHistory> {
    return this._http.put<MailHistory>(this._thisURL + orgId + '/' + prcId + '/creditors-mails', row);
  }


  getMailAnalysisWrod(orgId: number, prcId: number): Observable<MailAnalysis[]> {
    return this._http.get<MailAnalysis[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis/word');
  }

  getMailAnalysisSender(orgId: number, prcId: number): Observable<MailAnalysisBySender[]> {
    return this._http.get<MailAnalysisBySender[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis/sender');
  }

  getMailDetailsAnalysisWord(orgId: number, prcId: number, word: string): Observable<MailHistory[]> {
    return this._http.get<MailHistory[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis/word/' + word);
  }

  getMailDetailsAnalysisSender(orgId: number, prcId: number, mail: string): Observable<MailHistory[]> {
    return this._http.get<MailHistory[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis/sender/' + mail);
  }

  getBySenderDetailsJustRelevant(orgId: number, prcId: number, mail: string): Observable<MailHistory[]> {
    return this._http.get<MailHistory[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis/details/' + mail + '/relevant');
  }

  getBySenderDetailsAll(orgId: number, prcId: number, mail: string, criteria: any): Observable<{ count: number, rows: MailHistory[] }> {
    return this._http.get<{ count: number, rows: MailHistory[] }>(this._thisURL + orgId + '/' + prcId + '/details/' + mail, { params: criteria });
  }

  setRelevantMailAnalysis(orgId: number, prcId: number, mail: string, records: MailHistory[]): Observable<MailHistory[]> {
    return this._http.put<MailHistory[]>(this._thisURL + orgId + '/' + prcId + '/mail-analysis/sender/' + mail, records);
  }

  getAttachments(orgId: number, prcId: number, id: number): Observable<Attachment[]> {
    return this._http.get<Attachment[]>(this._thisURL + orgId + '/' + prcId + '/details/' + id + '/attachments');
  }

  downloadAttachment(orgId: number, prcId: number, id: number): Observable<any> {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/download/' + id + '/attachments', { responseType: 'blob' as 'json' });
  }

}
