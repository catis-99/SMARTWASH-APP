import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoMaquinasPageRoutingModule } from './selecao-maquinas-routing.module';

import { SelecaoMaquinasPage } from './selecao-maquinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoMaquinasPageRoutingModule
  ],
  declarations: [SelecaoMaquinasPage]
})
export class SelecaoMaquinasPageModule {}
