import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecao-lavagem',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './selecao-lavagem.page.html',
  styleUrls: ['./selecao-lavagem.page.scss'],
})
export class SelecaoLavagemPage {
  constructor(private router: Router) {}

  cancelar() {
    this.router.navigate(['/home']);
  }

  confirmar() {
    this.router.navigate(['/confirmacao-reserva']);
  }
}