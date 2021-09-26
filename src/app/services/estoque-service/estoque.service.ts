import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemEstoqueDTO, LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // getEstoque(): Observable<LivroEstoqueInterface[]> {
  //   return this.http.get<LivroEstoqueInterface[]>(this.baseUrl+'/livros');
  // }

  getEstoque(): Observable<LivroDTO[]> {
    return this.http.get<LivroDTO[]>(this.baseUrl+'/livros');
  }

  obterDetalhesLivroPorId(id: number): Observable<LivroEstoqueInterface> {
    return this.http.get<LivroEstoqueInterface>(`${this.baseUrl}/livros/detalhes/${id}`)
  }

  obterLivrosGestaoEstoque(): Observable<ItemEstoqueDTO[]> {
    return this.http.get<any[]>(`${this.baseUrl}/gestao-estoque`);
  }
}
