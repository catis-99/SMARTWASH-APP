import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MapaPage implements OnInit, AfterViewInit {
  private map: any;
  private currentMarker: any;
  searchQuery: string = '';
  selectedLocation: boolean = false;
  selectedAddress: string = 'Monção, Viana do Castelo';
  selectedCoords: { lat: number, lng: number } | null = null;

  // Localizações das lavandarias SmartWash
  private locations = [
    { name: 'SmartWash Centro', lat: 41.6938, lng: -8.8342, address: 'Praça da República, Viana do Castelo' },
    { name: 'SmartWash Marina', lat: 41.6872, lng: -8.8280, address: 'Marina de Viana, Viana do Castelo' },
    { name: 'SmartWash Santa Luzia', lat: 41.7005, lng: -8.8186, address: 'Monte de Santa Luzia, Viana do Castelo' },
    { name: 'SmartWash Retail Park', lat: 41.7050, lng: -8.8250, address: 'Retail Park, Viana do Castelo' }
  ];

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Aguardar um pouco para garantir que o DOM está pronto
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  private initMap() {
    // Criar o mapa centrado em Viana do Castelo
    this.map = L.map('map', {
      zoomControl: false // Remove controles padrão para design mais limpo
    }).setView([41.6938, -8.8342], 13);

    // Adicionar tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(this.map);

    // Criar ícone personalizado para marcador selecionado
    const selectedIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="marker-container">
          <div class="marker-pin"></div>
          <div class="marker-label">From 562/11-A</div>
        </div>
      `,
      iconSize: [60, 70],
      iconAnchor: [30, 60]
    });

    // Adicionar marcador inicial na primeira localização
    const firstLocation = this.locations[0];
    this.currentMarker = L.marker([firstLocation.lat, firstLocation.lng], {
      icon: selectedIcon,
      draggable: true
    }).addTo(this.map);

    // Selecionar a primeira localização por padrão
    this.selectLocation(firstLocation.lat, firstLocation.lng, firstLocation.address);

    // Event listener para arrastar o marcador
    this.currentMarker.on('dragend', () => {
      const position = this.currentMarker.getLatLng();
      this.selectLocation(position.lat, position.lng, 'Localização personalizada');
      this.map.setView(position, this.map.getZoom());
    });

    // Event listener para clicar no mapa
    this.map.on('click', (e: any) => {
      const { lat, lng } = e.latlng;
      this.currentMarker.setLatLng([lat, lng]);
      this.selectLocation(lat, lng, 'Localização personalizada');
    });

    // Adicionar marcadores menores para outras localizações
    const smallIcon = L.divIcon({
      className: 'small-marker',
      html: '<div class="small-marker-pin"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 20]
    });

    this.locations.forEach((location, index) => {
      if (index > 0) { // Não adicionar marcador para a primeira (já é o marcador principal)
        L.marker([location.lat, location.lng], { icon: smallIcon })
          .addTo(this.map)
          .on('click', () => {
            this.currentMarker.setLatLng([location.lat, location.lng]);
            this.selectLocation(location.lat, location.lng, location.address);
            this.map.setView([location.lat, location.lng], this.map.getZoom());
          });
      }
    });

    // Invalidar o tamanho do mapa após a inicialização
    setTimeout(() => {
      this.map.invalidateSize();
    }, 200);
  }

  selectLocation(lat: number, lng: number, address: string) {
    this.selectedLocation = true;
    this.selectedAddress = address;
    this.selectedCoords = { lat, lng };
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    if (!query) return;

    // Procurar nas localizações
    const found = this.locations.find(loc =>
      loc.name.toLowerCase().includes(query) ||
      loc.address.toLowerCase().includes(query)
    );

    if (found) {
      this.currentMarker.setLatLng([found.lat, found.lng]);
      this.map.setView([found.lat, found.lng], 15);
      this.selectLocation(found.lat, found.lng, found.address);
    }
  }

  async saveLocation() {
    const alert = await this.alertController.create({
      header: 'Localização guardada',
      message: 'A localização foi guardada com sucesso!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async confirmLocation() {
    if (!this.selectedCoords) return;

    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `Confirmar localização: ${this.selectedAddress}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            // Aqui você pode salvar a localização e navegar para a próxima página
            console.log('Localização confirmada:', this.selectedCoords, this.selectedAddress);
            this.router.navigate(['/reservar']);
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewWillLeave() {
    // Limpar o mapa ao sair da página
    if (this.map) {
      this.map.remove();
    }
  }
}

