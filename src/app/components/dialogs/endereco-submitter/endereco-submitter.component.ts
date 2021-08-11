import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  EnderecoDTO,
  TipoLogradouroDTO,
} from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from '../../../models/mocks/ufs.mock';

@Component({
  templateUrl: './endereco-submitter.component.html',
  styleUrls: ['./endereco-submitter.component.scss'],
})
export class EnderecoSubmitterComponent implements OnInit {
  formEndereco: FormGroup = new FormGroup({});
  estados: Array<any> = UFs;
  tiposLogradouros: Array<TipoLogradouroDTO> = tiposLogradourosMock;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public dialogRef: MatDialogRef<EnderecoDTO>,
    @Inject(MAT_DIALOG_DATA) public data: EnderecoDTO
  ) {}

  ngOnInit(): void {
    this.formEndereco = this.formBuilder.group({
      logradouro: ['', { validators: [Validators.required] }],
      cep: ['', { validators: [Validators.required] }],
      numero: ['', { validators: [Validators.required] }],
      complemento: ['', { validators: [Validators.required] }],
      bairro: ['', { validators: [Validators.required] }],
      tipoEndereco: this.formBuilder.group({
        id: ['', { validators: [Validators.required] }],
        descricao: ['', { validators: [Validators.required] }],
      }),
      cidade: this.formBuilder.group({
        id: ['', { validators: [Validators.required] }],
        descricao: ['', { validators: [Validators.required] }],
        estado: this.formBuilder.group({
          id: ['', { validators: [Validators.required] }],
          descricao: ['', { validators: [Validators.required] }],
        }),
      }),
    });
  }

  consultarCEP() {
    if (this.formEndereco.controls['cep'].value.length == 8) {
      console.log('é igual');

      this.http
        .get<any>(
          'http://viacep.com.br/ws/' +
            this.formEndereco.controls['cep'].value +
            '/json/'
        )
        .subscribe((response: any) => {

          this.formEndereco.controls['cep'].setValue(response.cep);
          this.formEndereco.controls['logradouro'].setValue(response.logradouro);
          this.formEndereco.controls['bairro'].setValue(response.bairro);
          this.formEndereco.controls['cidade.descricao'].setValue(response.localidade);
          this.formEndereco.controls['cidade.estado.descricao'].setValue(response.uf);

          console.log('Response:' + response.cep);
        });
    } else {
      console.log('é iguan n');
    }
  }
}
