import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationService {

  _thisURL = environment.baseUrl + 'admin';

  constructor(private _http: HttpClient) { }


  addUser(user) {
    console.log(user)
     return this._http.post<any>(this._thisURL + '/registration', user);
  }

}
