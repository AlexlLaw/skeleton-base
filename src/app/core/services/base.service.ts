import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class BaseService<T> {
  protected baseUrl = environment.API;

  constructor(protected httpClient: HttpClient, @Inject(String) protected path) {}

  public headerOptions = (): any => {
    const TOKEN = localStorage.getItem('authToken') ? 'Bearer ' + localStorage.getItem('authToken') : '';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization: TOKEN,
      }),
      observe: 'response' as 'response'
    };
  }

  public getById = (id: string): Observable<any> => {
    return this.httpClient
      .get(`${this.baseUrl}${this.path}/${id }`, this.headerOptions())
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }

  public get = (): Observable<any> => {
    return this.httpClient
      .get(`${this.baseUrl}${this.path}`)
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }

  public getByFilter = (userId: number, params?: URLSearchParams): Observable<any> => {
    const filters = params ? `?${params.toString()}` : '';
    return this.httpClient
      .get(`${this.baseUrl}${this.path}/${userId}${filters}`)
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }

  public post = (body: T): Observable<any> => {
    return this.httpClient
      .post(
        `${this.baseUrl}${this.path}`,
        body
      )
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }

  public put = (id: string, body: T): Observable<any> => {
    return this.httpClient
      .put(`${this.baseUrl}${this.path}/${id}`, body)
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }

  public delete = (id: string): Observable<any> => {
    return this.httpClient
      .delete(`${this.baseUrl}${this.path}/${id}`)
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }

}
