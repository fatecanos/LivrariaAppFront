import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DetalhesPedidoComponent } from 'src/app/components/dialogs/detalhes-pedido/detalhes-pedido.component';
import { PedidoInterface, PedidosModalInterface } from 'src/app/models/interfaces/dto/pedido.interface';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.scss']
})
export class PedidosClienteComponent implements OnInit {

  dataSource: PedidoInterface[] = [];
  displayedColumns: string[] = ['numero', 'data', 'status', 'acoes'];

  pedidos$?: Observable<PedidoInterface[]>;

  constructor(
    private service: PedidosService,
    private matDialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.pedidos$ = this.service.getPedidos();

    this.pedidos$.subscribe(response => {
      this.dataSource = response;
    })
  }

  abrirDetalhesPedido(idPedido: number) {
    //TODO: integrar isso
    let modalData: PedidosModalInterface = {
      idCliente: 1, //falta obter o id do cliente autenticado no sistema
      idPedido: idPedido
    }

    const dialogRef = this.matDialogRef.open(DetalhesPedidoComponent, {
      width: '700px',
      data: modalData
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pedidos$ = this.service.getPedidos();

      this.pedidos$.subscribe(response => {
        this.dataSource = response;
      })
    })
  }

}
