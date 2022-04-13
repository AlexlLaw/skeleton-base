import { Routes } from '@angular/router';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuariosComponent } from './page/usuarios/usuarios.component';



export const USUARIO_ROUTES: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: '',
        component: UsuarioListComponent,
      },
      {
        path: 'cadastrar',
        component: UsuarioFormComponent,
      },
      {
        path: 'editar/:id',
        component: UsuarioFormComponent,
      }
    ]
  }
];
