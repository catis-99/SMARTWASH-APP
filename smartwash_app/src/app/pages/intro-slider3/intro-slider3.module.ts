import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { OnboardingStep3Page } from './onboarding-step3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: OnboardingStep3Page
      }
    ])
  ],
  declarations: [OnboardingStep3Page]
})
export class OnboardingStep3PageModule {}
