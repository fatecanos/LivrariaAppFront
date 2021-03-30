import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnderecoInterface, TipoLogradouroInterface } from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from 'src/app/models/mocks/ufs.mock';

@Component({
  selector: 'liv-endereco-form',
  templateUrl: './liv-endereco-form.component.html',
  styleUrls: ['./liv-endereco-form.component.scss']
})
export class LivEnderecoFormComponent implements OnInit {
  @Input() endereco?: EnderecoInterface;
  @Input() index: string = '';
  @Output() dadosEndereco: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  
  formEndereco: FormGroup = new FormGroup({});

  isLoading: boolean = false;
  estados: Array<string> = UFs;
  tiposLogradouros: Array<TipoLogradouroInterface> = tiposLogradourosMock;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formEndereco = this.formBuilder.group({
      tipoEnderecoId: [this.endereco?.tipoEnderecoId, Validators.required],
      tipoLogradouroId: [this.endereco?.tipoLogradouroId, Validators.required],
      logradouro: [this.endereco?.logradouro, { validators: [Validators.required] }],
      cep: [this.endereco?.cep, { validators: [Validators.required] }],
      numero: [this.endereco?.numero, { validators: [Validators.required] }],
      complemento: [this.endereco?.complemento, { validators: [Validators.required] }],
      bairro: [this.endereco?.bairro, { validators: [Validators.required] }],
      tipoResidencia: this.formBuilder.group({
        id: ['', { validators: [Validators.required] }],
        descricao: [this.endereco?.tipoResidencia, { validators: [Validators.required] }]
      }),
      cidade: this.formBuilder.group({
        id: [this.endereco?.cidade.id, { validators: [Validators.required] }],
        descricao: [this.endereco?.cidade.descricao, { validators: [Validators.required] }],
        estado: this.formBuilder.group({
          id: [this.endereco?.cidade.estado.id, { validators: [Validators.required] }],
          descricao: [this.endereco?.cidade.estado.descricao, { validators: [Validators.required] }]
        })
      })
    });
  }

  atualizarEndereco() {
    console.log('oi')
  }

  removerEndereco() {
    console.log('oi')
  }

  updateTipoEndereco(id: string) {
    console.log(id);
    
    this.formEndereco.patchValue({
      tipoEnderecoId: id
    })
  }

  updateTipoLogradouro(id: number) {
    this.formEndereco.patchValue({
      tipoLogradouroId: id
    })
  }


  
}