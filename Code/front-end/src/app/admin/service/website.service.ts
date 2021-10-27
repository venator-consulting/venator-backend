import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { SocialLink } from 'src/app/shared/model/contact';
import { AboutItem, OurServicesItem } from 'src/app/shared/model/website';

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
    return this._http.put<any>(this._thisURL, data);
  }

  updateSlider(data) {
    return this._http.put<any>(this._thisURL + 'slider', data);
  }

  //#region our services
  getOurServicesItems() {
    return this._http.get<any>(this._thisURL + 'servicesItem');
  }

  saveOurServicesItems(data) {
    return this._http.post<any>(this._thisURL + 'servicesItem', data);
  }

  deleteOurServicesItems(id: number) {
    return this._http.delete(this._thisURL + 'servicesItem/' + id);
  }
  //#endregion our services

  //#region About us
  updateAbout(data) {
    return this._http.put<any>(this._thisURL + 'about', data);
  }

  getAboutItems() {
    return this._http.get<any>(this._thisURL + 'aboutItem');
  }

  saveAboutItems(data: AboutItem) {
    return this._http.post<any>(this._thisURL + 'aboutItem', data);
  }

  deleteAboutItems(id: number) {
    return this._http.delete(this._thisURL + 'aboutItem/' + id);
  }
  //#endregion about us

  //#region contact 
  getSocialLinks() {
    return this._http.get<any>(this._thisURL + 'social');
  }

  saveSocilaLinks(data: SocialLink) {
    return this._http.post<any>(this._thisURL + 'social', data);
  }

  deleteSocialLink(id: number) {
    return this._http.delete(this._thisURL + 'social/' + id);
  }
  //#endregion contact

}
