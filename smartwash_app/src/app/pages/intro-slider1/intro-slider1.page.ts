import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./intro-slider1.page.scss'],
})
export class WelcomePage {
  constructor(private router: Router) { }

  // Navega para a página principal (ajusta rota conforme a tua app)
  onStart() {
    // exemplo: this.router.navigateByUrl('/tabs'); ou '/home' ou '/reservas'
    this.router.navigateByUrl('/home');
  }
}
