import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selecao-maquinas',
  templateUrl: './selecao-maquinas.page.html',
  styleUrls: ['./selecao-maquinas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SelecaoMaquinasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
