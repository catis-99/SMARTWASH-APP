import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmaReservaPageRoutingModule } from './confirma-reserva-routing.module';

import { ConfirmaReservaPage } from './confirma-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmaReservaPageRoutingModule
  ],
  declarations: [ConfirmaReservaPage]
})
export class ConfirmaReservaPageModule {}
