import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
import {
  CategoriaInterface,
  GrupoPrecificacaoInterface,
} from 'src/app/models/interfaces/dto/utils-livro-form.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'POST',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UtilsLivroFormService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  obterCategorias(): Observable<CategoriaInterface[]> {
    return this.http.get<CategoriaInterface[]>(
      `${this.baseUrl}/livros/categorias`
    );
  }

  obterGruposPrecificacao(): Observable<GrupoPrecificacaoInterface[]> {
    return this.http.get<GrupoPrecificacaoInterface[]>(
      `${this.baseUrl}/livros/grupoprecificacao`
    );
  }

  salvarNovoLivro(livro: LivroDTO): Observable<MessageInterface> {
    let payload = JSON.stringify(livro);
    
    return this.http.post<MessageInterface>(
      `${this.baseUrl}/livros`,
      payload,
      httpOptions
    );
  }
}
