import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  CidadeDTO,
  EnderecoDTO,
  TipoLogradouroDTO,
} from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from '../../../models/mocks/ufs.mock';
import { EnderecoService } from 'src/app/services/endereco-service/endereco.service';

@Component({
  templateUrl: './endereco-submitter.component.html',
  styleUrls: ['./endereco-submitter.component.scss'],
})
export class EnderecoSubmitterComponent implements OnInit {
  formEndereco: FormGroup = new FormGroup({});
  estados: Array<any> = UFs;

  cidades: Array<CidadeDTO> | any;

  tiposLogradouros: Array<TipoLogradouroDTO> = tiposLogradourosMock;

  dadosEndereco: EnderecoDTO | any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private enderecoService: EnderecoService,
    public dialogRef: MatDialogRef<EnderecoDTO>,
    @Inject(MAT_DIALOG_DATA) public data: EnderecoDTO
  ) {


  }

  ngOnInit(): void {


    this.enderecoService.recuperarCidadesPeloEstado(25).subscribe(response => {

      this.cidades = response;

      
    console.log(this.cidades);


  });

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
      cidade: ['', { validators: [Validators.required] }],
      estado: ['', { validators: [Validators.required] }],
    });
  }

  consultarCEP() {
    if (this.formEndereco.controls['cep'].value.length == 8) {
      this.http
        .get<any>(
          'http://viacep.com.br/ws/' +
            this.formEndereco.controls['cep'].value +
            '/json/'
        )
        .subscribe((response: any) => {
          this.formEndereco.controls['cep'].setValue(response.cep);
          this.formEndereco.controls['logradouro'].setValue(
            response.logradouro
          );
          this.formEndereco.controls['bairro'].setValue(response.bairro);
          this.formEndereco.controls['cidade'].setValue(response.localidade);

          for (let i = 0; i < this.estados.length; i++) {
            if (response.uf == this.estados[i]) {
              console.log(`vaddiao ${response.uf}`);
              console.log(`cruo ${this.estados[i]}`);

              this.formEndereco.controls['estado'].setValue(response.uf);
            }
          }

          console.log('Response:' + response.cep);
        });
    }
  }

  salvarEndereco() {
    // this.dadosEndereco = { ...this.formEndereco.value };
    // this.enderecoService.salvarNovoEndereco(this.dadosEndereco);



  }
}
