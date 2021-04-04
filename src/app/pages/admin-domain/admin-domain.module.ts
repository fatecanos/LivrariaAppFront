import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";
import { MaterialModule } from "src/app/material/material.module";
import { ServiceModule } from "src/app/services/services.module";
import { AdminDomainComponent } from "./admin-domain.component";
import { AdminDomainRouting } from "./admin-domain.routing";
import { ConsultaClientesComponent } from "./consulta-clientes/consulta-clientes.component";
import { ConsultaVendasComponent } from './consulta-vendas/consulta-vendas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NovoLivroComponent } from './novo-livro/novo-livro.component';
import { ConsultaLivrosComponent } from './consulta-livros/consulta-livros.component';
import { GestaoEstoqueComponent } from './gestao-estoque/gestao-estoque.component';
import { IConfig, NgxMaskModule } from "ngx-mask";

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        AdminDomainRouting,
        ReactiveFormsModule,
        ServiceModule,
        NgxMaskModule.forRoot(maskConfig),
    ],
    declarations: [
        ConsultaClientesComponent,
        AdminDomainComponent,
        ConsultaVendasComponent,
        DashboardComponent,
        NovoLivroComponent,
        ConsultaLivrosComponent,
        GestaoEstoqueComponent
    ]
})
export class AdminDomainModule {

}