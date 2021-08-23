import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnderecoDTO, EstadoDTO, TipoLogradouroDTO } from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from 'src/app/models/mocks/ufs.mock';

@Component({
  selector: 'novo-endereco-form',
  templateUrl: './novo-endereco-form.component.html',
  styleUrls: ['./novo-endereco-form.component.scss']
})
export class NovoEnderecoFormComponent implements OnInit {

  formEndereco?: FormGroup = new FormGroup({});
  estados: Array<EstadoDTO> = UFs;
  tiposLogradouros: Array<string> = tiposLogradourosMock;
  enderecoAtual?: EnderecoDTO;

  selectedTipoLog?: string;
  selectedEstado?: EstadoDTO;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formEndereco = this.formBuilder.group({
      apelidoId: [''],
      logradouro: ['', { validators: [Validators.required] }],
      cep: ['', { validators: [Validators.required] }],
      numero: ['', { validators: [Validators.required] }],
      complemento: ['', { validators: [Validators.required] }],
      bairro: ['', { validators: [Validators.required] }],
      tipoEndereco: [ '', { validators: [Validators.required] }],
      tipoLogradouro: [ '', 
        { 
          validators: [
            Validators.required
          ]
        }
      ],
      cidade: this.formBuilder.group({
        descricao: ['', { validators: [Validators.required] }],
        estado: this.formBuilder.group({
          descricao: ['', { validators: [Validators.required] }]
        })
      }),
      pais: ['', { validators: [Validators.required]}]
    });
  }

}
