import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtualizarClientesComponent } from "./atualizar-clientes/atualizar-clientes.component";
import { ClienteDomainComponent } from "./cliente-domain.component";
import { MeusCuponsComponent } from "./meus-cupons/meus-cupons.component";
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
      },
      { 
        path: 'cupons', 
        component: MeusCuponsComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteDomainRouting {}