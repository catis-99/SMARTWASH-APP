import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-step2',
  templateUrl: './onboarding-step2.page.html',
  styleUrls: ['./intro-slider2.page.scss'],
})
export class OnboardingStep2Page {

  constructor(private router: Router) { }

  onSkip() {
    this.router.navigateByUrl('/home'); // adapta à tua rota real
  }

  onNext() {
    this.router.navigateByUrl('/onboarding-step3'); // próxima página
  }
}
