import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  _thisURL = environment.autocomplete;

  constructor(private _http: HttpClient) { }

  autocompeteGerman(query: string): Observable<any> {
    return this._http.get<any>(this._thisURL + query);
  }

}
