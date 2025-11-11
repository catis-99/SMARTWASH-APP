import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservadosPage } from './reservados.page';

const routes: Routes = [
  {
    path: '',
    component: ReservadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservadosPageRoutingModule {}
