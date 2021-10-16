import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
import { PedidoFinalizadoDTO, VendaInterface } from 'src/app/models/interfaces/dto/venda.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  obterVendas(): Observable<VendaInterface[]> {
    return this.http.get<VendaInterface[]>(`${this.baseUrl}/vendas`);
  }

  avancarStatus(idVenda: number): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(`${this.baseUrl}/vendas/${idVenda}`, null)
  }
}
