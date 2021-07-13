import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpeningBalance } from '../model/openingBalance';

@Injectable({
  providedIn: 'root'
})
export class LiquidityService {

  _thisURL = environment.baseUrl + 'liquidity/';

  constructor(private _http: HttpClient) { }

  getOpeningBalance(orgId: number, prcId: number): Observable<OpeningBalance[]> {
    return this._http.get<OpeningBalance[]>(this._thisURL + orgId + '/' + prcId + '/openingBalance');
  }

  updateOpeningBalance(orgId: number, prcId: number, row: OpeningBalance): Observable<any> {
    return this._http.put<any>(this._thisURL + orgId + '/' + prcId + '/openingBalance', row);
  }

}
