import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-apoio-cliente',
  templateUrl: './apoio-cliente.page.html',
  styleUrls: ['./apoio-cliente.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ApoioClientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
