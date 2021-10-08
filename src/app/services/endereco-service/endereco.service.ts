import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  CidadeDTO,
  EnderecoDTO,
  TipoEnderecoEnum,
} from 'src/app/models/interfaces/dto/client.interface';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
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
export class EnderecoService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  salvarNovoEndereco(enderecoDTO: EnderecoDTO): Observable<EnderecoDTO> {
    return this.http.post<EnderecoDTO>(
      `${this.baseUrl}/endereco/${Number(sessionStorage.getItem('isLogado'))}`,
      enderecoDTO,
      httpOptions
    );
  }

  getAddressById(id: number): Observable<EnderecoDTO[]> {
    return this.http.get<EnderecoDTO[]>(
      `${this.baseUrl}/enderecos/${id}`,
      httpOptions
    );
  }

  obterTodosEnderecosCliente(idCliente: number): Observable<EnderecoDTO[]> {
    return this.http.get<EnderecoDTO[]>(
      `${this.baseUrl}/enderecos`,
      httpOptions
    );
  }

  obterCidades(estadoID: number): Observable<CidadeDTO[]> {
    return this.http.get<CidadeDTO[]>(
      `${this.baseUrl}/cidades?idEstado=${estadoID}`
    );
  }

  obterEnderecoPorCep(cep: string): Observable<any> {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  removerEndereco(idEndereco: number){
    return this.http.delete(`${this.baseUrl}/endereco/${idEndereco}`, httpOptions);
  }

  atualizar(endereco: EnderecoDTO): Observable<MessageInterface> {
    return this.http
      .put<MessageInterface>(`${this.baseUrl}/endereco/${Number(sessionStorage.getItem('isLogado'))}`, 
          endereco, httpOptions)
  }
}
