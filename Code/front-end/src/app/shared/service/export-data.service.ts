import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExportDataService {

  _thisURL = environment.baseUrl + 'shared';

  constructor(private _http: HttpClient) { }

  exportXLSX(tableName, OrganisationId, ProcedureId, criteria: any) {
    // return this._http.get<Observable<Blob>>(this._thisURL + '/export/' + tableName + '/' + OrganisationId + '/' + ProcedureId, { params: criteria, responseType: 'arraybuffer' });
    return this._http.get<Blob>(this._thisURL + '/export/' + tableName + '/' + OrganisationId + '/' + ProcedureId, { params: criteria, responseType: 'blob' as 'json' })
  }

  exportPDF(data) {
    return this._http.get(this._thisURL + '/exportPDF/' + data);

  }
}
