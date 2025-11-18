import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { OnboardingStep2Page } from './onboarding-step2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: OnboardingStep2Page
      }
    ])
  ],
  declarations: [OnboardingStep2Page]
})
export class OnboardingStep2PageModule {}
