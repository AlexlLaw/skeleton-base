import { Routes } from '@angular/router';
import { DragonsFormComponent } from './components/dragons-form/dragons-form.component';
import { DragonsListComponent } from './components/dragons-list/dragons-list.component';
import { DragonsComponent } from './page/dragons/dragons.component';

export const DRAGONS_ROUTES: Routes = [
  {
    path: '',
    component: DragonsComponent,
    children: [
      {
        path: '',
        component: DragonsListComponent,
      },
      {
        path: 'cadastrar',
        component: DragonsFormComponent,
      },
      {
        path: 'editar/:id',
        component: DragonsFormComponent,
      }
    ]
  }
];
