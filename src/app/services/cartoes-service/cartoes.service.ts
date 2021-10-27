import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartaoCreditoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartoesService {
  baseUrl: string = environment.baseUrl;
  baseUrlMock: string = environment.urlMock;

  constructor(private http: HttpClient) {}

  getCartoesMockado(): Observable<CartaoCreditoDTO[]> {
    return this.http.get<CartaoCreditoDTO[]>(`${this.baseUrlMock}/cartoes`);
  }

  getCartoes(): Observable<CartaoCreditoDTO[]> {
    return this.http.get<CartaoCreditoDTO[]>(
      `${this.baseUrl}/cartoes/${Number(sessionStorage.getItem('isLogado'))}`
    );
  }

  gravar(cartao: CartaoCreditoDTO): Observable<CartaoCreditoDTO> {
    return this.http.post<CartaoCreditoDTO>(
      `${this.baseUrl}/cartoes/${Number(sessionStorage.getItem('isLogado'))}`,
      cartao
    );
  }

  atualizar(idCartao: number, cartao: CartaoCreditoDTO) {
    return this.http.put(`${this.baseUrl}/cartoes/${idCartao}`, cartao);
  }

  removerCartao(idCartao: number) {
    return this.http.delete(`${this.baseUrl}/cartoes/${idCartao}`);
  }

  getCartaoPreferencial(): Observable<CartaoCreditoDTO> {
    const cartaoMock: CartaoCreditoDTO = {
      id: 1,
      numeroCartao: '1230032994042',
      nomeImpressoCartao: 'Lucas M Nogueira',
      bandeira: 'Mastercard',
      codigoSeguranca: '098',
      isPreferencial: true,
      salvar: true,
    };
    return of(cartaoMock);
  }
}
