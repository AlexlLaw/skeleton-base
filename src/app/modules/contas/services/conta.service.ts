import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContasCreateDto } from 'src/app/core/dtos/contas/contas-create.dto';

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

  public PostContas = (id: any, entity: ContasCreateDto): Observable<any> => {
    return this.httpClient
      .post(`${this.baseUrl}${this.path}/${id}`, entity, this.headerOptions())
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }

  public getByFilter = (userId: number, params?: URLSearchParams): Observable<any> => {
    const filters = params ? `?${params.toString()}` : '';
    return this.httpClient
      .get(`${this.baseUrl}${this.path}/${userId}/ano${filters}`)
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }
}
