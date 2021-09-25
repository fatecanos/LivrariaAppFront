import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartaoCreditoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { BandeiraCartaoClienteDTO, CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { bandeirasMock } from 'src/app/models/mocks/bandeiras-cartao.mock';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';

@Component({
  selector: 'formulario-cartoes',
  templateUrl: './formulario-cartoes.component.html',
  styleUrls: ['./formulario-cartoes.component.scss']
})
export class FormularioCartoesComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  cartoesCliente$?: Observable<CartaoCreditoDTO[]>;
  bandeiras: Array<BandeiraCartaoClienteDTO> = bandeirasMock;

  constructor(
    private cartaoService: CartoesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartoesCliente$ = this.cartaoService.getCartoesMockado();

    this.form = this.formBuilder.group({
        cartoes: this.formBuilder.array([
          this.formBuilder.group({
            id: this.formBuilder.control(''),
            numeroCartao: this.formBuilder.control('', Validators.required),
            nomeImpressoCartao: this.formBuilder.control('', Validators.required),
            bandeira: this.formBuilder.control('', Validators.required),
            codigoSeguranca: this.formBuilder.control('', Validators.required),
            isNovoCartao: this.formBuilder.control(false, Validators.required),
            isGravarNovo: this.formBuilder.control(false, Validators.required),
            valorPago: this.formBuilder.control(0, Validators.required)
          })
        ])
      })
  }

  addCartao() {
    let formCartaoPlus = this.formBuilder.group({
      id: this.formBuilder.control(''),
      numeroCartao: this.formBuilder.control('', Validators.required),
      nomeImpressoCartao: this.formBuilder.control('', Validators.required),
      bandeira: this.formBuilder.control('', Validators.required),
      codigoSeguranca: this.formBuilder.control('', Validators.required),
      isNovoCartao: this.formBuilder.control(false, Validators.required),
      valorPago: this.formBuilder.control(0, Validators.required)
    })

    const add = this.form.get('cartoes') as FormArray;
    add.push(formCartaoPlus);
  }

  removeCartao(index: number) {
    const cartoes = this.form.get('cartoes') as FormArray;
    cartoes.removeAt(index)
  }

  patchFornGroup(index: number, cartao: CartaoCreditoDTO) {
    const cartoes = this.form.get('cartoes') as FormArray;

    cartoes.controls[index].patchValue({
      id: cartao.id,
      numeroCartao: cartao.numeroCartao,
      nomeImpressoCartao: cartao.nomeImpressoCartao,
      bandeira: cartao.bandeira,
      codigoSeguranca: cartao.codigoSeguranca,
    })
  }

  hidenNumbers(numeroCartao: string) {
    const rgx = /\d\d\d\d.\d\d\d\d.\d\d\d\d./;
    return numeroCartao.replace(rgx, numeroCartao);
  }

}
