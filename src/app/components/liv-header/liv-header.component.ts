import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacaoInterface } from 'src/app/models/interfaces/dto/notificacoes.interface';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';
import { LoginService } from 'src/app/services/login-service/login-service.service';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';
import { notificacoesMock } from './mock';

@Component({
  selector: 'liv-header',
  templateUrl: './liv-header.component.html',
  styleUrls: ['./liv-header.component.scss'],
})
export class LivHeaderComponent {
  showPainel: boolean = false;
  showNotifications: boolean = false;

  notificacoes: NotificacaoInterface[] = []

  constructor(
    private router: Router,
    private loginService: LoginService,
    private notificacaoService: NotificacaoService
  ) {
    router.events.subscribe((valor) => {
      this.consultarNotificacoes()
    });
  }

  consultarNotificacoes() {
    this.notificacaoService.obterNotificacoes().subscribe(res => {
      this.notificacoes = res
    })
  }

  navigateToClientRegister() {
    this.router.navigate(['/livraria/novo-cliente']);
    this.showPainel = !this.showPainel;
  }

  navigateToCart() {
    this.router.navigate(['/livraria/carrinho']);
  }

  navigateToHome() {
    this.router.navigate(['/livraria']);
  }

  navigateToLoginPage() {
    this.router.navigate(['/livraria/login']);
    this.showPainel = false;
  }

  get isLogado() {
    let isLogado = sessionStorage.getItem('isLogado');
    return isLogado;
  }

  navegaCliente() {
    this.router.navigate(['/clientes']);
  }

  logout() {
    sessionStorage.clear();
    location.reload();
  }

  getNotifications(){
    this.loginService.notificationService().subscribe(response => {

      console.log(`response: $response`);


    });
  }
}
