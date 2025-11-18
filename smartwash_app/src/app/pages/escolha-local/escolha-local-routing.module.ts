import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhaLocalPage } from './escolha-local.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolhaLocalPageRoutingModule {}
