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
  baseUrl: string = environment.urlMock;

  constructor(private http: HttpClient) { }

  getCartoes(): Observable<CartaoClienteDTO[]> {
    return this.http.get<CartaoClienteDTO[]>(this.baseUrl+'/cartoes');
  }

  gravar(cartao: CartaoCreditoDTO) {
    this.http.post(`${this.baseUrl}/cartoes`, cartao)
  }

  atualizar(idCartao: number, cartao: CartaoCreditoDTO) {
    this.http.put(`${this.baseUrl}/cartoes/${idCartao}`, cartao)
  }

  getCartaoPreferencial(): Observable<CartaoCreditoDTO>{
    const cartaoMock: CartaoCreditoDTO = {
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
