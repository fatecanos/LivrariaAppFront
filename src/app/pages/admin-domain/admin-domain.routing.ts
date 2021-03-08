import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDomainComponent } from "./admin-domain.component";
import { ConsultaClientesComponent } from "./consulta-clientes/consulta-clientes.component";

const routes: Routes = [
    {
        path: '',
        component: AdminDomainComponent,
        children: [
            {
                path: '',
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