import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  _thisURL = environment.baseUrl + 'website/';

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get<any>(this._thisURL + 'data');
  }

}
