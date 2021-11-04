import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailHistory } from '../model/mailHistory';

@Injectable({
  providedIn: 'root'
})
export class MailHistoryService {

  _thisURL = environment.baseUrl + 'mail-history/'

  constructor(private _http: HttpClient) { }

  get(orgId: number, prcId: number): Observable<MailHistory[]> {
    return this._http.get<MailHistory[]>(this._thisURL + orgId + '/' + prcId);
  }
}
