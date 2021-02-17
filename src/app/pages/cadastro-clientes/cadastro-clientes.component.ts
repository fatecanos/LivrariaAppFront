import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator/validator-service.service';

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

  constructor(
    private formBuilder: FormBuilder) {
    this.initForm();
  }

  submitCustomer() {
      console.log('creating a new customer...')
      let value = this.formularioCliente.get('cpf')?.value;
      console.log('cpf:', value);
  }


  initForm(): void {

    this.formularioCliente = this.formBuilder.group({
      nome: ['', {validators: [Validators.required]}],
      sobrenome: ['', {validators: [Validators.required]}],
      dataNascimento: ['', {validators: [Validators.required]}],

      cpf: this.formBuilder.control('',{
        validators: [
          Validators.required,
          Validators.minLength(11), // digits + word characters
          Validators.maxLength(11), // digits + word characters
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
