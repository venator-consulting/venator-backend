import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procedures } from '../model/procedures';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  _thisURL = environment.baseUrl + 'shared';

  _adminURL = environment.baseUrl + 'admin';

  constructor(private _http: HttpClient) { }

  getProcedures(organisationId) {
    return this._http.get<any>(this._thisURL + '/users/' + organisationId + '/procedures');
  }

  getById(prcId: number): Observable<Procedures[]> {
    return this._http.get<Procedures[]>(this._thisURL + '/procedure/' + prcId);
  }

  reset(orgId, prcId) {
    return this._http.delete<any>(this._adminURL + '/procedures/' + orgId + '/' + prcId);
  }

}
