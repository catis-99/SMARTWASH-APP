import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocaisFavoritosPage } from './locais-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: LocaisFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocaisFavoritosPageRoutingModule {}
