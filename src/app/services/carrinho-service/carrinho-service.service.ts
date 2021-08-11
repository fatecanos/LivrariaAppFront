import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemCarrinhoInterface } from 'src/app/models/interfaces/dto/carrinho.interface';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  baseUrl: string = environment.baseUrlMock;

  constructor(private http: HttpClient) { }

  obterItens(): Observable<ItemCarrinhoInterface[]> {
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroEstoqueInterface[] = JSON.parse(jsonCarrinho);

    let itensCarrinho: ItemCarrinhoInterface[] = listaProdutos.map(item => {
      return {
        id: item.id,
        produto: {
          nome: item.nomeLivro,
          qtdeMaxima: item.qtdeMaxima,
          url: item.url,
          valor: item.valor,
          id: item.id
        },
        quantidade: item.qtdeSelecionada,
      }
    })

    return of(itensCarrinho);
  }

  removerItem(itemId: number) {
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroEstoqueInterface[] = JSON.parse(jsonCarrinho);
    let itemIndex = listaProdutos.findIndex(item => item.id === itemId);
    
    listaProdutos.splice(itemIndex, 1);
    localStorage.setItem('carrinho', JSON.stringify(listaProdutos));
  }

  atualizarQuantidadeItem(itemId: number, qtde: number) {
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroEstoqueInterface[] = JSON.parse(jsonCarrinho);

    let itemIndex = listaProdutos.findIndex(item => item.id === itemId);
    listaProdutos[itemIndex].qtdeSelecionada = qtde;

    localStorage.setItem('carrinho', JSON.stringify(listaProdutos));
  }

}
