import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PerdidoInterface } from 'src/app/models/interfaces/pedido.interface';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.scss']
})
export class PedidosClienteComponent implements OnInit {

  dataSource: PerdidoInterface[] = [];
  displayedColumns: string[] = ['numero', 'data', 'status', 'acoes'];

  pedidos$?: Observable<PerdidoInterface[]>;

  constructor(private service: PedidosService) { }

  ngOnInit(): void {
    this.pedidos$ = this.service.getPedidos();

    this.pedidos$.subscribe(response => {
      this.dataSource = response;
    })
  }

}
