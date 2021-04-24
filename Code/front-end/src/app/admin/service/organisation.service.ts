import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Organisation } from 'src/app/shared/model/organisation';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  _thisURL = environment.baseUrl + 'admin/organisation';

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get<any>(this._thisURL);
  }

  insert(p: FormData) {
    return this._http.post<any>(this._thisURL, p);
  }

  getOne(id: number) {
    return this._http.get<any>(this._thisURL + '/' + id);
  }

  update(p: FormData, id: number) {
    return this._http.put<any>(this._thisURL + '/' + id, p);
  }

  delete(id: number) {
    return this._http.delete<any>(this._thisURL + '/' + id);
  }

  getProcedures(id: number) {
    return this._http.get<any>(this._thisURL + '/' + id + '/procedures')
  }

}
