import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtivarClienteDialogComponent } from 'src/app/components/dialogs/ativar-cliente-dialog/ativar-cliente-dialog.component';
import { InativarClienteDialogComponent } from 'src/app/components/dialogs/inativar-cliente-dialog/inativar-cliente-dialog.component';
import { InativarLivroDialogComponent } from 'src/app/components/dialogs/inativar-livro-dialog/inativar-livro-dialog.component';
import { ClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.scss'],
})
export class ConsultaClientesComponent implements OnInit {
  dataSource: ClienteDTO[] = [];
  displayedColumns: string[] = ['nome', 'sobrenome', 'cpf', 'email', 'acoes'];

  valorFiltro?: string;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private service: ClienteService
  ) {}

  ngOnInit(): void {
    this.service.getClients().subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) => {
        console.log('Erro ao consultar clientes');
      },
      () => {
        this._snackBar.open('lista de clientes carregada', 'fechar', {
          duration: 2000,
        });
      }
    );
  }

  pesquisarPeloFiltro() {
    this.service.getClientsComFiltro(this.valorFiltro).subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) => {
        console.log('Erro ao consultar clientes');
      },
      () => {
        this._snackBar.open('lista de clientes carregada', 'fechar', {
          duration: 2000,
        });
      }
    );
  }

  inativarClientePorId(id: number) {
    const dialogRef = this.dialog.open(InativarClienteDialogComponent, {
      width: '250px',
      data: {
        idCliente: id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.service.getClients().subscribe((response) => {
        this.dataSource = response;
      });
    });
  }

  ativarClientePorId(id: number) {
    const dialogRef = this.dialog.open(AtivarClienteDialogComponent, {
      width: '250px',
      data: {
        idCliente: id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.service.getClients().subscribe((response) => {
        this.dataSource = response;
      });
    });
  }
}
