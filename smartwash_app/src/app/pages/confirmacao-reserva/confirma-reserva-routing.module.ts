import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmaReservaPage } from './confirma-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmaReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmaReservaPageRoutingModule {}
