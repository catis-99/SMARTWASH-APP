import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LerQrPage } from './ler-qr.page';

const routes: Routes = [
  {
    path: '',
    component: LerQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LerQrPageRoutingModule {}
