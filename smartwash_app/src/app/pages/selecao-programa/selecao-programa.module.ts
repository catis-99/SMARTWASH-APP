import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoProgramaPageRoutingModule } from './selecao-programa-routing.module';

import { SelecaoProgramaPage } from './selecao-programa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoProgramaPageRoutingModule
  ],
  declarations: [SelecaoProgramaPage]
})
export class SelecaoProgramaPageModule {}
