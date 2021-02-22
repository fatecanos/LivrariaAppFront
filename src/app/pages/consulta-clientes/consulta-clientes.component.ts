import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InativarDialogComponent } from 'src/app/components/dialogs/inativar-dialog/inativar-dialog.component';
import { ClienteInterface } from 'src/app/models/interfaces/client.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.scss']
})
export class ConsultaClientesComponent implements OnInit {

  dataSource: ClienteInterface[] = [];
  displayedColumns: string[] = ['nome', 'sobrenome', 'cpf', 'email', 'acoes'];

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private service: ClienteService) { }

  ngOnInit(): void {
    this.service.getClients()
      .subscribe(response => {
        this.dataSource = response;
    }, error => {
      console.log('Erro ao consultar clientes')
    },()=> {
      this._snackBar.open("lista de clientes carregada", 'fechar', {duration: 2000})
    })
  }

  inativarClientePorId(id: number) {
    console.log('inativando cliente: ', id)
    const dialogRef = this.dialog.open(InativarDialogComponent, {
      width: '250px',
      data: {
        entity: 'cliente',
        idCliente: id,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.getClients()
        .subscribe(response => {
          this.dataSource = response;
      })
    })
  }

}
