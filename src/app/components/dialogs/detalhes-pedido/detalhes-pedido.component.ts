import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { ItemPedido } from 'src/app/models/interfaces/dto/pedido-carrinho.interface';
import { DetalhesPedidoInterface, ItemPedidoInterface, PedidoInterface, PedidosModalInterface } from 'src/app/models/interfaces/dto/pedido.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.scss']
})
export class DetalhesPedidoComponent implements OnInit {

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
    
    this.detalhes$ = this.pedidoSerice.obterDetalhesPedidoMockado(this.data.idPedido);
    this.cliente$ = this.clienteService.getClientById();

    this.detalhesPedido = this.data.pedido;
  }

  solicitarTroca(itemPedido: ItemPedidoInterface) {
    this.pedidoSerice.solicitarTroca(itemPedido).subscribe(response => {
      this.snack.open(`${response.description}`, 'fechar')
    }, error => {
      this.snack.open(`erro ao solicitar troca, favor entrar em contato com o administrador.`, 'fechar')
    }, () => {
      this.dialogRef.close()
    }) 
  }

  entregarItemParaTroca(itemPedido: ItemPedidoInterface) {
    console.log('entregando item trocado...');
    this.pedidoSerice.enviarItemTroca(itemPedido)
      .subscribe(response => {
        this.snack.open('status de troca atualizado', 'fechar')
      }, err => {
        this.snack.open(`erro ao enviar itens`, 'fechar')
      }, () => {
        this.dialogRef.close()
      })
  }
}
