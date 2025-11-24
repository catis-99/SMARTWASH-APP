import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacao-inicioprograma',
  templateUrl: './confirmacao-inicioprograma.page.html',
  styleUrls: ['./confirmacao-inicioprograma.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ConfirmacaoInicioprogramaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goHome() {
    this.router.navigate(['/home']);
  }

}
