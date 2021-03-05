import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: AbstractControl) => {
    console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password)?.value === control?.value ? null : { mismatch: true };
  };
}

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent {

  formularioCliente: FormGroup = new FormGroup({});
  
  isLoading: boolean = false;
  isSuccess = false;
  showMessage: boolean = false;

  message: string = '';
  title: string = '';

  constructor(
    private clientService: ClienteService,
    private formBuilder: FormBuilder) {
    this.initForm();
  }

  submitCustomer() {
      this.isLoading = true;

      if(this.formularioCliente.valid) {
        this.clientService.saveClient(this.formularioCliente.value)
          .subscribe(response => {
            this.title = response.title
            this.message = response.description;
            this.isSuccess = true;
          }, (error)=> {
            console.log(error);
          }, ()=> {
            this.showMessage = true;
            this.isLoading = false
          });
      } else {
        this.isLoading = false;
      }
  }


  initForm(): void {
    this.formularioCliente = this.formBuilder.group({
      nome: ['', {validators: [Validators.required]}],
      sobrenome: ['', {validators: [Validators.required]}],
      dataNascimento: ['', {validators: [Validators.required]}],

      cpf: this.formBuilder.control('', {
        validators: [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]
      }),

      email: ['', {validators: [Validators.required, Validators.email]}],

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
            passwordMatchValidator('senha')
          ]
        }),
    });
  }

}
