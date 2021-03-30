import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaInterface, GrupoPrecificacaoInterface } from 'src/app/models/interfaces/dto/utils-livro-form.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsLivroFormService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  obterCategorias(): Observable<CategoriaInterface[]> {
    return this.http.get<CategoriaInterface[]>(`${this.baseUrl}/categorias`);
  }

  obterGruposPrecificacao(): Observable<GrupoPrecificacaoInterface[]>{
    return this.http
      .get<GrupoPrecificacaoInterface[]>(`${this.baseUrl}/gruposPrecificacao`);
  }
}
