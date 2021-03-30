import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ClienteInterface } from 'src/app/models/interfaces/dto/client.interface';
import { DetalhesPedidoInterface, PedidosModalInterface } from 'src/app/models/interfaces/dto/pedido.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.scss']
})
export class DetalhesPedidoComponent implements OnInit {

  detalhes$?: Observable<DetalhesPedidoInterface>;
  cliente$?: Observable<ClienteInterface>;

  constructor(
    public dialogRef: MatDialogRef<PedidosModalInterface>,
    @Inject(MAT_DIALOG_DATA) public data: PedidosModalInterface,
    private pedidoSerice: PedidosService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.detalhes$ = this.pedidoSerice.obterDetalhesPedido(this.data.idPedido);
    this.cliente$ = this.clienteService.getClientById(this.data.idCliente);
  }

}
