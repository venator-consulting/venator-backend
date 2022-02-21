import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserPrefernecesService } from './user-preferneces.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  _thisURL = environment.baseUrl + 'shared';

  constructor(private _http: HttpClient, private _router: Router,
    private _preferencesService: UserPrefernecesService) { }

  login(data: any) {
    return this._http.post<any>(this._thisURL + '/login', data);
  }

  resetPassword(data: any) {
    return this._http.post<any>(this._thisURL + '/resetPassword', data);
  }

  changePassword(data: { password: string }) {
    return this._http.post<any>(this._thisURL + '/profile/resetPassword', data);
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

  logout() {
    // save prefernces
    let dataTableColumns = localStorage.getItem('data-columns');
    this._preferencesService.save({ dataTableColumns }).subscribe(res => {
      // localStorage.clear();
      // this._router.navigate(['/']);
    });
    // logout even when we can't update the preferences!
    localStorage.clear();
    this._router.navigate(['/']);
  }

}
