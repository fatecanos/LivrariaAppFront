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

  salvarNovoEndereco(enderecoDTO: EnderecoDTO): Observable<MessageInterface> {

    console.log(`n worka???`)

    return this.http.post<MessageInterface>(
      `${this.baseUrl}/endereco/${Number(sessionStorage.getItem('idUsuario'))}`,
      enderecoDTO,
      httpOptions
    );
  }

  getAddressById(id: number): Observable<EnderecoDTO[]> {
    //mockado
    return this.http.get<EnderecoDTO[]>(
      `${this.baseUrl}/enderecos/${id}`,
      httpOptions
    );
  }

  obterTodosEnderecosCliente(idCliente: number): Observable<EnderecoDTO[]> {
    //está mockada, lembrar de ajustar
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
    let endereco: EnderecoDTO;
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
