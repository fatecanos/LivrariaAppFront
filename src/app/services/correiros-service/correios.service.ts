import { Injectable } from "@angular/core";

// import { correiosBrasil, CorreiosBrasil } from "correios-brasil";

@Injectable({providedIn: 'root'})
export class CorreiosService {

    // constructor(correios: CorreiosBrasil) {}

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
}
