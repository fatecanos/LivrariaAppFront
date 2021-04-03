import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NovoCartaoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartoesService {
  baseUrl: string = environment.baseUrlMock;

  constructor(private http: HttpClient) { }

  getCartoes(): Observable<CartaoClienteDTO[]> {
    return this.http.get<CartaoClienteDTO[]>(this.baseUrl+'/cartoes');
  }

  getCartaoPreferencial(): Observable<NovoCartaoDTO>{
    const cartaoMock: NovoCartaoDTO = {
      numeroCartao: '1230032994042',
      nomeNoCartao: 'Lucas M Nogueira',
      bandeira: 'Mastercard',
      codigoSeguranca: '098'
    }
    return of(cartaoMock);
  }
}
