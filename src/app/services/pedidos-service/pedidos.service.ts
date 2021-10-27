import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
import { PayloadCarrinhoDTO } from 'src/app/models/interfaces/dto/pedido-carrinho.interface';
import {
  DetalhesPedidoInterface,
  ItemPedidoInterface,
  PedidoInterface,
} from 'src/app/models/interfaces/dto/pedido.interface';
import { PedidoFinalizadoDTO } from 'src/app/models/interfaces/dto/venda.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<PedidoInterface[]> {
    return this.http.get<PedidoInterface[]>(
      `${this.baseUrl}/vendas/${sessionStorage.getItem('isLogado')}`
    );
  }

  obterDetalhesPedidoMockado(id: number) {
    return this.http.get<DetalhesPedidoInterface>(
      `${this.baseUrl}/pedidos/${id}`
    );
  }

  gravarPedido(pedido: PayloadCarrinhoDTO): Observable<MessageInterface> {
    return this.http.post<MessageInterface>(`${this.baseUrl}/vendas`, pedido);
  }

  cancelarPedido(idPedido: number) {
    return this.http.put(
      `${this.baseUrl}/vendas/${idPedido}?cancelarPedido=true`,
      null
    );
  }

  solicitarTroca(
    itemPedido: ItemPedidoInterface
  ): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(
      `${this.baseUrl}/itenspedidos/solicitartroca/${itemPedido.id}`,
      null
    );
  }

  enviarItemTroca(itemPedido: ItemPedidoInterface) {
    return this.http.put(
      `${this.baseUrl}/itenspedidos/gerenciarsolicitacaotroca/${itemPedido.id}?status=EM_TROCA`,
      null
    );
  }

  aprovarTroca(itemPedido: ItemPedidoInterface): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(
      `${this.baseUrl}/itenspedidos/gerenciarsolicitacaotroca/${itemPedido.id}?status=TROCA_ACEITA`,
      null
    );
  }

  recusarTroca(itemPedido: ItemPedidoInterface): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(
      `${this.baseUrl}/itenspedidos/gerenciarsolicitacaotroca/${itemPedido.id}?status=TROCA_RECUSADA`,
      null
    );
  }

  confirmarTroca(
    itemPedido: ItemPedidoInterface
  ): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(
      `${this.baseUrl}/itenspedidos/gerenciarsolicitacaotroca/${itemPedido.id}?status=TROCA_AUTORIZADA`,
      null
    );
  }
}
