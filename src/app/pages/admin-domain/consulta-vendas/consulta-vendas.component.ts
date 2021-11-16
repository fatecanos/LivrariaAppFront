
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetalhesPedidoAdminComponent } from 'src/app/components/dialogs/detalhes-pedido-admin/detalhes-pedido-admin.component';
import { DetalhesPedidoComponent } from 'src/app/components/dialogs/detalhes-pedido/detalhes-pedido.component';
import { PedidoInterface, PedidosModalInterface } from 'src/app/models/interfaces/dto/pedido.interface';
import { VendaInterface } from 'src/app/models/interfaces/dto/venda.interface';
import { VendasService } from 'src/app/services/vendas-service/vendas.service';

@Component({
  templateUrl: './consulta-vendas.component.html',
  styleUrls: ['./consulta-vendas.component.scss']
})
export class ConsultaVendasComponent implements OnInit {

  vendas$?: Observable<VendaInterface[]>;

  dataSource = new MatTableDataSource<VendaInterface>();
  displayedColumns: string[] = ['id', 'numero', 'data', 'status', 'acoes'];

  filterOptions: Array<any> = ['número', 'status'];
  selectedFilterOption: string = 'codigo';

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private _snackBar: MatSnackBar,
    private service: VendasService,
    private snackBar: MatSnackBar,
    private matDialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.initData();

  }

  initData() {
    this.vendas$ = this.service.obterVendas();

    this.vendas$.subscribe(response => {
      this.dataSource = new MatTableDataSource<VendaInterface>(response)
      this.dataSource.paginator = this.paginator || null;
    }, err => {
      this._snackBar.open("erro ao consultar vendas", 'fechar', {duration: 5000});
    })
  }

  avancarPedido(idPedido: number) {
    this.service.avancarStatus(idPedido)
      .subscribe(response => {
        this.snackBar.open(response.description, 'fechar')
      }, error => {
        this.snackBar.open(error.value.description, 'fechar')
      }, ()=> {
        location.reload()
      })
  }

  abrirModalDetalhes(pedido: PedidoInterface) {
    let modalData: PedidosModalInterface = {
      idCliente: Number(sessionStorage.getItem('isLogado')),
      idPedido: pedido.id,
      pedido: pedido
    }

    const dialogRef = this.matDialogRef.open(DetalhesPedidoAdminComponent, {
      width: '1200px',
      data: modalData
    });

    dialogRef.afterClosed().subscribe(()=> {
      this.initData();
    })
  }

  filtrarVendas(codigo: string) {
    console.log(codigo);
  }

}
