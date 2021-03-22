import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendaInterface } from 'src/app/models/interfaces/venda.interface';
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
}
