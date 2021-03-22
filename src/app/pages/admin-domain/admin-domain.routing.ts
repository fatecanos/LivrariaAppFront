import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDomainComponent } from "./admin-domain.component";
import { ConsultaClientesComponent } from "./consulta-clientes/consulta-clientes.component";
import { ConsultaVendasComponent } from "./consulta-vendas/consulta-vendas.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

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
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminDomainRouting {}