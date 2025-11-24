import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class InicioPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    // Navega automaticamente para intro-slider1 após 2 segundos
    setTimeout(() => {
      this.router.navigate(['/intro-slider1']);
    }, 2000);
  }

  navigateToSlider() {
    this.router.navigate(['/intro-slider1']);
  }

}
