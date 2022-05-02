import { Routes } from '@angular/router';
import { ContasMesComponent } from './components/contas-mes/contas-mes.component';
import { MesesComponent } from './components/meses/meses.component';
import { ContasComponent } from './pages/contas/contas.component';


export const CONTAS_ROUTES: Routes = [
  {
    path: '',
    component: ContasComponent,
    children: [
      {
        path: 'meses',
        component: MesesComponent,
        data: { titulo: 'Contas', subtitle: 'Meses' },
      },
      {
        path: 'detalhes-mensal/:id',
        component: ContasMesComponent,
        data: { titulo: 'Contas', subtitle: 'Meses/Detalhes Mensal' },
      }
    ]
  }
];
