import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { CarrinhoService } from "./carrinho-service/carrinho-service.service";
import { UtilsLivroFormService } from "./utils-livro-service/utils-livro-form.service";
import { ClienteService } from "./client-service/client-service.service";
import { EnderecoService } from "./endereco-service/endereco.service";
import { EstoqueService } from "./estoque-service/estoque.service";
import { PedidosService } from "./pedidos-service/pedidos.service";
import { ValidatorService } from "./validator/validator-service.service";
import { VendasService } from "./vendas-service/vendas.service";
import { CartoesService } from "./cartoes-service/cartoes.service";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ClienteService,
        EstoqueService,
        PedidosService,
        EnderecoService,
        ValidatorService,
        CartoesService,
        CarrinhoService,
        VendasService,
        UtilsLivroFormService
    ]
})
export class ServiceModule {

}