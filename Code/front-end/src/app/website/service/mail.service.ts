import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../model/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  _thisURL = environment.baseUrl + 'website/';

  constructor(private _http: HttpClient) { }

  public sendMail(mail: Mail): Observable<any> {
    return this._http.post(this._thisURL + 'mail', mail);
  }
}
