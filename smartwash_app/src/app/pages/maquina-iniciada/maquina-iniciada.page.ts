import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-maquina-iniciada',
  templateUrl: './maquina-iniciada.page.html',
  styleUrls: ['./maquina-iniciada.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MaquinaIniciadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
