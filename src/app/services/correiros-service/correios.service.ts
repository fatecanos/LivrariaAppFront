import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EnderecoDTO, TipoEnderecoEnum } from "src/app/models/interfaces/dto/client.interface";
import { EnderecoCorreioInterface } from "./correio.interface";

// import { correiosBrasil, CorreiosBrasil } from "correios-brasil";

@Injectable({providedIn: 'root'})
export class CorreiosService {

    constructor(private http: HttpClient) {}

    obterValorFrete(cep: string) {
        let  args = {
        // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
            sCepOrigem:  "08744103",
            sCepDestino:  cep,
            nVlPeso:  "1",
            nCdFormato:  "1",
            nVlComprimento:  "20",
            nVlAltura:  "20",
            nVlLargura:  "20",
            nCdServico:  ["04014",'04510'], //Array com os códigos de serviço
            nVlDiametro:  "0",
        };

        let response: any;

        // correiosBrasil.calcularPrecoPrazo(args).then(res=> {
            // response = res
        // })
        return response.Valor;
    }

    obterEnderecoPorCep(cep: string): Observable<EnderecoCorreioInterface> {
        return this.http.get<EnderecoCorreioInterface>(`https://viacep.com.br/ws/${cep}/json/`)
    }
}
