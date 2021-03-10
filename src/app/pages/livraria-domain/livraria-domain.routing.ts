import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroClientesComponent } from "./cadastro-clientes/cadastro-clientes.component";
import { CarrinhoComponent } from "./carrinho/carrinho.component";
import { DetalhesProdutoComponent } from "./detalhes-produto/detalhes-produto.component";
import { EstoqueComponent } from "./estoque/estoque.component";
import { LivrariaDomainComponent } from "./livraria-domain.component";
import { StoreHomeComponent } from "./store-home/store-home.component";

const routes: Routes = [
    {
        path: '',
        component: LivrariaDomainComponent,
        children: [
            {
                path: '',
                component: StoreHomeComponent
            },
            {
                path: 'novo-cliente',
                component: CadastroClientesComponent
            },
            {
                path: 'estoque',
                component: EstoqueComponent
            },
            {
                path: 'detalhes/:id',
                component: DetalhesProdutoComponent,
            },
            {
                path: 'carrinho/:id',
                component: CarrinhoComponent
            },
            {
                path: 'carrinho',
                component: CarrinhoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LivrariaRoutingModule {

}