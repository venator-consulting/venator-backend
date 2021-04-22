import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  _thisURL = environment.baseUrl + 'admin';

  constructor(private _http: HttpClient) { }

  getManagers() {
    return this._http.get<any>(this._thisURL + '/getManagers');
 }

 getProcedures(userId) {
   return this._http.get<any>(this._thisURL + '/users/' + userId + '/procedures');
 }

 getUsers(userId) {
  return this._http.get<any>(this._thisURL + '/users/' + userId + '/users');
}

}
