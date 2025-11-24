import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { pickerController } from '@ionic/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ReservarPage {
  selectedDate = 'sab04';
  dates = [
    { day: 'Qui', number: '02', value: 'qui02' },
    { day: 'Sex', number: '03', value: 'sex03' },
    { day: 'Sab', number: '04', value: 'sab04' },
    { day: 'Dom', number: '05', value: 'dom05' },
    { day: 'Seg', number: '06', value: 'seg06' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async openPicker() {
    const picker = await pickerController.create({
      columns: [
        { name: 'hour', options: [{ text: '10', value: '10' }, { text: '11', value: '11' }, { text: '12', value: '12' }, { text: '13', value: '13' }, { text: '14', value: '14' }] },
        { name: 'minute', options: [{ text: '00', value: '00' }, { text: '10', value: '10' }, { text: '20', value: '20' }, { text: '30', value: '30' }, { text: '40', value: '40' }] }
      ],
      buttons: [{ text: 'Ok', handler: (value: any) => { console.log(value) } }]
    });
    await picker.present();
  }

  cancelar() {
    this.router.navigate(['/home']);
  }

  confirmar() {
    this.router.navigate(['/confirmacao-reserva']);
  }
}
