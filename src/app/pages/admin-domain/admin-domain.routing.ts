import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDomainComponent } from "./admin-domain.component";
import { ConsultaClientesComponent } from "./consulta-clientes/consulta-clientes.component";
import { ConsultaLivrosComponent } from "./consulta-livros/consulta-livros.component";
import { ConsultaVendasComponent } from "./consulta-vendas/consulta-vendas.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GestaoCuponsComponent } from "./gestao-cupons/gestao-cupons.component";
import { GestaoEstoqueComponent } from "./gestao-estoque/gestao-estoque.component";
import { NovoLivroComponent } from "./novo-livro/novo-livro.component";

const routes: Routes = [
    {
        path: '',
        component: AdminDomainComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'venda',
                component: ConsultaVendasComponent  
            },
            {
                path: 'cliente',
                component: ConsultaClientesComponent
            },
            {
                path: 'novo-livro',
                component: NovoLivroComponent
            },
            {
                path: 'consulta-livros',
                component: ConsultaLivrosComponent
            },
            {
                path: 'estoque',
                component: GestaoEstoqueComponent
            },
            {
                path: 'gestao-cupons',
                component: GestaoCuponsComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminDomainRouting {}