import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";
import { MaterialModule } from "src/app/material/material.module";
import { ServiceModule } from "src/app/services/services.module";
import { AdminDomainComponent } from "./admin-domain.component";
import { AdminDomainRouting } from "./admin-domain.routing";
import { ConsultaClientesComponent } from "./consulta-clientes/consulta-clientes.component";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        AdminDomainRouting,
        ReactiveFormsModule,
        ServiceModule
    ],
    declarations: [
        ConsultaClientesComponent,
        AdminDomainComponent
    ]
})
export class AdminDomainModule {

}