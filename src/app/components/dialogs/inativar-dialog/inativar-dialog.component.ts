import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InativateDialogInterface } from 'src/app/models/interfaces/dialog-data.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

@Component({
  selector: 'app-inativar-dialog',
  templateUrl: './inativar-dialog.component.html',
  styleUrls: ['./inativar-dialog.component.scss']
})
export class InativarDialogComponent {

  constructor(
    private service: ClienteService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InativarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InativateDialogInterface
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
