import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selecao-programa',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './selecao-programa.page.html',
  styleUrls: ['./selecao-programa.page.scss'],
})
export class SelecaoProgramaPage implements OnInit {
  qrCode: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Obter o QR code dos parâmetros da rota (se veio da leitura de QR)
    this.route.queryParams.subscribe(params => {
      if (params['qrCode']) {
        this.qrCode = params['qrCode'];
        console.log('QR Code recebido:', this.qrCode);
      }
    });
  }

}
