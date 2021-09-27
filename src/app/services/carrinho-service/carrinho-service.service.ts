import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemCarrinhoInterface } from 'src/app/models/interfaces/dto/carrinho.interface';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  baseUrl: string = environment.urlMock;

  constructor(private http: HttpClient) { }

  obterItens(): Observable<ItemCarrinhoInterface[]> {
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroDTO[] = JSON.parse(jsonCarrinho);

    let itensCarrinho: ItemCarrinhoInterface[] = listaProdutos.map(item => {
      return {
        produto: item,
        quantidade: item.quantidadeSelecionada,
      }
    })

    return of(itensCarrinho);
  }

  removerItem(itemId: number) {
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroDTO[] = JSON.parse(jsonCarrinho);
    let itemIndex = listaProdutos.findIndex(item => item.id === itemId);
    
    listaProdutos.splice(itemIndex, 1)
    localStorage.setItem('carrinho', JSON.stringify(listaProdutos));
  }

  atualizarQuantidadeItem(itemId: number, qtde: number) {
    let jsonCarrinho = localStorage.getItem('carrinho') || '[]';
    let listaProdutos: LivroDTO[] = JSON.parse(jsonCarrinho);

    let itemIndex = listaProdutos.findIndex(item => item.id === itemId);
    listaProdutos[itemIndex].quantidadeSelecionada = qtde;

    localStorage.setItem('carrinho', JSON.stringify(listaProdutos));
  }

  limparCarrinho() {
    localStorage.clear();
  }

}
