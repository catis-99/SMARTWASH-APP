import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao-pagamento',
  templateUrl: './confirmacao-pagamento.page.html',
  styleUrls: ['./confirmacao-pagamento.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ConfirmacaoPagamentoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  iniciarPrograma() {
    console.log('Programa iniciado!');
  }

}
