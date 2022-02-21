import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserPrefernecesService {

  private _URL = environment.baseUrl + 'shared/preferences';

  constructor(private _http: HttpClient) { }

  get(userId) {
    return this._http.get<any>(this._URL);
  }

  save(data) {
    return this._http.post<any>(this._URL, data);
  }

}
