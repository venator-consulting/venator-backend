import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpeningBalance } from '../model/openingBalance';
import { CreditLine } from '../model/creditLine';

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


  getCreditLine(orgId: number, prcId: number): Observable<CreditLine[]> {
    return this._http.get<CreditLine[]>(this._thisURL + orgId + '/' + prcId + '/creditLine');
  }

  updateCreditLine(orgId: number, prcId: number, row: CreditLine): Observable<any> {
    return this._http.put<any>(this._thisURL + orgId + '/' + prcId + '/creditLine', row);
  }

  deleteCreditLine(orgId: number, prcId: number, row: CreditLine): Observable<any> {
    return this._http.delete<any>(this._thisURL + orgId + '/' + prcId + '/creditLine/' + row.id);
  }

  getFreeLiquidity(orgId: number, prcId: number) {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/liquidity');
  }

  getFreeLiquidityDetails(orgId: number, prcId: number, accountNumber: string) {
    return this._http.get<any>(this._thisURL + orgId + '/' + prcId + '/liquidity/' + accountNumber);
  }

}
