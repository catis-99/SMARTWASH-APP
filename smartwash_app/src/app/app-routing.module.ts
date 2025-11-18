import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage)
  },
  {
    path: 'reservar',
    loadComponent: () => import('./pages/reservar/reservar.page').then(m => m.ReservarPage)
  },
  {
    path: 'registo',
    loadComponent: () => import('./pages/registo/registo.page').then(m => m.RegistoPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'reservados',
    loadComponent: () => import('./pages/reservados/reservados.page').then(m => m.ReservadosPage)
  },
  {
    path: 'pagamento',
    loadComponent: () => import('./pages/pagamento/pagamento.page').then(m => m.PagamentoPage)
  },
  {
    path: 'selecao-maquinas',
    loadComponent: () => import('./pages/selecao-maquinas/selecao-maquinas.page').then(m => m.SelecaoMaquinasPage)
  },
  {
    path: 'confirma-reserva',
    loadComponent: () => import('./pages/confirmacao-reserva/confirma-reserva.page').then(m => m.ConfirmaReservaPage)
  },
  {
    path: 'ler-qr',
    loadComponent: () => import('./pages/ler-qr/ler-qr.page').then(m => m.LerQrPage)
  },
  {
    path: 'selecao-programa',
    loadComponent: () => import('./pages/selecao-programa/selecao-programa.page').then(m => m.SelecaoProgramaPage)
  },
  {
    path: 'confirmacao-pagamento',
    loadComponent: () => import('./pages/confirmacao-pagamento/confirmacao-pagamento.page').then(m => m.ConfirmacaoPagamentoPage)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
