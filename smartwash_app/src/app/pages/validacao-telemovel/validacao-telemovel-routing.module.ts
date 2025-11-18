import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidacaoTelemovelPage } from './validacao-telemovel.page';

const routes: Routes = [
  {
    path: '',
    component: ValidacaoTelemovelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidacaoTelemovelPageRoutingModule {}
