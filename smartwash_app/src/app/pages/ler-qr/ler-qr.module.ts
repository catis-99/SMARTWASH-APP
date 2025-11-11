import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LerQrPageRoutingModule } from './ler-qr-routing.module';

import { LerQrPage } from './ler-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LerQrPageRoutingModule
  ],
  declarations: [LerQrPage]
})
export class LerQrPageModule {}
