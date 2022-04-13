import { Component } from '@angular/core';
import { RouterBase } from 'src/app/core/utils/router-base';

import { UsuarioFormComponent } from '../../components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from '../../components/usuario-list/usuario-list.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent extends RouterBase {

  constructor() {
    super(UsuarioListComponent, UsuarioFormComponent, 'Usuarios', '/usuarios', '/usuarios/cadastrar');
  }

  public onActivate(event: any) {
    this.setParameters(event);
  }
}
