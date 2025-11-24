import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage {
  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}