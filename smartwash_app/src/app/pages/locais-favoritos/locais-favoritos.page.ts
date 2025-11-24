import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locais-favoritos',
  templateUrl: './locais-favoritos.page.html',
  styleUrls: ['./locais-favoritos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LocaisFavoritosPage implements OnInit {

  savedLocations = [
    {
      name: 'Escola',
      address: 'Av. do Atlântico 644 4900, Viana do Castelo.',
      icon: 'business-outline'
    },
    {
      name: 'Casa',
      address: 'Rua engenheiro João Branco 370, Viana do Castelo.',
      icon: 'home-outline'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  openMap() {
    this.router.navigate(['/mapa']);
  }

  selectLocation(location: any) {
    // Lógica para selecionar localização
    console.log('Localização selecionada:', location);
  }

}
