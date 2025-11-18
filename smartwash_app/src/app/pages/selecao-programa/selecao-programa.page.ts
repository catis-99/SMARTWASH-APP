import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selecao-programa',
  templateUrl: './selecao-programa.page.html',
  styleUrls: ['./selecao-programa.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SelecaoProgramaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
