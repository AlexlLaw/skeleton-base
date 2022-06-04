import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarAuthComponent } from './compoenents/layout-auth/components/navbar-auth/navbar-auth.component';
import { SidebarAuthComponent } from './compoenents/layout-auth/components/sidebar-auth/sidebar-auth.component';
import { LayoutAuthComponent } from './compoenents/layout-auth/layout-auth.component';
import { LayoutNoAuthComponent } from './compoenents/layout-no-auth/layout-no-auth.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptor/loading.interceptor';

@NgModule({
  declarations: [
    LayoutNoAuthComponent,
    LayoutAuthComponent,
    SidebarAuthComponent,
    NavbarAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule.forRoot()
  ],
  exports: [
    LayoutAuthComponent,
    LayoutNoAuthComponent,
    SidebarAuthComponent,
    NavbarAuthComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
