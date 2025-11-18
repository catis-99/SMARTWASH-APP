import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registo-telemovel',
  templateUrl: './registo-telemovel.page.html',
  styleUrls: ['./registo-telemovel.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class RegistoTelemovelPage implements OnInit {
  phoneNumber: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async enviar() {
    // Validar número de telemóvel (9 dígitos)
    if (!this.phoneNumber || this.phoneNumber.length !== 9) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, introduza um número de telemóvel válido (9 dígitos).',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Validar se são apenas números
    if (!/^\d+$/.test(this.phoneNumber)) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'O número de telemóvel deve conter apenas dígitos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Aqui seria feito o envio para o backend
    console.log('Número de telemóvel:', '+351' + this.phoneNumber);

    // Navegar para próxima página (ex: verificação de código)
    // this.router.navigate(['/verificacao']);

    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Código de verificação enviado para +351' + this.phoneNumber,
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
