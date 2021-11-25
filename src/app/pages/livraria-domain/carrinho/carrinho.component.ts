import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemCarrinhoInterface } from 'src/app/models/interfaces/dto/carrinho.interface';
import {
  CartaoFormDTO,
} from 'src/app/models/interfaces/dto/cartao.interface';
import {
  ClienteDTO,
  EnderecoDTO,
  TipoEnderecoEnum,
} from 'src/app/models/interfaces/dto/client.interface';
import {
  CupomDTO,
  TipoCupomEnum,
} from 'src/app/models/interfaces/dto/cupom.interface';
import {
  CupomPedidoInterface,
  FormaPagamentoInterface,
  ItemPedido,
  PayloadCarrinhoDTO,
} from 'src/app/models/interfaces/dto/pedido-carrinho.interface';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { CorreiosService } from 'src/app/services/correiros-service/correios.service';
import { CupomService } from 'src/app/services/cupons-service/cupom.service';
import { EnderecoService } from 'src/app/services/endereco-service/endereco.service';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
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

  somatoriaEmCupons: number = 0;
  somatoriaEmCartoes: number = 0;

  //dados venda
  total: number = 0;

  carrinho$?: Observable<ItemCarrinhoInterface[]>;
  valorFrete: number = 40;

  cartoesSelecionados: FormArray = new FormArray([]);
  cuponsTroca: CupomDTO[] = [];

  cupomTrocaSelecionado: CupomDTO[] = [];
  cupomPromocionalSelecionado?: CupomDTO;

  codCupomPromoInput: FormControl = new FormControl('', Validators.min(3))

  idCliente: number = 0;

  //payload
  itensPedido: ItemPedido[] = [];
  cuponsPedido: CupomPedidoInterface[] = [];
  enderecoId?: number;
  endereco$?: Observable<EnderecoDTO>;
  cartoesPayload: FormaPagamentoInterface[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService,
    private clienteService: ClienteService,
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    private router: Router,
    private cupomService: CupomService,
    private correioService: CorreiosService,
    private enderecoService: EnderecoService,
    private cartaoService: CartoesService,
    private pedidoService: PedidosService
  ) {}

  ngOnInit(): void {
    this.clienteService.getClientById().subscribe((result) => {
      this.idCliente = result.id;
    });

    this.flgMyAddress = true;

    this.carrinho$ = this.carrinhoService.obterItens();
    this.atualizaTotais();
    this.isUsuarioAutenticado = !!sessionStorage.getItem('isLogado');

    this.dadosCliente$ = this.clienteService.getClientById();

    this.dadosCliente$.subscribe((cliente) => {
      this.enderecosEntrega = cliente.enderecos.filter((endereco) => {
        return endereco.tipoEndereco.descricao === TipoEnderecoEnum.ENTREGA;
      });
    });

    this.initCupons();
  }

  // get isValido() {
    
  // }

  initCupons() {
    this.cupomService.obterCuponsCliente().subscribe((response) => {
      this.cuponsTroca = response.filter(
        (cupom) => cupom.tipoCupom == TipoCupomEnum.TROCA
      );
    });
  }

  atualizaTotais() {
    this.total = 0;
    this.carrinho$?.subscribe((carrinho) => {
      carrinho.forEach((item) => {
        this.total += item.produto.valorVenda * item.quantidade;
      });
    });
  }

  removerItemCarrinho(itemId: number) {
    this.carrinhoService.removerItem(itemId);
    this.carrinho$ = this.carrinhoService.obterItens();

    this.atualizaTotais();
  }

  plusQuantidade(itemId: number, qtde: number, qtdeMax: number) {
    if (qtde < qtdeMax) {
      qtde++;
      this.carrinhoService.atualizarQuantidadeItem(itemId, qtde);
      this.carrinho$ = this.carrinhoService.obterItens();
      this.atualizaTotais();
    } else {
      this.snackBar.open('Limite de estoque', 'fechar', {
        duration: 3000,
      });
    }
  }

  minusQuantidade(itemId: number, qtde: number) {
    const LIMITE = 1;
    if (qtde > LIMITE) {
      qtde--;
    }
    this.carrinhoService.atualizarQuantidadeItem(itemId, qtde);
    this.carrinho$ = this.carrinhoService.obterItens();
    this.atualizaTotais();
  }

  calcularFrete() {
    this.isLoading = true;
    
    this.carrinhoService.obterItens().subscribe((response) => {
      this.itensPedido = response.map((res) => {
        let aux: ItemPedido;
        aux = {
          idLivro: res.produto.id || 0,
          nomeLivro: res.produto.titulo,
          qtdComprada: res.produto.quantidadeSelecionada,
          valorUnitario: res.produto.valorVenda,
          valorTotal:
            res.produto.quantidadeSelecionada * res.produto.valorVenda,
        };
        console.log('Itens Pedido:', this.itensPedido);

        return aux;
      });
    });

    setTimeout(()=> {
      this.valorFrete = ((this.itensPedido.length+1) * 5) + 40
      this.isLoading = false;
    }, 1000)
    
  }

  adicionarCupomPromocional() {
    if(this.codCupomPromoInput.valid) {
      this.cupomService.buscarCupomPorCodigo(this.codCupomPromoInput.value)
        .subscribe(response => {
          this.cupomPromocionalSelecionado = response
        }, err => {
          this.snackBar.open(`erro ao validar cupom`, 'fechar', {
            duration: 3000,
          })
        }, () => {
          this.snackBar.open(`cupom adicionado`, 'fechar', {
            duration: 3000,
          })
        })
    }
  }

  obterCartoesSelecionados(cartoes: FormArray) {
    this.cartoesSelecionados = cartoes;
    console.log(`cartoes selecionados:`, this.cartoesSelecionados);
  }

  buscarEnderecoPor(cep: string) {
    this.isLoading = true;
    this.correioService.obterEnderecoPorCep(cep).subscribe((res) => {
      this.enderecoSelecionado = {
        tipoEndereco: {
          id: 1,
        },
        tipoLogradouro: 'Rua',
        logradouro: res.logradouro,
        cep: res.cep,
        numero: res.siafi,
        bairro: res.bairro,
        complemento: res.complemento,
        cidade: {
          id: 15,
        },
        pais: 'Brasil',
        salvar: this.isGravarNovoEndereco,
      };
      this.isLoading = false;
    });
  }

  async finalizarPedido() {
    this.isLoading = true;
    //montar itens carrinho
    await this.carrinhoService.obterItens().subscribe((response) => {
      this.itensPedido = response.map((res) => {
        let aux: ItemPedido;
        aux = {
          idLivro: res.produto.id || 0,
          nomeLivro: res.produto.titulo,
          qtdComprada: res.produto.quantidadeSelecionada,
          valorUnitario: res.produto.valorVenda,
          valorTotal:
            res.produto.quantidadeSelecionada * res.produto.valorVenda,
        };
        console.log('Itens Pedido:', this.itensPedido);

        return aux;
      });
    });

    await this.montarCupons();
    await this.montarEndereco();
    await this.montarCartoes();

    this.endereco$?.subscribe((response) => {});

    const trocoCupomAux = this.somatoriaEmCupons? (this.somatoriaEmCupons - (this.somatoriaEmCartoes - this.total)): 0;

    let payloadPedido: PayloadCarrinhoDTO = {
      idEndereco: this.enderecoId || 0,
      idCliente: this.idCliente,
      valorTotal: this.total + this.valorFrete,
      trocoCupom: trocoCupomAux,
      itensPedido: this.itensPedido,
      formasPagamento: this.cartoesPayload,
      cupoms: this.cuponsPedido,
    };

    console.log('Payload', payloadPedido);

    this.pedidoService.gravarPedido(payloadPedido).subscribe(
      (response) => {
        this.isLoading = false;
        this.snackBar.open('pedido gravado com sucesso', 'fechar', {
          duration: 3000,
        });
        this.router.navigate(['/clientes/pedidos']);
      },
      (err) => {
        this.snackBar.open(err.error.description, 'fechar', {
          duration: 3000,
        });
        this.isLoading = false
      },
      () => {
        this.carrinhoService.limparCarrinho();
      }
    );
  }

  async montarCartoes() {
    this.cartoesPayload = [];
    let cartoes: CartaoFormDTO[] = this.cartoesSelecionados.value;

    cartoes.forEach((cartao) => {
      if (cartao.isNovoCartao) {
        this.cartaoService
          .gravar({
            bandeira: cartao.bandeira,
            isPreferencial: false,
            codigoSeguranca: cartao.codigoSeguranca,
            nomeImpressoCartao: cartao.nomeImpressoCartao,
            numeroCartao: cartao.numeroCartao,
            salvar: cartao.isGravarNovo,
          })
          .subscribe((response) => {
            this.cartoesPayload.push({
              idCartao: response.id,
              valorPago: cartao.valorPago,
            });
          });
      } else {
        this.cartoesPayload.push({
          idCartao: cartao.id,
          valorPago: cartao.valorPago,
        });
      }
    });

    if(this.cartoesPayload.length) {
      this.somatoriaEmCartoes = this.cartoesPayload.map(cartao => {
        return cartao.valorPago
      }).reduce((cartaoPrev, cartaoCurr) => cartaoPrev + cartaoCurr)
    }
  }

  async montarCupons() {
    this.cuponsPedido = [];
    if (this.cupomPromocionalSelecionado) {
      this.cuponsPedido.push({
        id: this.cupomPromocionalSelecionado?.id || 0,
        valor: this.cupomPromocionalSelecionado.valor
      });
    }

    if (this.cupomTrocaSelecionado) {
      this.cupomTrocaSelecionado.forEach((cupomTroca) => {
        this.cuponsPedido.push({
          id: cupomTroca.id,
          valor: cupomTroca.valor
        });
      });
    }

    if(this.cuponsPedido.length) {
      this.somatoriaEmCupons = this.cuponsPedido.map(cupom => {
        return cupom.valor
      }).reduce((valorPrev, valorCurr) => valorPrev + valorCurr)
    }
  }

  async montarEndereco () {
    if (this.flgMyAddress && this.enderecoSelecionado) {
      this.enderecoId = this.enderecoSelecionado.id;
      this.enderecoSelecionado.salvar = true;
      return;
    }

    if (!this.flgMyAddress && this.enderecoSelecionado) {
      this.enderecoSelecionado.salvar = this.isGravarNovoEndereco;
      this.enderecoService
        .salvarNovoEndereco(this.enderecoSelecionado)
        .subscribe(response => {
          console.log("gravando novo endereco:", response);
        })
      return;
    }
  }
}
