import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutHeaderRoutes, LayoutSidenavRoutes } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...LayoutHeaderRoutes,
      ...LayoutSidenavRoutes,
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutRoutingModule { }
