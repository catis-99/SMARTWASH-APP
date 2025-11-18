import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.page.html',
    styleUrls: ['./intro.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class IntroPage {
    constructor(private router: Router) { }

    navigateTo(route: string) {
        this.router.navigate([route]);
    }
}
