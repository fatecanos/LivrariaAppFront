import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemEstoqueDTO, LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  baseUrl: string = environment.urlMock;

  constructor(private http: HttpClient) { }

  getEstoque(): Observable<LivroEstoqueInterface[]> {
    return this.http.get<LivroEstoqueInterface[]>(this.baseUrl+'/estoque');
  }

  obterDetalhesLivroPorId(id: number): Observable<LivroEstoqueInterface> {
    return this.http.get<LivroEstoqueInterface>(`${this.baseUrl}/estoque/${id}`)
  }

  obterLivrosGestaoEstoque(): Observable<ItemEstoqueDTO[]> {
    return this.http.get<any[]>(`${this.baseUrl}/gestao-estoque`);
  }
}
