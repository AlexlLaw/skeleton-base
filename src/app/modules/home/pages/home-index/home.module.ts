import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from 'src/app/core/core.module';
import { HomeIndexComponent } from './home-index.component';
import { HOME_ROUTES } from './home.routing';


@NgModule({
  declarations: [HomeIndexComponent],
  imports: [
    RouterModule.forChild(HOME_ROUTES),
    CommonModule,
    CoreModule.forRoot(),
  ]
})
export class HomeModule { }
