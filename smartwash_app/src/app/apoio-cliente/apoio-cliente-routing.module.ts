import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApoioClientePage } from './apoio-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ApoioClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApoioClientePageRoutingModule {}
