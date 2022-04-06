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

@NgModule({
  declarations: [
    CardComponent,
    TableCustomComponent,
    TableHeaderDirective,
    TableBodyDirective,
    TableEmptyDirective,
    LoadingComponent,
    CardTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  exports: [
    CardComponent,
    TableCustomComponent,
    TableHeaderDirective,
    TableBodyDirective,
    TableEmptyDirective,
    LoadingComponent,
    CardTableComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
