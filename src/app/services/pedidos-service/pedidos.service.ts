import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MessageInterface } from "src/app/models/interfaces/dto/message.interface";
import { PayloadCarrinhoDTO } from "src/app/models/interfaces/dto/pedido-carrinho.interface";
import { DetalhesPedidoInterface, PedidoInterface } from "src/app/models/interfaces/dto/pedido.interface";
import { PedidoFinalizadoDTO } from "src/app/models/interfaces/dto/venda.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PedidosService {
    baseUrl: string = environment.urlMock;

    constructor(private http: HttpClient) { }

    getPedidos(): Observable<PedidoInterface[]> {
        return this.http.get<PedidoInterface[]>(`${this.baseUrl}/pedidos`);
    }

    obterDetalhesPedido(id: number) {
        return this.http.get<DetalhesPedidoInterface>(`${this.baseUrl}/pedidos/${id}`);
    }

    gravarPedido(pedido: PayloadCarrinhoDTO): Observable<MessageInterface>{
        return this.http.post<MessageInterface>(`${this.baseUrl}/vendas`, pedido)
    }
}