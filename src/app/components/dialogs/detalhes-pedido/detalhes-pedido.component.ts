import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DetalhesPedidoInterface, PerdidoInterface } from 'src/app/models/interfaces/pedido.interface';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.scss']
})
export class DetalhesPedidoComponent implements OnInit {

  detalhes$?: Observable<DetalhesPedidoInterface>;

  constructor(
    public dialogRef: MatDialogRef<number>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private pedidoSerice: PedidosService
  ) { }

  ngOnInit(): void {
    this.detalhes$ = this.pedidoSerice.obterDetalhesPedido(this.data);
  }

}
