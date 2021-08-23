import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  CidadeDTO,
  EnderecoDTO,
  TipoEnderecoEnum,
} from 'src/app/models/interfaces/dto/client.interface';
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
  baseUrl: string = environment.urlMock;

  constructor(private http: HttpClient) { }

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

  obterEnderecoPorCep(cep: string) {
    let endereco: EnderecoDTO;
    this.http
      .get<any>(`viacep.com.br/ws/${cep}/json/`)
      .subscribe((response) => {
        endereco.logradouro = response.logradouro;
        endereco.bairro = response.bairro;
        endereco.complemento = response.complemento;
        endereco.cep = response.cep;
        endereco.tipoResidencia = 'casa';
        endereco.tipoEndereco = TipoEnderecoEnum.COBRANCA;
        endereco.tipoResidencia = 'casa';
      });
  }

  recuperarCidadesPeloEstado(estadoID: number) : Observable<CidadeDTO[]>{
    return this.http
      .get<CidadeDTO[]>(`${this.baseUrl}/endereco/cidades`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': '*',
        }),
        params: new HttpParams().set('estadoID', estadoID.toString()),
      });
  }

  // salvarNovoEndereco(enderecoDto: EnderecoDTO): Observable<any> {
  salvarNovoEndereco(enderecoDto: EnderecoDTO) {
    console.log(`vai printar: ${enderecoDto.cep}`);

    const body = JSON.stringify(enderecoDto);
    return this.http.post(
      `${this.baseUrl}/endereco/${Number(sessionStorage.getItem('isLogado'))}`,
      body,
      httpOptions
    );
  }
}
