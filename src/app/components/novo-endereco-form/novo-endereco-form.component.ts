import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CidadeDTO,
  EnderecoDTO,
  EstadoDTO,
  TipoEnderecoDTO,
  TipoLogradouroDTO,
} from 'src/app/models/interfaces/dto/client.interface';
import { tipoEnderecosMock } from 'src/app/models/mocks/tipoEndereco.mock';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from 'src/app/models/mocks/ufs.mock';
import { EnderecoService } from 'src/app/services/endereco-service/endereco.service';

@Component({
  selector: 'novo-endereco-form',
  templateUrl: './novo-endereco-form.component.html',
  styleUrls: ['./novo-endereco-form.component.scss'],
})
export class NovoEnderecoFormComponent implements OnInit {
  formEndereco?: FormGroup = new FormGroup({});
  estados: Array<EstadoDTO> = UFs;

  cidades: Array<CidadeDTO> = [];

  tiposLogradouros: Array<string> = tiposLogradourosMock;
  selectedTipoLogradouro: string = this.tiposLogradouros[0];

  tipoEnderecos: Array<TipoEnderecoDTO> = tipoEnderecosMock;

  tipoEnderecoSelecionado = this.tipoEnderecos[0];

  enderecoAtual?: EnderecoDTO;

  selectedTipoLog?: string;
  selectedEstado: EstadoDTO = { id: 25, uf: 'SP' };
  selectedCidade: CidadeDTO = { id: 4706, nome: 'Adamantina' };

  constructor(
    private formBuilder: FormBuilder,
    private enderecoService: EnderecoService
  ) {}

  ngOnInit(): void {
    this.enderecoService.obterCidades(25).subscribe((response) => {
      this.selectedCidade = this.cidades[0];
      this.cidades = response;
    });

    this.formEndereco = this.formBuilder.group({
      nome: [''],
      logradouro: ['', { validators: [Validators.required] }],
      cep: ['', { validators: [Validators.required] }],
      numero: ['', { validators: [Validators.required] }],
      complemento: ['', { validators: [Validators.required] }],
      bairro: ['', { validators: [Validators.required] }],
      tipoEnderecoID: ['', { validators: [Validators.required] }],
      tipoLogradouro: [
        '',
        {
          validators: [Validators.required],
        },
      ],

      cidade: this.formBuilder.group({
        nome: ['', { validators: [Validators.required] }],
      }),

      estado: this.formBuilder.group({
        uf: ['', { validators: [Validators.required] }],
      }),

      pais: ['', { validators: [Validators.required] }],
    });
  }

  salvarNovoEndereco() {
    let enderecoDTO: EnderecoDTO = {
      nome: this.formEndereco?.controls['nome'].value,
      tipoLogradouro: this.selectedTipoLogradouro,
      logradouro: this.formEndereco?.controls['logradouro'].value,
      cep: this.formEndereco?.controls['cep'].value,
      numero: this.formEndereco?.controls['numero'].value,
      bairro: this.formEndereco?.controls['bairro'].value,
      complemento: this.formEndereco?.controls['complemento'].value,
      pais: this.formEndereco?.controls['pais'].value,

      tipoEndereco: {
        id: this.tipoEnderecoSelecionado.id,
      },

      cidade: {
        id: this.selectedCidade.id,
      },
    };
    this.enderecoService
      .salvarNovoEndereco(enderecoDTO)
      .subscribe((message) => {
        console.log(`Retorna???? ${message}`);
      });
  }

  consultarCEP() {
    var cep = this.formEndereco?.controls['cep'].value;

    if (cep?.length === 8) {
      this.enderecoService
        .obterEnderecoPorCep('01311200')
        .subscribe((response) => {
          if (response !== null) {
            this.formEndereco?.controls['pais'].setValue('Brasil');

            this.formEndereco?.controls['logradouro'].setValue(
              response.logradouro
            );

            this.formEndereco?.controls['bairro'].setValue(response.bairro);

            this.formEndereco?.controls['complemento'].setValue(
              response.complemento
            );

            this.formEndereco?.controls['logradouro'].setValue(
              response.logradouro
            );

            UFs.map((estado) => {
              if (estado.uf === response.uf) {
                this.selectedEstado = estado;
              }
            });

            this.cidades.map((cid) => {
              if (cid.nome === response.localidade) {
                this.selectedCidade = cid;
              }
            });

            if (response.logradouro.includes('Rua')) {
              this.selectedTipoLogradouro = this.tiposLogradouros[0];
            }

            if (response.logradouro.includes('Avenida')) {
              this.selectedTipoLogradouro = this.tiposLogradouros[1];
            }
          }
        });
    }
  }

  onEstadoSelecionado(estadoDTO: EstadoDTO) {
    this.enderecoService.obterCidades(estadoDTO.id).subscribe((response) => {
      this.cidades = response;
      this.selectedCidade = this.cidades[0];
    });
  }
}
