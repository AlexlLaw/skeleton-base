import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from 'src/app/core/auth/token/Token.service';
import { BaseService } from 'src/app/core/services/base.service';
import { urlConfigs } from 'src/app/core/utils/url-configs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService<any> {

  private userSubject = new BehaviorSubject<any>(null);

  constructor(protected http: HttpClient, private tokenService: TokenService) {
    super(http, urlConfigs.url_account);
  }

  public set setToken(usuario: any) {
    this.tokenService.setToken(usuario);
  }

  public get getToken(): Observable<any> {
    return this.userSubject.asObservable();
  }

   public logout(): void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }


  /**refatorar */
  public getByCalculoFinanceiro = (id: any): Observable<any> => {
    return this.httpClient
      .get(`${this.baseUrl}${this.path}/${id}/calculoFinanceiro`, this.headerOptions())
      .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }
}
