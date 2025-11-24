import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './dados-pessoais.page.html',
  styleUrls: ['./dados-pessoais.page.scss'],
})
export class DadosPessoaisPage {
  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }


}
