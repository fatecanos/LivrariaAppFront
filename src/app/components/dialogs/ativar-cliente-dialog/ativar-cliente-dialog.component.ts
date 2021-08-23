import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteDialogInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { ClienteService } from 'src/app/services/client-service/client-service.service';


@Component({
  selector: 'app-ativar-cliente-dialog',
  templateUrl: './ativar-cliente-dialog.component.html',
  styleUrls: ['./ativar-cliente-dialog.component.scss']
})
export class AtivarClienteDialogComponent {

  constructor(
    private service: ClienteService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AtivarClienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteDialogInterface
  ) {}


  // ativar() {
  //   this.service.activeClientById(this.data.idCliente).subscribe(
  //     (response) => {
  //       this._snackBar.open('Cliente foi reativado com sucesso!', 'fechar', {
  //         duration: 5000,
  //       });
  //     },
  //     (error) => {
  //       this._snackBar.open('Erro ao tentar ativar o cliente.', 'fechar', {
  //         duration: 5000,
  //       });
  //     },
  //     () => {
  //       this.dialogRef.close();
  //     }
  //   );
  // }

}
