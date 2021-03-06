import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { EnderecoInterface } from 'src/app/models/interfaces/client.interface';
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

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("Formulario endereco:", this.endereco);
    
    this.formEndereco = this.formBuilder.group({
      logradouro: [this.endereco?.logradouro, { validators: [Validators.required] }],
      cep: [this.endereco?.cep, { validators: [Validators.required] }],
      numero: [this.endereco?.numero, { validators: [Validators.required] }],
      complemento: [this.endereco?.complemento, { validators: [Validators.required] }],
      bairro: [this.endereco?.bairro, { validators: [Validators.required] }],
      tipoEndereco: this.formBuilder.group({
        id: ['', { validators: [Validators.required] }],
        descricao: [this.endereco?.tipoEndereco, { validators: [Validators.required] }]
      }),
      cidade: this.formBuilder.group({
        id: ['', { validators: [Validators.required] }],
        descricao: ['', { validators: [Validators.required] }],
        estado: this.formBuilder.group({
          id: ['', { validators: [Validators.required] }],
          descricao: ['', { validators: [Validators.required] }]
        })
      })
    });
  }

  enviarEndereco() {
    
  }

  removerEndereco() {

  }
}


// this.clienteResponse$?.subscribe(response => {
//   this.formArrayEnderecos = this.formBuilder.array(
//       response.enderecos.map(endereco => {
//         return this.formBuilder.group({
//           logradrouro: ['', {validators: [Validators.required]}],
//           numero: ['', {validators: [Validators.required]}],
//           cep: ['', {validators: [Validators.required]}],
//           complemento: ['', {validators: [Validators.required]}],
//         })
//       })
//   )
// })