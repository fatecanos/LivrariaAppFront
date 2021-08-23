import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TelefoneDTO } from 'src/app/models/interfaces/dto/client.interface';
import { TelefoneService } from 'src/app/services/telefone-service/telefone.service';

@Component({
  selector: 'modal-inativar-telefone-dialog',
  templateUrl: './inativar-telefone-dialog.component.html',
  styleUrls: ['./inativar-telefone-dialog.component.scss'],
})
export class InativarTelefoneDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TelefoneDTO>,
    @Inject(MAT_DIALOG_DATA) public data: TelefoneDTO,
    private service: TelefoneService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  inativarTelefone() {
    this.service.inativarTelefonePorId(this.data.id).subscribe(
      (response) => {
        this._snackBar.open('O telefone foi inativado com sucesso!', 'Fechar', {
          duration: 5000,
        });
      },
      (error) => {
        this._snackBar.open('Erro ao desativar o telefone.', 'Fechar', {
          duration: 5000,
        });
      },
      () => {
        this.dialogRef.close();
      }
    );
  }

  testeTelefone() {
    this.service.atualizarTelefone(this.data).subscribe(
      (response) => {
        this._snackBar.open('O telefone foi inativado com sucesso!', 'Fechar', {
          duration: 5000,
        });
      },
      (error) => {
        this._snackBar.open('Erro ao desativar o telefone.', 'Fechar', {
          duration: 5000,
        });
      },
      () => {
        this.dialogRef.close();
      }
    );
  }

  fecharModal() {}
}
