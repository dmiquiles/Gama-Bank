import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockedComponent } from './blocked/blocked.component';

const routes: Routes = [
  {
    path: '',
    component: BlockedComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockedRoutingModule {}
