import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { CardComponent } from './components/card/card.component';
import { TableCustomComponent } from './components/table-custom/table-custom.component';
import { TableBodyDirective } from './components/table-custom/config/table-body.directive';
import { TableEmptyDirective } from './components/table-custom/config/table-empty.directive';
import { TableHeaderDirective } from './components/table-custom/config/table-header.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../core/interceptor/loading.interceptor';
import { CardTableComponent } from './components/card-table/card-table.component';
import { AtivoPipe } from './pipes/ativo.pipe';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { MaskDirective } from './diretrivas/mask.directive';
import { CPFPipe } from './pipes/cpf.pipe';
import { OnlyCharDirective } from './diretrivas/only-char.directive';
import { OnlyNumberDirective } from './diretrivas/only-number.directive';

@NgModule({
  declarations: [
    CardComponent,
    TableCustomComponent,
    TableHeaderDirective,
    TableBodyDirective,
    TableEmptyDirective,
    LoadingComponent,
    CardTableComponent,
    CPFPipe,
    AtivoPipe,
    ToggleSwitchComponent,
    MaskDirective,
    OnlyCharDirective,
    OnlyNumberDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    CardComponent,
    TableCustomComponent,
    TableHeaderDirective,
    TableBodyDirective,
    TableEmptyDirective,
    LoadingComponent,
    CardTableComponent,
    CPFPipe,
    AtivoPipe,
    ToggleSwitchComponent,
    MaskDirective,
    OnlyCharDirective,
    OnlyNumberDirective,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
