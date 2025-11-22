import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface Cupao {
  id: number;
  tipo: string;
  horario: string;
  validade: string;
  desconto: number;
  utilizado: boolean;
  desbloqueado: boolean;
  lavagensnecessarias: number;
}

@Component({
  selector: 'app-cupoes',
  templateUrl: './cupoes.page.html',
  styleUrls: ['./cupoes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CupoesPage implements OnInit {

  // Número de lavagens do usuário (simulado - em produção viria do backend)
  lavagensTotais: number = 6;

  cupoes: Cupao[] = [
    {
      id: 1,
      tipo: 'LAVAGEM NORMAL',
      horario: '06:00-23:00',
      validade: 'Até 19 Agosto',
      desconto: 25,
      utilizado: false,
      desbloqueado: true,
      lavagensnecessarias: 0
    },
    {
      id: 2,
      tipo: 'LAVAGEM NORMAL',
      horario: '13:00-00:00',
      validade: 'Até 25 Agosto',
      desconto: 30,
      utilizado: false,
      desbloqueado: true,
      lavagensnecessarias: 4
    },
    {
      id: 3,
      tipo: 'LAVAGEM NORMAL',
      horario: '20:00-22:00',
      validade: 'Até 20 Agosto',
      desconto: 60,
      utilizado: false,
      desbloqueado: true,
      lavagensnecessarias: 8
    },
    {
      id: 4,
      tipo: 'LAVAGEM NORMAL',
      horario: '06:00-22:00',
      validade: 'Até 10 Agosto',
      desconto: 20,
      utilizado: true,
      desbloqueado: true,
      lavagensnecessarias: 0
    },
    {
      id: 5,
      tipo: 'LAVAGEM NORMAL',
      horario: '17:00-03:00',
      validade: 'Até 09 Agosto',
      desconto: 15,
      utilizado: true,
      desbloqueado: true,
      lavagensnecessarias: 0
    },
    {
      id: 6,
      tipo: 'LAVAGEM NORMAL',
      horario: '20:00-22:00',
      validade: 'Até 08 Agosto',
      desconto: 25,
      utilizado: true,
      desbloqueado: true,
      lavagensnecessarias: 0
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.atualizarCupoesDesbloqueados();
  }

  atualizarCupoesDesbloqueados() {
    this.cupoes.forEach(cupao => {
      if (!cupao.utilizado) {
        cupao.desbloqueado = this.lavagensTotais >= cupao.lavagensnecessarias;
      }
    });
  }

  get cupoesDisponiveis() {
    return this.cupoes.filter(c => !c.utilizado);
  }

  get cupoesUtilizados() {
    return this.cupoes.filter(c => c.utilizado);
  }

  getLavagensFaltantes(cupao: Cupao): number {
    return Math.max(0, cupao.lavagensnecessarias - this.lavagensTotais);
  }

  fechar() {
    this.router.navigate(['/home']);
  }

}
