import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApoioClientePageRoutingModule } from './apoio-cliente-routing.module';

import { ApoioClientePage } from './apoio-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApoioClientePageRoutingModule
  ],
  declarations: [ApoioClientePage]
})
export class ApoioClientePageModule {}
