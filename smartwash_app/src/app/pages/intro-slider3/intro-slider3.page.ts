import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-slider3',
  templateUrl: './intro-slider3.page.html',
  styleUrls: ['./intro-slider3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class IntroSlider3Page {

  constructor(private router: Router) { }

  onSkip() {
    this.router.navigateByUrl('/intro');
  }

  onNext() {
    this.router.navigateByUrl('/intro-slider4');
  }
}
