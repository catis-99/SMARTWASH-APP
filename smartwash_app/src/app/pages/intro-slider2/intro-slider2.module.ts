import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroSlider2PageRoutingModule } from './intro-slider2-routing.module';

import { IntroSlider2Page } from './intro-slider2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroSlider2PageRoutingModule
  ],
  declarations: [IntroSlider2Page]
})
export class IntroSlider2PageModule {}
