import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupoesPageRoutingModule } from './cupoes-routing.module';

import { CupoesPage } from './cupoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CupoesPageRoutingModule
  ],
  declarations: [CupoesPage]
})
export class CupoesPageModule {}
