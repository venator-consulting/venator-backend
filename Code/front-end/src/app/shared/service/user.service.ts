import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _thisURL = environment.baseUrl + 'shared';

  constructor(private _http: HttpClient) { }

  addUser(user) {
    console.log(user)
     return this._http.post<any>(this._thisURL + '/user/add', user);
  }

  editUser(user) {
    console.log(user)
     return this._http.put<any>(this._thisURL + '/user/edit', user);
  }

  getProcedures(organisationId) {
    return this._http.get<any>(this._thisURL + '/users/' + organisationId + '/procedures');
  }

  getUsers(organisationId) {
    return this._http.get<any>(this._thisURL + '/users/' + organisationId );
  }
}
