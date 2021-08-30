import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnderecoDTO } from 'src/app/models/interfaces/dto/client.interface';
import { EnderecoService } from 'src/app/services/endereco-service/endereco.service';

@Component({
  selector: 'inativar-endereco-dialog',
  templateUrl: './inativar-endereco-dialog.component.html',
  styleUrls: ['./inativar-endereco-dialog.component.scss']
})
export class InativarEnderecoDialogComponent implements OnInit {

  enderecoId: number = 0;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: EnderecoService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.enderecoId = this.data.idEndereco;
  }

  inativarEndereco() {
    this.service.removerEndereco(this.enderecoId)
      .subscribe(res => {
        this.snackBar.open('endereço foi inativado com sucesso', 'fechar')
      },err => {
        this.snackBar.open(err.error.description, 'fechar')     
      }, () => {
        this.dialogRef.close()
      })
  }

}
