import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFilterService {

  _thisURL = environment.baseUrl + 'shared';
  constructor(private _http: HttpClient) { }

  getFirstFilteredData(filterValue, filterField, offset) {
    return this._http.get(this._thisURL + '/getFirstFilteredData/' + filterValue + "/" + filterField + "/" + offset);

 }
 getSecondFilteredData(filterValue1, filterField1,filterValue2, filterField2, offset) {
  return this._http.get(this._thisURL + '/getSecondFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + offset);

}
 
}
