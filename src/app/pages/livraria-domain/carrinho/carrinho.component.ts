import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarrinhoFinalizacaoComponent } from 'src/app/components/dialogs/carrinho-finalizacao/carrinho-finalizacao.component';
import { ItemCarrinhoInterface, LivroInterface } from 'src/app/models/interfaces/carrinho.interface';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/estoque.interface';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';
import { EstoqueService } from 'src/app/services/estoque-service/estoque.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  livrosLocalStorage: LivroEstoqueInterface[] = [];

  livroId: number = 0;

  carrinho$?: Observable<ItemCarrinhoInterface[]>;

  constructor(
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
    console.log('Removendo livro...', item);
    
  }

}
