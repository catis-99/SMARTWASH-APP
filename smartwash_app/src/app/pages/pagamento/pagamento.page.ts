import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage {

  constructor(private router: Router) { }

  goToConfirmacao() {
    this.router.navigate(['/confirmacao-pagamento']);
  }

  goToCupoes() {
    this.router.navigate(['/cupoes']);
  }

}
