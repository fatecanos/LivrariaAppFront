import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  baseUrl: string = environment.urlMock;

  constructor(private http: HttpClient) { }

  obterTodosLivros(): Observable<LivroDTO[]> {
    return this.http.get<LivroDTO[]>(`${this.baseUrl}/livros`);
  }

  obterLivroPorId(id: number) {
    return this.http.get<LivroDTO>(`${this.baseUrl}/livros/${id}`)
  }
}
