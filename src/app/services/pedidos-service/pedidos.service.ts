import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetalhesPedidoInterface, PerdidoInterface } from "src/app/models/interfaces/pedido.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PedidosService {
    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getPedidos(): Observable<PerdidoInterface[]> {
        return this.http.get<PerdidoInterface[]>(`${this.baseUrl}/pedidos`);
    }

    obterDetalhesPedido(id: number) {
        return this.http.get<DetalhesPedidoInterface>(`${this.baseUrl}/pedidos/${id}`);
    }
}