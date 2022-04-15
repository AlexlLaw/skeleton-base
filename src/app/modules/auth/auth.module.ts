import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AUTH_ROUTES } from './auth-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeiroAcessoComponent } from './components/primeiro-acesso/primeiro-acesso.component';



@NgModule({
  declarations: [LoginComponent, PrimeiroAcessoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    CoreModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule { }
