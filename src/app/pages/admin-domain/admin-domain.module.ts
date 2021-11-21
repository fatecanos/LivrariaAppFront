import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { GestaoCuponsComponent } from './gestao-cupons/gestao-cupons.component';
import { GoogleChartsModule } from "angular-google-charts";
import { HttpClientModule } from "@angular/common/http";
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';

import { VendasService } from "src/app/services/vendas-service/vendas.service";

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        AdminDomainRouting,
        FormsModule,
        ReactiveFormsModule,
        ServiceModule,
        NgxMaskModule.forRoot(maskConfig),
        GoogleChartsModule,
        HttpClientModule,
        MatNativeDateModule
    ],
    declarations: [
        ConsultaClientesComponent,
        AdminDomainComponent,
        ConsultaVendasComponent,
        DashboardComponent,
        NovoLivroComponent,
        ConsultaLivrosComponent,
        GestaoEstoqueComponent,
        GestaoCuponsComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    ]
})
export class AdminDomainModule {

}
