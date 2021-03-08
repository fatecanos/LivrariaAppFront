import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtualizarClientesComponent } from "./atualizar-clientes/atualizar-clientes.component";
import { ClienteDomainComponent } from "./cliente-domain.component";
import { PedidosClienteComponent } from "./pedidos-cliente/pedidos-cliente.component";

const routes: Routes = [
  {
    path: '',
    component: ClienteDomainComponent,
    children: [
      { 
        path: '', 
        component: AtualizarClientesComponent 
      },
      { 
        path: 'pedidos', 
        component: PedidosClienteComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteDomainRouting {}