import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  _thisURL = environment.baseUrl + 'admin';

  constructor(private _http: HttpClient) { }

  getRoles() {
     return this._http.get<any>(this._thisURL + '/roles');
  }
  getmanagerRoleId() {
    return this._http.get<any>(this._thisURL + '/roles/getManagerId');
 }

 addProcedure(procedure) {
   return this._http.post<any>(this._thisURL + '/procedures', procedure);
}

editProcedure(procedure) {
   return this._http.put<any>(this._thisURL + '/procedures/edit', procedure);
}
}
