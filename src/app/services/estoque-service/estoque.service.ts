import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoInterface } from 'src/app/models/interfaces/client.interface';
import { EstoqueInterface } from 'src/app/models/interfaces/estoque.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  baseUrl: string = environment.baseUrlMock;

  constructor(private http: HttpClient) { }

  getEstoque(): Observable<EstoqueInterface[]> {
    return this.http.get<EstoqueInterface[]>(this.baseUrl+'/estoque');
  }
}
