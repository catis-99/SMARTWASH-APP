import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoInicioprogramaPage } from './confirmacao-inicioprograma.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacaoInicioprogramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacaoInicioprogramaPageRoutingModule {}
