import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacaoPagamentoPageRoutingModule } from './confirmacao-pagamento-routing.module';

import { ConfirmacaoPagamentoPage } from './confirmacao-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacaoPagamentoPageRoutingModule
  ],
  declarations: [ConfirmacaoPagamentoPage]
})
export class ConfirmacaoPagamentoPageModule {}
