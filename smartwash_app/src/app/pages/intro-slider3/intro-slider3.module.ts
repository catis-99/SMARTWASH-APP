import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroSlider3PageRoutingModule } from './intro-slider3-routing.module';

import { IntroSlider3Page } from './intro-slider3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroSlider3PageRoutingModule
  ],
  declarations: [IntroSlider3Page]
})
export class IntroSlider3PageModule {}
