import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnderecoDTO, EstadoDTO } from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from '../../../models/mocks/ufs.mock';

@Component({
  templateUrl: './endereco-submitter.component.html',
  styleUrls: ['./endereco-submitter.component.scss'],
})
export class EnderecoSubmitterComponent implements OnInit {

  formEndereco?: FormGroup;
  estados: Array<EstadoDTO> = UFs;
  tiposLogradouros: Array<string> = tiposLogradourosMock;
  enderecoAtual?: EnderecoDTO;

  selectedTipoLog?: string;
  selectedEstado?: EstadoDTO;

  CLIENTE_ID: number = 1;

  dadosEndereco: EnderecoDTO | any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: EnderecoDTO
  ) {

  }

  ngOnInit(): void {
    if(this.data) {
      this.enderecoAtual = this.data;
      this.initFormWithAddressData();
      this.selectedTipoLog = this.data?.tipoLogradouro;
      // this.selectedEstado = this.data?.cidade.estado;
    } else {
      this.initForm();
    }
    console.log(this.selectedEstado);

  }

  initForm() {
    this.formEndereco = this.formBuilder.group({
      nome: [''],
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

  initFormWithAddressData() {
    console.log(this.formEndereco);

    this.formEndereco = this.formBuilder.group({
      id: [this.enderecoAtual?.id],
      nome: [this.enderecoAtual?.nome],
      logradouro: [this.enderecoAtual?.logradouro, { validators: [Validators.required] }],
      cep: [this.enderecoAtual?.cep, { validators: [Validators.required] }],
      numero: [this.enderecoAtual?.numero, { validators: [Validators.required] }],
      complemento: [this.enderecoAtual?.complemento, { validators: [Validators.required] }],
      bairro: [this.enderecoAtual?.bairro, { validators: [Validators.required] }],
      tipoEndereco: [ this.enderecoAtual?.tipoEndereco, {
        validators: [
          Validators.required
        ]
      }],
      tipoLogradouro: [ this.enderecoAtual?.tipoLogradouro,
        {
          validators: [
            Validators.required
          ]
        }
      ],
      cidade: this.formBuilder.group({
        id: [this.enderecoAtual?.cidade.id],
        // descricao: [this.enderecoAtual?.cidade.descricao, { validators: [Validators.required] }],
        estado: this.formBuilder.group({
          id: [this.selectedEstado?.id],
          descricao: [this.selectedEstado?.uf, { validators: [Validators.required] }]
        })
      }),
      pais: [this.enderecoAtual?.pais, { validators: [Validators.required]}]
    });
  }
}
