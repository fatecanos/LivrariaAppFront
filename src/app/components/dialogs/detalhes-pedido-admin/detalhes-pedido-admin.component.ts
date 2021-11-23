import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { DetalhesPedidoInterface, ItemPedidoInterface, PedidoInterface, PedidosModalInterface } from 'src/app/models/interfaces/dto/pedido.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  selector: 'app-detalhes-pedido-admin',
  templateUrl: './detalhes-pedido-admin.component.html',
  styleUrls: ['./detalhes-pedido-admin.component.scss']
})
export class DetalhesPedidoAdminComponent implements OnInit {

  detalhes$?: Observable<DetalhesPedidoInterface>;
  cliente$?: Observable<ClienteDTO>;

  detalhesPedido?: PedidoInterface;

  constructor(
    public dialogRef: MatDialogRef<PedidosModalInterface>,
    @Inject(MAT_DIALOG_DATA) public data: PedidosModalInterface,
    private pedidoSerice: PedidosService,
    private clienteService: ClienteService,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.data.idPedido = this.data.idPedido;
    
    this.detalhes$ = this.pedidoSerice.obterDetalhesPedido(this.data.idPedido);
    this.cliente$ = this.clienteService.getClientById();

    this.detalhesPedido = this.data.pedido;
  }

  aprovarTroca(itemPedido: ItemPedidoInterface) {
    console.log("aprovando troca");
    this.pedidoSerice.aprovarTroca(itemPedido)
      .subscribe(response => {
        this.snack.open(`troca aprovada com sucesso`, 'fechar')
      }, err => {
        this.snack.open(`erro ao autorizar solicitação de troca`, `fechar`)
      }, () => {
        this.dialogRef.close();
      })
  }

  recusarTroca(itemPedido: ItemPedidoInterface) {
    console.log("recusando troca");
    this.pedidoSerice.recusarTroca(itemPedido)
    .subscribe(response => {
      this.snack.open(`troca recusada com sucesso`, 'fechar')
    }, err => {
      this.snack.open(`erro ao recusar solicitação de troca`, `fechar`)
    }, () => {
      this.dialogRef.close();
    })
  }

  confirmarRecebimentoTroca(itemPedido: ItemPedidoInterface) {
    this.pedidoSerice.confirmarTroca(itemPedido)
    .subscribe(response => {
      this.snack.open(`troca recebida`, 'fechar')
    }, err => {
      this.snack.open(`erro ao confirmar recebimento de troca`, `fechar`)
    }, () => {
      this.dialogRef.close();
    })
  }
}
