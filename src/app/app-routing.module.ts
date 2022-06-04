import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth-guard.guard';

import { LayoutAuthComponent } from './core/compoenents/layout-auth/layout-auth.component';
import { LayoutNoAuthComponent } from './core/compoenents/layout-no-auth/layout-no-auth.component';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    component: LayoutNoAuthComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: LayoutAuthComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/pages/home-index/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('././modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
      },
      {
        path: 'contas',
        loadChildren: () =>
          import('././modules/contas/contas.module').then((m) => m.ContasModule),
      }
    ],
  },
];
