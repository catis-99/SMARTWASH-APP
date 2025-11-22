import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  userName: string = 'Tiago';
  showCentralMenu: boolean = false;
  currentLocation = {
    name: 'Escola',
    address: 'Av. do Atlântico 644-4900, Viana do Castelo'
  };

  machinesInProgress = [
    {
      type: 'wash',
      name: 'Máquina de lavar 4',
      timeRemaining: '3 minutos'
    },
    {
      type: 'dry',
      name: 'Máquina de secar 11',
      timeRemaining: '35 minutos'
    }
  ];

  coupons = [
    {
      discount: '-25%',
      title: 'LAVAGEM\nNORMAL',
      validity: 'Até 18 Agosto'
    },
    {
      discount: '-25%',
      title: 'LAVAGEM\nNORMAL',
      validity: 'Até 18 Agosto'
    },
    {
      discount: '-25%',
      title: 'LAVAGEM\nNORMAL',
      validity: 'Até 18 Agosto'
    }
  ];

  constructor(private router: Router) { }

  toggleCentralMenu() {
    this.showCentralMenu = !this.showCentralMenu;
  }

  navigateAndClose(route: string) {
    this.showCentralMenu = false;
    this.router.navigate([route]);
  }

  navigateTo(service: string) {
    switch (service) {
      case 'lavar':
        this.router.navigate(['/selecao-maquinas']);
        break;
      case 'secar':
        this.router.navigate(['/selecao-maquinas']);
        break;
      case 'reservados':
        this.router.navigate(['/reservados']);
        break;
      default:
        console.log('Navegar para:', service);
    }
  }

}
