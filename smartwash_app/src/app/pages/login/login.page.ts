import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    // Implementar lógica de login
    if (this.username && this.password) {
      console.log('Login:', this.username);
      // Navegar para página inicial após login bem-sucedido
      // this.router.navigate(['/home']);
    }
  }

  goToRegister() {
    this.router.navigate(['/registo-telemovel']);
  }

}
