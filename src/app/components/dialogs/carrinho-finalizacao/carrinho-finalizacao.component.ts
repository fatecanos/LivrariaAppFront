import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DataDialogInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';
import { NovoCartaoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { BandeiraCartaoDTO, CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { bandeirasMock } from 'src/app/models/mocks/bandeiras-cartao.mock';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes-service.service';
import { PedidoFinalizacaoInterface } from 'src/app/models/interfaces/dialogs/dialog-data.interface';

@Component({
  selector: 'app-carrinho-finalizacao',
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
  cartaoSelecionado?: NovoCartaoDTO;

  cartaoPreferencial?: Observable<CartaoClienteDTO>;

  constructor(
    private snack: MatSnackBar,
    private formBuilder: FormBuilder,
    private cartaoService: CartoesService,
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
    this.selecionaCartaoPreferencial();
    this.isGravarNovoEndereco = this.data.isNovoEndereco;
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

}
