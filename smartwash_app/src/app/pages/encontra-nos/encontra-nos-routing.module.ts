import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncontraNosPage } from './encontra-nos.page';

const routes: Routes = [
  {
    path: '',
    component: EncontraNosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncontraNosPageRoutingModule {}
