import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteDialogInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

@Component({
  templateUrl: './inativar-cliente-dialog.component.html',
  styleUrls: ['./inativar-cliente-dialog.component.scss']
})
export class InativarClienteDialogComponent {
  constructor(
    private service: ClienteService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InativarClienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteDialogInterface
  ) { }
  
  inativar() {
    this.service.deleteClientById(this.data.idCliente)
      .subscribe(response => {
        this._snackBar.open("cliente foi desativado", 'fechar', {duration: 5000});
      }, 
      error=> {
        this._snackBar.open("erro ao desativar cliente", 'fechar', {duration: 5000});
      }, ()=> {
        this.dialogRef.close();
    })
  }
}
