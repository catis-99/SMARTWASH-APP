import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-slider1',
  templateUrl: './intro-slider1.page.html',
  styleUrls: ['./intro-slider1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class IntroSlider1Page {
  constructor(private router: Router) { }

  onStart() {
    this.router.navigateByUrl('/intro-slider2');
  }
}
