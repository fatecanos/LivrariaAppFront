import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EnderecoDTO, TipoLogradouroDTO } from 'src/app/models/interfaces/dto/client.interface';
import { tiposLogradourosMock } from 'src/app/models/mocks/tipoLogradouro.mock';
import { UFs } from 'src/app/models/mocks/ufs.mock';
import { EnderecoSubmitterComponent } from '../dialogs/endereco-submitter/endereco-submitter.component';

@Component({
  selector: 'liv-endereco-form',
  templateUrl: './liv-endereco-form.component.html',
  styleUrls: ['./liv-endereco-form.component.scss']
})
export class LivEnderecoFormComponent implements OnInit {
  @Input() endereco?: EnderecoDTO;
  @Input() index: string = '';
  @Output() dadosEndereco: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  
  formEndereco: FormGroup = new FormGroup({});

  isLoading: boolean = false;
  estados: Array<string> = UFs;
  tiposLogradouros: Array<TipoLogradouroDTO> = tiposLogradourosMock;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formEndereco = this.formBuilder.group({
      tipoEndereco: [this.endereco?.tipoEndereco, Validators.required],
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
    const dialogRef = this.dialog.open(EnderecoSubmitterComponent, {
      width: '700px',
      data: this.endereco
    });
    dialogRef.afterClosed().subscribe(result => {
      //TODO: id do cliente fixo
      this.dadosEndereco.emit(result);
    })
  }

  removerEndereco() {
    console.log('oi')
  }

  updateTipoLogradouro(id: number) {
    this.formEndereco.patchValue({
      tipoLogradouroId: id
    })
  }


  
}