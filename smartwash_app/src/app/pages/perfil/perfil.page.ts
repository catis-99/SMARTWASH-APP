import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PerfilPage implements OnInit {

  userName: string = 'Tiago';
  userPhoto: string = ''; // Deixe vazio para mostrar o ícone padrão, ou adicione URL da foto

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  navigateTo(page: string) {
    // Navegação para diferentes páginas
    switch (page) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'cupoes':
        // TODO: Implementar navegação para cupões
        console.log('Navegar para Cupões');
        break;
      case 'reservas':
        // TODO: Implementar navegação para reservas
        console.log('Navegar para Reservas');
        break;
      case 'dados-pessoais':
        // TODO: Implementar navegação para dados pessoais
        console.log('Navegar para Dados Pessoais');
        break;
      case 'ajuda':
        // TODO: Implementar navegação para ajuda
        console.log('Navegar para Ajuda');
        break;
      case 'apoio-cliente':
        // TODO: Implementar navegação para apoio ao cliente
        console.log('Navegar para Apoio ao Cliente');
        break;
      case 'scan':
        // TODO: Implementar navegação para scan
        console.log('Navegar para Scan');
        break;
      case 'historico':
        // TODO: Implementar navegação para histórico
        console.log('Navegar para Histórico');
        break;
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Sair',
      message: 'Tem certeza que deseja sair da sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sair',
          handler: () => {
            // TODO: Implementar lógica de logout
            console.log('Logout confirmado');
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

}
