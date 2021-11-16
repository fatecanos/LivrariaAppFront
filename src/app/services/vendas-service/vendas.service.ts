import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FaturamentoMensal, FaturamentoProduto, PopularidadeGenero } from 'src/app/models/interfaces/dto/graficos.interface';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
import { VendaInterface } from 'src/app/models/interfaces/dto/venda.interface';
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

  obterVendasComFiltro(ft: string): Observable<VendaInterface[]> {
    console.log('me diz o filtro', ft);

    return this.http.get<VendaInterface[]>(`${this.baseUrl}/vendas?filtro=${ft}`);
  }

  avancarStatus(idVenda: number): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(`${this.baseUrl}/vendas/${idVenda}`, null)
  }

  obterFaturamento(dataInicio: Date, dataFim: Date): Observable<FaturamentoMensal[]> {
    var lastDayOfMonth = new Date(dataFim.getFullYear(), dataFim.getMonth()+1, 0).getDate();

    let dataInicioAux = `${dataInicio.getFullYear()}-${dataInicio.getMonth()+1}-${dataInicio.getDate()}`
    let dataFimAux = `${dataFim.getFullYear()}-${dataFim.getMonth()+1}-${lastDayOfMonth}`

    return this.http.get<FaturamentoMensal[]>(`${this.baseUrl}/vendas/faturamentoporperiodo`+
      `?dataInicio=${dataInicioAux}&dataFim=${dataFimAux}`)
  }

  obterPopularidadePorGenero(): Observable<PopularidadeGenero> {
    return this.http.get<PopularidadeGenero>(`${this.baseUrl}/vendas/vendasporgenero`)
  }

  obterFaturamentoPorProdutos(headers: HttpHeaders): Observable<FaturamentoProduto[]> {
    return this.http.get<FaturamentoProduto[]>
      (`${this.baseUrl}/itenspedidos/faturamentoporperiodo`, { headers })
  }
}



