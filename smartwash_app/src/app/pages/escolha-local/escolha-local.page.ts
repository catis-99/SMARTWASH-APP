import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-escolha-local',
  templateUrl: './escolha-local.page.html',
  styleUrls: ['./escolha-local.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class EscolhaLocalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
