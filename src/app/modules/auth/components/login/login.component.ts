import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { FormBase } from 'src/app/core/utils/form-base';
import { LoginForm } from './login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends FormBase {

  private _loginForm: LoginForm;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    private authService: AuthService
  ) {
    super(router, activeRouter);
    this._loginForm = new LoginForm();
  }

  public get loginForm(): LoginForm {
    return this._loginForm;
  }

  public submit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const dados = this.loginForm.getDadosEnvio();
      this.authService.postAuthenticate(dados).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
