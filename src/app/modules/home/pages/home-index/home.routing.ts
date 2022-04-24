import { Routes } from '@angular/router';

import { HomeIndexComponent } from './home-index.component';


export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeIndexComponent,
    data: { titulo: 'home' }
  }
];
