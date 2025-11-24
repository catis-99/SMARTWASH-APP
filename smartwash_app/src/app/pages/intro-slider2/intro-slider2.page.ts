import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-slider2',
  templateUrl: './intro-slider2.page.html',
  styleUrls: ['./intro-slider2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class IntroSlider2Page {

  constructor(private router: Router) { }

  onSkip() {
    this.router.navigateByUrl('/intro');
  }

  onNext() {
    this.router.navigateByUrl('/intro-slider3');
  }
}
