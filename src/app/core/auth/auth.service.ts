import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(protected http: HttpClient, private usuarioService: UsuarioService) {
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
      const authToken = res.body.token;
      this.usuarioService.setToken = authToken;
    }));
  }
}
