import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFilterService {

  _thisURL = environment.baseUrl + 'shared';
  constructor(private _http: HttpClient) { }

  get(params: any) {
    return this._http.get<any>(this._thisURL + '/posting', { params: params });
  }

  getFirstFilteredData(filterValue, filterField, offset: number, limit: number) {
    return this._http.get(this._thisURL + '/getFirstFilteredData/' + filterValue + "/" + filterField + "/" + offset + '/' + limit);

  }
  getSecondFilteredData(filterValue1, filterField1, filterValue2, filterField2, offset: number, limit: number) {
    return this._http.get(this._thisURL + '/getSecondFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + offset + '/' + limit);

  }
  getThirdFilteredData(filterValue1, filterField1, filterValue2, filterField2, filterValue3, filterField3, offset: number, limit: number) {
    return this._http.get(this._thisURL + '/getThirdFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + filterValue3 + "/" + filterField3 + "/" + offset + '/' + limit);

  }
  getFirthFilteredData(filterValue1, filterField1, filterValue2, filterField2, filterValue3, filterField3, filterValue4, filterField4, offset: number, limit: number) {
    return this._http.get(this._thisURL + '/getFirthFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + filterValue3 + "/" + filterField3 + "/" + filterValue4 + "/" + filterField4 + "/" + offset + '/' + limit);

  }
  getFifthFilteredData(filterValue1, filterField1, filterValue2, filterField2, filterValue3, filterField3, filterValue4, filterField4, filterValue5, filterField5, offset: number, limit: number) {
    return this._http.get(this._thisURL + '/getFifthFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + filterValue3 + "/" + filterField3 + "/" + filterValue4 + "/" + filterField4 + "/" + filterValue5 + "/" + filterField5 + "/" + offset + '/' + limit);

  }
}
