import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CarrinhoFinalizacaoComponent } from 'src/app/components/dialogs/carrinho-finalizacao/carrinho-finalizacao.component';
import { ItemCarrinhoInterface } from 'src/app/models/interfaces/dto/carrinho.interface';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';

@Component({
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  livrosLocalStorage: LivroEstoqueInterface[] = [];

  livroId: number = 0;

  carrinho$?: Observable<ItemCarrinhoInterface[]>;

  constructor(
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.obterItens();
  }

  finalizarCompra() {
    const dialogRef = this.dialog.open(CarrinhoFinalizacaoComponent, {
      width: '900px',
      data: 'ola'
    });
  }

  removerItemCarrinho(item: LivroEstoqueInterface) {
    this.carrinhoService.removerItem(item.id)
    this.carrinho$ = this.carrinhoService.obterItens();
  }

  plusQuantidade(itemId: number, qtde: number, qtdeMax: number) {
    if(qtde < qtdeMax) {
      qtde++;
      this.carrinhoService.atualizarQuantidadeItem(itemId, qtde);
      this.carrinho$ = this.carrinhoService.obterItens();
    } else {
      this.snackBar.open('Limite de estoque', 'fechar', {
        duration: 3000
      })
    }

  }

  minusQuantidade(itemId: number, qtde: number) {
    const LIMITE=1;
    if(qtde>LIMITE){
      qtde--;
    }
    this.carrinhoService.atualizarQuantidadeItem(itemId, qtde);
    this.carrinho$ = this.carrinhoService.obterItens();
  }

}
