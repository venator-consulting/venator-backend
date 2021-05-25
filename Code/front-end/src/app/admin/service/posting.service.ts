import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Procedures } from 'src/app/shared/model/procedures';
import { Observable } from 'rxjs';
import { DocumentTypes, PostingDocTypes } from 'src/app/shared/model/document-type';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  _docTypeURL = environment.baseUrl + 'admin/document-type/';

  constructor(private _http: HttpClient) { }

  getDocTypesEnum(): Observable<DocumentTypes[]> {
    return this._http.get<DocumentTypes[]>(this._docTypeURL);
  }

  getPostingDocTypes(orgId: number, prcdrId: number): Observable<PostingDocTypes[]>{
    return this._http.get<PostingDocTypes[]>(this._docTypeURL + 'posting/' + orgId + '/' + prcdrId);
  }

  updateNewDocType(orgId: number, prcdrId: number, data: {documentType, documentTypeNewId, documentTypeNewName}): Observable<any>{
    return this._http.put<any>(this._docTypeURL + 'posting/' + orgId + '/' + prcdrId, data);
  }

}
