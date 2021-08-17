import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnderecoDTO, TipoEnderecoEnum, TipoLogradouroDTO } from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import {UFs} from '../../../models/mocks/ufs.mock';

@Component({
  templateUrl: './endereco-submitter.component.html',
  styleUrls: ['./endereco-submitter.component.scss']
})
export class EnderecoSubmitterComponent implements OnInit {

  formEndereco: FormGroup = new FormGroup({});
  estados: Array<any> = UFs;
  tiposLogradouros: Array<TipoLogradouroDTO> = tiposLogradourosMock;
  enderecoAtual?: EnderecoDTO;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EnderecoDTO>,
    @Inject(MAT_DIALOG_DATA) public data: EnderecoDTO
  ) { 
    this.enderecoAtual = data;
  }

  ngOnInit(): void {
    this.formEndereco = this.formBuilder.group({
      id: [this.enderecoAtual?.id || ''],
      logradouro: [this.enderecoAtual?.logradouro || '', { validators: [Validators.required] }],
      cep: [this.enderecoAtual?.cep || '', { validators: [Validators.required] }],
      numero: [this.enderecoAtual?.numero || '', { validators: [Validators.required] }],
      complemento: [this.enderecoAtual?.complemento || '', { validators: [Validators.required] }],
      bairro: [this.enderecoAtual?.bairro || '', { validators: [Validators.required] }],
      tipoEndereco: [ this.enderecoAtual?.tipoEndereco || '', { validators: [Validators.required] }],
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

  updateTipoEndereco(tipoEndereco: TipoEnderecoEnum) {
    console.log(tipoEndereco);
    
    this.formEndereco.patchValue({
      tipoEnderecoId: tipoEndereco
    })
  }

}
