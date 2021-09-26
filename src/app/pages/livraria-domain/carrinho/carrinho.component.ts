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
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

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

  //pagmento
  cartoesSelecionados: FormArray = new FormArray([]);

  //cupons
  cuponsForm = new FormArray([]);

  cuponsTroca: CupomDTO[] = [
    {
      id: 1,
      codigo: '88994',
      tipo: TipoCupomEnum.TROCA,
      valor: 103.88
    },
    {
      id: 2,
      codigo: '09998',
      tipo: TipoCupomEnum.TROCA,
      valor: 65.78
    }
  ];
  
  //cupons de promo
  cuponsPromocionais: CupomDTO[] = [
    {
      id: 1,
      codigo: '09984',
      tipo: TipoCupomEnum.PROMOCIONAL,
      valor: 20
    },
    {
      id: 2,
      codigo: '98809',
      tipo: TipoCupomEnum.PROMOCIONAL,
      valor: 33.90
    }
  ];

  //payload
  formPedido: FormGroup = new FormGroup({});

  constructor(
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService,
    private clienteService: ClienteService,
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carrinho$ = this.carrinhoService.obterItens();
    this.atualizaTotais();
    this.isUsuarioAutenticado = !!sessionStorage.getItem('isLogado');
    this.idCliente = Number.parseInt(sessionStorage.getItem('isLogado') || '0');

    this.dadosCliente$ = this.clienteService.getClientById();

    this.dadosCliente$.subscribe(cliente => {
      this.enderecosEntrega = cliente.enderecos.filter(endereco => {
        return endereco.tipoEndereco.descricao === TipoEnderecoEnum.ENTREGA;
      })
    })

    this.initFormulario();
  }

  initFormulario() {
    this.formPedido = this.formBuilder.group({
      enderecoId: this.formBuilder.control('', Validators.required),
      idCliente: this.formBuilder.control('', Validators.required),
      itensPedido: this.formBuilder.array([]),
      formasPagamento: this.formBuilder.array([]),
      cupom: this.formBuilder.array([])
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

  obterCartoesSelecionados(cartoes: FormArray) {
    this.cartoesSelecionados = cartoes;
    console.log(`cartoes selecionados:`, this.cartoesSelecionados);
  }

  addCupom(cupom: CupomDTO) {
    const cupons = this.formPedido.get('cupons') as FormArray;
    cupons.push(
      this.formBuilder.control({
        idCupom: this.formBuilder.control(cupom.id)
      })
    )
  }

  finalizarPedido() {

  }

}
