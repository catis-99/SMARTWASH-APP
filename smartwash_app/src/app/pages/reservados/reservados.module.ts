import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservadosPageRoutingModule } from './reservados-routing.module';

import { ReservadosPage } from './reservados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservadosPageRoutingModule
  ],
  declarations: [ReservadosPage]
})
export class ReservadosPageModule {}
