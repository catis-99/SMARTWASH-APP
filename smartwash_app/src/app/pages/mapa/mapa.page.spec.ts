import * as L from 'leaflet';
import { AfterViewInit } from '@angular/core';

export class MapaPage implements AfterViewInit {

  map: any;

  ngAfterViewInit() {
    this.map = L.map('map').setView([41.70532636891797, -8.818605859336698], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    L.marker([38.7223, -9.1393]).addTo(this.map)
      .bindPopup('Lisboa')
      .openPopup();
  }
}
