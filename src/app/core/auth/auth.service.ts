import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginDto } from '../dtos/login/login.dto';

import { BaseService } from '../services/base.service';
import { UsuarioService } from '../services/usuario.service';
import { MSG_LOGIN } from '../utils/constants';
import { SweetalertCustom } from '../utils/sweetalert-custom';
import { urlConfigs } from '../utils/url-configs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<any> {

  constructor(protected http: HttpClient, private usuarioService: UsuarioService) {
    super(http, urlConfigs.url_account);
  }

  public getAuthenticate = async (items?: LoginDto): Promise<boolean> => {
    if (items.user === 'admin' && items.password === 'admin123') {
      this.usuarioService.setUser = items.user;
      return await true;
    }

    if (items.user !== 'admin' && items.password !== 'admin123'
        || items.password !== 'admin123'
        || items.user !== 'admin'  ) {
      SweetalertCustom.showAlertTimer2('warning', MSG_LOGIN);
      return false;
    }
  }
}
