import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetalhesPedidoInterface, PedidoInterface } from "src/app/models/interfaces/dto/pedido.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PedidosService {
    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getPedidos(): Observable<PedidoInterface[]> {
        return this.http.get<PedidoInterface[]>(`${this.baseUrl}/pedidos`);
    }

    obterDetalhesPedido(id: number) {
        return this.http.get<DetalhesPedidoInterface>(`${this.baseUrl}/pedidos/${id}`);
    }
}