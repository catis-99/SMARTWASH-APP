import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncontraNosPageRoutingModule } from './encontra-nos-routing.module';

import { EncontraNosPage } from './encontra-nos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncontraNosPageRoutingModule
  ],
  declarations: [EncontraNosPage]
})
export class EncontraNosPageModule {}
