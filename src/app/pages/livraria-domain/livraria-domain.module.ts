import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";
import { MaterialModule } from "src/app/material/material.module";
import { ServiceModule } from "src/app/services/services.module";
import { CadastroClientesComponent } from "./cadastro-clientes/cadastro-clientes.component";
import { LivrariaDomainComponent } from "./livraria-domain.component";
import { LivrariaRoutingModule } from "./livraria-domain.routing";
import { StoreHomeComponent } from "./store-home/store-home.component";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        LivrariaRoutingModule,
        ReactiveFormsModule,
        ServiceModule
    ],
    declarations: [
        LivrariaDomainComponent,
        StoreHomeComponent,
        CadastroClientesComponent
    ]
})
export class LivrariaDomainModule {

}