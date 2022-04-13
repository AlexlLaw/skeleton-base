import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { USUARIO_ROUTES } from './usuarios-routing.module';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';



@NgModule({
  declarations: [UsuariosComponent, UsuarioListComponent, UsuarioFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USUARIO_ROUTES),
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UsuariosModule { }
