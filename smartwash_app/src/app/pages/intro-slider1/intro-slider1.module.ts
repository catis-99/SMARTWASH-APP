import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroSlider1PageRoutingModule } from './intro-slider1-routing.module';

import { IntroSlider1Page } from './intro-slider1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroSlider1PageRoutingModule
  ],
  declarations: [IntroSlider1Page]
})
export class IntroSlider1PageModule {}
