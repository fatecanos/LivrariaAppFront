import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartaoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
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

  gravar(cartao: CartaoDTO) {
    return this.http.post(`${this.baseUrl}/cartoes`, cartao)
  }

  atualizar(idCartao: number, cartao: CartaoDTO) {
    return this.http.put(`${this.baseUrl}/cartoes/${idCartao}`, cartao)
  }

  removerCartao(idCartao: number) {
    return this.http.delete(`${this.baseUrl}/cartoes/${idCartao}`)
  }

  getCartaoPreferencial(): Observable<CartaoDTO>{
    const cartaoMock: CartaoDTO = {
      id: 1,
      numeroCartao: '1230032994042',
      nomeNoCartao: 'Lucas M Nogueira',
      bandeira: 'Mastercard',
      codigoSeguranca: '098'
    }
    return of(cartaoMock);
  }


}
