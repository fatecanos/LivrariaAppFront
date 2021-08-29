import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';
import { LoginService } from 'src/app/services/login-service/login-service.service';

@Component({
  selector: 'liv-header',
  templateUrl: './liv-header.component.html',
  styleUrls: ['./liv-header.component.scss'],
})
export class LivHeaderComponent {
  showPainel: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {}

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

  get idUsuario() {
    let idUsuario = sessionStorage.getItem('idUsuario');
    return idUsuario;
  }

  navegaCliente() {
    this.router.navigate(['/clientes']);
  }

  logout() {
    sessionStorage.clear();
    location.reload();
  }
}
