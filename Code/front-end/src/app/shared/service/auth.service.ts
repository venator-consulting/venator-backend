import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _thisURL = environment.baseUrl + 'shared';

  constructor(private _http: HttpClient) { }

  login(data: any) {
    return this._http.post<any>(this._thisURL + '/login', data);
  }

  resetPassword(data: any) {
    return this._http.post<any>(this._thisURL + '/resetPassword', data);
  }

  adminRegistration(data: any) {
    return this._http.post<any>(this._thisURL + '/adminRegistration', data);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

}
