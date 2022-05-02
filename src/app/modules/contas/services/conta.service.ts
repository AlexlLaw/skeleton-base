import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BaseService } from 'src/app/core/services/base.service';
import { urlConfigs } from 'src/app/core/utils/url-configs';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends BaseService<any> {

  constructor(protected http: HttpClient) {
    super(http, urlConfigs.url_conta);
  }

  public getByMes = (id: any, mes: string): Observable<any> => {
    return this.httpClient
      .get(`${this.baseUrl}${this.path}/${id}/${mes}`, this.headerOptions())
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }
}
