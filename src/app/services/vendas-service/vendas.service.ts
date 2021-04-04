import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PedidoFinalizadoDTO, VendaInterface } from 'src/app/models/interfaces/dto/venda.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  baseUrl: string = environment.baseUrlMock;

  constructor(
    private http: HttpClient
  ) { }

  obterVendas(): Observable<VendaInterface[]> {
    return this.http.get<VendaInterface[]>(`${this.baseUrl}/vendas`);
  }

  executarPedido(pedido: PedidoFinalizadoDTO) {
    //TODO: Vendas - integrar executar compra
    //this.http.post<any>(`${this.baseUrl}/vendas`, pedido);
    return of({
     mensagem: 'sucesso' 
    });
  }
}
