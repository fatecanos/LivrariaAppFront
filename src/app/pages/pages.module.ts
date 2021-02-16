import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { AtualizarClientesComponent } from './atualizar-clientes/atualizar-clientes.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CadastroClientesComponent, 
    ConsultaClientesComponent, 
    AtualizarClientesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PagesModule { }
