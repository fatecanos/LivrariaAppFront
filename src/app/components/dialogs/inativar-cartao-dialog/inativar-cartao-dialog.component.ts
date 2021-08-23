import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartaoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';

@Component({
  selector: 'inativar-cartao-dialog',
  templateUrl: './inativar-cartao-dialog.component.html',
  styleUrls: ['./inativar-cartao-dialog.component.scss']
})
export class InativarCartaoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: CartaoClienteDTO,
    private service: CartoesService,
    private snackService: MatSnackBar
  ) { }

  ngOnInit(): void {

  }
  
  inativarCartao() {
    console.log('dados modal:',this.data.id);
    
    this.service.removerCartao(this.data.id).subscribe(res => {
      this.snackService.open('cartão foi removido com sucesso', 'fechar', {duration: 3000})
    }, err => {
      this.snackService.open('falha ao remover cartão', 'fechar', {duration: 3000})
    }, 
    ()=> {
      this.dialogRef.close();
    })
  }
}
