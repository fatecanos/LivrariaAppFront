import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteDialogInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { LivroService } from 'src/app/services/livro-service/livro-service.service';
import { InativarClienteDialogComponent } from '../inativar-cliente-dialog/inativar-cliente-dialog.component';

@Component({
  templateUrl: './inativar-livro-dialog.component.html',
  styleUrls: ['./inativar-livro-dialog.component.scss']
})
export class InativarLivroDialogComponent implements OnInit {

  constructor(
    private service: LivroService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InativarClienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  inativar() {
    console.log(this.data.livroId);
    
  }

}
