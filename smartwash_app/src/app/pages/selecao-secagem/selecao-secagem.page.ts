import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selecao-secagem',
  templateUrl: './selecao-secagem.page.html',
  styleUrls: ['./selecao-secagem.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SelecaoSecagemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
