import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";
import { MaterialModule } from "src/app/material/material.module";
import { ServiceModule } from "src/app/services/services.module";
import { AtualizarClientesComponent } from "./atualizar-clientes/atualizar-clientes.component";
import { ClienteDomainComponent } from "./cliente-domain.component";
import { ClienteDomainRouting } from "./cliente-domain.routing";
import { PedidosClienteComponent } from './pedidos-cliente/pedidos-cliente.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        ClienteDomainRouting,
        ReactiveFormsModule,
        ServiceModule
    ],
    declarations: [
        ClienteDomainComponent,
        AtualizarClientesComponent,
        PedidosClienteComponent
    ]
})
export class ClienteDomainModule {

}