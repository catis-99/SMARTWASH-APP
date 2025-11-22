import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-encontra-nos',
  templateUrl: './encontra-nos.page.html',
  styleUrls: ['./encontra-nos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class EncontraNosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
