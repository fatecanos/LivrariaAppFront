import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnderecoInterface, TipoLogradouroInterface } from 'src/app/models/interfaces/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import {UFs} from '../../../models/mocks/ufs.mock';

@Component({
  templateUrl: './endereco-submitter.component.html',
  styleUrls: ['./endereco-submitter.component.scss']
})
export class EnderecoSubmitterComponent implements OnInit {

  formEndereco: FormGroup = new FormGroup({});
  estados: Array<any> = UFs;
  tiposLogradouros: Array<TipoLogradouroInterface> = tiposLogradourosMock;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EnderecoInterface>,
    @Inject(MAT_DIALOG_DATA) public data: EnderecoInterface
  ) { }

  ngOnInit(): void {
    this.formEndereco = this.formBuilder.group({
      logradouro: ['', { validators: [Validators.required] }],
      cep: ['', { validators: [Validators.required] }],
      numero: ['', { validators: [Validators.required] }],
      complemento: ['', { validators: [Validators.required] }],
      bairro: ['', { validators: [Validators.required] }],
      tipoEndereco: this.formBuilder.group({
        id: ['', { validators: [Validators.required] }],
        descricao: ['', { validators: [Validators.required] }]
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

}
