import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocaisFavoritosPageRoutingModule } from './locais-favoritos-routing.module';

import { LocaisFavoritosPage } from './locais-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocaisFavoritosPageRoutingModule
  ],
  declarations: [LocaisFavoritosPage]
})
export class LocaisFavoritosPageModule {}
