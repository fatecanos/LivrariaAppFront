import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FaturamentoMensal, PopularidadeGenero } from 'src/app/models/interfaces/dto/graficos.interface';
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

  avancarStatus(idVenda: number): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(`${this.baseUrl}/vendas/${idVenda}`, null)
  }

  obterFaturamento(dataInicio: Date, dataFim: Date): Observable<FaturamentoMensal[]> {
    console.log('rodando consulta de faturamento...');

    console.log("Data inicio:", dataInicio);
    console.log("Data fim:", dataFim);

    var today = new Date();
    var lastDayOfMonth = new Date(dataFim.getFullYear(), dataFim.getMonth()+1, 0).getDate();

    
    let dataInicioAux = `${dataInicio.getFullYear()}-${dataInicio.getMonth()}-${dataInicio.getDate()}`
    let dataFimAux = `${dataFim.getFullYear()}-${dataFim.getMonth()}-${lastDayOfMonth}`

    return this.http.get<FaturamentoMensal[]>(`${this.baseUrl}/vendas/faturamentoporperiodo`+
      `?dataInicio=${dataInicioAux}&dataFim=${dataFimAux}`)
  }

  obterPopularidadePorGenero(): Observable<PopularidadeGenero> {
    return this.http.get<PopularidadeGenero>(`${this.baseUrl}/vendas/vendasporgenero`)
  }
}



