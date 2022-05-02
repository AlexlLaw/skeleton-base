import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTAS_ROUTES } from './contas-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MesesComponent } from './components/meses/meses.component';
import { ContasComponent } from './pages/contas/contas.component';
import { MesesFilterComponent } from './components/meses/meses-filter/meses-filter.component';
import { ContasMesComponent } from './components/contas-mes/contas-mes.component';
import { ContasFormComponent } from './components/contas-form/contas-form.component';



@NgModule({
  declarations: [ContasComponent, MesesComponent, MesesFilterComponent, ContasMesComponent, ContasFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CONTAS_ROUTES),
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ContasModule { }
