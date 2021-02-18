import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarClientesComponent } from './pages/atualizar-clientes/atualizar-clientes.component';
import { CadastroClientesComponent } from './pages/cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './pages/consulta-clientes/consulta-clientes.component';
import { StoreHomeComponent } from './pages/store-home/store-home.component';

const routes: Routes = [
  {
    path: '',
    component: StoreHomeComponent
  },
  {
    path: 'novo-cliente',
    component: CadastroClientesComponent
  },
  {
    path: 'consulta-clientes',
    component: ConsultaClientesComponent
  },
  {
    path: 'atualizar-clientes',
    component: AtualizarClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
