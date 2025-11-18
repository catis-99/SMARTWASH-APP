import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-step3',
  templateUrl: './onboarding-step3.page.html',
  styleUrls: ['./intro-slider3.page.scss'],
})
export class OnboardingStep3Page {

  constructor(private router: Router) { }

  onSkip() {
    this.router.navigateByUrl('/home'); // substitui pela tua rota real
  }

  onNext() {
    this.router.navigateByUrl('/onboarding-step4'); // próxima tela
  }
}
