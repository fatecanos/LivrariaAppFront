import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientInterface } from 'src/app/models/interfaces/client.interface';
import { UFs } from 'src/app/models/mocks/ufs.mock';
import { ClientService } from 'src/app/services/client-service/client-service.service';
import { ValidatorService } from 'src/app/services/validator/validator-service.service';

function matchValidator(controlName: string): ValidatorFn {
  return (control: AbstractControl) => {
    console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(controlName)?.value === control?.value ? null : { mismatch: true };
  };
}

@Component({
  selector: 'app-atualizar-clientes',
  templateUrl: './atualizar-clientes.component.html',
  styleUrls: ['./atualizar-clientes.component.scss']
})
export class AtualizarClientesComponent implements OnInit {

  isLoading: boolean = false;
  estados: Array<string> = UFs;

  formDadosCliente: FormGroup = new FormGroup({});
  formEndereco: FormGroup = new FormGroup({});
  formAlterarEmail: FormGroup = new FormGroup({});
  formAlterarSenha: FormGroup = new FormGroup({});

  clientData?: ClientInterface;

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private service: ClientService) { 
      this.initForm();
  }

  ngOnInit(): void {
    this.service.getClientById(1)
      .subscribe(response =>{
        console.log('Response', response);
        
        this.clientData = response;

        console.log('Cliente: ', this.clientData);
    });
  }

  enviarDadosCliente() {
    this.isLoading = true;
    if(this.formDadosCliente.valid) {
      console.log('atualizando cliente...')
      setTimeout(()=> {
        this.isLoading = false;
        this._snackBar.open("cliente foi atualizado", 'fechar', {duration: 5000});
      }, 2000);
    }

    this.isLoading = false;
    
  }

  enviarEndereco() {
    this.isLoading = true;
    if(this.formEndereco.valid) {
      console.log('atualizando endereco do cliente...')
      setTimeout(()=> {
        this.isLoading = false;
        this._snackBar.open("cliente foi atualizado", 'fechar', {duration: 5000});
      }, 2000);
    }

    this.isLoading = false;
  }

  enviarEmail() {
    this.isLoading = true;
    if(this.formAlterarEmail.valid) {
      console.log('atualizando email...')
      setTimeout(()=> {
        this.isLoading = false;
        this._snackBar.open("cliente foi atualizado", 'fechar', {duration: 5000});
      }, 2000);
    }
  }

  enviarSenha() {
    if(this.formAlterarSenha.valid) {
      console.log('atualizando senha...')
    }
  }

  initForm() {
    this.formDadosCliente = this.formBuilder.group({
      nome: [this.clientData?.nome, {validators: [Validators.required]}],
      sobrenome: ['', {validators: [Validators.required]}],
      dataNascimento: ['', {validators: [Validators.required]}],
      cpf: this.formBuilder.control('', {
        validators: [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]
      }),
    });

    this.formEndereco = this.formBuilder.group({
      endereco: ['', { validators: [Validators.required]}],
      bairro: ['', { validators: [Validators.required]}],
      complemento: ['', { validators: [Validators.maxLength(30)]}],
      cidade: ['', { validators: [Validators.maxLength(30)]}],
      estado: ['', { validators: [Validators.required]}],
      tipoEndereco: ['', { validators: [Validators.required]}],
    });

    this.formAlterarSenha = this.formBuilder.group({
      senha: this.formBuilder
        .control('', {
          validators: [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(12)
          ]
      }),
      confirmacaoSenha: this.formBuilder
        .control('', {
          validators: [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(12),
            matchValidator('senha')
          ]
        }),
    });

    this.formEndereco = this.formBuilder.group({
      endereco: ['', {validators: [Validators.required]}],
      cidade: ['', {validators: [Validators.required]}],
      bairro: ['', {validators: [Validators.required]}],
      complemento: ['', {validators: [Validators.maxLength(30)]}],
      estado: ['', {validators: [Validators.required, Validators.maxLength(5)]}],
      lote: ['', {validators: [Validators.required]}],
    });
  }

}
