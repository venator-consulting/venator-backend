import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Procedures } from 'src/app/model/procedures';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  _thisURL = environment.baseUrl + 'procedures';

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get<any>(this._thisURL);
  }

  insert(p: Procedures) {
    return this._http.post<any>(this._thisURL, p);
  }

  getOne(id: number) {
    return this._http.get<any>(this._thisURL + '/' + id);
  }

  update(p: Procedures) {
    return this._http.put<any>(this._thisURL + '/' + p.id, p);
  }

  delete(id: number) {
    return this._http.delete<any>(this._thisURL + '/' + id);
  }

}
