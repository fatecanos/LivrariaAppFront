import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  
import { CartaoCreditoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartoesService {
  baseUrl: string = environment.baseUrl;
  baseUrlMock: string = environment.urlMock;

  constructor(private http: HttpClient) { }

  getCartoesMockado(): Observable<CartaoCreditoDTO[]> {
    return this.http.get<CartaoCreditoDTO[]>(`${this.baseUrlMock}/cartoes`);
  }

  getCartoes(): Observable<CartaoClienteDTO[]> {
    return this.http.get<CartaoClienteDTO[]>(`${this.baseUrl}/cartoes/${Number(sessionStorage.getItem('isLogado'))}`);
  }

  gravar(cartao: CartaoClienteDTO): Observable<CartaoCreditoDTO> {
    return this.http.post<CartaoCreditoDTO>(`${this.baseUrl}/cartoes`, cartao)
  }

  atualizar(idCartao: number, cartao: CartaoClienteDTO) {
    return this.http.put(`${this.baseUrl}/cartoes/${idCartao}`, cartao)
  }

  removerCartao(idCartao: number) {
    return this.http.delete(`${this.baseUrl}/cartoes/${idCartao}`)
  }

  getCartaoPreferencial(): Observable<CartaoClienteDTO>{
    const cartaoMock: CartaoClienteDTO = {
      id: 1,
      numeroCartao: '1230032994042',
      nomeImpressoCartao: 'Lucas M Nogueira',
      bandeira: 'Mastercard',
      codigoSeguranca: '098',
      isPreferencial: true
    }
    return of(cartaoMock);
  }


}
