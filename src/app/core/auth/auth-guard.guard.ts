import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioService } from '../services/usuario.service';
import { MSG_NOT_PERMISSION } from '../utils/constants';
import { SweetalertCustom } from '../utils/sweetalert-custom';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.usuarioService.isLogged()) {
        SweetalertCustom.showAlertTimer2('warning', 'Atenção', MSG_NOT_PERMISSION);
        this.router.navigate(['/auth']);

        return false;
      }
      return true;
  }
}
