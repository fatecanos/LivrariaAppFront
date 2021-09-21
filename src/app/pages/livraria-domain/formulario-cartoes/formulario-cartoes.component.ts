import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartaoCreditoDTO } from 'src/app/models/interfaces/dto/cartao.interface';
import { CartaoClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';

@Component({
  selector: 'formulario-cartoes',
  templateUrl: './formulario-cartoes.component.html',
  styleUrls: ['./formulario-cartoes.component.scss']
})
export class FormularioCartoesComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  cartoesCliente$?: Observable<CartaoCreditoDTO[]>;

  constructor(
    private cartaoService: CartoesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartoesCliente$ = this.cartaoService.getCartoesMockado();

    this.form = this.formBuilder.group({
        cartoes: this.formBuilder.array([
          {
            id: [''],
            numeroCartao: ['', Validators.required],
            nomeImpressoCartao: ['', Validators.required],
            bandeira: ['', Validators.required],
            codigoSeguranca: ['', Validators.required],
            isPreferencial: [''],
            isNovoCartao: [false],
            valorPago: [0, Validators.required]
          }
        ])
      })
  }

  addCartao() {
    let formCartaoPlus = new FormControl({
      id: [''],
      numeroCartao: ['', Validators.required],
      nomeImpressoCartao: ['', Validators.required],
      bandeira: ['', Validators.required],
      codigoSeguranca: ['', Validators.required],
      isPreferencial: [''],
      isNovoCartao: [false],
      valorPago: [0, Validators.required]
    })

    const add = this.form.get('cartoes') as FormArray;
    add.push(formCartaoPlus);
  }

  removeCartao(index: number) {
    const cartoes = this.form.get('cartoes') as FormArray;
    cartoes.removeAt(index)
  }

}
