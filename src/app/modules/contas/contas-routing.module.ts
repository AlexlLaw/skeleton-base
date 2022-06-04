import { Routes } from '@angular/router';
import { ContasFormComponent } from './components/contas-form/contas-form.component';
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
        data: { titulo: 'Contas', subtitle: 'Meses', typePage: 'listar' },
      },
      {
        path: ':ano/detalhes-mensal/:id',
        component: ContasMesComponent,
        data: { titulo: 'Contas', subtitle: 'Meses/Detalhes Mensal', typePage: 'listar' },
      },
      {
        path: 'cadastrar',
        component: ContasFormComponent,
        data: { titulo: 'Contas', subtitle: 'Meses/Detalhes Mensal', typePage: 'cadastrar' },
      },
      {
        path: ':ano/mensal/:mes/cadastrar',
        component: ContasFormComponent,
        data: { titulo: 'Contas', subtitle: 'Meses/Detalhes Mensal', typePage: 'cadastrar' },
      },
      {
        path: ':ano/mensal/:mes/editar/:id',
        component: ContasFormComponent,
        data: { titulo: 'Contas', subtitle: 'Meses/Detalhes Mensal', typePage: 'editar' },
      }
    ]
  }
];
