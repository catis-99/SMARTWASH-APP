import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaquinaIniciadaPage } from './maquina-iniciada.page';

const routes: Routes = [
  {
    path: '',
    component: MaquinaIniciadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaquinaIniciadaPageRoutingModule {}
