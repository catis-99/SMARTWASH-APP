import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then(m => m.IntroPage)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
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
    loadComponent: () => import('./pages/registo-telemovel/registo-telemovel.page').then(m => m.RegistoTelemovelPage)
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
  {
    path: 'validacao-telemovel',
    loadChildren: () => import('./pages/validacao-telemovel/validacao-telemovel.module').then(m => m.ValidacaoTelemovelPageModule)
  },
  {
    path: 'escolha-local',
    loadChildren: () => import('./pages/escolha-local/escolha-local.module').then(m => m.EscolhaLocalPageModule)
  },
  {
    path: 'encontra-nos',
    loadChildren: () => import('./pages/encontra-nos/encontra-nos.module').then(m => m.EncontraNosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then(m => m.MapaPageModule)
  },
  {
    path: 'maquina-iniciada',
    loadChildren: () => import('./pages/maquina-iniciada/maquina-iniciada.module').then(m => m.MaquinaIniciadaPageModule)
  },
  {
    path: 'intro-slider4',
    loadComponent: () => import('./pages/intro-slider4/intro-slider4.page').then(m => m.IntroSlider4Page)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
