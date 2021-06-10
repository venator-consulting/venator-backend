import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFilterService {

  _thisURL = environment.baseUrl + 'shared';
  constructor(private _http: HttpClient) { }

  get(params: any) {
    return this._http.get<any>(this._thisURL + '/posting', { params: params });
  }

  
}
