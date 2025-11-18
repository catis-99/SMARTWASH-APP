import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reservados',
  templateUrl: './reservados.page.html',
  styleUrls: ['./reservados.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ReservadosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
