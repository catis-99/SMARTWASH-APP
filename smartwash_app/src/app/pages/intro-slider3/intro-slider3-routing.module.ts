import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroSlider3Page } from './intro-slider3.page';

const routes: Routes = [
  {
    path: '',
    component: IntroSlider3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroSlider3PageRoutingModule {}
