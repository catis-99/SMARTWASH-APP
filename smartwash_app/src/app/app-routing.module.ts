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
    loadChildren: () => import('./pages/registo/registo.module').then(m => m.RegistoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'reservados',
    loadChildren: () => import('./pages/reservados/reservados.module').then(m => m.ReservadosPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pages/pagamento/pagamento.module').then(m => m.PagamentoPageModule)
  },
  {
    path: 'selecao-maquinas',
    loadChildren: () => import('./pages/selecao-maquinas/selecao-maquinas.module').then(m => m.SelecaoMaquinasPageModule)
  },
  {
    path: 'confirma-reserva',
    loadChildren: () => import('./pages/confirmacao-reserva/confirma-reserva.module').then(m => m.ConfirmaReservaPageModule)
  },
  {
    path: 'ler-qr',
    loadChildren: () => import('./pages/ler-qr/ler-qr.module').then(m => m.LerQrPageModule)
  },
  {
    path: 'selecao-programa',
    loadChildren: () => import('./pages/selecao-programa/selecao-programa.module').then(m => m.SelecaoProgramaPageModule)
  },
  {
    path: 'confirmacao-pagamento',
    loadChildren: () => import('./pages/confirmacao-pagamento/confirmacao-pagamento.module').then(m => m.ConfirmacaoPagamentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
