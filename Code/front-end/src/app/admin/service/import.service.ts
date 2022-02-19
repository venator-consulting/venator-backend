import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SseService } from 'src/app/shared/service/sse.service';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  _thisURL = environment.baseUrl + 'admin';

  constructor(private _http: HttpClient, private _sseService: SseService) { }


  uploadFile(formdata) {
    return this._http.post<any>(this._thisURL + '/header', formdata, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({ 'ngsw-bypass': '', responseType: 'text', })
    });
  }

  importPST(formData) {
    return this._http.post<any>(this._thisURL + '/pst', formData);
  }

  importFile(formData) {
    return this._http.post<any>(this._thisURL + '/import', formData);
    // return this._sseService.postSSE(this._thisURL + '/import', formData);
  }

  closeSSE() {
    this._sseService.closePostConnection();
  }

  deleteFile(data) {
    return this._http.post<any>(this._thisURL + '/delete-file', data);
  }

  addProcedure(procedure) {
    console.log(procedure)
  }
}
