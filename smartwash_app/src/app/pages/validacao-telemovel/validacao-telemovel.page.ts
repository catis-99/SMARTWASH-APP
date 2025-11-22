import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validacao-telemovel',
  templateUrl: './validacao-telemovel.page.html',
  styleUrls: ['./validacao-telemovel.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ValidacaoTelemovelPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
