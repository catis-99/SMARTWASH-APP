import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirmacao-reserva',
  templateUrl: './confirmacao-reserva.page.html',
  styleUrls: ['./confirmacao-reserva.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ConfirmacaoReservaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
