import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-intro-slider4',
    templateUrl: './intro-slider4.page.html',
    styleUrls: ['./intro-slider4.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonicModule]
})
export class IntroSlider4Page implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

}
