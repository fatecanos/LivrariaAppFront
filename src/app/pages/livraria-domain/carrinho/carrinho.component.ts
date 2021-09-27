import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarrinhoFinalizacaoComponent } from 'src/app/components/dialogs/carrinho-finalizacao/carrinho-finalizacao.component';
import { PedidoFinalizacaoInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { ItemCarrinhoInterface } from 'src/app/models/interfaces/dto/carrinho.interface';
import { CartaoCreditoDTO, CartaoFormDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { ClienteDTO, EnderecoDTO, TipoEnderecoEnum } from 'src/app/models/interfaces/dto/client.interface';
import { CupomDTO, TipoCupomEnum } from 'src/app/models/interfaces/dto/cupom.interface';
import { LivroEstoqueInterface } from 'src/app/models/interfaces/dto/estoque.interface';
import { LivroDTO } from 'src/app/models/interfaces/dto/livro-dto.interface';
import { CupomPedidoInterface, FormaPagamentoInterface, ItemPedido, PayloadCarrinhoDTO } from 'src/app/models/interfaces/dto/pedido-carrinho.interface';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { CorreiosService } from 'src/app/services/correiros-service/correios.service';
import { CupomService } from 'src/app/services/cupons-service/cupom.service';

@Component({
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  //variaveis auxiliares
  isUsuarioAutenticado: boolean = false;
  dadosCliente$?: Observable<ClienteDTO>;
  enderecosEntrega: EnderecoDTO[] = [];

  flgMyAddress?: boolean;
  isGravarNovoEndereco: boolean = false;

  isLoading: boolean = false;
  cepInput: FormControl = new FormControl('', [Validators.required]);

  enderecoSelecionado?: EnderecoDTO;

  //dados venda
  total: number = 0;

  carrinho$?: Observable<ItemCarrinhoInterface[]>;
  valorFrete: number = 40;

  cartoesSelecionados: FormArray = new FormArray([]);
  cuponsTroca: CupomDTO[] = [];
  cuponsPromocionais: CupomDTO[] = [];

  cuponsTrocaSelecionados: CupomDTO[] = [];
  cupomPromocionalSelecionado?: CupomDTO;

  
  //payload
  itensPedido: ItemPedido[] = [];
  cuponsPedido?: CupomPedidoInterface[];
  formasPagamento: FormaPagamentoInterface[] = [];
  enderecoId: number | undefined;

  constructor(
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService,
    private clienteService: ClienteService,
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    private router: Router,
    private cupomService: CupomService,
    private correioService: CorreiosService
  ) { }

  ngOnInit(): void {
    this.flgMyAddress = true;

    this.carrinho$ = this.carrinhoService.obterItens();
    this.atualizaTotais();
    this.isUsuarioAutenticado = !!sessionStorage.getItem('isLogado');

    this.dadosCliente$ = this.clienteService.getClientById();

    this.dadosCliente$.subscribe(cliente => {
      this.enderecosEntrega = cliente.enderecos.filter(endereco => {
        return endereco.tipoEndereco.descricao === TipoEnderecoEnum.ENTREGA;
      })
    })

    this.initCupons();
  }

  initCupons() {
    this.cupomService.obterCuponsCliente()
    .subscribe(response => {
      this.cuponsTroca = response.filter(cupom => cupom.tipoCupom == TipoCupomEnum.TROCA)
      this.cuponsPromocionais = response.filter(cupom => cupom.tipoCupom == TipoCupomEnum.PROMOCIONAL)
    })
  }

  atualizaTotais() {
    this.total = 0;
    this.carrinho$?.subscribe(carrinho => {
      carrinho.forEach(item=> {
        this.total += item.produto.valorVenda * item.quantidade;
      })
    })
  }

  removerItemCarrinho(itemId: number) {
    this.carrinhoService.removerItem(itemId)
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

  obterCartoesSelecionados(cartoes: FormArray) {
    this.cartoesSelecionados = cartoes;
    console.log(`cartoes selecionados:`, this.cartoesSelecionados);
  }

  buscarEnderecoPor(cep: string) {
    this.isLoading = true;
    this.correioService.obterEnderecoPorCep(cep).subscribe(res => {
      this.enderecoSelecionado = {
        tipoEndereco: {
            id: 1
        },
        tipoLogradouro: "Rua",
        logradouro: res.logradouro,
        cep: res.cep,
        numero: res.siafi,
        bairro: res.bairro,
        complemento: res.complemento,
        cidade: {
            id: 15,
        },
        pais: 'Brasil',
      }
      this.isLoading = false;
    });
  }

  finalizarPedido() {
    let payload: PayloadCarrinhoDTO;

    this.carrinhoService.obterItens()
      .subscribe(response => {
        this.itensPedido = response.map(res => {
          let aux: ItemPedido;
          aux = {
            idLivro: res.produto.id || 0,
            nomeLivro: res.produto.titulo,
            qtdComprada: res.produto.quantidadeSelecionada,
            valorUnitario: res.produto.valorVenda,
            valorTotal: res.produto.quantidadeSelecionada * res.produto.valorVenda
          }
          return aux;
        })
      })      

      console.log(this.cuponsPedido);
      
  }


  montarCartoes() {

  }

  montarCupons() {
    if(this.cupomPromocionalSelecionado) {
      this.cuponsPedido?.push(
        { 
          idCupom: this.cupomPromocionalSelecionado?.id || 0,
        }
      )
    }
  }

  montarEndereco() {
    if(this.flgMyAddress && this.enderecoSelecionado) {
      this.enderecoId = this.enderecoSelecionado?.id;
    } else {
      //cadastrar endereco e obter id
    }
  }

}
