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
    path: 'selecao-lavagem',
    loadComponent: () => import('./pages/selecao-lavagem/selecao-lavagem.page').then(m => m.SelecaoLavagemPage)
  },
  {
    path: 'selecao-secagem',
    loadComponent: () => import('./pages/selecao-secagem/selecao-secagem.page').then(m => m.SelecaoSecagemPage)
  },
  {
    path: 'confirmacao-reserva',
    loadComponent: () => import('./pages/confirmacao-reserva/confirmacao-reserva.page').then(m => m.ConfirmacaoReservaPage)
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
    loadComponent: () => import('./pages/validacao-telemovel/validacao-telemovel.page').then(m => m.ValidacaoTelemovelPage)
  },
  {
    path: 'escolha-local',
    loadComponent: () => import('./pages/escolha-local/escolha-local.page').then(m => m.EscolhaLocalPage)
  },
  {
    path: 'encontra-nos',
    loadComponent: () => import('./pages/encontra-nos/encontra-nos.page').then(m => m.EncontraNosPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'mapa',
    loadComponent: () => import('./pages/mapa/mapa.page').then(m => m.MapaPage)
  },
  {
    path: 'maquina-iniciada',
    loadComponent: () => import('./pages/maquina-iniciada/maquina-iniciada.page').then(m => m.MaquinaIniciadaPage)
  },
  {
    path: 'intro-slider4',
    loadComponent: () => import('./pages/intro-slider4/intro-slider4.page').then(m => m.Slider4Page)
  },
  {
    path: 'intro-slider1',
    loadComponent: () => import('./pages/intro-slider1/intro-slider1.page').then(m => m.IntroSlider1Page)
  },
  {
    path: 'intro-slider2',
    loadComponent: () => import('./pages/intro-slider2/intro-slider2.page').then(m => m.IntroSlider2Page)
  },
  {
    path: 'intro-slider3',
    loadComponent: () => import('./pages/intro-slider3/intro-slider3.page').then(m => m.IntroSlider3Page)
  },
  {
    path: 'historico',
    loadComponent: () => import('./pages/historico/historico.page').then(m => m.HistoricoPage)
  },
  {
    path: 'ajuda',
    loadComponent: () => import('./pages/ajuda/ajuda.page').then(m => m.AjudaPage)
  },
  {
    path: 'confirmacao-inicioprograma',
    loadComponent: () => import('./pages/confirmacao-inicioprograma/confirmacao-inicioprograma.page').then(m => m.ConfirmacaoInicioprogramaPage)
  },
  {
    path: 'cupoes',
    loadComponent: () => import('./pages/cupoes/cupoes.page').then(m => m.CupoesPage)
  },
  {
    path: 'apoio-cliente',
    loadComponent: () => import('./pages/apoio-cliente/apoio-cliente.page').then(m => m.ApoioClientePage)
  },
  {
    path: 'notificacoes',
    loadComponent: () => import('./pages/notificacoes/notificacoes.page').then(m => m.NotificacoesPage)
  },
  {
    path: 'locais-favoritos',
    loadComponent: () => import('./pages/locais-favoritos/locais-favoritos.page').then(m => m.LocaisFavoritosPage)
  },
  {
    path: 'dados-pessoais',
    loadComponent: () => import('./pages/dados-pessoais/dados-pessoais.page').then(m => m.DadosPessoaisPage)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
