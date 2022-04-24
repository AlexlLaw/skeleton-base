import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../dtos/login/login.dto';


import { BaseService } from '../services/base.service';
import { UsuarioService } from '../services/usuario.service';
import { urlConfigs } from '../utils/url-configs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<any> {

  constructor(protected http: HttpClient, private usuarioService: UsuarioService, public router: Router) {
    super(http, urlConfigs.url_account);
  }

  public postAuthenticate(dados?: LoginDto): Observable<any> {
    const login = dados.login;
    const password = dados.password;
    return this.http
     .post(`${environment.API}${urlConfigs.url_account}/login`,
      { login, password },
      { observe: 'response' })
    .pipe(tap(res => {
      this.setStorage(res.body);
    }));
  }

  public setStorage(res: any): void {
    console.log(res);
    localStorage.setItem('name', btoa(JSON.stringify(res.user.nome)));
    localStorage.setItem('restricao', btoa(JSON.stringify(res.user.restricoes)));
    localStorage.setItem('userId', btoa(JSON.stringify(res.user.id)));
    this.usuarioService.setToken = res.token;
  }
}
