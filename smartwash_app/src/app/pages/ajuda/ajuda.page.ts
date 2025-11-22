import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajuda',
  standalone: true,
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AjudaPage {
  constructor() { }
}
