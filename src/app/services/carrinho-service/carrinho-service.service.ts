import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemCarrinhoInterface } from 'src/app/models/interfaces/carrinho.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  baseUrl: string = environment.baseUrlMock;

  constructor(private http: HttpClient) { }

  obterItens(): Observable<ItemCarrinhoInterface[]> {
    return this.http.get<ItemCarrinhoInterface[]>(`${this.baseUrl}/carrinho`);
  }

}
