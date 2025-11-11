import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecaoProgramaPage } from './selecao-programa.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoProgramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoProgramaPageRoutingModule {}
