import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { Html5Qrcode } from 'html5-qrcode';

@Component({
  selector: 'app-ler-qr',
  templateUrl: './ler-qr.page.html',
  styleUrls: ['./ler-qr.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class LerQrPage implements OnInit, OnDestroy {
  private html5QrCode: Html5Qrcode | null = null;
  isScanning: boolean = false;
  scannedData: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async startScanning() {
    try {
      this.isScanning = true;
      this.scannedData = '';

      // Inicializar o scanner
      this.html5QrCode = new Html5Qrcode("qr-reader");

      // Configurações do scanner
      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      };

      // Iniciar o scanner
      await this.html5QrCode.start(
        { facingMode: "environment" }, // Câmera traseira
        config,
        (decodedText, decodedResult) => {
          // Sucesso na leitura
          console.log('QR Code lido:', decodedText);
          this.onScanSuccess(decodedText);
        },
        (errorMessage) => {
          // Erro (pode ser ignorado, acontece quando não detecta QR)
          // console.log('Erro ao ler:', errorMessage);
        }
      );

    } catch (error) {
      console.error('Erro ao iniciar scanner:', error);
      this.isScanning = false;

      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Não foi possível acessar a câmera. Verifique as permissões.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async onScanSuccess(decodedText: string) {
    // Parar o scanner
    if (this.html5QrCode) {
      await this.html5QrCode.stop();
      this.html5QrCode.clear();
    }

    this.isScanning = false;
    this.scannedData = decodedText;
  }

  async processScan() {
    // Aqui você pode processar o QR code lido
    // Por exemplo, verificar se é uma máquina válida, etc.

    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: `Máquina identificada! Deseja continuar?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Continuar',
          handler: () => {
            // Navegar para a próxima página (ex: seleção de programa)
            this.router.navigate(['/selecao-programa'], {
              queryParams: { qrCode: this.scannedData }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async stopScanning() {
    if (this.html5QrCode && this.isScanning) {
      await this.html5QrCode.stop();
      this.html5QrCode.clear();
      this.isScanning = false;
    }
  }

  ngOnDestroy() {
    // Limpar ao sair da página
    this.stopScanning();
  }

  ionViewWillLeave() {
    // Parar o scanner ao sair da página
    this.stopScanning();
  }

}
