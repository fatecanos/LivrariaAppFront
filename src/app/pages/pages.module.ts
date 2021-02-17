import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { AtualizarClientesComponent } from './atualizar-clientes/atualizar-clientes.component';
import { MaterialModule } from '../material/material.module';
import { StoreHomeComponent } from './store-home/store-home.component';

import { RouterModule } from '@angular/router';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ValidatorService } from '../services/validator/validator-service.service';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    CadastroClientesComponent, 
    ConsultaClientesComponent, 
    AtualizarClientesComponent, 
    StoreHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig)
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
    ValidatorService
  ]
})
export class PagesModule { }
