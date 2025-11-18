import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolhaLocalPageRoutingModule } from './escolha-local-routing.module';

import { EscolhaLocalPage } from './escolha-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolhaLocalPageRoutingModule
  ],
  declarations: [EscolhaLocalPage]
})
export class EscolhaLocalPageModule {}
