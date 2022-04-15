import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PrimeiroAcessoComponent } from './components/primeiro-acesso/primeiro-acesso.component';


export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'primeiro-acesso',
    component: PrimeiroAcessoComponent,
  }
];
