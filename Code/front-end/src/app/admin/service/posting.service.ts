import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Procedures } from 'src/app/shared/model/procedures';
import { Observable } from 'rxjs';
import { DocumentTypes, PostingDocTypes } from 'src/app/shared/model/document-type';
import { AccountTypes, PostingAccountTypes } from 'src/app/shared/model/accountType';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
  _thisURL = environment.baseUrl + 'admin/';
  _docTypeURL = environment.baseUrl + 'admin/document-type/';
  _dueDateURL = environment.baseUrl + 'admin/update-due-date/';

  constructor(private _http: HttpClient) { }

  getDocTypesEnum(): Observable<DocumentTypes[]> {
    return this._http.get<DocumentTypes[]>(this._docTypeURL);
  }

  getPostingDocTypes(orgId: number, prcdrId: number): Observable<PostingDocTypes[]> {
    return this._http.get<PostingDocTypes[]>(this._docTypeURL + 'posting/' + orgId + '/' + prcdrId);
  }

  updateNewDocType(orgId: number, prcdrId: number, data: { documentType, documentTypeNewId, documentTypeNewName }): Observable<any> {
    return this._http.put<any>(this._docTypeURL + 'posting/' + orgId + '/' + prcdrId, data);
  }



  getAccountTypesEnum(): Observable<AccountTypes[]> {
    return this._http.get<AccountTypes[]>(this._thisURL + 'account-type');
  }

  getPostingAccountTypes(orgId: number, prcId: number): Observable<PostingAccountTypes[]> {
    return this._http.get<PostingAccountTypes[]>(this._thisURL + 'account-type/posting/' + orgId + '/' + prcId);
  }

  updateNewAccountType(orgId: number, prcId: number, data: { accountNumber, accountTypeNewId, accountTypeNewName }): Observable<any> {
    return this._http.put<any>(this._thisURL + 'account-type/posting/' + orgId + '/' + prcId, data);
  }


  updateDueDate(orgId: number, prcId: number, id: number, row: any) {
    return this._http.put<any>(`${this._dueDateURL}${orgId}/${prcId}/${id}`, row);
  }

}
