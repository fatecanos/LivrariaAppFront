import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroClientesComponent } from "./cadastro-clientes/cadastro-clientes.component";
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