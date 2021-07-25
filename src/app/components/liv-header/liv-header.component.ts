import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';

@Component({
  selector: 'liv-header',
  templateUrl: './liv-header.component.html',
  styleUrls: ['./liv-header.component.scss']
})
export class LivHeaderComponent {
  showPainel: boolean = false;

  constructor(private router: Router) {
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
    this.router.navigate(['/clientes'])
  }

  logout(){
    sessionStorage.clear();
    location.reload();
  }
}
