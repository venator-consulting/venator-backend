import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  _thisURL = environment.baseUrl + 'shared/';

  constructor(private _http: HttpClient) { }


  complete(word: string): Observable<Word[]> {
    return this._http.get<Word[]>(this._thisURL + 'complete/' + word);
  }

 
}
