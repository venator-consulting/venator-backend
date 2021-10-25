import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  _thisURL = environment.baseUrl + 'admin/website/';

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get<any>(this._thisURL);
  }

  updateSlider(data) {
    return this._http.put<any>(this._thisURL + 'slider', data);
  }

}
