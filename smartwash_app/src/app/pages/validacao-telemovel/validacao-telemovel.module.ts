import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacaoTelemovelPageRoutingModule } from './validacao-telemovel-routing.module';

import { ValidacaoTelemovelPage } from './validacao-telemovel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacaoTelemovelPageRoutingModule
  ],
  declarations: [ValidacaoTelemovelPage]
})
export class ValidacaoTelemovelPageModule {}
