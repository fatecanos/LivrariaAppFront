import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CupomDTO } from 'src/app/models/interfaces/dto/cupom.interface';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CupomService {
  baseURL: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  obterCuponsCliente(): Observable<CupomDTO[]> {
    const id = Number(sessionStorage.getItem('isLogado'));
    return this.http.get<CupomDTO[]>(`${this.baseURL}/cupom/${id}`);
  }

  //localhost:8080/cupom/consultarpromocionais
  obterTodosCuponsPromocionais(): Observable<CupomDTO[]> {
    return this.http.get<CupomDTO[]>(
      `${this.baseURL}/cupom/consultarpromocionais`
    );
  }

  buscarCupomPorCodigo(codigo: string): Observable<CupomDTO> {
    return this.http.get<CupomDTO>(
      `${this.baseURL}/cupom/pesquisarcodigo/${codigo}`
    );
  }

  save(cupomDto: CupomDTO): Observable<MessageInterface> {
    return this.http.post<MessageInterface>(
      `${this.baseURL}/cupom/salvarpromocional`,
      cupomDto,
      httpOptions
    );
  }
}
