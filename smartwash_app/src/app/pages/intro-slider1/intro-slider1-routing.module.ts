import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroSlider1Page } from './intro-slider1.page';

const routes: Routes = [
  {
    path: '',
    component: IntroSlider1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroSlider1PageRoutingModule {}
