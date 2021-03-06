import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarPage } from './reservar.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarPage
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'admin-reservas',
    loadChildren: () => import('./admin-reservas/admin-reservas.module').then( m => m.AdminReservasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarPageRoutingModule {}
