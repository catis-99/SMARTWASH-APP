import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selecao-lavagem',
  templateUrl: './selecao-lavagem.page.html',
  styleUrls: ['./selecao-lavagem.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SelecaoLavagemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
