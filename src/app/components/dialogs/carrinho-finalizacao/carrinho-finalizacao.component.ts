import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartaoCredidoInterface } from 'src/app/models/interfaces/cartao.interface';
import { BandeiraCartaoInterface } from 'src/app/models/interfaces/client.interface';
import { bandeirasMock } from 'src/app/models/mocks/bandeiras-cartao.mock';

@Component({
  selector: 'app-carrinho-finalizacao',
  templateUrl: './carrinho-finalizacao.component.html',
  styleUrls: ['./carrinho-finalizacao.component.scss']
})
export class CarrinhoFinalizacaoComponent implements OnInit {

  isLoading = false;
  isPagtoPreferencial: boolean = true;
  bandeirasCartao: BandeiraCartaoInterface[] = bandeirasMock;

  formNovoCartao: FormGroup;
  cartaoSelecionado?: CartaoCredidoInterface;

  constructor(private formBuilder: FormBuilder) { 
    this.formNovoCartao = this.formBuilder.group({
      numeroCartao: ['', [Validators.required]],
      nomeNoCartao: ['', [Validators.required]],
      bandeira: ['', [Validators.required]],
      codigoSeguranca: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {


  }

  addNovoCartao() {
    this.isLoading = true;
    setTimeout(()=> {
      this.isLoading = false;
    }, 1000)
  }

  patchBandeira(bandeira: string) {
    console.log(bandeira);
    
    this.formNovoCartao?.patchValue({
      bandeira: bandeira
    })
  }

}
