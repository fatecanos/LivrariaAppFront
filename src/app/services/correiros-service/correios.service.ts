import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import axios from "axios";
import { Observable } from "rxjs";
import { EnderecoCorreioInterface } from "./correio.interface";

@Injectable({providedIn: 'root'})
export class CorreiosService {

    constructor(private http: HttpClient) {}

    obterValorFrete(cepDestino: string) {
        let urlBase = 'https://ws.correios.com.br';
        let ORIGEM = '08744103'

        let vlPeso = '9'
        let cdFormato = '1'
        let vlComprimento = 30
        let vlAltura = 0.40
        let vlLargura = 0.50

        const url = `${urlBase}/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=${ORIGEM}&sCepDestino=${cepDestino}&nVlPeso=${vlPeso}&nCdFormato=${cdFormato}&nVlComprimento=${vlComprimento}&nVlAltura=${vlAltura}&nVlLargura=${vlLargura}&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04014&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;
        return axios.get(`${url}`);
    }

    obterEnderecoPorCep(cep: string): Observable<EnderecoCorreioInterface> {
        return this.http.get<EnderecoCorreioInterface>(`https://viacep.com.br/ws/${cep}/json/`)
    }
}
