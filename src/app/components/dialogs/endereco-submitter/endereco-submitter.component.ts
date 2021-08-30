import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnderecoDTO, EstadoDTO, TipoEnderecoDTO, TipoLogradouroDTO } from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from '../../../models/mocks/ufs.mock';
import { EnderecoService } from 'src/app/services/endereco-service/endereco.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  TIPO_ENTREGA: TipoLogradouroDTO = {
    id: 1,
    descricao: 'ENTREGA'
  }

  TIPO_COBRANCA: TipoLogradouroDTO = {
    id: 2,
    descricao: 'COBRANÇA'
  }

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: EnderecoDTO,
    private snackBar: MatSnackBar,
    private service: EnderecoService
  ) {

  }

  ngOnInit(): void {
    this.enderecoAtual = this.data;
    this.initFormWithAddressData();
    this.selectedTipoLog = this.data?.tipoLogradouro;
    this.selectedEstado = this.data.cidade.estado;
  }

  initFormWithAddressData() {
    console.log(this.formEndereco);

    this.formEndereco = this.formBuilder.group({
      id: [this.enderecoAtual?.id],
      nome: [this.enderecoAtual?.nome],
      logradouro: [this.enderecoAtual?.logradouro, { validators: [Validators.required] }],
      cep: [this.enderecoAtual?.cep, { validators: [Validators.required] }],
      numero: [this.enderecoAtual?.numero, { validators: [Validators.required] }],
      complemento: [this.enderecoAtual?.complemento],
      bairro: [this.enderecoAtual?.bairro, { validators: [Validators.required] }],
      tipoEndereco: this.formBuilder.group({
        id: [this.enderecoAtual?.tipoEndereco.id],
        descricao: [this.enderecoAtual?.tipoEndereco.descricao]
      }),
      tipoLogradouro: [ this.enderecoAtual?.tipoLogradouro,
        {
          validators: [
            Validators.required
          ]
        }
      ],
      cidade: this.formBuilder.group({
        id: [this.enderecoAtual?.cidade.id],
        descricao: [this.enderecoAtual?.cidade.nome, { validators: [Validators.required] }],
        estado: this.formBuilder.group({
          id: [this.selectedEstado?.id],
          descricao: [this.selectedEstado?.uf, { validators: [Validators.required] }]
        })
      }),
      pais: [this.enderecoAtual?.pais, { validators: [Validators.required]}]
    });
  }

  atualizarEndereco() {
    console.log('entrou', this.formEndereco);
    
    if(!this.formEndereco?.valid) {
      this.service.atualizar(this.formEndereco?.value).subscribe(res => {
        this.snackBar.open(res.description, `fechar`)
      }, err => {
        this.snackBar.open(err.error.description, `fechar`)
      }, () => {
        this.dialogRef.close()
      })
    }
  }
}
