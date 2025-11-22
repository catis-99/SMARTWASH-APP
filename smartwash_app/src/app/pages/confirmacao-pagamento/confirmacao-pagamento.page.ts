import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirmacao-pagamento',
  templateUrl: './confirmacao-pagamento.page.html',
  styleUrls: ['./confirmacao-pagamento.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ConfirmacaoPagamentoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  iniciarPrograma() {
    console.log('Programa iniciado!');
  }

}
