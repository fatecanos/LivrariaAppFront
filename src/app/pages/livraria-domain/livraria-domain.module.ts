import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";
import { MaterialModule } from "src/app/material/material.module";
import { ServiceModule } from "src/app/services/services.module";
import { CadastroClientesComponent } from "./cadastro-clientes/cadastro-clientes.component";
import { LivrariaDomainComponent } from "./livraria-domain.component";
import { LivrariaRoutingModule } from "./livraria-domain.routing";
import { StoreHomeComponent } from "./store-home/store-home.component";
import { EstoqueComponent } from './estoque/estoque.component';
import { IConfig, NgxMaskModule } from "ngx-mask";
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { EstoqueService } from "src/app/services/estoque-service/estoque.service";
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PainelLoginComponent } from './painel-login/painel-login.component';
import { MoneyFormmatter } from "src/app/custom-pipes/format-money.pipe";
import { HiddenCardNumberPipe } from "src/app/custom-pipes/hidden-card-number.pipe";
import { FormularioCartoesComponent } from "./formulario-cartoes/formulario-cartoes.component";

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        LivrariaRoutingModule,
        ReactiveFormsModule,
        ServiceModule,
        NgxMaskModule.forRoot(maskConfig),
        FormsModule,
    ],
    declarations: [
        LivrariaDomainComponent,
        StoreHomeComponent,
        CadastroClientesComponent,
        EstoqueComponent,
        DetalhesProdutoComponent,
        CarrinhoComponent,
        PainelLoginComponent,
        MoneyFormmatter,
        FormularioCartoesComponent,
        HiddenCardNumberPipe
    ],
    providers: [
        {
            provide: ErrorStateMatcher, 
            useClass: ShowOnDirtyErrorStateMatcher
        },
        { 
            provide: ErrorStateMatcher,
            useClass: ShowOnDirtyErrorStateMatcher
        },
        EstoqueService
    ]
})
export class LivrariaDomainModule {

}