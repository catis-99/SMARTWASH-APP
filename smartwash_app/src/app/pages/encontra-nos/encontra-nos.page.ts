import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface Location {
  id: number;
  name: string;
  top: number;
  left: number;
  city: string;
}

@Component({
  selector: 'app-encontra-nos',
  templateUrl: './encontra-nos.page.html',
  styleUrls: ['./encontra-nos.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class EncontraNosPage implements OnInit {
  searchText: string = '';
  selectedLocation: Location | null = null;

  // Posições aproximadas dos marcadores no mapa de Portugal (em percentagem)
  locations: Location[] = [
    // Norte
    { id: 1, name: 'Viana do Castelo', top: 8, left: 18, city: 'Viana do Castelo' },
    { id: 2, name: 'Braga', top: 12, left: 22, city: 'Braga' },
    { id: 3, name: 'Bragança', top: 10, left: 42, city: 'Bragança' },
    { id: 4, name: 'Porto', top: 18, left: 20, city: 'Porto' },
    { id: 5, name: 'Vila Real', top: 16, left: 32, city: 'Vila Real' },

    // Centro
    { id: 6, name: 'Aveiro', top: 26, left: 18, city: 'Aveiro' },
    { id: 7, name: 'Viseu', top: 26, left: 30, city: 'Viseu' },
    { id: 8, name: 'Guarda', top: 28, left: 38, city: 'Guarda' },
    { id: 9, name: 'Coimbra', top: 34, left: 22, city: 'Coimbra' },
    { id: 10, name: 'Castelo Branco', top: 38, left: 42, city: 'Castelo Branco' },
    { id: 11, name: 'Leiria', top: 42, left: 26, city: 'Leiria' },

    // Centro-Sul
    { id: 12, name: 'Santarém', top: 48, left: 28, city: 'Santarém' },
    { id: 13, name: 'Portalegre', top: 48, left: 40, city: 'Portalegre' },

    // Lisboa e Vale do Tejo
    { id: 14, name: 'Lisboa', top: 54, left: 26, city: 'Lisboa' },
    { id: 15, name: 'Setúbal', top: 58, left: 28, city: 'Setúbal' },

    // Alentejo
    { id: 16, name: 'Évora', top: 58, left: 38, city: 'Évora' },
    { id: 17, name: 'Beja', top: 68, left: 34, city: 'Beja' },

    // Algarve
    { id: 18, name: 'Faro', top: 78, left: 32, city: 'Faro' },
    { id: 19, name: 'Portimão', top: 77, left: 26, city: 'Portimão' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    // Implementar filtro de localizações
    console.log('Pesquisar:', query);
  }

  selectLocation(location: Location) {
    this.selectedLocation = location;
    console.log('Localização selecionada:', location.name);
  }

  confirmLocation() {
    if (this.selectedLocation) {
      console.log('Confirmar localização:', this.selectedLocation.name);
      // Navegar para próxima página com a localização selecionada
      // this.router.navigate(['/selecao-lavagem'], { state: { location: this.selectedLocation } });
    } else {
      console.log('Nenhuma localização selecionada');
    }
  }

}
