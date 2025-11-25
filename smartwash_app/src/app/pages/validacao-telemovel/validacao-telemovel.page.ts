import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-validacao-telemovel',
  templateUrl: './validacao-telemovel.page.html',
  styleUrls: ['./validacao-telemovel.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ValidacaoTelemovelPage implements OnInit {
  code1: string = '';
  code2: string = '';
  code3: string = '';
  code4: string = '';
  private navigating = false;
  reenviarDisabled = false;
  codeComplete = false;

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() { }

  onInput(current: IonInput, next?: IonInput) {
    const val = (current.value || '').toString();
    if (val.length >= 1) {
      next?.setFocus();
    }
    this.checkAndSetComplete();
  }

  private checkAndSetComplete() {
    const full = `${this.code1}${this.code2}${this.code3}${this.code4}`;
    this.codeComplete = (full.length === 4);
  }

  confirmar() {
    const full = `${this.code1}${this.code2}${this.code3}${this.code4}`;
    if (!this.navigating && full.length === 4) {
      this.navigating = true;
      this.router.navigate(['/mapa']).finally(() => this.navigating = false);
    } else {
      alert('Introduce os 4 dígitos para continuar');
    }
  }

  async reenviar() {
    if (this.reenviarDisabled) { return; }
    this.reenviarDisabled = true;

    const toast = await this.toastController.create({
      message: 'Código reenviado',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();

    this.code1 = this.code2 = this.code3 = this.code4 = '';

    setTimeout(() => this.reenviarDisabled = false, 3000);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  cancelar() {
    this.router.navigate(['/registo']);
  }
}