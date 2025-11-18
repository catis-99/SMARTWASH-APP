import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirma-reserva',
  templateUrl: './confirma-reserva.page.html',
  styleUrls: ['./confirma-reserva.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ConfirmaReservaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
