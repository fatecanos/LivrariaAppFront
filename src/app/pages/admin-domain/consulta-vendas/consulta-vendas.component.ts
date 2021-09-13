
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DetalhesPedidoComponent } from 'src/app/components/dialogs/detalhes-pedido/detalhes-pedido.component';
import { PedidosModalInterface } from 'src/app/models/interfaces/dto/pedido.interface';
import { VendaInterface } from 'src/app/models/interfaces/dto/venda.interface';
import { VendasService } from 'src/app/services/vendas-service/vendas.service';

@Component({
  templateUrl: './consulta-vendas.component.html',
  styleUrls: ['./consulta-vendas.component.scss']
})
export class ConsultaVendasComponent implements OnInit {

  vendas$?: Observable<VendaInterface[]>;

  dataSource: VendaInterface[] = [];
  displayedColumns: string[] = ['numero', 'data', 'status', 'acoes'];

  filterOptions: Array<any> = ['número', 'status'];

  constructor(
    private _snackBar: MatSnackBar,
    private service: VendasService,
    private matDialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.vendas$ = this.service.obterVendas();

    this.vendas$.subscribe(response => {
      this.dataSource = response;
    }, err => {
      this._snackBar.open("erro ao consultar vendas", 'fechar', {duration: 5000});
    })
  }

  abrirModalDetalhes(id: number) {
    let modalData: PedidosModalInterface = {
      idCliente: 1, //falta obter o id do cliente autenticado no sistema
      idPedido: id
    }

    const dialogRef = this.matDialogRef.open(DetalhesPedidoComponent, {
      width: '900px',
      data: modalData
    });

    dialogRef.afterClosed().subscribe(()=> {
      this.initData();
    })
  }

}
