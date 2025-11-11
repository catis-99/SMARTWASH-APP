import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroSlider4Page } from './intro-slider4.page';

const routes: Routes = [
  {
    path: '',
    component: IntroSlider4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroSlider4PageRoutingModule {}
