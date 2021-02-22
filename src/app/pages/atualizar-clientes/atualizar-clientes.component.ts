import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ClienteInterface, EnderecoInterface } from 'src/app/models/interfaces/client.interface';
import { UFs } from 'src/app/models/mocks/ufs.mock';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

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
  formAlterarEmail: FormGroup = new FormGroup({});
  formAlterarSenha: FormGroup = new FormGroup({});

  dadosCliente: ClienteInterface;
  enderecosCliente: EnderecoInterface[] = [];

  clienteResponse$?: Observable<ClienteInterface>;

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteResponse$ = this.clienteService.getClientById(2);
    this.initForm();
  }

  initForm() {
    this.clienteResponse$?.subscribe(response => {
      this.dadosCliente = response;

      this.formDadosCliente = this.formBuilder.group({
        nome: [response.nome, { validators: [Validators.required] }],
        sobrenome: [response.sobrenome, { validators: [Validators.required]}],
        dataNascimento: [response.dataNascimento, { validators: [Validators.required] }],
        cpf: this.formBuilder.control(response.cpf, {
          validators: [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
          ]
        })
      });

      this.formAlterarEmail = this.formBuilder.group({
        email: ['', {validators: [Validators.required, Validators.email]}],
        confirmacaoEmail: ['', {validators: [Validators.required, matchValidator('email')]}],
      })

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
      })


    });
  }

  enviarDadosCliente() {
    console.log(this.formDadosCliente);
    this.isLoading = true;

    if(this.formDadosCliente.valid) {
      console.log('atualizando cliente...')

      let dados = this.dadosCliente;
      this.dadosCliente = { ...dados, ...this.formDadosCliente.value };

      this.clienteService.updateClientById(this.dadosCliente?.id, this.dadosCliente)
        .subscribe(response => {
          this.isLoading = false;
          this._snackBar.open("dados do cliente foram atualizados", 'fechar', {duration: 5000});
        }, error => {
          this.isLoading = false;
          this._snackBar.open("erro ao atualizar cliente", 'fechar', {duration: 5000});
        }, ()=> {
          this.atualizarEstado();
          this.isLoading = false;
        });
    }

    this.isLoading = false;
  }

  atualizarEmail() {
    this.isLoading = true;

    if(this.formAlterarEmail.valid) {
      this.dadosCliente.email = this.formAlterarEmail.get('email')?.value;

      this.clienteService.updateClientById(this.dadosCliente?.id, this.dadosCliente)
        .subscribe(response => {
          this.isLoading = false;
          this._snackBar.open("email do cliente foi atualizado", 'fechar', {duration: 5000});
        }, error=> {
          this.isLoading = false;
          this._snackBar.open("erro ao atualizar", 'fechar', {duration: 5000});
        }, ()=> {
          this.atualizarEstado();
          this.isLoading = false;
        });
    }
    
  }

  atualizarSenha() {
    if(this.formAlterarSenha.valid) {
      console.log('atualizando senha...')
    }
  }

  atualizarEstado() {
    this.clienteResponse$ = this.clienteService.getClientById(this.dadosCliente?.id);
    this.clienteResponse$.subscribe(response => { this.dadosCliente = response });
  }

  addEndereco() {

  }

}
