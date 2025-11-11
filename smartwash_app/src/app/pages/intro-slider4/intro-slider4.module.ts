import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroSlider4PageRoutingModule } from './intro-slider4-routing.module';

import { IntroSlider4Page } from './intro-slider4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroSlider4PageRoutingModule
  ],
  declarations: [IntroSlider4Page]
})
export class IntroSlider4PageModule {}
