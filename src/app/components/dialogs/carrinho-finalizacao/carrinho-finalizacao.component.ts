import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CartaoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { BandeiraCartaoDTO } from 'src/app/models/interfaces/dto/client.interface';
import { bandeirasMock } from 'src/app/models/mocks/bandeiras-cartao.mock';
import { PedidoFinalizacaoInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { VendasService } from 'src/app/services/vendas-service/vendas.service';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';

@Component({
  templateUrl: './carrinho-finalizacao.component.html',
  styleUrls: ['./carrinho-finalizacao.component.scss']
})
export class CarrinhoFinalizacaoComponent implements OnInit {

  isLoading = false;
  isPagtoPreferencial: boolean = true;
  isNovoEndereco: boolean = false;
  bandeirasCartao: BandeiraCartaoDTO[] = bandeirasMock;

  isGravarNovoCartao: boolean = false;
  isGravarNovoEndereco: boolean = false;

  formNovoCartao: FormGroup;
  cartaoSelecionado?: CartaoDTO;

  cartaoPreferencial$?: Observable<CartaoDTO>;

  desconto: number = 0;

  constructor(
    private snack: MatSnackBar,
    private formBuilder: FormBuilder,
    private cartaoService: CartoesService,
    private vendaService: VendasService,
    public dialogRef: MatDialogRef<PedidoFinalizacaoInterface>,
    @Inject(MAT_DIALOG_DATA) public data: PedidoFinalizacaoInterface) { 
    this.formNovoCartao = this.formBuilder.group({
      numeroCartao: ['', [Validators.required]],
      nomeNoCartao: ['', [Validators.required]],
      bandeira: ['', [Validators.required]],
      codigoSeguranca: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log('Dados que chegaram no modal:', this.data);
    
    this.selecionaCartaoPreferencial();
    this.isGravarNovoEndereco = this.data.isNovoEndereco;

    this.cartaoPreferencial$ = this.cartaoService.getCartaoPreferencial();
  }

  addNovoCartao() {
    this.isLoading = true;

    setTimeout(()=> {
      console.log(this.formNovoCartao.value);
      
      this.isLoading = false;
      if(this.formNovoCartao.valid) {
        this.cartaoSelecionado = this.formNovoCartao.value;
        this.snack.open('novo cartao adicionado', 'fechar', {duration: 2000});
      } else {
        this.snack.open('formulario inválido, verifique as informações', 'fechar', {duration: 2000});
      }
    }, 1000)
  }

  patchBandeira(bandeira: string) {    
    this.formNovoCartao?.patchValue({
      bandeira: bandeira
    })
  }

  selecionaCartaoPreferencial() {
    this.isPagtoPreferencial = true;
    this.cartaoService.getCartaoPreferencial()
      .subscribe(response => this.cartaoSelecionado = response);
  }

  executarPedido() {
    //TODO: integrar executar pedido


    //TODO: montagem do payload
    let form: any = {

    }

    this.vendaService.executarPedido(form).subscribe(response => {
      this.snack.open(response.mensagem, 'fechar', {
        duration: 2000
      })
    })

    this.isLoading = true;
    setTimeout(()=> {
      this.isLoading = false;
      this.dialogRef.close()
    }, 1000);

  }

  get obterParcelas() {
    const total = this.data.total;
    return [
      `1x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}`,
      `2x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total/2)}`,
      `3x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total/3)}`,
      `4x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total/4)}`
    ]
  }

}
