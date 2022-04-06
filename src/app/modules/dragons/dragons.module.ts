import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DragonsComponent } from './page/dragons/dragons.component';
import { CoreModule } from 'src/app/core/core.module';
import { DRAGONS_ROUTES } from './dragons-routing.module';
import { DragonsFormComponent } from './components/dragons-form/dragons-form.component';
import { DragonsListComponent } from './components/dragons-list/dragons-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DragonsComponent, DragonsFormComponent, DragonsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DRAGONS_ROUTES),
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DragonsModule { }
