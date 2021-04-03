import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarrinhoFinalizacaoComponent } from 'src/app/components/dialogs/carrinho-finalizacao/carrinho-finalizacao.component';
import { PedidoFinalizacaoInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { CarrinhoStoreInterface, ItemCarrinhoInterface } from 'src/app/models/interfaces/dto/carrinho.interface';
import { ClienteDTO, EnderecoDTO, TipoEnderecoEnum } from 'src/app/models/interfaces/dto/client.interface';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { EnderecoService } from 'src/app/services/endereco-service/endereco.service';

@Component({
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  //variaveis auxiliares
  isUsuarioAutenticado: boolean = false;
  dadosCliente$?: Observable<ClienteDTO>;
  enderecosEntrega: EnderecoDTO[] = [];
  isMyEndereco: boolean = true;
  isLoading: boolean = false;
  cepInput: FormControl = new FormControl('', [Validators.required]);

  //dados venda
  idCliente: number = 0;
  total: number = 0;
  enderecoSelecionado: EnderecoDTO | any;
  carrinho$?: Observable<ItemCarrinhoInterface[]>;
  valorFrete: number = 0;

  constructor(
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService,
    private clienteService: ClienteService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.obterItens();
    this.atualizaTotais();
    this.isUsuarioAutenticado = !!sessionStorage.getItem('isLogado');
    this.idCliente = Number.parseInt(sessionStorage.getItem('isLogado') || '0');

    //TODO: integrar cliente autenticado
    this.dadosCliente$ = this.clienteService.getClientById(1);

    this.dadosCliente$.subscribe(cliente => { 
      this.enderecosEntrega = cliente.enderecos.filter(endereco => {
        return endereco.tipoEndereco === TipoEnderecoEnum.ENTREGA;
      })
    })
  }

  atualizaTotais() {
    this.total = 0;
    this.carrinho$?.subscribe(carrinho => {
      carrinho.forEach(item=> {
        this.total += item.produto.valor*item.quantidade;
      })
    })
  }

  finalizarCompra() {
    let itens: ItemCarrinhoInterface[] = [];
    this.carrinhoService.obterItens()
      .subscribe(response => { itens = response });

    const dadosFinalizacao: PedidoFinalizacaoInterface = {
      enderecoDTO: this.enderecoSelecionado,
      isNovoEndereco: this.isMyEndereco,
      itensCarrinho: itens,
      total: this.total+this.valorFrete
    };

    if(this.isUsuarioAutenticado) {
      const dialogRef = this.dialog.open(CarrinhoFinalizacaoComponent, {
        width: '900px',
        data: dadosFinalizacao
      });
    } else {
      this.snackBar.open(
        "favor, acesse a plataforma primeiro", 
        "fechar", 
        {duration: 2000}
      )  
    }
  }

  removerItemCarrinho(item: LivroEstoqueInterface) {
    this.carrinhoService.removerItem(item.id)
    this.carrinho$ = this.carrinhoService.obterItens();

    this.atualizaTotais();
  }

  plusQuantidade(itemId: number, qtde: number, qtdeMax: number) {
    if(qtde < qtdeMax) {
      qtde++;
      this.carrinhoService.atualizarQuantidadeItem(itemId, qtde);
      this.carrinho$ = this.carrinhoService.obterItens();
      this.atualizaTotais();
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
    this.atualizaTotais();
  }

  calcularFrete() {
    this.isLoading = true;
    setTimeout(()=> {
      this.isLoading = false
      this.valorFrete = 40
    }, 4000) 
  }

}
