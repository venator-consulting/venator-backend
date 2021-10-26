import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { SocialLink } from 'src/app/shared/model/contact';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  _thisURL = environment.baseUrl + 'admin/website/';

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get<any>(this._thisURL);
  }

  update(data) {
    return this._http.put<any>(this._thisURL , data);
  }

  updateSlider(data) {
    return this._http.put<any>(this._thisURL + 'slider', data);
  }

  getSocialLinks() {
    return this._http.get<any>(this._thisURL + 'social');
  }

  saveSocilaLinks(data: SocialLink) {
    return this._http.post<any>(this._thisURL + 'social', data);
  }

  deleteSocialLink(id: number) {
    return this._http.delete(this._thisURL + 'social/' + id);
  }

}
