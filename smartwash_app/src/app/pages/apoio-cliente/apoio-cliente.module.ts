import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApoioClientePageRoutingModule } from './apoio-cliente-routing.module';
import { ApoioClientePage } from './apoio-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ApoioClientePageRoutingModule,
    ApoioClientePage
  ]
})
export class ApoioClientePageModule { }