import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaquinaIniciadaPageRoutingModule } from './maquina-iniciada-routing.module';

import { MaquinaIniciadaPage } from './maquina-iniciada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaquinaIniciadaPageRoutingModule
  ],
  declarations: [MaquinaIniciadaPage]
})
export class MaquinaIniciadaPageModule {}
