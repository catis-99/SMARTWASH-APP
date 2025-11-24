import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apoio-cliente',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './apoio-cliente.page.html',
  styleUrls: ['./apoio-cliente.page.scss'],
})
export class ApoioClientePage {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }
}