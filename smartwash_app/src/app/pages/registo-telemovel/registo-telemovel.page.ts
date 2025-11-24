import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registo-telemovel',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './registo-telemovel.page.html',
  styleUrls: ['./registo-telemovel.page.scss'],
})
export class RegistoTelemovelPage {
  phoneNumber: string = '';

  constructor(private router: Router) {}

  enviar() {
    if (this.phoneNumber && this.phoneNumber.length === 9) {
      console.log('Teléfono enviado:', this.phoneNumber);
      this.router.navigate(['/validacao-telemovel']);
    } else {
      alert('Por favor ingresa un número de teléfono válido (9 dígitos)');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}