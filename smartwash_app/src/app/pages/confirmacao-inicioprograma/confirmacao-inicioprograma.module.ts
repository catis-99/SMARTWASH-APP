import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoInicioprogramaPageRoutingModule } from './confirmacao-inicioprograma-routing.module';

import { ConfirmacaoInicioprogramaPage } from './confirmacao-inicioprograma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoInicioprogramaPageRoutingModule
  ],
  declarations: [ConfirmacaoInicioprogramaPage]
})
export class ConfirmacaoInicioprogramaPageModule {}
