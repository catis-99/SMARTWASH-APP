import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ler-qr',
  templateUrl: './ler-qr.page.html',
  styleUrls: ['./ler-qr.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LerQrPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
